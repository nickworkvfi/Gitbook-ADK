---
hidden: true
title: seclogging.h
---

<a href="seclogging_8h.md">Go to the documentation of this file.</a>

``` cpp
 1 #ifndef _SECLOGGING_H_
 2 #define _SECLOGGING_H_
 3 
 4 #include <string>
 5 
 6 #if (defined _VRXEVO || defined _WIN32)
 7 # if defined VFI_SEC_SHARED_EXPORT
 8 # define DllSpecSEC __declspec(dllexport)
 9 # elif defined VFI_SEC_STATIC_EXPORT || defined _WIN32 // dllimport not required for Windows
 10 # define DllSpecSEC
 11 # else
 12 # define DllSpecSEC __declspec(dllimport)
 13 # endif
 14 #elif defined __GNUC__ && defined VFI_SEC_SHARED_EXPORT
 15 # define DllSpecSEC __attribute__((visibility ("default")))
 16 #else
 17 # define DllSpecSEC
 18 #endif
 19 
 20 #define LOGNAME_SEC "SEC"
 21 
 22 /* API to be used only in this header file for macros */
 23 DllSpecSEC void SECINTERNAL_LOG_EMERG(const char *file, unsigned int line, const char *fmt, ...) __attribute__((format(printf, 3, 4)));
 24 DllSpecSEC void SECINTERNAL_LOG_ALERT(const char *file, unsigned int line, const char *fmt, ...) __attribute__((format(printf, 3, 4)));
 25 DllSpecSEC void SECINTERNAL_LOG_CRIT(const char *file, unsigned int line, const char *fmt, ...) __attribute__((format(printf, 3, 4)));
 26 DllSpecSEC void SECINTERNAL_LOG_ERROR(const char *file, unsigned int line, const char *fmt, ...) __attribute__((format(printf, 3, 4)));
 27 DllSpecSEC void SECINTERNAL_LOG_WARN(const char *file, unsigned int line, const char *fmt, ...) __attribute__((format(printf, 3, 4)));
 28 DllSpecSEC void SECINTERNAL_LOG_NOTICE(const char *file, unsigned int line, const char *fmt, ...) __attribute__((format(printf, 3, 4)));
 29 DllSpecSEC void SECINTERNAL_LOG_INFO(const char *file, unsigned int line, const char *fmt, ...) __attribute__((format(printf, 3, 4)));
 30 DllSpecSEC void SECINTERNAL_LOG_TRACE(const char *file, unsigned int line, const char *fmt, ...) __attribute__((format(printf, 3, 4)));
 31 DllSpecSEC void SECINTERNAL_LOG_HEXDUMP_INFO(const char *title, const void *data, unsigned int size);
 32 DllSpecSEC void SECINTERNAL_LOG_HEXDUMP_NOTICE(const char *title, const void *data, unsigned int size);
 33 DllSpecSEC void SECINTERNAL_LOG_HEXDUMP_TRACE(const char *title, const void *data, unsigned int size);
 34 DllSpecSEC void SECINTERNAL_PRINT_CALLSTACK();
 35 
 36 DllSpecSEC /* API to be used in ADK SEC source files */
 37 DllSpecSEC void SEC_LOG_INIT(const char *name=LOGNAME_SEC);
 38 DllSpecSEC void SEC_LOG_DEINIT();
 39 
 40 #define SEC_LOG_EMERG(...) SECINTERNAL_LOG_EMERG(__FILE__, __LINE__, __VA_ARGS__)
 41 #define SEC_LOG_ALERT(...) SECINTERNAL_LOG_ALERT(__FILE__, __LINE__, __VA_ARGS__)
 42 #define SEC_LOG_CRIT(...) SECINTERNAL_LOG_CRIT(__FILE__, __LINE__, __VA_ARGS__)
 43 #define SEC_LOG_ERROR(...) SECINTERNAL_LOG_ERROR(__FILE__, __LINE__, __VA_ARGS__)
 44 #define SEC_LOG_WARN(...) SECINTERNAL_LOG_WARN(__FILE__, __LINE__, __VA_ARGS__)
 45 #define SEC_LOG_NOTICE(...) SECINTERNAL_LOG_NOTICE(__FILE__, __LINE__, __VA_ARGS__)
 46 #define SEC_LOG_INFO(...) SECINTERNAL_LOG_INFO(__FILE__, __LINE__, __VA_ARGS__)
 47 #define SEC_LOG_TRACE(...) SECINTERNAL_LOG_TRACE(__FILE__, __LINE__, __VA_ARGS__)
 48 #define SEC_LOG_HEXDUMP_TRACE(a, b, c) SECINTERNAL_LOG_HEXDUMP_TRACE(a, b, c)
 49 #define SEC_LOG_PRINT_CALLSTACK SECINTERNAL_PRINT_CALLSTACK
 50 
 51 #ifdef _DEBUG
 52 #define SEC_DBG_ERROR(...) SECINTERNAL_LOG_ERROR(__FILE__, __LINE__, __VA_ARGS__)
 53 #define SEC_DBG_WARN(...) SECINTERNAL_LOG_WARN(__FILE__, __LINE__, __VA_ARGS__)
 54 #define SEC_DBG_INFO(...) SECINTERNAL_LOG_INFO(__FILE__, __LINE__, __VA_ARGS__)
 55 #define SEC_DBG_NOTICE(...) SECINTERNAL_LOG_NOTICE(__FILE__, __LINE__, __VA_ARGS__)
 56 #define SEC_DBG_TRACE(...) SECINTERNAL_LOG_TRACE(__FILE__, __LINE__, __VA_ARGS__)
 57 #define SEC_DBG_HEXDUMP_INFO(a, b, c) SECINTERNAL_LOG_HEXDUMP_INFO(a, b, c)
 58 #define SEC_DBG_HEXDUMP_NOTICE(a, b, c) SECINTERNAL_LOG_HEXDUMP_NOTICE(a, b, c)
 59 #define SEC_DBG_HEXDUMP_TRACE(a, b, c) SECINTERNAL_LOG_HEXDUMP_TRACE(a, b, c)
 60 #else
 61 #define SEC_DBG_ERROR(...)
 62 #define SEC_DBG_WARN(...)
 63 #define SEC_DBG_INFO(...)
 64 #define SEC_DBG_NOTICE(...)
 65 #define SEC_DBG_TRACE(...)
 66 #define SEC_DBG_HEXDUMP_INFO(a, b, c)
 67 #define SEC_DBG_HEXDUMP_NOTICE(a, b, c)
 68 #define SEC_DBG_HEXDUMP_TRACE(a, b, c)
 69 #endif
 70 
 71 #undef DllSpecSEC // important to avoid duplicated definitions of DllSpec with other component header files
 72 
 73 #endif //_SECLOGGING_H_
```
