---
hidden: true
title: timestamp.h
---

<a href="guiprt_2src_2html_2timestamp_8h.md">Go to the documentation of this file.</a>

``` cpp
 1 // -*- Mode: C++; -*-
 2 #ifndef TIMESTAMP_H_20141009
 3 #define TIMESTAMP_H_20141009
 4 
 7 #include <time.h>
 8 
 9 #if defined _WIN32 && defined VFI_GUIPRT_SHARED_EXPORT
 10 # define DllSpec __declspec(dllexport)
 11 #elif defined __GNUC__ && defined VFI_GUIPRT_SHARED_EXPORT
 12 # define DllSpec __attribute__((visibility ("default")))
 13 #else
 14 # define DllSpec
 15 #endif
 16 
 17 #if defined(_WIN32) && !defined(_TIMESPEC_DEFINED)
 18 #define _TIMESPEC_DEFINED
 19 struct timespec {
 20  time_t tv_sec;
 21  long tv_nsec;
 22 };
 23 #endif /* _TIMESPEC_DEFINED */
 24 
 25 
 26 namespace vfihtml {
 27 #if 0
 28 }
 29 #endif
 30 
 32 class DllSpec TimeStamp: public timespec
 33 {
 34  public:
 36  static TimeStamp Clock();
 37 
 39  static TimeStamp Monotonic();
 40 
 42  class Unit_MS {};
 43 
 45  class Unit_S {};
 46 
 48  static Unit_MS MS;
 49 
 51  static Unit_S S;
 52 
 54  TimeStamp(time_t sec, long nsec);
 55 
 57  TimeStamp(char sec) { tv_sec=sec; tv_nsec=0; }
 58 
 60  TimeStamp(unsigned char sec) { tv_sec=sec; tv_nsec=0; }
 61 
 63  TimeStamp(short sec) { tv_sec=sec; tv_nsec=0; }
 64 
 66  TimeStamp(unsigned short sec) { tv_sec=sec; tv_nsec=0; }
 67 
 69  TimeStamp(int sec) { tv_sec=sec; tv_nsec=0; }
 70 
 72  TimeStamp(unsigned sec) { tv_sec=sec; tv_nsec=0; }
 73 
 75  TimeStamp(long sec=0) { tv_sec=sec; tv_nsec=0; }
 76 
 78  TimeStamp(unsigned long sec) { tv_sec=sec; tv_nsec=0; }
 79 
 81  TimeStamp(float t);
 82 
 84  TimeStamp(double t);
 85 
 87  TimeStamp &operator=(time_t sec) { tv_sec=sec; tv_nsec=0; return *this;}
 88 
 90  TimeStamp &operator=(double t);
 91 
 92  TimeStamp &operator+=(const TimeStamp &o);
 93  TimeStamp &operator-=(const TimeStamp &o);
 94 
 96  double get() const { return tv_sec+tv_nsec/1000000000.0; }
 97 
 99  void set(double t) { operator=(t); }
 100 
 102  time_t s() const { return tv_sec; }
 103 
 105  long ms() const { return tv_sec*1000+tv_nsec/1000000; }
 106 
 108  void normalize();
 109 
 111  void clear() { tv_sec=0; tv_nsec=0; }
 112 };
 113 
 114 
 116 DllSpec TimeStamp operator+(const TimeStamp &a, const TimeStamp &b);
 117 
 119 DllSpec TimeStamp operator-(const TimeStamp &a, const TimeStamp &b);
 120 
 122 inline bool operator==(const TimeStamp &a, const TimeStamp &b) { return a.tv_sec==b.tv_sec && a.tv_nsec==b.tv_nsec; }
 123 
 125 inline bool operator!=(const TimeStamp &a, const TimeStamp &b) { return a.tv_sec!=b.tv_sec && a.tv_nsec!=b.tv_nsec; }
 126 
 128 inline bool operator<(const TimeStamp &a, const TimeStamp &b) { return a.tv_sec<b.tv_sec || (a.tv_sec==b.tv_sec && a.tv_nsec<b.tv_nsec); }
 129 
 131 inline bool operator<=(const TimeStamp &a, const TimeStamp &b) { return a.tv_sec<b.tv_sec || (a.tv_sec==b.tv_sec && a.tv_nsec<=b.tv_nsec); }
 132 
 134 inline bool operator>(const TimeStamp &a, const TimeStamp &b) { return a.tv_sec>b.tv_sec || (a.tv_sec==b.tv_sec && a.tv_nsec>b.tv_nsec); }
 135 
 137 inline bool operator>=(const TimeStamp &a, const TimeStamp &b) { return a.tv_sec>b.tv_sec || (a.tv_sec==b.tv_sec && a.tv_nsec>=b.tv_nsec); }
 138 
 140 inline TimeStamp operator*(int t, TimeStamp::Unit_MS) {
 141  return TimeStamp(t/1000,t%1000*1000000);
 142 }
 143 
 145 inline TimeStamp operator*(int t, TimeStamp::Unit_S) {
 146  return TimeStamp(t,0);
 147 }
 148 
 149 
 150 } // namespace
 151 
 152 #undef DllSpec
 153 
 154 #endif
```
