---
title: sdi/src/timestamp.h

---

# sdi/src/timestamp.h

 [More...](#detailed-description)

## Namespaces

| Name           |
| -------------- |
| **[sdi](namespacesdi.md)**  |

## Classes

|                | Name           |
| -------------- | -------------- |
| class | **[sdi::TimeStamp](classsdi_1_1_time_stamp.md)**  |
| class | **[sdi::TimeStamp::Unit_MS](classsdi_1_1_time_stamp_1_1_unit___m_s.md)**  |
| class | **[sdi::TimeStamp::Unit_S](classsdi_1_1_time_stamp_1_1_unit___s.md)**  |

## Detailed Description


time utilities 




## Source code

```cpp
// -*- Mode: C++; -*-
#ifndef _SDI_TIMESTAMP_H_
#define _SDI_TIMESTAMP_H_

#include <time.h>

namespace sdi
{
#if 0
}
#endif

class TimeStamp: public timespec
{
  public:
    static TimeStamp Clock();

    static TimeStamp Monotonic();

    class Unit_MS {};

    class Unit_S {};

    static Unit_MS MS;

    static Unit_S S;

    TimeStamp(time_t sec, long nsec);

    TimeStamp(char sec)
    {
      tv_sec = sec;
      tv_nsec = 0;
    }

    TimeStamp(unsigned char sec)
    {
      tv_sec = sec;
      tv_nsec = 0;
    }

    TimeStamp(short sec)
    {
      tv_sec = sec;
      tv_nsec = 0;
    }

    TimeStamp(unsigned short sec)
    {
      tv_sec = sec;
      tv_nsec = 0;
    }

    TimeStamp(int sec)
    {
      tv_sec = sec;
      tv_nsec = 0;
    }

    TimeStamp(unsigned sec)
    {
      tv_sec = sec;
      tv_nsec = 0;
    }

    TimeStamp(long sec = 0)
    {
      tv_sec = sec;
      tv_nsec = 0;
    }

    TimeStamp(unsigned long sec)
    {
      tv_sec = sec;
      tv_nsec = 0;
    }

    TimeStamp(float t);

    TimeStamp(double t);

    TimeStamp &operator=(time_t sec)
    {
      tv_sec = sec;
      tv_nsec = 0;
      return *this;
    }

    TimeStamp &operator=(double t);

    TimeStamp &operator+=(const TimeStamp &o);
    TimeStamp &operator-=(const TimeStamp &o);

    double get() const
    {
      return tv_sec + tv_nsec / 1000000000.0;
    }

    void set(double t)
    {
      operator=(t);
    }

    time_t s() const
    {
      return tv_sec;
    }

    long ms() const
    {
      return tv_sec * 1000 + tv_nsec / 1000000;
    }

    void normalize();

    void clear()
    {
      tv_sec = 0;
      tv_nsec = 0;
    }
};


TimeStamp operator+(const TimeStamp &a, const TimeStamp &b);

TimeStamp operator-(const TimeStamp &a, const TimeStamp &b);

inline bool operator==(const TimeStamp &a, const TimeStamp &b)
{
  return a.tv_sec == b.tv_sec && a.tv_nsec == b.tv_nsec;
}

inline bool operator!=(const TimeStamp &a, const TimeStamp &b)
{
  return a.tv_sec != b.tv_sec && a.tv_nsec != b.tv_nsec;
}

inline bool operator<(const TimeStamp &a, const TimeStamp &b)
{
  return a.tv_sec < b.tv_sec || (a.tv_sec == b.tv_sec && a.tv_nsec < b.tv_nsec);
}

inline bool operator<=(const TimeStamp &a, const TimeStamp &b)
{
  return a.tv_sec < b.tv_sec || (a.tv_sec == b.tv_sec && a.tv_nsec <= b.tv_nsec);
}

inline bool operator>(const TimeStamp &a, const TimeStamp &b)
{
  return a.tv_sec > b.tv_sec || (a.tv_sec == b.tv_sec && a.tv_nsec > b.tv_nsec);
}

inline bool operator>=(const TimeStamp &a, const TimeStamp &b)
{
  return a.tv_sec > b.tv_sec || (a.tv_sec == b.tv_sec && a.tv_nsec >= b.tv_nsec);
}

inline TimeStamp operator*(int t, TimeStamp::Unit_MS)
{
  return TimeStamp(t / 1000, t % 1000 * 1000000);
}

inline TimeStamp operator*(int t, TimeStamp::Unit_S)
{
  return TimeStamp(t, 0);
}


} // namespace

#endif
```


-------------------------------

Updated on 2025-06-17 at 11:52:26 +0100
