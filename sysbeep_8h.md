---
title: sys/export/sysinfo/sysbeep.h

---

# sys/export/sysinfo/sysbeep.h



## Namespaces

| Name           |
| -------------- |
| **[vfisysinfo](namespacevfisysinfo.md)**  |




## Source code

```cpp
#pragma once

#include "dllspec.h"

#ifndef DOXYGEN

namespace vfisysinfo {
#endif

SYS_INFO_API int sysBeepNormal(int volume);

SYS_INFO_API int sysBeepError(int volume);

SYS_INFO_API int sysPlaySound(int note, int duration, int volume);

SYS_INFO_API int sysPlaySoundFreq(int frequency, int duration, int volume);

#ifndef DOXYGEN
} // namespace vfisysinfo
#endif
```


-------------------------------

Updated on 2025-06-17 at 11:52:26 +0100
