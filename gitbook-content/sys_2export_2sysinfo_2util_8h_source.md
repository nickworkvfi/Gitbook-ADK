---
hidden: true
title: util.h
---

<a href="sys_2export_2sysinfo_2util_8h.md">Go to the documentation of this file.</a>

``` cpp
 1 #pragma once
 2 
 8 #include <string>
 9 #include "dllspec.h"
 10 
 11 #ifndef DOXYGEN
 12 
 13 namespace vfisysinfo
 14 {
 15 #endif
 16 
 25 SYS_INFO_API void Dsp2Hex(char *dsp, long *hex, unsigned int n);
 26 
 33 SYS_INFO_API int sysPutEnv( const std::string & section, const std::string & label, const std::string & value );
 34 
 41 SYS_INFO_API int sysGetEnv( const std::string & section, const std::string & label, std::string & value );
 42 
 43 #ifndef DOXYGEN
 44 } // namespace vfisysinfo
 45 #endif
 46 
```
