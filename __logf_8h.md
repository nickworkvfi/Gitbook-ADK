---
title: sdi/src/_logf.h

---

# sdi/src/_logf.h



## Attributes

|                | Name           |
| -------------- | -------------- |
| LibLogHandle | **[logHandle](__logf_8h.md#variable-loghandle)**  |

## Defines

|                | Name           |
| -------------- | -------------- |
|  | **[SDI_LOG_CHANNEL](__logf_8h.md#define-sdi-log-channel)**  |
|  | **[_LOGF_TRACE](__logf_8h.md#define--logf-trace)**(format, ...)  |
|  | **[_LOGF_INFO](__logf_8h.md#define--logf-info)**(format, ...)  |
|  | **[_LOGF_WARN](__logf_8h.md#define--logf-warn)**(format, ...)  |
|  | **[_LOGF_ERROR](__logf_8h.md#define--logf-error)**(format, ...)  |
|  | **[_LOGAPI_HEXDUMP_TRACE](__logf_8h.md#define--logapi-hexdump-trace)**(title, data, size)  |
|  | **[_LOGAPI_HEXDUMP_INFO](__logf_8h.md#define--logapi-hexdump-info)**(title, data, size)  |
|  | **[_LOGAPI_HEXDUMP_RAW_INFO](__logf_8h.md#define--logapi-hexdump-raw-info)**(data, size)  |
|  | **[_LOG_LEVEL_ENABLED](__logf_8h.md#define--log-level-enabled)**(level)  |



## Attributes Documentation

### variable logHandle

```cpp
LibLogHandle logHandle;
```



## Macros Documentation

### define SDI_LOG_CHANNEL

```cpp
#define SDI_LOG_CHANNEL "SDI"
```


### define _LOGF_TRACE

```cpp
#define _LOGF_TRACE(
    format,
    ...
)
LOGF_TRACE(logHandle, format, ## __VA_ARGS__)
```


### define _LOGF_INFO

```cpp
#define _LOGF_INFO(
    format,
    ...
)
LOGF_INFO(logHandle, format, ## __VA_ARGS__)
```


### define _LOGF_WARN

```cpp
#define _LOGF_WARN(
    format,
    ...
)
LOGF_WARN(logHandle, format, ## __VA_ARGS__)
```


### define _LOGF_ERROR

```cpp
#define _LOGF_ERROR(
    format,
    ...
)
LOGF_ERROR(logHandle, format, ## __VA_ARGS__)
```


### define _LOGAPI_HEXDUMP_TRACE

```cpp
#define _LOGAPI_HEXDUMP_TRACE(
    title,
    data,
    size
)
LOGAPI_HEXDUMP2(logHandle, LOGAPI_TRACE, title, data, size)
```


### define _LOGAPI_HEXDUMP_INFO

```cpp
#define _LOGAPI_HEXDUMP_INFO(
    title,
    data,
    size
)
LOGAPI_HEXDUMP2(logHandle, LOGAPI_INFO, title, data, size)
```


### define _LOGAPI_HEXDUMP_RAW_INFO

```cpp
#define _LOGAPI_HEXDUMP_RAW_INFO(
    data,
    size
)
LOGAPI_HEXDUMP_RAW2(logHandle, LOGAPI_INFO, data, size)
```


### define _LOG_LEVEL_ENABLED

```cpp
#define _LOG_LEVEL_ENABLED(
    level
)
LogAPI_LevelEnough2(logHandle,level)
```


## Source code

```cpp
/****************************************************************************
*  Product:     InFusion
*  Company:     Verifone
*  Author:      GSS R&D Germany
*  Content:     SDI-Server
****************************************************************************/

#ifndef __LOGF_H_
#define __LOGF_H_

#include "log/liblog2.h"
#ifndef _STM32
  #include "log/syslogcmd.h"
#endif

extern LibLogHandle logHandle;

#define SDI_LOG_CHANNEL "SDI"

#ifdef DIRECT_COLOR_LOG
  #include <cstdio>

  #define COLOR_EMERG  "\x1b[31;1;47m"  //bold red on white
  #define COLOR_ALERT  "\x1b[37;1;41m"  //bold white on red
  #define COLOR_CRIT   "\x1b[37;41m"    //white on red
  #define COLOR_ERROR  "\x1b[31;40m"    //red on black
  #define COLOR_WARN   "\x1b[33;40m"    //yellow
  #define COLOR_NOTICE "\x1b[32;1;40m"  //bold green
  #define COLOR_INFO   "\x1b[32;40m"    //green
  #define COLOR_TRACE  "\x1b[37;40m"    //white

  #define COLOR_RESET   "\x1b[0m"

  #define _LOGF_TRACE(format, ...) printf("TRACE: " COLOR_TRACE format COLOR_RESET "\n", ## __VA_ARGS__)
  #define _LOGF_INFO(format, ...)  printf("INFO:  " COLOR_INFO  format COLOR_RESET "\n", ## __VA_ARGS__)
  #define _LOGF_WARN(format, ...)  printf("WARN:  " COLOR_WARN  format COLOR_RESET "\n", ## __VA_ARGS__)
  #define _LOGF_ERROR(format, ...) printf("ERROR: " COLOR_ERROR format COLOR_RESET "\n", ## __VA_ARGS__)
  #define _LOG_LEVEL_ENABLED(level) 1

#else
  #define _LOGF_TRACE(format, ...) LOGF_TRACE(logHandle, format, ## __VA_ARGS__)
  #define _LOGF_INFO(format, ...) LOGF_INFO(logHandle, format, ## __VA_ARGS__)
  #define _LOGF_WARN(format, ...) LOGF_WARN(logHandle, format, ## __VA_ARGS__)
  #define _LOGF_ERROR(format, ...) LOGF_ERROR(logHandle, format, ## __VA_ARGS__)
#endif
#define _LOGAPI_HEXDUMP_TRACE(title, data, size) LOGAPI_HEXDUMP2(logHandle, LOGAPI_TRACE, title, data, size)
#define _LOGAPI_HEXDUMP_INFO(title, data, size) LOGAPI_HEXDUMP2(logHandle, LOGAPI_INFO, title, data, size)
#define _LOGAPI_HEXDUMP_RAW_INFO(data, size) LOGAPI_HEXDUMP_RAW2(logHandle, LOGAPI_INFO, data, size)

// return 1, if the logging level is enabled, else 0
#define _LOG_LEVEL_ENABLED(level) LogAPI_LevelEnough2(logHandle,level)

#endif // __LOGF_H_
```


-------------------------------

Updated on 2025-06-17 at 11:52:25 +0100
