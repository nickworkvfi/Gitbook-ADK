---
hidden: true
title: bcd.h
---

<a href="bcd_8h.md">Go to the documentation of this file.</a>

``` cpp
 1 // -*- Mode: C++ -*-
 2 #ifndef BCD_H_20200406
 3 #define BCD_H_20200406
 4 
 7 #include <stdint.h>
 8 #include <string.h>
 9 
 10 #if defined _WIN32 && defined VFI_SDICLIENT_EXPORT
 11 # define DllSpec __declspec(dllexport)
 12 #elif defined __GNUC__ && defined VFI_SDICLIENT_EXPORT
 13 # define DllSpec __attribute__((visibility ("default")))
 14 #else
 15 # define DllSpec
 16 #endif
 17 
 18 namespace vfisdi {
 19 
 20 DllSpec bool bcdset(unsigned char *buffer, unsigned size, int64_t value);
 21 DllSpec int64_t bcdget(const unsigned char *buffer, unsigned size);
 22 
 24 template<int N> class BCD {
 25  public:
 27  unsigned char v[N];
 28 
 30  BCD() { memset(v,0,N); }
 32  BCD(const unsigned char val[N]) { set(val); }
 34  BCD(int64_t val) { set(val); }
 36  BCD(int val) { set(val); } // without this e.g. BCD<2>(0) would be ambiguous: int64_t vs. unsigned char *
 37 
 39  void set(const unsigned char val[N]) { memcpy(v,val,N); }
 41  bool set(int64_t val) { return bcdset(v,N,val); }
 42 
 44  int64_t get() const { return bcdget(v,N); }
 45 
 47  unsigned size() const { return N; }
 48 };
 49 
 50 } // namespace vfisdi
 51 
 52 #undef DllSpec
 53 
 54 #endif
```
