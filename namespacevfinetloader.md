---
title: vfinetloader

---

# vfinetloader

**Module:** **[Netloader](group__netloader.md)**

 [More...](#detailed-description)

## Types

|                | Name           |
| -------------- | -------------- |
| enum| **[sysStatus](namespacevfinetloader.md#enum-sysstatus)** { SYS_ERR = 0, SYS_MSG = 1, SYS_DNLD_FILE = 2, SYS_DNLD_DONE = 3, SYS_DNLD_ERR = 4, SYS_DNLD_INSTALL = 5, SYS_DNLD_INSTALL_DONE = 6, SYS_DNLD_INSTALL_FAIL = 7, SYS_REBOOT = 8, SYS_FILE_FINISH = 9, SYS_REBOOT_REQUIRED = 10, SYS_BASE_INSTALL_FAIL = 11, SYS_NETLOADER_READY = 100, SYS_NETLOADER_EXIT = 200} |
| enum| **[sysMsgMode](namespacevfinetloader.md#enum-sysmsgmode)** { SYS_EXT_MSG_DISABLED = 0, SYS_EXT_MSG = 1, SYS_EXT_MSG_1_2 = 2, SYS_EXT_MSG_1 = 9} |
| enum| **[sysReadMode](namespacevfinetloader.md#enum-sysreadmode)** { SYS_BLOCKING = 0, SYS_NON_BLOCKING = 1, SYS_LAST = 2, SYS_CANCEL = 9} |

## Functions

|                | Name           |
| -------------- | -------------- |
| [SYS_INFO_API](dllspec_8h.md#define-sys-info-api) int | **[sysNetloaderStart](namespacevfinetloader.md#function-sysnetloaderstart)**() |
| [SYS_INFO_API](dllspec_8h.md#define-sys-info-api) int | **[sysNetloaderStartBase](namespacevfinetloader.md#function-sysnetloaderstartbase)**() |
| [SYS_INFO_API](dllspec_8h.md#define-sys-info-api) int | **[sysNetloaderStopBase](namespacevfinetloader.md#function-sysnetloaderstopbase)**() |
| [SYS_INFO_API](dllspec_8h.md#define-sys-info-api) int | **[sysNetloaderStop](namespacevfinetloader.md#function-sysnetloaderstop)**() |
| [SYS_INFO_API](dllspec_8h.md#define-sys-info-api) int | **[sysNetloaderVersion](namespacevfinetloader.md#function-sysnetloaderversion)**(std::string & version) |
| [SYS_INFO_API](dllspec_8h.md#define-sys-info-api) int | **[sysNetloaderSetMsgMode](namespacevfinetloader.md#function-sysnetloadersetmsgmode)**(int type) |
| [SYS_INFO_API](dllspec_8h.md#define-sys-info-api) int | **[sysNetloaderGetMsg](namespacevfinetloader.md#function-sysnetloadergetmsg)**(std::string & msg, int flags) |

## Detailed Description


Verifone netloader (vfinetloader) namespace 

## Types Documentation

### enum sysStatus

| Enumerator | Value | Description |
| ---------- | ----- | ----------- |
| SYS_ERR | 0|  Error return (errno will be non-zero) msg is empty  |
| SYS_MSG | 1|  Status message available. msg member is not empty  |
| SYS_DNLD_FILE | 2|  'msg' member will return the filename of downloading file  |
| SYS_DNLD_DONE | 3|  'msg' member returns "DNLD DONE"  |
| SYS_DNLD_ERR | 4|  'msg' member returns "DNLD ERROR"  |
| SYS_DNLD_INSTALL | 5|  'msg' member will return the filename of the file being installed  |
| SYS_DNLD_INSTALL_DONE | 6|  'msg' member returns "INSTL DONE"  |
| SYS_DNLD_INSTALL_FAIL | 7|  'msg' member returns "INSTL FAIL"  |
| SYS_REBOOT | 8|  'msg' member returns "REBOOT"  |
| SYS_FILE_FINISH | 9|  'msg' member will return the filename of the finished file  |
| SYS_REBOOT_REQUIRED | 10|  'msg' member returns "REBOOT REQUIRED"  |
| SYS_BASE_INSTALL_FAIL | 11|  'msg' member returns "BASE INSTL FAIL"  |
| SYS_NETLOADER_READY | 100|  'msg' member returns "", netloader ready to connect on socket I/O  |
| SYS_NETLOADER_EXIT | 200|  'msg' member returns "", netloader stopping and closing socket I/O  |




### enum sysMsgMode

| Enumerator | Value | Description |
| ---------- | ----- | ----------- |
| SYS_EXT_MSG_DISABLED | 0|  Disable extended messages  |
| SYS_EXT_MSG | 1|  Default messages  |
| SYS_EXT_MSG_1_2 | 2|  Enable extended type 1 and 2 messages  |
| SYS_EXT_MSG_1 | 9|  Enable extended type 1 and don't auto-reboot after install  |




### enum sysReadMode

| Enumerator | Value | Description |
| ---------- | ----- | ----------- |
| SYS_BLOCKING | 0|  Blocking  |
| SYS_NON_BLOCKING | 1|  Non-blocking  |
| SYS_LAST | 2|  Return last event  |
| SYS_CANCEL | 9|  Cancel  |





## Functions Documentation

### function sysNetloaderStart

```cpp
SYS_INFO_API int sysNetloaderStart()
```


Start netloader (listen on socket for download request) 


### function sysNetloaderStartBase

```cpp
SYS_INFO_API int sysNetloaderStartBase()
```


Starts netloader on terminal base 


### function sysNetloaderStopBase

```cpp
SYS_INFO_API int sysNetloaderStopBase()
```


Starts netloader on terminal base 


### function sysNetloaderStop

```cpp
SYS_INFO_API int sysNetloaderStop()
```


Stop netloader (stop listening on socket for download request) 


### function sysNetloaderVersion

```cpp
SYS_INFO_API int sysNetloaderVersion(
    std::string & version
)
```


Get version of netloader service 


### function sysNetloaderSetMsgMode

```cpp
SYS_INFO_API int sysNetloaderSetMsgMode(
    int type
)
```


**Parameters**: 

  * **type** flags from sysMsgMode enum 


Set extended messages


### function sysNetloaderGetMsg

```cpp
SYS_INFO_API int sysNetloaderGetMsg(
    std::string & msg,
    int flags
)
```


**Parameters**: 

  * **flags** flags from sysReadMode enum 


**Return**: value from sysStatus enum 

Read a netloader event.






-------------------------------

Updated on 2025-06-17 at 11:52:23 +0100