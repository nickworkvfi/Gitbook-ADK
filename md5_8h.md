---
title: sdi/src/md5.h

---

# sdi/src/md5.h



## Namespaces

| Name           |
| -------------- |
| **[sdi](namespacesdi.md)**  |

## Classes

|                | Name           |
| -------------- | -------------- |
| struct | **[sdi::MD5_CTX](structsdi_1_1_m_d5___c_t_x.md)**  |




## Source code

```cpp
/* MD5.H - header file for MD5C.C
 */

/* Copyright (C) 1991-2, RSA Data Security, Inc. Created 1991. All
rights reserved.

License to copy and use this software is granted provided that it
is identified as the "RSA Data Security, Inc. MD5 Message-Digest
Algorithm" in all material mentioning or referencing this software
or this function.

License is also granted to make and use derivative works provided
that such works are identified as "derived from the RSA Data
Security, Inc. MD5 Message-Digest Algorithm" in all material
mentioning or referencing the derived work.

RSA Data Security, Inc. makes no representations concerning either
the merchantability of this software or the suitability of this
software for any particular purpose. It is provided "as is"
without express or implied warranty of any kind.
These notices must be retained in any copies of any part of this
documentation and/or software.
 */

#include <stdint.h>

namespace sdi
{

  typedef struct
  {
    uint32_t state[4];                                   
    uint32_t count[2];        
    unsigned char buffer[64];                         
  } MD5_CTX;

  /* RFC 1321 */
  void MD5Init(MD5_CTX *);
  void MD5Update(MD5_CTX *, const unsigned char *, unsigned int);
  void MD5Final(unsigned char [16], MD5_CTX *);

} // namespace sdi
```


-------------------------------

Updated on 2025-06-17 at 11:52:25 +0100
