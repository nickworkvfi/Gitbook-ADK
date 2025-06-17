---
title: log/include/liblog.h

---

# log/include/liblog.h



## Defines

|                | Name           |
| -------------- | -------------- |
|  | **[LIBLOG_API_VERSION](liblog_8h.md#define-liblog-api-version)**  |




## Macros Documentation

### define LIBLOG_API_VERSION

```cpp
#define LIBLOG_API_VERSION 11
```


## Source code

```cpp
#ifndef _LIBLOG_H_
#define _LIBLOG_H_

#if defined(_LIBLOG2_H_)
    #error Please include only one version of LOG API (liblog.h or liblog2.h), not both at the same time
#endif

// API ver. 1.1
#define LIBLOG_API_VERSION 11

#include "priv/logapi_base.h"
#include "priv/logapi_priv_v1.h"

#include "priv/logapi_printf_def_v1.h"
#include "priv/logapi_hexdump_def_v1.h"

#endif //_LIBLOG_H_
```


-------------------------------

Updated on 2025-06-17 at 11:52:25 +0100
