---
title: sys/export/sysinfo/dllspec.h

---

# sys/export/sysinfo/dllspec.h



## Defines

|                | Name           |
| -------------- | -------------- |
|  | **[SYS_INFO_API](dllspec_8h.md#define-sys-info-api)**  |




## Macros Documentation

### define SYS_INFO_API

```cpp
#define SYS_INFO_API 
```


## Source code

```cpp
#pragma once

#  if defined VFI_DLL_EXPORT
#    define SYS_INFO_API  __attribute__((visibility ("default")))
#  else
#    define SYS_INFO_API
#  endif
```


-------------------------------

Updated on 2025-06-17 at 11:52:26 +0100
