---
title: sys/export/sysinfo/sysbar.h

---

# sys/export/sysinfo/sysbar.h



## Namespaces

| Name           |
| -------------- |
| **[vfisysinfo](namespacevfisysinfo.md)**  |

## Defines

|                | Name           |
| -------------- | -------------- |
|  | **[SYS_BAR_API](group__sysbar.md#define-sys-bar-api)**  |




## Macros Documentation

### define SYS_BAR_API

```cpp
#define SYS_BAR_API 
```


## Source code

```cpp
#pragma once

#include <map>
#include <string>
#include "syserror.h"
#include "sysinfo.h"
#include "html/gui.h"

#if (defined _VRXEVO || defined _WIN32)
#  if   defined VFI_DLL_EXPORT
#    define SYS_BAR_API __declspec(dllexport)
#  elif defined _VRXEVO
#    define SYS_BAR_API __declspec(dllimport) 
#  else
#    define SYS_BAR_API
#  endif
#elif defined __GNUC__ && defined VFI_DLL_EXPORT
#  define SYS_BAR_API  __attribute__((visibility ("default")))
#else
#  define SYS_BAR_API
#endif

#ifndef DOXYGEN

namespace vfisysinfo {
#endif

typedef void (*sysStatusbarCallback)(void *data, int region_id, std::map<std::string,std::string> &values);

typedef vfigui::uiAsyncCallback sysStatusbarReturnCallback;

SYS_BAR_API int sysStartStatusbarURL(int region_id, const std::string &url, const std::map<std::string,std::string> &values,
                         sysStatusbarCallback cb=0, void *cbdata=0);

SYS_BAR_API int sysStartStatusbarURLReturnVal(int region_id, 
        const std::string &url, 
        const std::map<std::string,std::string> &values, 
        sysStatusbarCallback cb, 
        void *cbdata,
        sysStatusbarReturnCallback returncb);

SYS_BAR_API int sysStartStatusbar(int region_id, const std::string &html, const std::map<std::string, std::string> &values,
                      const std::string &resource_path=std::string(), sysStatusbarCallback cb=0, void *cbdata=0,
                      sysStatusbarReturnCallback returncb=0);

SYS_BAR_API int sysStopStatusbar(int region_id);


SYS_BAR_API int sysSetStatusbarValues(int region_id, const std::map<std::string,std::string> &values);


SYS_BAR_API int sysGetStatusbarValues(int region_id, std::map<std::string,std::string> &values);


SYS_BAR_API int sysSetRefreshTime(int region_id, int refresh_time_ms);


SYS_BAR_API int sysGetRefreshTime(int region_id, int *refresh_time_ms);


SYS_BAR_API int sysRefreshStatusBar(int region_id);


SYS_BAR_API const char *sysStatusbar_GetVersion();

SYS_BAR_API const char *sysStatusbarGetVersion();

#ifndef DOXYGEN
} // namespace vfisysinfo
#endif
```


-------------------------------

Updated on 2025-06-17 at 11:52:26 +0100
