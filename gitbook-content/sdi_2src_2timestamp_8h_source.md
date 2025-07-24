---
hidden: true
title: timestamp.h
---

<a href="sdi_2src_2timestamp_8h.md">Go to the documentation of this file.</a>

``` cpp
 1 // -*- Mode: C++; -*-
 2 #ifndef _SDI_TIMESTAMP_H_
 3 #define _SDI_TIMESTAMP_H_
 4 
 7 #include <time.h>
 8 
 9 namespace sdi
 10 {
 11 #if 0
 12 }
 13 #endif
 14 
 16 class TimeStamp: public timespec
 17 {
 18  public:
 20  static TimeStamp Clock();
 21 
 23  static TimeStamp Monotonic();
 24 
 26  class Unit_MS {};
 27 
 29  class Unit_S {};
 30 
 32  static Unit_MS MS;
 33 
 35  static Unit_S S;
 36 
 38  TimeStamp(time_t sec, long nsec);
 39 
 41  TimeStamp(char sec)
 42  {
 43  tv_sec = sec;
 44  tv_nsec = 0;
 45  }
 46 
 48  TimeStamp(unsigned char sec)
 49  {
 50  tv_sec = sec;
 51  tv_nsec = 0;
 52  }
 53 
 55  TimeStamp(short sec)
 56  {
 57  tv_sec = sec;
 58  tv_nsec = 0;
 59  }
 60 
 62  TimeStamp(unsigned short sec)
 63  {
 64  tv_sec = sec;
 65  tv_nsec = 0;
 66  }
 67 
 69  TimeStamp(int sec)
 70  {
 71  tv_sec = sec;
 72  tv_nsec = 0;
 73  }
 74 
 76  TimeStamp(unsigned sec)
 77  {
 78  tv_sec = sec;
 79  tv_nsec = 0;
 80  }
 81 
 83  TimeStamp(long sec = 0)
 84  {
 85  tv_sec = sec;
 86  tv_nsec = 0;
 87  }
 88 
 90  TimeStamp(unsigned long sec)
 91  {
 92  tv_sec = sec;
 93  tv_nsec = 0;
 94  }
 95 
 97  TimeStamp(float t);
 98 
 100  TimeStamp(double t);
 101 
 103  TimeStamp &operator=(time_t sec)
 104  {
 105  tv_sec = sec;
 106  tv_nsec = 0;
 107  return *this;
 108  }
 109 
 111  TimeStamp &operator=(double t);
 112 
 113  TimeStamp &operator+=(const TimeStamp &o);
 114  TimeStamp &operator-=(const TimeStamp &o);
 115 
 117  double get() const
 118  {
 119  return tv_sec + tv_nsec / 1000000000.0;
 120  }
 121 
 123  void set(double t)
 124  {
 125  operator=(t);
 126  }
 127 
 129  time_t s() const
 130  {
 131  return tv_sec;
 132  }
 133 
 135  long ms() const
 136  {
 137  return tv_sec * 1000 + tv_nsec / 1000000;
 138  }
 139 
 141  void normalize();
 142 
 144  void clear()
 145  {
 146  tv_sec = 0;
 147  tv_nsec = 0;
 148  }
 149 };
 150 
 151 
 153 TimeStamp operator+(const TimeStamp &a, const TimeStamp &b);
 154 
 156 TimeStamp operator-(const TimeStamp &a, const TimeStamp &b);
 157 
 159 inline bool operator==(const TimeStamp &a, const TimeStamp &b)
 160 {
 161  return a.tv_sec == b.tv_sec && a.tv_nsec == b.tv_nsec;
 162 }
 163 
 165 inline bool operator!=(const TimeStamp &a, const TimeStamp &b)
 166 {
 167  return a.tv_sec != b.tv_sec && a.tv_nsec != b.tv_nsec;
 168 }
 169 
 171 inline bool operator<(const TimeStamp &a, const TimeStamp &b)
 172 {
 173  return a.tv_sec < b.tv_sec || (a.tv_sec == b.tv_sec && a.tv_nsec < b.tv_nsec);
 174 }
 175 
 177 inline bool operator<=(const TimeStamp &a, const TimeStamp &b)
 178 {
 179  return a.tv_sec < b.tv_sec || (a.tv_sec == b.tv_sec && a.tv_nsec <= b.tv_nsec);
 180 }
 181 
 183 inline bool operator>(const TimeStamp &a, const TimeStamp &b)
 184 {
 185  return a.tv_sec > b.tv_sec || (a.tv_sec == b.tv_sec && a.tv_nsec > b.tv_nsec);
 186 }
 187 
 189 inline bool operator>=(const TimeStamp &a, const TimeStamp &b)
 190 {
 191  return a.tv_sec > b.tv_sec || (a.tv_sec == b.tv_sec && a.tv_nsec >= b.tv_nsec);
 192 }
 193 
 195 inline TimeStamp operator*(int t, TimeStamp::Unit_MS)
 196 {
 197  return TimeStamp(t / 1000, t % 1000 * 1000000);
 198 }
 199 
 201 inline TimeStamp operator*(int t, TimeStamp::Unit_S)
 202 {
 203  return TimeStamp(t, 0);
 204 }
 205 
 206 
 207 } // namespace
 208 
 209 #endif
```
