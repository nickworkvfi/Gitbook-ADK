---
title: guiprt/src/html/timestamp.h

---

# guiprt/src/html/timestamp.h

 [More...](#detailed-description)

## Namespaces

| Name           |
| -------------- |
| **[vfihtml](namespacevfihtml.md)**  |

## Classes

|                | Name           |
| -------------- | -------------- |
| class | **[vfihtml::TimeStamp](classvfihtml_1_1_time_stamp.md)**  |
| class | **[vfihtml::TimeStamp::Unit_MS](classvfihtml_1_1_time_stamp_1_1_unit___m_s.md)**  |
| class | **[vfihtml::TimeStamp::Unit_S](classvfihtml_1_1_time_stamp_1_1_unit___s.md)**  |

## Defines

|                | Name           |
| -------------- | -------------- |
|  | **[DllSpec](guiprt_2src_2html_2timestamp_8h.md#define-dllspec)**  |

## Detailed Description


time utilities 




## Macros Documentation

### define DllSpec

```cpp
#define DllSpec 
```


## Source code

```cpp
// -*- Mode: C++; -*-
#ifndef TIMESTAMP_H_20141009
#define TIMESTAMP_H_20141009

#include <time.h>

#if defined _WIN32 && defined VFI_GUIPRT_SHARED_EXPORT
#  define DllSpec __declspec(dllexport)
#elif defined __GNUC__ && defined VFI_GUIPRT_SHARED_EXPORT
#  define DllSpec  __attribute__((visibility ("default")))
#else
#  define DllSpec
#endif

#if defined(_WIN32) && !defined(_TIMESPEC_DEFINED)
#define _TIMESPEC_DEFINED
struct timespec {
        time_t tv_sec;
        long tv_nsec;
};
#endif /* _TIMESPEC_DEFINED */


namespace vfihtml {
#if 0
}
#endif

class DllSpec TimeStamp: public timespec
{
 public:
   static TimeStamp Clock();

   static TimeStamp Monotonic();

   class Unit_MS {};

   class Unit_S {};

   static Unit_MS MS;

   static Unit_S S;

   TimeStamp(time_t sec, long nsec);

   TimeStamp(char sec)           { tv_sec=sec; tv_nsec=0; }

   TimeStamp(unsigned char sec)  { tv_sec=sec; tv_nsec=0; }

   TimeStamp(short sec)          { tv_sec=sec; tv_nsec=0; }

   TimeStamp(unsigned short sec) { tv_sec=sec; tv_nsec=0; }

   TimeStamp(int sec)            { tv_sec=sec; tv_nsec=0; }

   TimeStamp(unsigned sec)       { tv_sec=sec; tv_nsec=0; }

   TimeStamp(long sec=0)         { tv_sec=sec; tv_nsec=0; }

   TimeStamp(unsigned long sec)  { tv_sec=sec; tv_nsec=0; }

   TimeStamp(float t);

   TimeStamp(double t);

   TimeStamp &operator=(time_t sec) { tv_sec=sec; tv_nsec=0; return *this;}

   TimeStamp &operator=(double t);

   TimeStamp &operator+=(const TimeStamp &o);
   TimeStamp &operator-=(const TimeStamp &o);

   double get() const { return tv_sec+tv_nsec/1000000000.0; }

   void set(double t) { operator=(t); }

   time_t s() const { return tv_sec; }

   long ms() const { return tv_sec*1000+tv_nsec/1000000; }

   void normalize();

   void clear() { tv_sec=0; tv_nsec=0; }
};


DllSpec TimeStamp operator+(const TimeStamp &a, const TimeStamp &b);

DllSpec TimeStamp operator-(const TimeStamp &a, const TimeStamp &b);

inline bool operator==(const TimeStamp &a, const TimeStamp &b) { return a.tv_sec==b.tv_sec && a.tv_nsec==b.tv_nsec; }

inline bool operator!=(const TimeStamp &a, const TimeStamp &b) { return a.tv_sec!=b.tv_sec && a.tv_nsec!=b.tv_nsec; }

inline bool operator<(const TimeStamp &a, const TimeStamp &b)  { return a.tv_sec<b.tv_sec || (a.tv_sec==b.tv_sec && a.tv_nsec<b.tv_nsec); }

inline bool operator<=(const TimeStamp &a, const TimeStamp &b) { return a.tv_sec<b.tv_sec || (a.tv_sec==b.tv_sec && a.tv_nsec<=b.tv_nsec); }

inline bool operator>(const TimeStamp &a, const TimeStamp &b)  { return a.tv_sec>b.tv_sec || (a.tv_sec==b.tv_sec && a.tv_nsec>b.tv_nsec); }

inline bool operator>=(const TimeStamp &a, const TimeStamp &b) { return a.tv_sec>b.tv_sec || (a.tv_sec==b.tv_sec && a.tv_nsec>=b.tv_nsec); }

inline TimeStamp operator*(int t, TimeStamp::Unit_MS) {
   return TimeStamp(t/1000,t%1000*1000000);
}

inline TimeStamp operator*(int t, TimeStamp::Unit_S) {
   return TimeStamp(t,0);
}


} // namespace

#undef DllSpec

#endif
```


-------------------------------

Updated on 2025-06-17 at 11:52:25 +0100
