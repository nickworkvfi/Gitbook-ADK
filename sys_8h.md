---
title: sdi/src/sys.h

---

# sdi/src/sys.h



## Classes

|                | Name           |
| -------------- | -------------- |
| struct | **[thread_data](structthread__data.md)**  |

## Types

|                | Name           |
| -------------- | -------------- |
| enum| **[ExtserverResult](sys_8h.md#enum-extserverresult)** { RESULT_OK =  0, RESULT_FAIL = -1, RESULT_TIMEOUT = -2, RESULT_USER_CANCEL = -3, RESULT_MOBILE_ABORT = -4, RESULT_NO_LINK = -5, RESULT_CLEAR_BUTTON = -6, RESULT_DATA_AVAILABLE = -7, RESULT_EXCESSIVE_PIN_REQUESTS = -8, RESULT_TAG_ERROR = -9, RESULT_TAG_LENGTH_ERROR = -10, RESULT_PARAMETER_ERROR = -11, RESULT_INTERCHAR_TIMEOUT = -12, RESULT_LOGIC_ERROR = -13} |
| enum| **[UploadType](sys_8h.md#enum-uploadtype)** { UPLOAD_TYPE_SOFTWARE_UPDATE, UPLOAD_TYPE_CONFIG_WHITELIST, UPLOAD_TYPE_CONFIG_SENSITIVE_TAGS, UPLOAD_TYPE_CONFIG_CARD_RANGES, UPLOAD_TYPE_FIRMWARE_UPDATE, UPLOAD_TYPE_KEYS, UPLOAD_TYPE_CONFIG_SDIEMV, UPLOAD_TYPE_REMOVE_SPONSOR, UPLOAD_TYPE_REMOVE_CONFIG_SDIEMV, UPLOAD_TYPE_PLUGIN, UPLOAD_TYPE_REMOVE_PLUGIN, UPLOAD_TYPE_CP_PACKAGE, UPLOAD_TYPE_EMV_CONFIG_PACKAGE, UPLOAD_TYPE_UVRK_PACKAGE, UPLOAD_TYPE_MAX} |
| enum| **[IdleScreenMode](sys_8h.md#enum-idlescreenmode)** { Idle_Normal = 0, Idle_MenuEnabled = 1, Idle_WaitLogo = 2, Idle_NoAdminMode = 4} |
| enum| **[IdleLockType](sys_8h.md#enum-idlelocktype)** { ILT_NoLock = 0, ILT_ApiLock = 1, ILT_AdminLock = 2} |
| typedef struct [thread_data](structthread__data.md) | **[Thread_Data](sys_8h.md#typedef-thread-data)**  |

## Functions

|                | Name           |
| -------------- | -------------- |
| bool | **[handleSystemCmd](sys_8h.md#function-handlesystemcmd)**(unsigned long msgBufSize, unsigned char * msg, unsigned long msgSize, unsigned short rspBufSize, unsigned char * rsp, unsigned short * rspSize) |
| int | **[check4Interrupt](sys_8h.md#function-check4interrupt)**(void ) |
| void | **[setInterrupt](sys_8h.md#function-setinterrupt)**(enum [ExtserverResult](sys_8h.md#enum-extserverresult) reason) |
| int | **[isCardRemoved](sys_8h.md#function-iscardremoved)**(void ) |
| const char * | **[errText](sys_8h.md#function-errtext)**(int err) |
| void | **[setDevice2Idle](sys_8h.md#function-setdevice2idle)**(void ) |
| void | **[sysDisplayIdleScreen](sys_8h.md#function-sysdisplayidlescreen)**(unsigned mode =[Idle_Normal](sys_8h.md#enumvalue-idle-normal), const char * idletext =0) |
| bool | **[sysSetIdleScreenFinished](sys_8h.md#function-syssetidlescreenfinished)**(unsigned long id) |
| void | **[sysSetIdleScreenAdminMenu](sys_8h.md#function-syssetidlescreenadminmenu)**(bool on) |
| bool | **[sysSetIdleScreenLocked](sys_8h.md#function-syssetidlescreenlocked)**(bool lock =true, bool update_screen =true) |
| enum [IdleLockType](sys_8h.md#enum-idlelocktype) | **[sysGetIdleScreenLocked](sys_8h.md#function-sysgetidlescreenlocked)**() |
| void | **[setSW1SW2](sys_8h.md#function-setsw1sw2)**(int result, unsigned char * rsp) |
| bool | **[sys_internal_android](sys_8h.md#function-sys-internal-android)**() |
| bool | **[vos_sys8](sys_8h.md#function-vos-sys8)**() |
| bool | **[checkBundleInstalled](sys_8h.md#function-checkbundleinstalled)**(const char * bdlname) |
| bool | **[isHwModelName](sys_8h.md#function-ishwmodelname)**(const char * targetHwModelName) |
| void | **[sysResetUpdateContext](sys_8h.md#function-sysresetupdatecontext)**(void * handle) |

## Defines

|                | Name           |
| -------------- | -------------- |
|  | **[CLA_SYS](sys_8h.md#define-cla-sys)** <br>Class for System commands.  |
|  | **[INS_SYS_SYNC_TURN_ON](sys_8h.md#define-ins-sys-sync-turn-on)** <br>Turn On device.  |
|  | **[INS_SYS_TURN_OFF](sys_8h.md#define-ins-sys-turn-off)** <br>Turn Off device.  |
|  | **[INS_SYS_ABORT](sys_8h.md#define-ins-sys-abort)** <br>Abort any command in progress.  |
|  | **[INS_SYS_GET_CONFIG](sys_8h.md#define-ins-sys-get-config)** <br>Get device configuration.  |
|  | **[INS_SYS_GET_STATUS](sys_8h.md#define-ins-sys-get-status)** <br>Get device status info.  |
|  | **[INS_SYS_SELFTEST](sys_8h.md#define-ins-sys-selftest)** <br>Perform device selftest.  |
|  | **[INS_SYS_LOCK_PAYMENT](sys_8h.md#define-ins-sys-lock-payment)** <br>Lock payment.  |
|  | **[INS_SYS_SET_STATUS](sys_8h.md#define-ins-sys-set-status)** <br>Set device status info.  |
|  | **[INS_SYS_AUTH](sys_8h.md#define-ins-sys-auth)** <br>Request authentication of data.  |
|  | **[INS_SYS_SET_IDLE_TEXT](sys_8h.md#define-ins-sys-set-idle-text)** <br>Set the text displayed in the idle sceen (replaces the welcome text if set)  |
|  | **[INS_SYS_SW_UPLOAD_START](sys_8h.md#define-ins-sys-sw-upload-start)** <br>Start a software upload.  |
|  | **[INS_SYS_SW_UPLOAD_TRANSFER](sys_8h.md#define-ins-sys-sw-upload-transfer)** <br>Transfer record data for software upload.  |
|  | **[INS_SYS_SW_UPLOAD_FINALIZE](sys_8h.md#define-ins-sys-sw-upload-finalize)** <br>Finalize a software upload.  |
|  | **[INS_SYS_SHUTDOWN_REBOOT_SLEEP](sys_8h.md#define-ins-sys-shutdown-reboot-sleep)** <br>Shutdown, reboot or set the terminal to sleep.  |
|  | **[INS_SYS_MAC_SHOW_DESKTOP](sys_8h.md#define-ins-sys-mac-show-desktop)** <br>Show the MAC desktop.  |
|  | **[INS_SYS_SET_PROPERTY](sys_8h.md#define-ins-sys-set-property)** <br>Serialized [sysSetPropertyInt()](namespacevfisysinfo.md#function-syssetpropertyint)/sysSetPropertyString() command.  |
|  | **[INS_SYS_GET_PROPERTY](sys_8h.md#define-ins-sys-get-property)** <br>Serialized [sysGetPropertyInt()](namespacevfisysinfo.md#function-sysgetpropertyint)/sysGetPropertyString() command.  |
|  | **[INS_SYS_INSTALL_SPONSOR_CERT](sys_8h.md#define-ins-sys-install-sponsor-cert)** <br>Check and Install Sponsor Cert.  |
|  | **[INS_SYS_GET_VERSION_INFO](sys_8h.md#define-ins-sys-get-version-info)** <br>Get version info of SDI components.  |
|  | **[INS_SYS_CHECK_FOR_UPDATE](sys_8h.md#define-ins-sys-check-for-update)** <br>Check for updates.  |
|  | **[INS_SYS_SW_GET_LAST_INSTALL_ERROR](sys_8h.md#define-ins-sys-sw-get-last-install-error)** <br>Get last install error from secure installer and reset.  |
|  | **[INS_SYS_EXT_BUTTON](sys_8h.md#define-ins-sys-ext-button)** <br>External button was pressed.  |
|  | **[INS_SYS_EPP_ENABLE](sys_8h.md#define-ins-sys-epp-enable)** <br>Enable/Disable EPP.  |
|  | **[INS_SYS_FACTORY_RESET](sys_8h.md#define-ins-sys-factory-reset)** <br>Factory Reset.  |
|  | **[INS_SYS_READ_CERTIFICATE](sys_8h.md#define-ins-sys-read-certificate)** <br>Read Certificate.  |
|  | **[INS_SYS_FORCE_CURR_ABBR](sys_8h.md#define-ins-sys-force-curr-abbr)** <br>Force Currency Abbreviation.  |
|  | **[MAX_OUT_MSG_SIZE_A](sys_8h.md#define-max-out-msg-size-a)**  |
|  | **[MAX_OUT_MSG_SIZE_B_C_D](sys_8h.md#define-max-out-msg-size-b-c-d)**  |
|  | **[MIN](sys_8h.md#define-min)**(a, b)  |

## Types Documentation

### enum ExtserverResult

| Enumerator | Value | Description |
| ---------- | ----- | ----------- |
| RESULT_OK |  0|  No error  |
| RESULT_FAIL | -1|  Generic error  |
| RESULT_TIMEOUT | -2|  Timeout occurred  |
| RESULT_USER_CANCEL | -3|  User cancellation  |
| RESULT_MOBILE_ABORT | -4|  Abort from mobile device received  |
| RESULT_NO_LINK | -5|  Link to mobile device interrupted  |
| RESULT_CLEAR_BUTTON | -6|  clear button pressed  |
| RESULT_DATA_AVAILABLE | -7|  data available from slave device (e.g EPP)  |
| RESULT_EXCESSIVE_PIN_REQUESTS | -8|  Excessive PIN entry  |
| RESULT_TAG_ERROR | -9|  Tag error  |
| RESULT_TAG_LENGTH_ERROR | -10|  Tag length error  |
| RESULT_PARAMETER_ERROR | -11|  Parameter error  |
| RESULT_INTERCHAR_TIMEOUT | -12|  interchar timeout during input  |
| RESULT_LOGIC_ERROR | -13|  Logic error (e.g. wrong command order)  |




Internal Extserver Result Values 


### enum UploadType

| Enumerator | Value | Description |
| ---------- | ----- | ----------- |
| UPLOAD_TYPE_SOFTWARE_UPDATE | |  0: Software update with SW upload 20-14/20-15/20-16  |
| UPLOAD_TYPE_CONFIG_WHITELIST | |  1: Whitelist configuration: whitelist.json with SW upload 20-14/20-15/20-16  |
| UPLOAD_TYPE_CONFIG_SENSITIVE_TAGS | |  2: Sensitive tags configuration: sensitivetags.json with SW upload 20-14/20-15/20-16  |
| UPLOAD_TYPE_CONFIG_CARD_RANGES | |  3: Card ranges configuration: cardranges.json with SW upload 20-14/20-15/20-16  |
| UPLOAD_TYPE_FIRMWARE_UPDATE | |  4: Firmware update with check for update 20-1D  |
| UPLOAD_TYPE_KEYS | |  5: Install keys with check for update 20-1D  |
| UPLOAD_TYPE_CONFIG_SDIEMV | |  6: User configuration for SDI or EMV with check for update 20-1D  |
| UPLOAD_TYPE_REMOVE_SPONSOR | |  7: Remove sponsor certificates with check for update 20-1D  |
| UPLOAD_TYPE_REMOVE_CONFIG_SDIEMV | |  8: Remove user configuration for SDI or EMV with check for update 20-1D  |
| UPLOAD_TYPE_PLUGIN | |  9: Install SDI plugin(s) with check for update 20-1D  |
| UPLOAD_TYPE_REMOVE_PLUGIN | |  10: Remove SDI plugin(s) with check for update 20-1D  |
| UPLOAD_TYPE_CP_PACKAGE | |  11: Install commerce platform package with SW upload 20-14/20-15/20-16  |
| UPLOAD_TYPE_EMV_CONFIG_PACKAGE | |  12: Install EMV config package with SW upload 20-14/20-15/20-16  |
| UPLOAD_TYPE_UVRK_PACKAGE | |  13: Install UVRK package with SW upload 20-14/20-15/20-16. tar file *.uvrk.tar with flat files of *.vrk2.json.  |
| UPLOAD_TYPE_MAX | |  !!! Must be the last entry, please insert before !!!  |




Types for sw/file upload command 


### enum IdleScreenMode

| Enumerator | Value | Description |
| ---------- | ----- | ----------- |
| Idle_Normal | 0|  show idle screen w/o menu/info softkey/keyhelpers  |
| Idle_MenuEnabled | 1|  show idle screen with menu/info softkey/keyhelpers Note: Idle_MenuEnabled might be suppressed by the following:

1. admin mode (enabled by config), see [sysSetIdleScreenAdminMenu()](sys_8h.md#function-syssetidlescreenadminmenu) used to turn on admin menu temporary.
2. locked idle screen, see [sysSetIdleScreenLocked()](sys_8h.md#function-syssetidlescreenlocked) |
| Idle_WaitLogo | 2|  show idle screen with wait icon. This icon is preferred to customer logo  |
| Idle_NoAdminMode | 4|  disable admin mode for this idle screen, meaning detection of key combination and touch sequence is disabled. This option is ignored, if admin mode is disabled by configuration at all.  |




### enum IdleLockType

| Enumerator | Value | Description |
| ---------- | ----- | ----------- |
| ILT_NoLock | 0|  idle screen recently not locked  |
| ILT_ApiLock | 1|  idle screen locked by [sysSetIdleScreenLocked()](sys_8h.md#function-syssetidlescreenlocked) |
| ILT_AdminLock | 2|  idle screen locked by admin mode  |




### typedef Thread_Data

```cpp
typedef struct thread_data Thread_Data;
```



## Functions Documentation

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


### function sysResetUpdateContext

```cpp
void sysResetUpdateContext(
    void * handle
)
```


**Parameters**: 

  * **handle** handle of the terminating connection 


Reset update context allocated for SW update with 20-14, 20-15, 20-16. The function is invoked by a thread at connection termination to abort a pending update which was started by command 20-14, but not completed with 20-15 and 20-16. SDI server supports multiple connections, which can use the update interface. With a started update with command 20-14 on one connection, the interface is locked for other connections. If a connection terminates, which obtains the update context (lock), the interface would be unaccessable for other connections. Therfore, this function will abort the started update and unlock the update interface, if the connection disturbes so that it can be used by other connection again. 




## Macros Documentation

### define CLA_SYS

```cpp
#define CLA_SYS 0x20
```

Class for System commands. 

### define INS_SYS_SYNC_TURN_ON

```cpp
#define INS_SYS_SYNC_TURN_ON 0x00
```

Turn On device. 

### define INS_SYS_TURN_OFF

```cpp
#define INS_SYS_TURN_OFF 0x01
```

Turn Off device. 

### define INS_SYS_ABORT

```cpp
#define INS_SYS_ABORT 0x02
```

Abort any command in progress. 

### define INS_SYS_GET_CONFIG

```cpp
#define INS_SYS_GET_CONFIG 0x03
```

Get device configuration. 

### define INS_SYS_GET_STATUS

```cpp
#define INS_SYS_GET_STATUS 0x04
```

Get device status info. 

### define INS_SYS_SELFTEST

```cpp
#define INS_SYS_SELFTEST 0x05
```

Perform device selftest. 

### define INS_SYS_LOCK_PAYMENT

```cpp
#define INS_SYS_LOCK_PAYMENT 0x06
```

Lock payment. 

### define INS_SYS_SET_STATUS

```cpp
#define INS_SYS_SET_STATUS 0x09
```

Set device status info. 

### define INS_SYS_AUTH

```cpp
#define INS_SYS_AUTH 0x11
```

Request authentication of data. 

### define INS_SYS_SET_IDLE_TEXT

```cpp
#define INS_SYS_SET_IDLE_TEXT 0x13
```

Set the text displayed in the idle sceen (replaces the welcome text if set) 

### define INS_SYS_SW_UPLOAD_START

```cpp
#define INS_SYS_SW_UPLOAD_START 0x14
```

Start a software upload. 

### define INS_SYS_SW_UPLOAD_TRANSFER

```cpp
#define INS_SYS_SW_UPLOAD_TRANSFER 0x15
```

Transfer record data for software upload. 

### define INS_SYS_SW_UPLOAD_FINALIZE

```cpp
#define INS_SYS_SW_UPLOAD_FINALIZE 0x16
```

Finalize a software upload. 

### define INS_SYS_SHUTDOWN_REBOOT_SLEEP

```cpp
#define INS_SYS_SHUTDOWN_REBOOT_SLEEP 0x17
```

Shutdown, reboot or set the terminal to sleep. 

### define INS_SYS_MAC_SHOW_DESKTOP

```cpp
#define INS_SYS_MAC_SHOW_DESKTOP 0x18
```

Show the MAC desktop. 

### define INS_SYS_SET_PROPERTY

```cpp
#define INS_SYS_SET_PROPERTY 0x19
```

Serialized [sysSetPropertyInt()](namespacevfisysinfo.md#function-syssetpropertyint)/sysSetPropertyString() command. 

### define INS_SYS_GET_PROPERTY

```cpp
#define INS_SYS_GET_PROPERTY 0x1A
```

Serialized [sysGetPropertyInt()](namespacevfisysinfo.md#function-sysgetpropertyint)/sysGetPropertyString() command. 

### define INS_SYS_INSTALL_SPONSOR_CERT

```cpp
#define INS_SYS_INSTALL_SPONSOR_CERT 0x1B
```

Check and Install Sponsor Cert. 

### define INS_SYS_GET_VERSION_INFO

```cpp
#define INS_SYS_GET_VERSION_INFO 0x1C
```

Get version info of SDI components. 

### define INS_SYS_CHECK_FOR_UPDATE

```cpp
#define INS_SYS_CHECK_FOR_UPDATE 0x1D
```

Check for updates. 

### define INS_SYS_SW_GET_LAST_INSTALL_ERROR

```cpp
#define INS_SYS_SW_GET_LAST_INSTALL_ERROR 0x1E
```

Get last install error from secure installer and reset. 

### define INS_SYS_EXT_BUTTON

```cpp
#define INS_SYS_EXT_BUTTON 0x20
```

External button was pressed. 

### define INS_SYS_EPP_ENABLE

```cpp
#define INS_SYS_EPP_ENABLE 0x21
```

Enable/Disable EPP. 

### define INS_SYS_FACTORY_RESET

```cpp
#define INS_SYS_FACTORY_RESET 0x22
```

Factory Reset. 

### define INS_SYS_READ_CERTIFICATE

```cpp
#define INS_SYS_READ_CERTIFICATE 0x23
```

Read Certificate. 

### define INS_SYS_FORCE_CURR_ABBR

```cpp
#define INS_SYS_FORCE_CURR_ABBR 0x24
```

Force Currency Abbreviation. 

### define MAX_OUT_MSG_SIZE_A

```cpp
#define MAX_OUT_MSG_SIZE_A 0xFFF0
```


### define MAX_OUT_MSG_SIZE_B_C_D

```cpp
#define MAX_OUT_MSG_SIZE_B_C_D 0xFFFF
```


### define MIN

```cpp
#define MIN(
    a,
    b
)
((a)<(b)?(a):(b))
```


## Source code

```cpp
/****************************************************************************
*  Product:     InFusion
*  Company:     Verifone
*  Author:      GSS R&D Germany
*  Content:     SDI-Server
****************************************************************************/

#ifndef _SYS_H_
#define _SYS_H_

#define CLA_SYS                           0x20 

#define INS_SYS_SYNC_TURN_ON              0x00 
#define INS_SYS_TURN_OFF                  0x01 
#define INS_SYS_ABORT                     0x02 
#define INS_SYS_GET_CONFIG                0x03 
#define INS_SYS_GET_STATUS                0x04 
#define INS_SYS_SELFTEST                  0x05 
#define INS_SYS_LOCK_PAYMENT              0x06 
#define INS_SYS_SET_STATUS                0x09 
#define INS_SYS_AUTH                      0x11 

#define INS_SYS_SET_IDLE_TEXT             0x13 

#define INS_SYS_SW_UPLOAD_START           0x14 
#define INS_SYS_SW_UPLOAD_TRANSFER        0x15 
#define INS_SYS_SW_UPLOAD_FINALIZE        0x16 

#define INS_SYS_SHUTDOWN_REBOOT_SLEEP     0x17 
#define INS_SYS_MAC_SHOW_DESKTOP          0x18 

#define INS_SYS_SET_PROPERTY              0x19 
#define INS_SYS_GET_PROPERTY              0x1A 

#define INS_SYS_INSTALL_SPONSOR_CERT      0x1B 

#define INS_SYS_GET_VERSION_INFO          0x1C 
#define INS_SYS_CHECK_FOR_UPDATE          0x1D 

#define INS_SYS_SW_GET_LAST_INSTALL_ERROR 0x1E 

#define INS_SYS_EXT_BUTTON                0x20 

#define INS_SYS_EPP_ENABLE                0x21 

#define INS_SYS_FACTORY_RESET             0x22 

#define INS_SYS_READ_CERTIFICATE          0x23 

#define INS_SYS_FORCE_CURR_ABBR           0x24 

#define MAX_OUT_MSG_SIZE_A 0xFFF0 // 16 * 0xFFF
#define MAX_OUT_MSG_SIZE_B_C_D 0xFFFF // 64KB - 1

#ifndef MIN
  #define MIN(a,b) ((a)<(b)?(a):(b))
#endif

typedef struct thread_data
{
  char           *cmdData;
  unsigned long  cmdSize;
  void           *addThreadData;
  int            taskId;
} Thread_Data;

enum ExtserverResult
{
  RESULT_OK                     =  0,  
  RESULT_FAIL                   = -1,  
  RESULT_TIMEOUT                = -2,  
  RESULT_USER_CANCEL            = -3,  
  RESULT_MOBILE_ABORT           = -4,  
  RESULT_NO_LINK                = -5,  
  RESULT_CLEAR_BUTTON           = -6,  
  RESULT_DATA_AVAILABLE         = -7,  
  RESULT_EXCESSIVE_PIN_REQUESTS = -8,  
  RESULT_TAG_ERROR              = -9,  
  RESULT_TAG_LENGTH_ERROR       = -10, 
  RESULT_PARAMETER_ERROR        = -11, 
  RESULT_INTERCHAR_TIMEOUT      = -12, 
  RESULT_LOGIC_ERROR            = -13  
};

enum UploadType
{
  UPLOAD_TYPE_SOFTWARE_UPDATE,        
  UPLOAD_TYPE_CONFIG_WHITELIST,       
  UPLOAD_TYPE_CONFIG_SENSITIVE_TAGS,  
  UPLOAD_TYPE_CONFIG_CARD_RANGES,     
  UPLOAD_TYPE_FIRMWARE_UPDATE,        
  UPLOAD_TYPE_KEYS,                   
  UPLOAD_TYPE_CONFIG_SDIEMV,          
  UPLOAD_TYPE_REMOVE_SPONSOR,         
  UPLOAD_TYPE_REMOVE_CONFIG_SDIEMV,   
  UPLOAD_TYPE_PLUGIN,                 
  UPLOAD_TYPE_REMOVE_PLUGIN,          
  UPLOAD_TYPE_CP_PACKAGE,             
  UPLOAD_TYPE_EMV_CONFIG_PACKAGE,     
  UPLOAD_TYPE_UVRK_PACKAGE,           
  UPLOAD_TYPE_MAX                     
};

bool handleSystemCmd(unsigned long msgBufSize, unsigned char *msg, unsigned long msgSize, unsigned short rspBufSize, unsigned char *rsp, unsigned short *rspSize);

int check4Interrupt(void);

void setInterrupt(enum ExtserverResult reason);

int isCardRemoved(void);

const char *errText(int err);

void setDevice2Idle(void);

enum IdleScreenMode
{
  Idle_Normal = 0,      
  Idle_MenuEnabled = 1, 
  Idle_WaitLogo = 2,    
  Idle_NoAdminMode = 4  
};
void sysDisplayIdleScreen(unsigned mode = Idle_Normal, const char *idletext = 0);

bool sysSetIdleScreenFinished(unsigned long id);

void sysSetIdleScreenAdminMenu(bool on);

bool sysSetIdleScreenLocked(bool lock = true, bool update_screen = true);

enum IdleLockType
{
  ILT_NoLock    = 0, 
  ILT_ApiLock   = 1, 
  ILT_AdminLock = 2  
};

enum IdleLockType sysGetIdleScreenLocked();

void setSW1SW2(int result, unsigned char *rsp);

bool sys_internal_android();

bool vos_sys8();

bool checkBundleInstalled(const char *bdlname);

bool isHwModelName(const char *targetHwModelName);

void sysResetUpdateContext(void *handle);

#endif // _SYS_H_
```


-------------------------------

Updated on 2025-06-17 at 11:52:26 +0100
