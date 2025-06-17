---
title: sys/export/sysinfo/netloader.h

---

# sys/export/sysinfo/netloader.h



## Namespaces

| Name           |
| -------------- |
| **[vfinetloader](namespacevfinetloader.md)**  |




## Source code

```cpp
#pragma once
 
#include "dllspec.h"
#include <map>
#include <string>

#ifndef DOXYGEN

namespace vfinetloader 
{
#endif

enum sysStatus 
{
    // Default messages:
    SYS_ERR = 0,                    
    SYS_MSG = 1,                    
    // Type 1 messages: 
    SYS_DNLD_FILE = 2,              
    SYS_DNLD_DONE = 3,              
    SYS_DNLD_ERR = 4,               
    SYS_DNLD_INSTALL = 5,           
    SYS_DNLD_INSTALL_DONE = 6,      
    SYS_DNLD_INSTALL_FAIL = 7,      
    SYS_REBOOT = 8,                 
    SYS_FILE_FINISH = 9,            
    SYS_REBOOT_REQUIRED = 10,       
    SYS_BASE_INSTALL_FAIL = 11,     
    // Type 2 messages: 
    SYS_NETLOADER_READY = 100,   
    SYS_NETLOADER_EXIT = 200,    
};

enum sysMsgMode
{
    SYS_EXT_MSG_DISABLED = 0, 
    SYS_EXT_MSG          = 1, 
    SYS_EXT_MSG_1_2      = 2, 
    SYS_EXT_MSG_1        = 9, 
};

enum sysReadMode
{
    SYS_BLOCKING         = 0, 
    SYS_NON_BLOCKING     = 1, 
    SYS_LAST             = 2, 
    SYS_CANCEL           = 9, 
};

SYS_INFO_API int sysNetloaderStart();

SYS_INFO_API int sysNetloaderStartBase();

SYS_INFO_API int sysNetloaderStopBase();
 
SYS_INFO_API int sysNetloaderStop();

SYS_INFO_API int sysNetloaderVersion(std::string & version);

SYS_INFO_API int sysNetloaderSetMsgMode(int type);

SYS_INFO_API int sysNetloaderGetMsg(std::string & msg, int flags);
 
#ifndef DOXYGEN
} // namespace vfinetloader
#endif
```


-------------------------------

Updated on 2025-06-17 at 11:52:26 +0100
