---
hidden: true
title: sdikeyservice.h
---

<a href="sdikeyservice_8h.md">Go to the documentation of this file.</a>

``` cpp
 1 #ifndef _SDI_KEYSERVICE_H_
 2 #define _SDI_KEYSERVICE_H_
 3 
 4 #include <string>
 5 #include <vector>
 6 
 10 std::string keyservice_get_libname();
 14 std::string keyservice_get_build_date();
 18 std::string keyservice_get_version();
 22 void keyservice_start();
 26 void keyservice_stop();
 27 
 39 unsigned short keyservice_read_certificate(const std::string &refname,
 40  std::vector<unsigned char> &certificate);
 41 
 42 #endif
```
