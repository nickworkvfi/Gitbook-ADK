---
title: sys/export/sysinfo/util.h

---

# sys/export/sysinfo/util.h



## Namespaces

| Name           |
| -------------- |
| **[vfisysinfo](namespacevfisysinfo.md)**  |




## Source code

```cpp
#pragma once

#include <string>
#include "dllspec.h"

#ifndef DOXYGEN

namespace vfisysinfo 
{
#endif

SYS_INFO_API void Dsp2Hex(char *dsp, long *hex, unsigned int n);

SYS_INFO_API int sysPutEnv( const std::string & section, const std::string & label, const std::string & value );

SYS_INFO_API int sysGetEnv( const std::string & section, const std::string & label, std::string & value );

#ifndef DOXYGEN
} // namespace vfisysinfo
#endif
```


-------------------------------

Updated on 2025-06-17 at 11:52:26 +0100
