---
hidden: true
title: sysbase.h
---

<a href="sysbase_8h.md">Go to the documentation of this file.</a>

``` cpp
 1 #pragma once
 2 
 3 #include "dllspec.h"
 4 
 10 #include <map>
 11 #include <string>
 12 
 13 #ifndef DOXYGEN
 14 
 15 namespace vfisysbase
 16 {
 17 #endif
 18 
 33 SYS_INFO_API int sysTransferToBase(const std::string & ip_addr, const std::string & filename);
 34 
 35 #ifndef DOXYGEN
 36 } // namespace vfisysinfo
 37 #endif
 38 
```
