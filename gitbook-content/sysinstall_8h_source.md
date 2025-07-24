---
hidden: true
title: sysinstall.h
---

<a href="sysinstall_8h.md">Go to the documentation of this file.</a>

``` cpp
 1 #pragma once
 2 
 8 #include <map>
 9 #include <string>
 10 #include "sysinfo.h"
 11 #include "syserror.h"
 12 #include "dllspec.h"
 13 #include "ipc/jsobject.h"
 14 
 15 #ifndef DOXYGEN
 16 
 17 namespace vfisysinstall
 18 {
 19 #endif
 20 
 25 SYS_INFO_API vfisysinfo::sysError sysAuthenticateFile(const std::string & path);
 26 
 38 SYS_INFO_API vfisysinfo::sysError sysInstall(const std::string & path);
 39 
 48 SYS_INFO_API vfisysinfo::sysError sysBaseInstall();
 49 
 63 SYS_INFO_API vfisysinfo::sysError sysFreeResourcesInstall( const std::string & value );
 64 
 65 
 71 SYS_INFO_API vfisysinfo::sysError sysGetInstallStatus( vfiipc::JSObject & json );
 72 
 73 #ifndef DOXYGEN
 74 } // namespace vfisysinstall
 75 #endif
 76 
```
