---
title: sys/export/sysinfo/syspm.h

---

# sys/export/sysinfo/syspm.h



## Namespaces

| Name           |
| -------------- |
| **[vfisysinfo](namespacevfisysinfo.md)**  |




## Source code

```cpp
#pragma once

#include <map>
#include <string>
#include "dllspec.h"

#ifndef DOXYGEN

namespace vfisysinfo {
#endif

SYS_INFO_API int sysReboot();

SYS_INFO_API int sysRebootDock();

SYS_INFO_API int sysSleep();

SYS_INFO_API int sysDeepSleep();

SYS_INFO_API int sysHibernate();

SYS_INFO_API int sysShutdown();

#ifndef DOXYGEN
} // namespace vfisysinfo
#endif
```


-------------------------------

Updated on 2025-06-17 at 11:52:26 +0100
