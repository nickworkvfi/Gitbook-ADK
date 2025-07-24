---
hidden: true
title: hexutil.h
---

<a href="sdi_2src_2hexutil_8h.md">Go to the documentation of this file.</a>

``` cpp
 1 #ifndef SDI_HEXUTIL_H
 2 #define SDI_HEXUTIL_H
 3 
 4 #include <string>
 5 #include "csd.h"
 6 
 7 namespace sdi
 8 {
 9 
 19  int hextobin(unsigned char *dst, const unsigned char *src, int srclen);
 20 
 27  int hextobin(csd::csd_data &dst, const unsigned char *src, int srclen);
 28 
 37  void bintohex(unsigned char *dst, const unsigned char *src, int srclen);
 38 
 45  void bintohexstring(char *dst, const unsigned char *src, int srclen);
 46 
 52  void bintohexstring(std::string &dst, const unsigned char *src, int srclen);
 53 
 59  void bintohexstring(csd::csd_string &dst, const unsigned char *src, int srclen);
 60 
 68  void bintotrack2(unsigned char *dst, const unsigned char *src, int srclen);
 69 
 75  void bintotrack2string(csd::csd_string &dst, const unsigned char *src, int srclen);
 76 
 84  int track2tobin(unsigned char *dst, const unsigned char *src, int srclen);
 85 
 91  int track2tobin(csd::csd_data &dst, const unsigned char *src, int srclen);
 92 
 93 } // namespace
 94 
 95 #endif
```
