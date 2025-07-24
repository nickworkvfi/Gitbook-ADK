---
hidden: true
title: array.h
---

<a href="array_8h.md">Go to the documentation of this file.</a>

``` cpp
 1 // -*- Mode: C++ -*-
 2 #ifndef ARRAY_H_20200828
 3 #define ARRAY_H_20200828
 4 
 6 #include <string.h>
 7 
 8 #if defined _WIN32 && defined VFI_SDICLIENT_EXPORT
 9 # define DllSpec __declspec(dllexport)
 10 #elif defined __GNUC__ && defined VFI_SDICLIENT_EXPORT
 11 # define DllSpec __attribute__((visibility ("default")))
 12 #else
 13 # define DllSpec
 14 #endif
 15 
 16 namespace vfisdi {
 17 
 19 template<unsigned N> struct Array {
 20  unsigned char v[N];
 22  Array() { memset(v,0,sizeof(v)); }
 24  Array(const unsigned char val[N]) { set(val); }
 26  Array(const char val[N]) { set((unsigned char*)val); }
 28  Array(unsigned long val) { set(val); }
 30  Array(int val) { set(val); } // without this e.g. Array<2>(0) would be ambiguous
 32  void set(const unsigned char val[N]) { memcpy(v,val,sizeof(v)); }
 34  void set(unsigned long val) {
 35  for(unsigned i=0;i<N;i++) v[i]=(unsigned char)(val>>(N-1-i)*8);
 36  }
 38  void clear() {
 39  memset(v,0,sizeof(v));
 40  }
 42  unsigned size() const { return N; }
 44  unsigned char &operator[](unsigned idx) { return v[idx]; }
 46  const unsigned char &operator[](unsigned idx) const { return v[idx]; }
 47 };
 48 
 55 template<unsigned NBITS, typename ITYPE=unsigned> struct BitMask: private Array<(NBITS+7)/8> {
 56 
 57  typedef Array<(NBITS+7)/8> Parent;
 58 
 60  class BitAccess {
 61  friend struct BitMask;
 62  unsigned char &byteref;
 63  unsigned char bitmask;
 64  //BitAccess(const BitAccess &o);
 65  BitAccess(unsigned char &byteref_, unsigned char bitmask_) :byteref(byteref_),bitmask(bitmask_) {}
 66  public:
 68  void operator=(const BitAccess &o) { if(bool(o)) byteref|=bitmask; else byteref&=~bitmask; }
 70  operator bool() const { return (byteref & bitmask)!=0; }
 72  void operator=(bool b) { if(b) byteref|=bitmask; else byteref&=~bitmask; }
 73  };
 74 
 76  BitMask() { memset(Parent::v,0,sizeof(Parent::v)); }
 77 
 79  unsigned size() const { return NBITS; }
 80 
 82  BitAccess operator[](ITYPE idx) { return BitAccess(Parent::v[(idx>>3)],1<<(idx&7));}
 83 
 85  bool operator[](ITYPE idx) const { return (Parent::v[(idx>>3)]&(1<<(idx&7)))!=0;}
 86 
 91  void set(ITYPE *bits, unsigned size) {
 92  for(unsigned i=0;i<size;i++,bits++) Parent::v[(*bits>>3)]|=(1<<(*bits&7));
 93  }
 94 
 99  void reset(ITYPE *bits, unsigned size) {
 100  for(unsigned i=0;i<size;i++,bits++) Parent::v[(*bits>>3)]&=~(1<<(*bits&7));
 101  }
 102 
 104  Parent &array() { return *this; }
 105 
 107  const Parent &array() const { return *this; }
 108 };
 109 
 110 
 111 } // namespace vfisdi
 112 
 113 #undef DllSpec
 114 
 115 #endif
```
