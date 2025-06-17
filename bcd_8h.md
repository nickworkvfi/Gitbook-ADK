---
title: sdiapi/src/sdiapi/bcd.h

---

# sdiapi/src/sdiapi/bcd.h



## Namespaces

| Name           |
| -------------- |
| **[vfisdi](namespacevfisdi.md)**  |

## Classes

|                | Name           |
| -------------- | -------------- |
| class | **[vfisdi::BCD](classvfisdi_1_1_b_c_d.md)**  |

## Defines

|                | Name           |
| -------------- | -------------- |
|  | **[DllSpec](bcd_8h.md#define-dllspec)**  |




## Macros Documentation

### define DllSpec

```cpp
#define DllSpec 
```


## Source code

```cpp
// -*- Mode: C++ -*-
#ifndef BCD_H_20200406
#define BCD_H_20200406

#include <stdint.h>
#include <string.h>

#if defined _WIN32 && defined VFI_SDICLIENT_EXPORT
#   define DllSpec __declspec(dllexport)
#elif defined __GNUC__ && defined VFI_SDICLIENT_EXPORT
#  define DllSpec  __attribute__((visibility ("default")))
#else
#  define DllSpec
#endif

namespace vfisdi {

DllSpec bool bcdset(unsigned char *buffer, unsigned size, int64_t value);
DllSpec int64_t bcdget(const unsigned char *buffer, unsigned size);

template<int N> class BCD {
 public:
   unsigned char v[N];

   BCD() { memset(v,0,N); }
   BCD(const unsigned char val[N]) { set(val); }
   BCD(int64_t val) { set(val); }
   BCD(int val) { set(val); } // without this e.g. BCD<2>(0) would be ambiguous: int64_t vs. unsigned char *

   void set(const unsigned char val[N]) { memcpy(v,val,N); }
   bool set(int64_t val) { return bcdset(v,N,val); }

   int64_t get() const { return bcdget(v,N); }
   
   unsigned size() const { return N; }
};

} // namespace vfisdi

#undef DllSpec

#endif
```


-------------------------------

Updated on 2025-06-17 at 11:52:26 +0100
