---
title: cpl/include/commerce/cpdllspec.h

---

# cpl/include/commerce/cpdllspec.h



## Defines

|                | Name           |
| -------------- | -------------- |
|  | **[CPDllSpec](cpdllspec_8h.md#define-cpdllspec)**  |




## Macros Documentation

### define CPDllSpec

```cpp
#define CPDllSpec 
```


## Source code

```cpp
#ifndef __CPDLLSPEC_H__
#define __CPDLLSPEC_H__

#if (defined _VRXEVO || defined _WIN32)
  #if defined VFI_CE_SHARED_EXPORT
    #define CPDllSpec __declspec(dllexport)
  #elif defined VFI_CE_STATIC_EXPORT
    #define CPDllSpec
  #else
    #define CPDllSpec __declspec(dllimport)
  #endif
#elif (defined __GNUC__ || defined _x86) && defined VFI_CE_SHARED_EXPORT
  #define CPDllSpec  __attribute__((visibility ("default")))
#else
  #define CPDllSpec
#endif

#endif
```


-------------------------------

Updated on 2025-06-17 at 11:52:24 +0100
