---
title: sec/src/api/export/sec/seclogging.h

---

# sec/src/api/export/sec/seclogging.h



## Functions

|                | Name           |
| -------------- | -------------- |
| [DllSpecSEC](seclogging_8h.md#define-dllspecsec) void | **[SECINTERNAL_LOG_EMERG](seclogging_8h.md#function-secinternal-log-emerg)**(const char * file, unsigned int line, const char * fmt, ... ) |
| [DllSpecSEC](seclogging_8h.md#define-dllspecsec) void [DllSpecSEC](seclogging_8h.md#define-dllspecsec) void | **[SECINTERNAL_LOG_ALERT](seclogging_8h.md#function-secinternal-log-alert)**(const char * file, unsigned int line, const char * fmt, ... ) |
| [DllSpecSEC](seclogging_8h.md#define-dllspecsec) void [DllSpecSEC](seclogging_8h.md#define-dllspecsec) void [DllSpecSEC](seclogging_8h.md#define-dllspecsec) void | **[SECINTERNAL_LOG_CRIT](seclogging_8h.md#function-secinternal-log-crit)**(const char * file, unsigned int line, const char * fmt, ... ) |
| [DllSpecSEC](seclogging_8h.md#define-dllspecsec) void [DllSpecSEC](seclogging_8h.md#define-dllspecsec) void [DllSpecSEC](seclogging_8h.md#define-dllspecsec) void [DllSpecSEC](seclogging_8h.md#define-dllspecsec) void | **[SECINTERNAL_LOG_ERROR](seclogging_8h.md#function-secinternal-log-error)**(const char * file, unsigned int line, const char * fmt, ... ) |
| [DllSpecSEC](seclogging_8h.md#define-dllspecsec) void [DllSpecSEC](seclogging_8h.md#define-dllspecsec) void [DllSpecSEC](seclogging_8h.md#define-dllspecsec) void [DllSpecSEC](seclogging_8h.md#define-dllspecsec) void [DllSpecSEC](seclogging_8h.md#define-dllspecsec) void | **[SECINTERNAL_LOG_WARN](seclogging_8h.md#function-secinternal-log-warn)**(const char * file, unsigned int line, const char * fmt, ... ) |
| [DllSpecSEC](seclogging_8h.md#define-dllspecsec) void [DllSpecSEC](seclogging_8h.md#define-dllspecsec) void [DllSpecSEC](seclogging_8h.md#define-dllspecsec) void [DllSpecSEC](seclogging_8h.md#define-dllspecsec) void [DllSpecSEC](seclogging_8h.md#define-dllspecsec) void [DllSpecSEC](seclogging_8h.md#define-dllspecsec) void | **[SECINTERNAL_LOG_NOTICE](seclogging_8h.md#function-secinternal-log-notice)**(const char * file, unsigned int line, const char * fmt, ... ) |
| [DllSpecSEC](seclogging_8h.md#define-dllspecsec) void [DllSpecSEC](seclogging_8h.md#define-dllspecsec) void [DllSpecSEC](seclogging_8h.md#define-dllspecsec) void [DllSpecSEC](seclogging_8h.md#define-dllspecsec) void [DllSpecSEC](seclogging_8h.md#define-dllspecsec) void [DllSpecSEC](seclogging_8h.md#define-dllspecsec) void [DllSpecSEC](seclogging_8h.md#define-dllspecsec) void | **[SECINTERNAL_LOG_INFO](seclogging_8h.md#function-secinternal-log-info)**(const char * file, unsigned int line, const char * fmt, ... ) |
| [DllSpecSEC](seclogging_8h.md#define-dllspecsec) void [DllSpecSEC](seclogging_8h.md#define-dllspecsec) void [DllSpecSEC](seclogging_8h.md#define-dllspecsec) void [DllSpecSEC](seclogging_8h.md#define-dllspecsec) void [DllSpecSEC](seclogging_8h.md#define-dllspecsec) void [DllSpecSEC](seclogging_8h.md#define-dllspecsec) void [DllSpecSEC](seclogging_8h.md#define-dllspecsec) void [DllSpecSEC](seclogging_8h.md#define-dllspecsec) void | **[SECINTERNAL_LOG_TRACE](seclogging_8h.md#function-secinternal-log-trace)**(const char * file, unsigned int line, const char * fmt, ... ) |
| [DllSpecSEC](seclogging_8h.md#define-dllspecsec) void [DllSpecSEC](seclogging_8h.md#define-dllspecsec) void [DllSpecSEC](seclogging_8h.md#define-dllspecsec) void [DllSpecSEC](seclogging_8h.md#define-dllspecsec) void [DllSpecSEC](seclogging_8h.md#define-dllspecsec) void [DllSpecSEC](seclogging_8h.md#define-dllspecsec) void [DllSpecSEC](seclogging_8h.md#define-dllspecsec) void [DllSpecSEC](seclogging_8h.md#define-dllspecsec) void [DllSpecSEC](seclogging_8h.md#define-dllspecsec) void | **[SECINTERNAL_LOG_HEXDUMP_INFO](seclogging_8h.md#function-secinternal-log-hexdump-info)**(const char * title, const void * data, unsigned int size) |
| [DllSpecSEC](seclogging_8h.md#define-dllspecsec) void | **[SECINTERNAL_LOG_HEXDUMP_NOTICE](seclogging_8h.md#function-secinternal-log-hexdump-notice)**(const char * title, const void * data, unsigned int size) |
| [DllSpecSEC](seclogging_8h.md#define-dllspecsec) void | **[SECINTERNAL_LOG_HEXDUMP_TRACE](seclogging_8h.md#function-secinternal-log-hexdump-trace)**(const char * title, const void * data, unsigned int size) |
| [DllSpecSEC](seclogging_8h.md#define-dllspecsec) void | **[SECINTERNAL_PRINT_CALLSTACK](seclogging_8h.md#function-secinternal-print-callstack)**() |
| [DllSpecSEC](seclogging_8h.md#define-dllspecsec)[DllSpecSEC](seclogging_8h.md#define-dllspecsec) void | **[SEC_LOG_INIT](seclogging_8h.md#function-sec-log-init)**(const char * name =[LOGNAME_SEC](seclogging_8h.md#define-logname-sec)) |
| [DllSpecSEC](seclogging_8h.md#define-dllspecsec) void | **[SEC_LOG_DEINIT](seclogging_8h.md#function-sec-log-deinit)**() |

## Defines

|                | Name           |
| -------------- | -------------- |
|  | **[DllSpecSEC](seclogging_8h.md#define-dllspecsec)**  |
|  | **[LOGNAME_SEC](seclogging_8h.md#define-logname-sec)**  |
|  | **[SEC_LOG_EMERG](seclogging_8h.md#define-sec-log-emerg)**(...)  |
|  | **[SEC_LOG_ALERT](seclogging_8h.md#define-sec-log-alert)**(...)  |
|  | **[SEC_LOG_CRIT](seclogging_8h.md#define-sec-log-crit)**(...)  |
|  | **[SEC_LOG_ERROR](seclogging_8h.md#define-sec-log-error)**(...)  |
|  | **[SEC_LOG_WARN](seclogging_8h.md#define-sec-log-warn)**(...)  |
|  | **[SEC_LOG_NOTICE](seclogging_8h.md#define-sec-log-notice)**(...)  |
|  | **[SEC_LOG_INFO](seclogging_8h.md#define-sec-log-info)**(...)  |
|  | **[SEC_LOG_TRACE](seclogging_8h.md#define-sec-log-trace)**(...)  |
|  | **[SEC_LOG_HEXDUMP_TRACE](seclogging_8h.md#define-sec-log-hexdump-trace)**(a, b, c)  |
|  | **[SEC_LOG_PRINT_CALLSTACK](seclogging_8h.md#define-sec-log-print-callstack)**  |
|  | **[SEC_DBG_ERROR](seclogging_8h.md#define-sec-dbg-error)**(...)  |
|  | **[SEC_DBG_WARN](seclogging_8h.md#define-sec-dbg-warn)**(...)  |
|  | **[SEC_DBG_INFO](seclogging_8h.md#define-sec-dbg-info)**(...)  |
|  | **[SEC_DBG_NOTICE](seclogging_8h.md#define-sec-dbg-notice)**(...)  |
|  | **[SEC_DBG_TRACE](seclogging_8h.md#define-sec-dbg-trace)**(...)  |
|  | **[SEC_DBG_HEXDUMP_INFO](seclogging_8h.md#define-sec-dbg-hexdump-info)**(a, b, c)  |
|  | **[SEC_DBG_HEXDUMP_NOTICE](seclogging_8h.md#define-sec-dbg-hexdump-notice)**(a, b, c)  |
|  | **[SEC_DBG_HEXDUMP_TRACE](seclogging_8h.md#define-sec-dbg-hexdump-trace)**(a, b, c)  |


## Functions Documentation

### function SECINTERNAL_LOG_EMERG

```cpp
DllSpecSEC void SECINTERNAL_LOG_EMERG(
    const char * file,
    unsigned int line,
    const char * fmt,
    ... 
)
```


### function SECINTERNAL_LOG_ALERT

```cpp
DllSpecSEC void DllSpecSEC void SECINTERNAL_LOG_ALERT(
    const char * file,
    unsigned int line,
    const char * fmt,
    ... 
)
```


### function SECINTERNAL_LOG_CRIT

```cpp
DllSpecSEC void DllSpecSEC void DllSpecSEC void SECINTERNAL_LOG_CRIT(
    const char * file,
    unsigned int line,
    const char * fmt,
    ... 
)
```


### function SECINTERNAL_LOG_ERROR

```cpp
DllSpecSEC void DllSpecSEC void DllSpecSEC void DllSpecSEC void SECINTERNAL_LOG_ERROR(
    const char * file,
    unsigned int line,
    const char * fmt,
    ... 
)
```


### function SECINTERNAL_LOG_WARN

```cpp
DllSpecSEC void DllSpecSEC void DllSpecSEC void DllSpecSEC void DllSpecSEC void SECINTERNAL_LOG_WARN(
    const char * file,
    unsigned int line,
    const char * fmt,
    ... 
)
```


### function SECINTERNAL_LOG_NOTICE

```cpp
DllSpecSEC void DllSpecSEC void DllSpecSEC void DllSpecSEC void DllSpecSEC void DllSpecSEC void SECINTERNAL_LOG_NOTICE(
    const char * file,
    unsigned int line,
    const char * fmt,
    ... 
)
```


### function SECINTERNAL_LOG_INFO

```cpp
DllSpecSEC void DllSpecSEC void DllSpecSEC void DllSpecSEC void DllSpecSEC void DllSpecSEC void DllSpecSEC void SECINTERNAL_LOG_INFO(
    const char * file,
    unsigned int line,
    const char * fmt,
    ... 
)
```


### function SECINTERNAL_LOG_TRACE

```cpp
DllSpecSEC void DllSpecSEC void DllSpecSEC void DllSpecSEC void DllSpecSEC void DllSpecSEC void DllSpecSEC void DllSpecSEC void SECINTERNAL_LOG_TRACE(
    const char * file,
    unsigned int line,
    const char * fmt,
    ... 
)
```


### function SECINTERNAL_LOG_HEXDUMP_INFO

```cpp
DllSpecSEC void DllSpecSEC void DllSpecSEC void DllSpecSEC void DllSpecSEC void DllSpecSEC void DllSpecSEC void DllSpecSEC void DllSpecSEC void SECINTERNAL_LOG_HEXDUMP_INFO(
    const char * title,
    const void * data,
    unsigned int size
)
```


### function SECINTERNAL_LOG_HEXDUMP_NOTICE

```cpp
DllSpecSEC void SECINTERNAL_LOG_HEXDUMP_NOTICE(
    const char * title,
    const void * data,
    unsigned int size
)
```


### function SECINTERNAL_LOG_HEXDUMP_TRACE

```cpp
DllSpecSEC void SECINTERNAL_LOG_HEXDUMP_TRACE(
    const char * title,
    const void * data,
    unsigned int size
)
```


### function SECINTERNAL_PRINT_CALLSTACK

```cpp
DllSpecSEC void SECINTERNAL_PRINT_CALLSTACK()
```


### function SEC_LOG_INIT

```cpp
DllSpecSECDllSpecSEC void SEC_LOG_INIT(
    const char * name =LOGNAME_SEC
)
```


### function SEC_LOG_DEINIT

```cpp
DllSpecSEC void SEC_LOG_DEINIT()
```




## Macros Documentation

### define DllSpecSEC

```cpp
#define DllSpecSEC 
```


### define LOGNAME_SEC

```cpp
#define LOGNAME_SEC "SEC"
```


### define SEC_LOG_EMERG

```cpp
#define SEC_LOG_EMERG(
    ...
)
SECINTERNAL_LOG_EMERG(__FILE__, __LINE__, __VA_ARGS__)
```


### define SEC_LOG_ALERT

```cpp
#define SEC_LOG_ALERT(
    ...
)
SECINTERNAL_LOG_ALERT(__FILE__, __LINE__, __VA_ARGS__)
```


### define SEC_LOG_CRIT

```cpp
#define SEC_LOG_CRIT(
    ...
)
SECINTERNAL_LOG_CRIT(__FILE__, __LINE__, __VA_ARGS__)
```


### define SEC_LOG_ERROR

```cpp
#define SEC_LOG_ERROR(
    ...
)
SECINTERNAL_LOG_ERROR(__FILE__, __LINE__, __VA_ARGS__)
```


### define SEC_LOG_WARN

```cpp
#define SEC_LOG_WARN(
    ...
)
SECINTERNAL_LOG_WARN(__FILE__, __LINE__, __VA_ARGS__)
```


### define SEC_LOG_NOTICE

```cpp
#define SEC_LOG_NOTICE(
    ...
)
SECINTERNAL_LOG_NOTICE(__FILE__, __LINE__, __VA_ARGS__)
```


### define SEC_LOG_INFO

```cpp
#define SEC_LOG_INFO(
    ...
)
SECINTERNAL_LOG_INFO(__FILE__, __LINE__, __VA_ARGS__)
```


### define SEC_LOG_TRACE

```cpp
#define SEC_LOG_TRACE(
    ...
)
SECINTERNAL_LOG_TRACE(__FILE__, __LINE__, __VA_ARGS__)
```


### define SEC_LOG_HEXDUMP_TRACE

```cpp
#define SEC_LOG_HEXDUMP_TRACE(
    a,
    b,
    c
)
SECINTERNAL_LOG_HEXDUMP_TRACE(a, b, c)
```


### define SEC_LOG_PRINT_CALLSTACK

```cpp
#define SEC_LOG_PRINT_CALLSTACK SECINTERNAL_PRINT_CALLSTACK
```


### define SEC_DBG_ERROR

```cpp
#define SEC_DBG_ERROR(
    ...
)

```


### define SEC_DBG_WARN

```cpp
#define SEC_DBG_WARN(
    ...
)

```


### define SEC_DBG_INFO

```cpp
#define SEC_DBG_INFO(
    ...
)

```


### define SEC_DBG_NOTICE

```cpp
#define SEC_DBG_NOTICE(
    ...
)

```


### define SEC_DBG_TRACE

```cpp
#define SEC_DBG_TRACE(
    ...
)

```


### define SEC_DBG_HEXDUMP_INFO

```cpp
#define SEC_DBG_HEXDUMP_INFO(
    a,
    b,
    c
)

```


### define SEC_DBG_HEXDUMP_NOTICE

```cpp
#define SEC_DBG_HEXDUMP_NOTICE(
    a,
    b,
    c
)

```


### define SEC_DBG_HEXDUMP_TRACE

```cpp
#define SEC_DBG_HEXDUMP_TRACE(
    a,
    b,
    c
)

```


## Source code

```cpp
#ifndef _SECLOGGING_H_
#define _SECLOGGING_H_

#include <string>

#if (defined _VRXEVO || defined _WIN32)
#  if defined VFI_SEC_SHARED_EXPORT
#    define DllSpecSEC __declspec(dllexport)
#  elif defined VFI_SEC_STATIC_EXPORT || defined _WIN32  // dllimport not required for Windows
#    define DllSpecSEC
#  else
#    define DllSpecSEC __declspec(dllimport)
#  endif
#elif defined __GNUC__ && defined VFI_SEC_SHARED_EXPORT
#  define DllSpecSEC  __attribute__((visibility ("default")))
#else
#  define DllSpecSEC
#endif

#define LOGNAME_SEC "SEC"

/*  API to be used only in this header file for macros */
DllSpecSEC void SECINTERNAL_LOG_EMERG(const char *file, unsigned int line, const char *fmt, ...) __attribute__((format(printf, 3, 4)));
DllSpecSEC void SECINTERNAL_LOG_ALERT(const char *file, unsigned int line, const char *fmt, ...) __attribute__((format(printf, 3, 4)));
DllSpecSEC void SECINTERNAL_LOG_CRIT(const char *file, unsigned int line, const char *fmt, ...) __attribute__((format(printf, 3, 4)));
DllSpecSEC void SECINTERNAL_LOG_ERROR(const char *file, unsigned int line, const char *fmt, ...) __attribute__((format(printf, 3, 4)));
DllSpecSEC void SECINTERNAL_LOG_WARN(const char *file, unsigned int line, const char *fmt, ...) __attribute__((format(printf, 3, 4)));
DllSpecSEC void SECINTERNAL_LOG_NOTICE(const char *file, unsigned int line, const char *fmt, ...) __attribute__((format(printf, 3, 4)));
DllSpecSEC void SECINTERNAL_LOG_INFO(const char *file, unsigned int line, const char *fmt, ...) __attribute__((format(printf, 3, 4)));
DllSpecSEC void SECINTERNAL_LOG_TRACE(const char *file, unsigned int line, const char *fmt, ...) __attribute__((format(printf, 3, 4)));
DllSpecSEC void SECINTERNAL_LOG_HEXDUMP_INFO(const char *title, const void *data, unsigned int size);
DllSpecSEC void SECINTERNAL_LOG_HEXDUMP_NOTICE(const char *title, const void *data, unsigned int size);
DllSpecSEC void SECINTERNAL_LOG_HEXDUMP_TRACE(const char *title, const void *data, unsigned int size);
DllSpecSEC void SECINTERNAL_PRINT_CALLSTACK();

DllSpecSEC /*  API to be used in ADK SEC source files */
DllSpecSEC void SEC_LOG_INIT(const char *name=LOGNAME_SEC);
DllSpecSEC void SEC_LOG_DEINIT();

#define SEC_LOG_EMERG(...) SECINTERNAL_LOG_EMERG(__FILE__, __LINE__, __VA_ARGS__)
#define SEC_LOG_ALERT(...) SECINTERNAL_LOG_ALERT(__FILE__, __LINE__, __VA_ARGS__)
#define SEC_LOG_CRIT(...) SECINTERNAL_LOG_CRIT(__FILE__, __LINE__, __VA_ARGS__)
#define SEC_LOG_ERROR(...) SECINTERNAL_LOG_ERROR(__FILE__, __LINE__, __VA_ARGS__)
#define SEC_LOG_WARN(...) SECINTERNAL_LOG_WARN(__FILE__, __LINE__, __VA_ARGS__)
#define SEC_LOG_NOTICE(...) SECINTERNAL_LOG_NOTICE(__FILE__, __LINE__, __VA_ARGS__)
#define SEC_LOG_INFO(...) SECINTERNAL_LOG_INFO(__FILE__, __LINE__, __VA_ARGS__)
#define SEC_LOG_TRACE(...) SECINTERNAL_LOG_TRACE(__FILE__, __LINE__, __VA_ARGS__)
#define SEC_LOG_HEXDUMP_TRACE(a, b, c) SECINTERNAL_LOG_HEXDUMP_TRACE(a, b, c)
#define SEC_LOG_PRINT_CALLSTACK  SECINTERNAL_PRINT_CALLSTACK

#ifdef _DEBUG
#define SEC_DBG_ERROR(...) SECINTERNAL_LOG_ERROR(__FILE__, __LINE__, __VA_ARGS__)
#define SEC_DBG_WARN(...) SECINTERNAL_LOG_WARN(__FILE__, __LINE__, __VA_ARGS__)
#define SEC_DBG_INFO(...) SECINTERNAL_LOG_INFO(__FILE__, __LINE__, __VA_ARGS__)
#define SEC_DBG_NOTICE(...) SECINTERNAL_LOG_NOTICE(__FILE__, __LINE__, __VA_ARGS__)
#define SEC_DBG_TRACE(...) SECINTERNAL_LOG_TRACE(__FILE__, __LINE__, __VA_ARGS__)
#define SEC_DBG_HEXDUMP_INFO(a, b, c) SECINTERNAL_LOG_HEXDUMP_INFO(a, b, c)
#define SEC_DBG_HEXDUMP_NOTICE(a, b, c) SECINTERNAL_LOG_HEXDUMP_NOTICE(a, b, c)
#define SEC_DBG_HEXDUMP_TRACE(a, b, c) SECINTERNAL_LOG_HEXDUMP_TRACE(a, b, c)
#else
#define SEC_DBG_ERROR(...)
#define SEC_DBG_WARN(...)
#define SEC_DBG_INFO(...)
#define SEC_DBG_NOTICE(...)
#define SEC_DBG_TRACE(...)
#define SEC_DBG_HEXDUMP_INFO(a, b, c)
#define SEC_DBG_HEXDUMP_NOTICE(a, b, c)
#define SEC_DBG_HEXDUMP_TRACE(a, b, c)
#endif

#undef DllSpecSEC // important to avoid duplicated definitions of DllSpec with other component header files

#endif //_SECLOGGING_H_
```


-------------------------------

Updated on 2025-06-17 at 11:52:26 +0100
