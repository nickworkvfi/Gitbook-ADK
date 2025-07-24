---
hidden: true
title: syspm.h
---

<a href="syspm_8h.md">Go to the documentation of this file.</a>

``` cpp
 1 #pragma once
 2 
 8 #include <map>
 9 #include <string>
 10 #include "dllspec.h"
 11 
 12 #ifndef DOXYGEN
 13 
 14 namespace vfisysinfo {
 15 #endif
 16 
 20 SYS_INFO_API int sysReboot();
 21 
 25 SYS_INFO_API int sysRebootDock();
 26 
 30 SYS_INFO_API int sysSleep();
 31 
 35 SYS_INFO_API int sysDeepSleep();
 36 
 40 SYS_INFO_API int sysHibernate();
 41 
 45 SYS_INFO_API int sysShutdown();
 46 
 47 #ifndef DOXYGEN
 48 } // namespace vfisysinfo
 49 #endif
 50 
```
