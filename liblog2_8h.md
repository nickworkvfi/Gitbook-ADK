---
title: log/include/liblog2.h

---

# log/include/liblog2.h



## Defines

|                | Name           |
| -------------- | -------------- |
|  | **[LIBLOG_API_VERSION](liblog2_8h.md#define-liblog-api-version)**  |




## Macros Documentation

### define LIBLOG_API_VERSION

```cpp
#define LIBLOG_API_VERSION 27
```


## Source code

```cpp
#ifndef _LIBLOG2_H_
#define _LIBLOG2_H_

#if defined(_LIBLOG_H_)
    #error Please include only one version of LOG API (liblog.h or liblog2.h), not both at the same time
#endif

// API ver. 2.7
#define LIBLOG_API_VERSION 27

#include "priv/logapi_base.h"
#include "priv/logapi_priv_v2.h"

#include "priv/logapi_printf_def_v2.h"
#include "priv/logapi_hexdump_def_v2.h"

#endif //_LIBLOG2_H_
```


-------------------------------

Updated on 2025-06-17 at 11:52:25 +0100
