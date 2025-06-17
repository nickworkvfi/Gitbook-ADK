---
title: sdi/src/hexutil.h

---

# sdi/src/hexutil.h



## Namespaces

| Name           |
| -------------- |
| **[sdi](namespacesdi.md)**  |




## Source code

```cpp
#ifndef SDI_HEXUTIL_H
#define SDI_HEXUTIL_H

#include <string>
#include "csd.h"

namespace sdi
{

  int hextobin(unsigned char *dst, const unsigned char *src, int srclen);

  int hextobin(csd::csd_data &dst, const unsigned char *src, int srclen);

  void bintohex(unsigned char *dst, const unsigned char *src, int srclen);

  void bintohexstring(char *dst, const unsigned char *src, int srclen);

  void bintohexstring(std::string &dst, const unsigned char *src, int srclen);

  void bintohexstring(csd::csd_string &dst, const unsigned char *src, int srclen);

  void bintotrack2(unsigned char *dst, const unsigned char *src, int srclen);

  void bintotrack2string(csd::csd_string &dst, const unsigned char *src, int srclen);

  int track2tobin(unsigned char *dst, const unsigned char *src, int srclen);

  int track2tobin(csd::csd_data &dst, const unsigned char *src, int srclen);

} // namespace

#endif
```


-------------------------------

Updated on 2025-06-17 at 11:52:25 +0100
