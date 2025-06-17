---
title: sdi/src/hexutil.cpp

---

# sdi/src/hexutil.cpp



## Namespaces

| Name           |
| -------------- |
| **[sdi](namespacesdi.md)**  |
| **[csd](namespacecsd.md)**  |




## Source code

```cpp
#include "hexutil.h"

using namespace std;
using namespace csd;

namespace sdi
{

  static const char conv[] = "0123456789ABCDEF";

  int hextobin(unsigned char *dst, const unsigned char *src, int srclen)
  {
    int i;
    int success = 1;

    if (!dst || !src || srclen < 2)
    {
      return 0;
    }

    if (srclen & 1)
    {
      return 0;  /* length is odd */
    }

    for (i = 0; 2 * i < srclen; i++)
    {
      unsigned char c1 = src[2 * i], c2 = src[2 * i + 1];

      if (c1 >= '0' && c1 <= '9')
      {
        c1 -= '0';
      }
      else if (c1 >= 'A' && c1 <= 'F')
      {
        c1 -= 'A' - 10;
      }
      else if (c1 >= 'a' && c1 <= 'f')
      {
        c1 -= 'a' - 10;
      }
      else
      {
        c1 = 0;
        success = 0;
      }

      if (c2 >= '0' && c2 <= '9')
      {
        c2 -= '0';
      }
      else if (c2 >= 'A' && c2 <= 'F')
      {
        c2 -= 'A' - 10;
      }
      else if (c2 >= 'a' && c2 <= 'f')
      {
        c2 -= 'a' - 10;
      }
      else
      {
        c2 = 0;
        success = 0;
      }

      dst[i] = c1 * 16 + c2;
    }

    return success;
  }

  int hextobin(csd::csd_data &dst, const unsigned char *src, int srclen)
  {
    if (!src || srclen < 2)
    {
      return 0;
    }

    if (srclen & 1)
    {
      return 0;  /* length is odd */
    }

    if (dst.size() < (unsigned)srclen / 2)
    {
      dst.resize(srclen / 2);  // allow src point to buffer of dst
    }

    int r = hextobin(&dst[0], src, srclen);

    if (dst.size() > (unsigned)srclen / 2)
    {
      dst.resize(srclen / 2);
    }

    return r;
  }

  void bintohex(unsigned char *dst, const unsigned char *src, int srclen)
  {
    int i;

    for (i = srclen - 1; i >= 0; i--)
    {
      unsigned char c = src[i];
      dst[2 * i] = conv[c >> 4];
      dst[2 * i + 1] = conv[c & 0xF];
    }
  }

  void bintohexstring(char *dst, const unsigned char *src, int srclen)
  {
    bintohex((unsigned char *)dst, src, srclen);
    dst[2 * srclen] = 0;
  }

  void bintohexstring(string &dst, const unsigned char *src, int srclen)
  {
    dst.resize(srclen * 2);
    int i;

    for (i = srclen - 1; i >= 0; i--)
    {
      unsigned char c = src[i];
      dst[2 * i] = conv[c >> 4];
      dst[2 * i + 1] = conv[c & 0xF];
    }
  }

  void bintohexstring(csd_string &dst, const unsigned char *src, int srclen)
  {
    dst.resize(srclen * 2);
    int i;

    for (i = srclen - 1; i >= 0; i--)
    {
      unsigned char c = src[i];
      dst[2 * i] = conv[c >> 4];
      dst[2 * i + 1] = conv[c & 0xF];
    }
  }

  void bintotrack2(unsigned char *dst, const unsigned char *src, int srclen)
  {
    int i;

    for (i = srclen - 1; i >= 0; i--)
    {
      unsigned char c = src[i];
      dst[2 * i] = (c >> 4) + '0';
      dst[2 * i + 1] = (c & 0xf) + '0';
    }
  }

  void bintotrack2string(csd_string &dst, const unsigned char *src, int srclen)
  {
    dst.resize(srclen * 2);
    int i;

    for (i = srclen - 1; i >= 0; i--)
    {
      unsigned char c = src[i];
      dst[2 * i] = (c >> 4) + '0';
      dst[2 * i + 1] = (c & 0xf) + '0';
    }
  }

  int track2tobin(unsigned char *dst, const unsigned char *src, int srclen)
  {
    int i;
    int success = 1;

    if (!dst || !src || srclen < 2)
    {
      return 0;
    }

    if (srclen & 1)
    {
      return 0;  /* length is odd */
    }

    for (i = 0; 2 * i < srclen; i++)
    {
      unsigned char c1 = src[2 * i], c2 = src[2 * i + 1];

      if (c1 >= '0' && c1 <= '?')
      {
        c1 -= '0';
      }
      else
      {
        c1 = 0;
        success = 0;
      }

      if (c2 >= '0' && c2 <= '?')
      {
        c2 -= '0';
      }
      else
      {
        c2 = 0;
        success = 0;
      }

      dst[i] = c1 * 16 + c2;
    }

    return success;
  }

  int track2tobin(csd::csd_data &dst, const unsigned char *src, int srclen)
  {
    if (!src || srclen < 2)
    {
      return 0;
    }

    if (srclen & 1)
    {
      return 0;  /* length is odd */
    }

    if (dst.size() < (unsigned)srclen / 2)
    {
      dst.resize(srclen / 2);  // allow src point to buffer of dst
    }

    int r = track2tobin(&dst[0], src, srclen);

    if (dst.size() > (unsigned)srclen / 2)
    {
      dst.resize(srclen / 2);
    }

    return r;
  }

} // namespace

#ifdef HEXTEST
#include <stdio.h>
int main()
{
  int i;
  char foo[] = "0123456789ABCDEf";
  printf("%s\n", foo);
  hextobin(foo, foo, 16);

  for (i = 0; i < 8; i++)
  {
    printf("%02X", (unsigned char)foo[i]);
  }

  bintohex(foo, foo, 8);
  foo[16] = 0;
  printf("\n%s\n", foo);

}
#endif
```


-------------------------------

Updated on 2025-06-17 at 11:52:25 +0100
