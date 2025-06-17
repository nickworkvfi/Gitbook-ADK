---
title: guiprt/src/html/jsproc.h

---

# guiprt/src/html/jsproc.h

 [More...](#detailed-description)

## Namespaces

| Name           |
| -------------- |
| **[vfihtml](namespacevfihtml.md)**  |
| **[js](namespacejs.md)**  |

## Defines

|                | Name           |
| -------------- | -------------- |
|  | **[DllSpec](jsproc_8h.md#define-dllspec)**  |

## Detailed Description


script processor 




## Macros Documentation

### define DllSpec

```cpp
#define DllSpec 
```


## Source code

```cpp
// -*- Mode: C++; -*-
#ifndef JSPROC_H_20150609
#define JSPROC_H_20150609

#include <string>
#include <vector>
#include <map>

#if defined _WIN32 && defined VFI_JSPROC_SHARED_EXPORT
#  define DllSpec __declspec(dllexport)
#elif defined __GNUC__ && defined VFI_JSPROC_SHARED_EXPORT
#  define DllSpec  __attribute__((visibility ("default")))
#else
#  define DllSpec
#endif

namespace vfihtml { class ExtContext; }

#ifndef DOXYGEN
namespace js {
#endif

DllSpec bool jsProcessor(void *data,
                         const std::string &sourcecode,
                         std::map<std::string,std::string> &arg,
                         std::string &out,
                         std::string &err,
                         std::string &exitcode);

DllSpec bool jsProcessorExt(void *data,
                            const std::string &sourcecode,
                            std::map<std::string,std::string> &arg,
                            std::string &out,
                            std::string &err,
                            std::string &exitcode,
                            vfihtml::ExtContext *context);

DllSpec const char *jsProcVersion();


DllSpec void jsSetHttpProxy(const char *proxy);

DllSpec const char *jsGetHttpProxy();

DllSpec void jsSetConsole( void (*cb)(void *data, const char *text), void *data);

DllSpec void jsGetConsole( void (*&cb)(void *, const char *), void *&data);

DllSpec void jsSetNotify( int (*cb)(void *data,
                                    const char *to,
                                    const char *notification_id,
                                    const char *json_param,
                                    unsigned flags,
                                    const char *from), void *data);

DllSpec void jsGetNotify( int (*&cb)(void *data,
                                      const char *to,
                                      const char *notification_id,
                                      const char *json_param,
                                      unsigned flags,
                                      const char *from), void *&data);

DllSpec void jsSetNotifyAndWait( int (*cb)(void *data,
                                           const char *to,
                                           const char *notification_id,
                                           const char *json_param,
                                           unsigned flags,
                                           const char *from,
                                           const char *wait_id,
                                           std::string &result,
                                           int timeout_msec), void *data);

DllSpec void jsGetNotifyAndWait( int (*&cb)(void *data,
                                            const char *to,
                                            const char *notification_id,
                                            const char *json_param,
                                            unsigned flags,
                                            const char *from,
                                            const char *wait_id,
                                            std::string &result,
                                            int timeout_msec), void *&data);

enum JSTraceType {
   JST_HTTPGET,   
   JST_HTTPPOST,  
   JST_HTTPRESULT 
};

DllSpec void jsSetTrace( void (*cb)(void *data,
                                    JSTraceType type,
                                    const std::string &app_id,
                                    std::map<std::string,std::string> &trace), void *data);

DllSpec void jsGetTrace( void (*&cb)(void *data,
                                     JSTraceType type,
                                     const std::string &app_id,
                                     std::map<std::string,std::string> &trace), void *&data);


enum JSLogLevel {
   JSL_EMERGENCY=0,
   JSL_ALERT=1,
   JSL_CRITICAL=2,
   JSL_ERROR=3,
   JSL_WARNING=4,
   JSL_NOTICE=5,
   JSL_INFO=6,
   JSL_DEBUG=7
};

DllSpec void jsSetLog( void (*cb)(void *data,
                                  const std::string &app_id,
                                  JSLogLevel log_level,
                                  const std::vector<std::string> &msg), void *data);

DllSpec void jsGetLog( void (*&cb)(void *data,
                                  const std::string &app_id,
                                  JSLogLevel log_level,
                                  const std::vector<std::string> &msg), void *&data);

#ifndef DOXYGEN
} // namespace
#endif

#undef DllSpec

#endif
```


-------------------------------

Updated on 2025-06-17 at 11:52:25 +0100
