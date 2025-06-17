---
title: sys/export/sysinfo/sysbase.h

---

# sys/export/sysinfo/sysbase.h



## Namespaces

| Name           |
| -------------- |
| **[vfisysbase](namespacevfisysbase.md)**  |




## Source code

```cpp
#pragma once

#include "dllspec.h"

#include <map>
#include <string>

#ifndef DOXYGEN

namespace vfisysbase 
{
#endif

SYS_INFO_API int sysTransferToBase(const std::string & ip_addr, const std::string & filename);

#ifndef DOXYGEN
} // namespace vfisysinfo
#endif
```


-------------------------------

Updated on 2025-06-17 at 11:52:26 +0100
