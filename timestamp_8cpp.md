---
title: sdi/src/timestamp.cpp

---

# sdi/src/timestamp.cpp



## Namespaces

| Name           |
| -------------- |
| **[sdi](namespacesdi.md)**  |




## Source code

```cpp
#include "timestamp.h"
#include <math.h>

namespace sdi
{
#if 0
}
#endif

TimeStamp::Unit_MS TimeStamp::MS;
TimeStamp::Unit_S TimeStamp::S;

TimeStamp TimeStamp::Clock()
{
  TimeStamp r;
  clock_gettime(CLOCK_REALTIME, &r);
  return r;
}

TimeStamp TimeStamp::Monotonic()
{
  TimeStamp r;
  clock_gettime(CLOCK_MONOTONIC, &r);
  return r;
}

void TimeStamp::normalize()
{
  if (tv_nsec >= 1000000000)
  {
    tv_sec += tv_nsec / 1000000000;
    tv_nsec %= 1000000000;
  }

  if (tv_nsec < 0)
  {
    tv_sec += tv_nsec / 1000000000;
    tv_nsec %= 1000000000;

    if (tv_nsec < 0)
    {
      tv_sec--;
      tv_nsec += 1000000000;
    }
  }
}

TimeStamp::TimeStamp(time_t sec, long nsec)
{
  tv_sec = sec;
  tv_nsec = nsec;
  normalize();
}

TimeStamp::TimeStamp(double t)
{
  double sec;
  tv_nsec = 1000000000 * modf(t, &sec);
  tv_sec = sec;
}

TimeStamp::TimeStamp(float t)
{
  double sec;
  tv_nsec = 1000000000 * modf(t, &sec);
  tv_sec = sec;
}

TimeStamp &TimeStamp::operator=(double t)
{
  double sec;
  tv_nsec = 1000000000 * modf(t, &sec);
  tv_sec = sec;
  return *this;
}

TimeStamp &TimeStamp::operator+=(const TimeStamp &o)
{
  tv_sec += o.tv_sec;
  tv_nsec += o.tv_nsec;
  normalize();
  return *this;
}

TimeStamp &TimeStamp::operator-=(const TimeStamp &o)
{
  tv_sec -= o.tv_sec;
  tv_nsec -= o.tv_nsec;
  normalize();
  return *this;
}

TimeStamp operator+(const TimeStamp &a, const TimeStamp &b)
{
  TimeStamp r(a.tv_sec + b.tv_sec, a.tv_nsec + b.tv_nsec);
  r.normalize();
  return r;
}

TimeStamp operator-(const TimeStamp &a, const TimeStamp &b)
{
  TimeStamp r(a.tv_sec - b.tv_sec, a.tv_nsec - b.tv_nsec);
  r.normalize();
  return r;
}

} // namespace
```


-------------------------------

Updated on 2025-06-17 at 11:52:26 +0100
