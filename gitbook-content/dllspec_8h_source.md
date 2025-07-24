---
hidden: true
title: dllspec.h
---

<a href="dllspec_8h.md">Go to the documentation of this file.</a>

``` cpp
 1 #pragma once
 2 
 3 # if defined VFI_DLL_EXPORT
 4 # define SYS_INFO_API __attribute__((visibility ("default")))
 5 # else
 6 # define SYS_INFO_API
 7 # endif
 8 
```
