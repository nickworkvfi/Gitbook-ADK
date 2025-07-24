---
hidden: true
title: sysbar.h
---

<a href="sysbar_8h.md">Go to the documentation of this file.</a>

``` cpp
 1 #pragma once
 2 
 8 #include <map>
 9 #include <string>
 10 #include "syserror.h"
 11 #include "sysinfo.h"
 12 #include "html/gui.h"
 13 
 14 #if (defined _VRXEVO || defined _WIN32)
 15 # if defined VFI_DLL_EXPORT
 16 # define SYS_BAR_API __declspec(dllexport)
 17 # elif defined _VRXEVO
 18 # define SYS_BAR_API __declspec(dllimport) 
 19 # else
 20 # define SYS_BAR_API
 21 # endif
 22 #elif defined __GNUC__ && defined VFI_DLL_EXPORT
 23 # define SYS_BAR_API __attribute__((visibility ("default")))
 24 #else
 25 # define SYS_BAR_API
 26 #endif
 27 
 28 #ifndef DOXYGEN
 29 
 30 namespace vfisysinfo {
 31 #endif
 32 
 47 typedef void (*sysStatusbarCallback)(void *data, int region_id, std::map<std::string,std::string> &values);
 48 
 53 typedef vfigui::uiAsyncCallback sysStatusbarReturnCallback;
 54 
 119 SYS_BAR_API int sysStartStatusbarURL(int region_id, const std::string &url, const std::map<std::string,std::string> &values,
 120  sysStatusbarCallback cb=0, void *cbdata=0);
 121 
 132 SYS_BAR_API int sysStartStatusbarURLReturnVal(int region_id,
 133  const std::string &url,
 134  const std::map<std::string,std::string> &values,
 135  sysStatusbarCallback cb,
 136  void *cbdata,
 137  sysStatusbarReturnCallback returncb);
 138 
 151 SYS_BAR_API int sysStartStatusbar(int region_id, const std::string &html, const std::map<std::string, std::string> &values,
 152  const std::string &resource_path=std::string(), sysStatusbarCallback cb=0, void *cbdata=0,
 153  sysStatusbarReturnCallback returncb=0);
 154 
 159 SYS_BAR_API int sysStopStatusbar(int region_id);
 160 
 161 
 168 SYS_BAR_API int sysSetStatusbarValues(int region_id, const std::map<std::string,std::string> &values);
 169 
 170 
 176 SYS_BAR_API int sysGetStatusbarValues(int region_id, std::map<std::string,std::string> &values);
 177 
 178 
 190 SYS_BAR_API int sysSetRefreshTime(int region_id, int refresh_time_ms);
 191 
 192 
 198 SYS_BAR_API int sysGetRefreshTime(int region_id, int *refresh_time_ms);
 199 
 200 
 206 SYS_BAR_API int sysRefreshStatusBar(int region_id);
 207 
 208 
 211 SYS_BAR_API const char *sysStatusbar_GetVersion();
 212 
 215 SYS_BAR_API const char *sysStatusbarGetVersion();
 216 
 217 #ifndef DOXYGEN
 218 } // namespace vfisysinfo
 219 #endif
 220 
```
