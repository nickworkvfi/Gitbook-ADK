---
hidden: true
title: \_logf.h
---

<a href="__logf_8h.md">Go to the documentation of this file.</a>

``` cpp
 1 /****************************************************************************
 2 * Product: InFusion
 3 * Company: Verifone
 4 * Author: GSS R&D Germany
 5 * Content: SDI-Server
 6 ****************************************************************************/
 7 
 8 #ifndef __LOGF_H_
 9 #define __LOGF_H_
 10 
 11 #include "log/liblog2.h"
 12 #ifndef _STM32
 13  #include "log/syslogcmd.h"
 14 #endif
 15 
 16 extern LibLogHandle logHandle;
 17 
 18 #define SDI_LOG_CHANNEL "SDI"
 19 
 20 #ifdef DIRECT_COLOR_LOG
 21  #include <cstdio>
 22 
 23  #define COLOR_EMERG "\x1b[31;1;47m" //bold red on white
 24  #define COLOR_ALERT "\x1b[37;1;41m" //bold white on red
 25  #define COLOR_CRIT "\x1b[37;41m" //white on red
 26  #define COLOR_ERROR "\x1b[31;40m" //red on black
 27  #define COLOR_WARN "\x1b[33;40m" //yellow
 28  #define COLOR_NOTICE "\x1b[32;1;40m" //bold green
 29  #define COLOR_INFO "\x1b[32;40m" //green
 30  #define COLOR_TRACE "\x1b[37;40m" //white
 31 
 32  #define COLOR_RESET "\x1b[0m"
 33 
 34  #define _LOGF_TRACE(format, ...) printf("TRACE: " COLOR_TRACE format COLOR_RESET "\n", ## __VA_ARGS__)
 35  #define _LOGF_INFO(format, ...) printf("INFO: " COLOR_INFO format COLOR_RESET "\n", ## __VA_ARGS__)
 36  #define _LOGF_WARN(format, ...) printf("WARN: " COLOR_WARN format COLOR_RESET "\n", ## __VA_ARGS__)
 37  #define _LOGF_ERROR(format, ...) printf("ERROR: " COLOR_ERROR format COLOR_RESET "\n", ## __VA_ARGS__)
 38  #define _LOG_LEVEL_ENABLED(level) 1
 39 
 40 #else
 41  #define _LOGF_TRACE(format, ...) LOGF_TRACE(logHandle, format, ## __VA_ARGS__)
 42  #define _LOGF_INFO(format, ...) LOGF_INFO(logHandle, format, ## __VA_ARGS__)
 43  #define _LOGF_WARN(format, ...) LOGF_WARN(logHandle, format, ## __VA_ARGS__)
 44  #define _LOGF_ERROR(format, ...) LOGF_ERROR(logHandle, format, ## __VA_ARGS__)
 45 #endif
 46 #define _LOGAPI_HEXDUMP_TRACE(title, data, size) LOGAPI_HEXDUMP2(logHandle, LOGAPI_TRACE, title, data, size)
 47 #define _LOGAPI_HEXDUMP_INFO(title, data, size) LOGAPI_HEXDUMP2(logHandle, LOGAPI_INFO, title, data, size)
 48 #define _LOGAPI_HEXDUMP_RAW_INFO(data, size) LOGAPI_HEXDUMP_RAW2(logHandle, LOGAPI_INFO, data, size)
 49 
 50 // return 1, if the logging level is enabled, else 0
 51 #define _LOG_LEVEL_ENABLED(level) LogAPI_LevelEnough2(logHandle,level)
 52 
 53 #endif // __LOGF_H_
```
