---
title: sys/export/sysinfo/zontalk.h

---

# sys/export/sysinfo/zontalk.h



## Namespaces

| Name           |
| -------------- |
| **[vfizontalk](namespacevfizontalk.md)**  |




## Source code

```cpp
#pragma once

#include "dllspec.h"
 
#include <map>
#include <string>

#ifndef DOXYGEN

namespace vfizontalk 
{
#endif

enum download_type
{
    PARTIAL = 0,
    FULL = 1,
};

typedef void (*recieve_callback)(char *);
typedef void (*end_callback)(int);

SYS_INFO_API int sysZontalkReceive(short com_port, recieve_callback rc_cb, end_callback end_cb, download_type type );

SYS_INFO_API int sysZontalkCancel();
  
#ifndef DOXYGEN
} // namespace vfizontalk
#endif
```


-------------------------------

Updated on 2025-06-17 at 11:52:26 +0100
