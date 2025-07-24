---
hidden: true
title: sysbeep.h
---

<a href="sysbeep_8h.md">Go to the documentation of this file.</a>

``` cpp
 1 #pragma once
 2 
 3 #include "dllspec.h"
 4 
 10 #ifndef DOXYGEN
 11 
 12 namespace vfisysinfo {
 13 #endif
 14 
 20 SYS_INFO_API int sysBeepNormal(int volume);
 21 
 27 SYS_INFO_API int sysBeepError(int volume);
 28 
 138 SYS_INFO_API int sysPlaySound(int note, int duration, int volume);
 139 
 146 SYS_INFO_API int sysPlaySoundFreq(int frequency, int duration, int volume);
 147 
 148 #ifndef DOXYGEN
 149 } // namespace vfisysinfo
 150 #endif
 151 
```
