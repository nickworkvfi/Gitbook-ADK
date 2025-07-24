---
hidden: true
title: liblog2.h
---

<a href="liblog2_8h.md">Go to the documentation of this file.</a>

``` cpp
 1 #ifndef _LIBLOG2_H_
 2 #define _LIBLOG2_H_
 3 
 4 #if defined(_LIBLOG_H_)
 5  #error Please include only one version of LOG API (liblog.h or liblog2.h), not both at the same time
 6 #endif
 7 
 8 // API ver. 2.7
 9 #define LIBLOG_API_VERSION 27
 10 
 11 #include "priv/logapi_base.h"
 12 #include "priv/logapi_priv_v2.h"
 13 
 14 #include "priv/logapi_printf_def_v2.h"
 15 #include "priv/logapi_hexdump_def_v2.h"
 16 
 17 #endif //_LIBLOG2_H_
```
