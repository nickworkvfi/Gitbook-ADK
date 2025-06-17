---
title: sdi/src/sdi_timer.cpp

---

# sdi/src/sdi_timer.cpp



## Namespaces

| Name           |
| -------------- |
| **[sdi](namespacesdi.md)**  |




## Source code

```cpp
#include "sdi_timer.h"

namespace sdi
{
  long Timer::getRemainingTimeInMs()
  {
    TimeStamp now = TimeStamp::Monotonic();

    if (now >= m_deadline)
    {
      return 0;
    }

    return (m_deadline - now).ms();
  }

  bool Timer::isTimedOut()
  {
    return (TimeStamp::Monotonic() >= m_deadline);
  }

  void Timer::set(const TimeStamp &tout)
  {
    m_enabled = true;
    m_deadline = TimeStamp::Monotonic() + tout;
  }

  void Timer::set(unsigned tout_ms)
  {
    TimeStamp tout = tout_ms * TimeStamp::MS;
    set(tout);
  }
} // namespace sdi
```


-------------------------------

Updated on 2025-06-17 at 11:52:25 +0100
