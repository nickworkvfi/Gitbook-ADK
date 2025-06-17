---
title: sdiapi/src/sdiapi/array.h

---

# sdiapi/src/sdiapi/array.h



## Namespaces

| Name           |
| -------------- |
| **[vfisdi](namespacevfisdi.md)**  |

## Classes

|                | Name           |
| -------------- | -------------- |
| struct | **[vfisdi::Array](structvfisdi_1_1_array.md)**  |
| struct | **[vfisdi::BitMask](structvfisdi_1_1_bit_mask.md)**  |
| class | **[vfisdi::BitMask::BitAccess](classvfisdi_1_1_bit_mask_1_1_bit_access.md)**  |

## Defines

|                | Name           |
| -------------- | -------------- |
|  | **[DllSpec](array_8h.md#define-dllspec)**  |




## Macros Documentation

### define DllSpec

```cpp
#define DllSpec 
```


## Source code

```cpp
// -*- Mode: C++ -*-
#ifndef ARRAY_H_20200828
#define ARRAY_H_20200828

#include <string.h>

#if defined _WIN32 && defined VFI_SDICLIENT_EXPORT
#   define DllSpec __declspec(dllexport)
#elif defined __GNUC__ && defined VFI_SDICLIENT_EXPORT
#  define DllSpec  __attribute__((visibility ("default")))
#else
#  define DllSpec
#endif

namespace vfisdi {

template<unsigned N> struct Array {
   unsigned char v[N]; 
   Array() { memset(v,0,sizeof(v)); }
   Array(const unsigned char val[N]) { set(val); }
   Array(const char val[N]) { set((unsigned char*)val); }
   Array(unsigned long val) { set(val); }
   Array(int val) { set(val); } // without this e.g. Array<2>(0) would be ambiguous
   void set(const unsigned char val[N]) { memcpy(v,val,sizeof(v)); }
   void set(unsigned long val) {
      for(unsigned i=0;i<N;i++) v[i]=(unsigned char)(val>>(N-1-i)*8);
   }
   void clear() {
      memset(v,0,sizeof(v));
   }
   unsigned size() const { return N; }
   unsigned char &operator[](unsigned idx) { return v[idx]; }
   const unsigned char &operator[](unsigned idx) const { return v[idx]; }
};

template<unsigned NBITS, typename ITYPE=unsigned> struct BitMask: private Array<(NBITS+7)/8> {

   typedef Array<(NBITS+7)/8> Parent;

   class BitAccess {
      friend struct BitMask;
      unsigned char &byteref;
      unsigned char bitmask;
      //BitAccess(const BitAccess &o);
      BitAccess(unsigned char &byteref_, unsigned char bitmask_) :byteref(byteref_),bitmask(bitmask_) {}
    public:
      void operator=(const BitAccess &o) { if(bool(o)) byteref|=bitmask; else byteref&=~bitmask; }
      operator bool() const { return (byteref & bitmask)!=0; }
      void operator=(bool b) { if(b) byteref|=bitmask; else byteref&=~bitmask; }
   };

   BitMask() { memset(Parent::v,0,sizeof(Parent::v)); }

   unsigned size() const { return NBITS; }

   BitAccess operator[](ITYPE idx) { return BitAccess(Parent::v[(idx>>3)],1<<(idx&7));}

   bool operator[](ITYPE idx) const { return (Parent::v[(idx>>3)]&(1<<(idx&7)))!=0;}

   void set(ITYPE *bits, unsigned size) {
      for(unsigned i=0;i<size;i++,bits++) Parent::v[(*bits>>3)]|=(1<<(*bits&7));
   }

   void reset(ITYPE *bits, unsigned size) {
      for(unsigned i=0;i<size;i++,bits++) Parent::v[(*bits>>3)]&=~(1<<(*bits&7));
   }

   Parent &array() { return *this; }

   const Parent &array() const { return *this; }
};

 
} // namespace vfisdi

#undef DllSpec

#endif
```


-------------------------------

Updated on 2025-06-17 at 11:52:26 +0100
