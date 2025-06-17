---
title: sdi/src/sdi_timer.h

---

# sdi/src/sdi_timer.h



## Namespaces

| Name           |
| -------------- |
| **[sdi](namespacesdi.md)**  |

## Classes

|                | Name           |
| -------------- | -------------- |
| class | **[sdi::Timer](classsdi_1_1_timer.md)**  |




## Source code

```cpp
/****************************************************************************
*  Product:     InFusion
*  Company:     Verifone
*  Author:      GSS R&D Germany
*  Content:     SDI-Server
****************************************************************************/

#ifndef _SDI_TIMER_H_
#define _SDI_TIMER_H_

#include "timestamp.h"

namespace sdi
{
  class Timer
  {
      TimeStamp m_deadline;
      bool m_enabled;

    public:
      Timer() : m_deadline(0, 0), m_enabled(false) {}

      bool isTimedOut();

      long getRemainingTimeInMs();

      void disable()
      {
        m_enabled = false;
      }

      bool isEnabled()
      {
        return m_enabled;
      }

      void set(const TimeStamp &tout);

      void set(unsigned tout_ms);
  };
};
#endif // _SDI_TIMER_H_
```


-------------------------------

Updated on 2025-06-17 at 11:52:25 +0100
