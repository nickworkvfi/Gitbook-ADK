---
title: sys/export/sysinfo/syserror.h

---

# sys/export/sysinfo/syserror.h



## Namespaces

| Name           |
| -------------- |
| **[vfisysinfo](namespacevfisysinfo.md)**  |




## Source code

```cpp
#pragma once

#ifndef DOXYGEN

namespace vfisysinfo 
{
#endif

enum sysError
{
    SYS_ERR_OK                             =  0,         
    SYS_ERR_PROP_UNSUPPORTED               = -1,         
    SYS_ERR_PROP_READ_ONLY                 = -2,         
    SYS_ERR_PROP_WRITE_ONLY                = -3,         
    SYS_ERR_PARAMETER                      = -4,         
    SYS_ERR_PERMISSION                     = -5,         
    SYS_ERR_REGION                         = -6,         
    SYS_ERR_FAIL                           = -7,         
    SYS_ERR_UNSUPPORTED                    = -8,         
    SYS_ERR_ACTIVE_TIMEZONE                = -9,         
    SYS_ERR_INSTALL_LIMIT                  = -10,        
    SYS_ERR_REBOOT_NEEDED                  = -11,        
    SYS_ERR_FILE_DOES_NOT_EXIST            = -12,        
    SYS_ERR_BUNDLE_VERSION                 = -13,        
    SYS_ERR_EXISTS                         = -14,        
    SYS_ERR_ACCESS                         = -15,        
    SYS_ERR_NOT_DOCKED                     = -16,        
    SYS_ERR_KEY_MISSING                    = -17,        
    SYS_ERR_EXPECTED_KEY                   = -18,        
    SYS_ERR_CONFIGURATIION                 = -19,        
    SYS_ERR_PATHNAME_TOO_LONG              = -20,        
    SYS_ERR_GET_CWD                        = -21,        
    SYS_ERR_IPC                            = -22,        
    SYS_ERR_RUNNING                        = -23,        
    SYS_ERR_SDI_NOT_CONNECTED              = -24,        
    SYS_ERR_CALCULATING                    = -25,        
    SYS_ERR_BASE_CTRL_NOT_AVAILABLE        = -26,        
    SYS_ERR_ANDROID_NOT_AVAILABLE          = -27,        
};

#ifndef DOXYGEN
} // namespace vfisysinfo
#endif
```


-------------------------------

Updated on 2025-06-17 at 11:52:26 +0100
