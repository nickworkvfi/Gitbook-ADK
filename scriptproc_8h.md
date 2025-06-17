---
title: guiprt/src/html/scriptproc.h

---

# guiprt/src/html/scriptproc.h



## Namespaces

| Name           |
| -------------- |
| **[vfihtml](namespacevfihtml.md)**  |

## Defines

|                | Name           |
| -------------- | -------------- |
|  | **[DllSpec](scriptproc_8h.md#define-dllspec)**  |




## Macros Documentation

### define DllSpec

```cpp
#define DllSpec 
```


## Source code

```cpp
#ifndef SCRIPTPROC_H_20141114
#define SCRIPTPROC_H_20141114

#if defined _WIN32 && defined VFI_GUIPRT_SHARED_EXPORT
#  define DllSpec __declspec(dllexport)
#elif defined __GNUC__ && defined VFI_GUIPRT_SHARED_EXPORT
#  define DllSpec  __attribute__((visibility ("default")))
#else
#  define DllSpec
#endif

#include <string>
#include <map>

namespace vfihtml {

class ExtContext;

typedef bool (*ScriptProcessor)(void *data,
                                const std::string &script,
                                std::map<std::string,std::string> &value,
                                std::string &out,
                                std::string &err,
                                std::string &exitcode);

 typedef bool (*ScriptProcessorExt)(void *data,
                                    const std::string &script,
                                    std::map<std::string,std::string> &value,
                                    std::string &out,
                                    std::string &err,
                                    std::string &exitcode,
                                    ExtContext *context);

DllSpec void htmlSetScriptProcessor(const char *name, ScriptProcessor proc, void *data);

DllSpec void htmlSetScriptProcessor(const char *name, ScriptProcessorExt proc, void *data=0);

} // namespace vfihtml

#undef DllSpec

#endif
```


-------------------------------

Updated on 2025-06-17 at 11:52:25 +0100
