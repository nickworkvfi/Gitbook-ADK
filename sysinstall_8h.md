---
title: sys/export/sysinfo/sysinstall.h

---

# sys/export/sysinfo/sysinstall.h



## Namespaces

| Name           |
| -------------- |
| **[vfisysinstall](namespacevfisysinstall.md)**  |




## Source code

```cpp
#pragma once

#include <map>
#include <string>
#include "sysinfo.h"
#include "syserror.h"
#include "dllspec.h"
#include "ipc/jsobject.h"

#ifndef DOXYGEN

namespace vfisysinstall 
{
#endif

SYS_INFO_API vfisysinfo::sysError sysAuthenticateFile(const std::string & path);

SYS_INFO_API vfisysinfo::sysError sysInstall(const std::string & path);

SYS_INFO_API vfisysinfo::sysError sysBaseInstall();

SYS_INFO_API vfisysinfo::sysError sysFreeResourcesInstall( const std::string & value );


SYS_INFO_API vfisysinfo::sysError sysGetInstallStatus( vfiipc::JSObject & json );

#ifndef DOXYGEN
} // namespace vfisysinstall
#endif
```


-------------------------------

Updated on 2025-06-17 at 11:52:26 +0100
