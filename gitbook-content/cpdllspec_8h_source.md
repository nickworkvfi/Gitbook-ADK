---
hidden: true
title: cpdllspec.h
---

<a href="cpdllspec_8h.md">Go to the documentation of this file.</a>

``` cpp
 1 #ifndef __CPDLLSPEC_H__
 2 #define __CPDLLSPEC_H__
 3 
 4 #if (defined _VRXEVO || defined _WIN32)
 5  #if defined VFI_CE_SHARED_EXPORT
 6  #define CPDllSpec __declspec(dllexport)
 7  #elif defined VFI_CE_STATIC_EXPORT
 8  #define CPDllSpec
 9  #else
 10  #define CPDllSpec __declspec(dllimport)
 11  #endif
 12 #elif (defined __GNUC__ || defined _x86) && defined VFI_CE_SHARED_EXPORT
 13  #define CPDllSpec __attribute__((visibility ("default")))
 14 #else
 15  #define CPDllSpec
 16 #endif
 17 
 18 #endif
```
