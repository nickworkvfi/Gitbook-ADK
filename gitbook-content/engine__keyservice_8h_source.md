---
hidden: true
title: engine_keyservice.h
---

<a href="engine__keyservice_8h.md">Go to the documentation of this file.</a>

``` cpp
 1 #ifndef ENGINE_KEYSERVICE_H_20200206
 2 #define ENGINE_KEYSERVICE_H_20200206
 3 
 4 #include <openssl/engine.h>
 5 
 29 #define KS_CMD_READ_CERT (ENGINE_CMD_BASE+0x10)
 30 
 33 #define KS_CMD_SET_ERROR_CB (ENGINE_CMD_BASE+0x11)
 34 
 37 #define KS_CMD_SET_DEBUG_CB (ENGINE_CMD_BASE+0x12)
 38 
 40 struct KS_IOBuffer {
 41  unsigned maxsize;
 42  unsigned size;
 43  unsigned char buffer[0];
 44 };
 45 
 54 typedef void (*ks_trace_callback)(const char *file, unsigned line, const char *str);
 55 
 56 #endif
```
