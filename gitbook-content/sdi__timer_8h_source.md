---
hidden: true
title: sdi_timer.h
---

<a href="sdi__timer_8h.md">Go to the documentation of this file.</a>

``` cpp
 1 /****************************************************************************
 2 * Product: InFusion
 3 * Company: Verifone
 4 * Author: GSS R&D Germany
 5 * Content: SDI-Server
 6 ****************************************************************************/
 7 
 8 #ifndef _SDI_TIMER_H_
 9 #define _SDI_TIMER_H_
 10 
 11 #include "timestamp.h"
 12 
 13 namespace sdi
 14 {
 15  class Timer
 16  {
 17  TimeStamp m_deadline;
 18  bool m_enabled;
 19 
 20  public:
 22  Timer() : m_deadline(0, 0), m_enabled(false) {}
 23 
 26  bool isTimedOut();
 27 
 30  long getRemainingTimeInMs();
 31 
 33  void disable()
 34  {
 35  m_enabled = false;
 36  }
 37 
 40  bool isEnabled()
 41  {
 42  return m_enabled;
 43  }
 44 
 47  void set(const TimeStamp &tout);
 48 
 51  void set(unsigned tout_ms);
 52  };
 53 };
 54 #endif // _SDI_TIMER_H_
```
