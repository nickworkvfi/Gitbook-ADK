---
hidden: true
title: md5.h
---

<a href="md5_8h.md">Go to the documentation of this file.</a>

``` cpp
 1 /* MD5.H - header file for MD5C.C
 2  */
 3 
 4 /* Copyright (C) 1991-2, RSA Data Security, Inc. Created 1991. All
 5 rights reserved.
 6 
 7 License to copy and use this software is granted provided that it
 8 is identified as the "RSA Data Security, Inc. MD5 Message-Digest
 9 Algorithm" in all material mentioning or referencing this software
 10 or this function.
 11 
 12 License is also granted to make and use derivative works provided
 13 that such works are identified as "derived from the RSA Data
 14 Security, Inc. MD5 Message-Digest Algorithm" in all material
 15 mentioning or referencing the derived work.
 16 
 17 RSA Data Security, Inc. makes no representations concerning either
 18 the merchantability of this software or the suitability of this
 19 software for any particular purpose. It is provided "as is"
 20 without express or implied warranty of any kind.
 21 These notices must be retained in any copies of any part of this
 22 documentation and/or software.
 23  */
 24 
 25 #include <stdint.h>
 26 
 27 namespace sdi
 28 {
 29 
 33  typedef struct
 34  {
 35  uint32_t state[4];
 36  uint32_t count[2];
 37  unsigned char buffer[64];
 38  } MD5_CTX;
 39 
 40  /* RFC 1321 */
 41  void MD5Init(MD5_CTX *);
 42  void MD5Update(MD5_CTX *, const unsigned char *, unsigned int);
 43  void MD5Final(unsigned char [16], MD5_CTX *);
 44 
 45 } // namespace sdi
```
