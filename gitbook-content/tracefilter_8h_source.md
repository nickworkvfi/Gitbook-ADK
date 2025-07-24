---
hidden: true
title: tracefilter.h
---

<a href="tracefilter_8h.md">Go to the documentation of this file.</a>

``` cpp
 1 #ifndef TRACEFILTER_H_20230811
 2 #define TRACEFILTER_H_20230811
 3 
 4 #include <string>
 5 
 17 void filterCommand(const unsigned char *cmd, unsigned cmdSize, std::string &out);
 18 
 30 void filterResponse(const unsigned char *cmd, unsigned cmdSize, const unsigned char *rsp, unsigned rspSize, std::string &out);
 31 
 32 #endif
 33 
```
