---
hidden: true
title: netloader.h
---

<a href="sys_2export_2sysinfo_2netloader_8h.md">Go to the documentation of this file.</a>

``` cpp
 1 #pragma once
 2 
 8 #include "dllspec.h"
 9 #include <map>
 10 #include <string>
 11 
 12 #ifndef DOXYGEN
 13 
 14 namespace vfinetloader
 15 {
 16 #endif
 17 
 18 enum sysStatus
 19 {
 20  // Default messages:
 21  SYS_ERR = 0,
 22  SYS_MSG = 1,
 23  // Type 1 messages: 
 24  SYS_DNLD_FILE = 2,
 25  SYS_DNLD_DONE = 3,
 26  SYS_DNLD_ERR = 4,
 27  SYS_DNLD_INSTALL = 5,
 28  SYS_DNLD_INSTALL_DONE = 6,
 29  SYS_DNLD_INSTALL_FAIL = 7,
 30  SYS_REBOOT = 8,
 31  SYS_FILE_FINISH = 9,
 32  SYS_REBOOT_REQUIRED = 10,
 33  SYS_BASE_INSTALL_FAIL = 11,
 34  // Type 2 messages: 
 35  SYS_NETLOADER_READY = 100,
 36  SYS_NETLOADER_EXIT = 200,
 37 };
 38 
 39 enum sysMsgMode
 40 {
 41  SYS_EXT_MSG_DISABLED = 0,
 42  SYS_EXT_MSG = 1,
 43  SYS_EXT_MSG_1_2 = 2,
 44  SYS_EXT_MSG_1 = 9,
 45 };
 46 
 47 enum sysReadMode
 48 {
 49  SYS_BLOCKING = 0,
 50  SYS_NON_BLOCKING = 1,
 51  SYS_LAST = 2,
 52  SYS_CANCEL = 9,
 53 };
 54 
 57 SYS_INFO_API int sysNetloaderStart();
 58 
 61 SYS_INFO_API int sysNetloaderStartBase();
 62 
 65 SYS_INFO_API int sysNetloaderStopBase();
 66 
 69 SYS_INFO_API int sysNetloaderStop();
 70 
 73 SYS_INFO_API int sysNetloaderVersion(std::string & version);
 74 
 79 SYS_INFO_API int sysNetloaderSetMsgMode(int type);
 80 
 86 SYS_INFO_API int sysNetloaderGetMsg(std::string & msg, int flags);
 87 
 88 #ifndef DOXYGEN
 89 } // namespace vfinetloader
 90 #endif
 91 
```
