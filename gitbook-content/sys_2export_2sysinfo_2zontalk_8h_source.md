---
hidden: true
title: zontalk.h
---

<a href="sys_2export_2sysinfo_2zontalk_8h.md">Go to the documentation of this file.</a>

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
 15 namespace vfizontalk
 16 {
 17 #endif
 18 
 19 enum download_type
 20 {
 21  PARTIAL = 0,
 22  FULL = 1,
 23 };
 24 
 25 typedef void (*recieve_callback)(char *);
 26 typedef void (*end_callback)(int);
 27 
 42 SYS_INFO_API int sysZontalkReceive(short com_port, recieve_callback rc_cb, end_callback end_cb, download_type type );
 43 
 51 SYS_INFO_API int sysZontalkCancel();
 52 
 53 #ifndef DOXYGEN
 54 } // namespace vfizontalk
 55 #endif
 56 
```
