---
hidden: true
title: scriptproc.h
---

<a href="scriptproc_8h.md">Go to the documentation of this file.</a>

``` cpp
 1 #ifndef SCRIPTPROC_H_20141114
 2 #define SCRIPTPROC_H_20141114
 3 
 6 #if defined _WIN32 && defined VFI_GUIPRT_SHARED_EXPORT
 7 # define DllSpec __declspec(dllexport)
 8 #elif defined __GNUC__ && defined VFI_GUIPRT_SHARED_EXPORT
 9 # define DllSpec __attribute__((visibility ("default")))
 10 #else
 11 # define DllSpec
 12 #endif
 13 
 14 #include <string>
 15 #include <map>
 16 
 17 namespace vfihtml {
 18 
 19 class ExtContext;
 20 
 30 typedef bool (*ScriptProcessor)(void *data,
 31  const std::string &script,
 32  std::map<std::string,std::string> &value,
 33  std::string &out,
 34  std::string &err,
 35  std::string &exitcode);
 36 
 47  typedef bool (*ScriptProcessorExt)(void *data,
 48  const std::string &script,
 49  std::map<std::string,std::string> &value,
 50  std::string &out,
 51  std::string &err,
 52  std::string &exitcode,
 53  ExtContext *context);
 54 
 60 DllSpec void htmlSetScriptProcessor(const char *name, ScriptProcessor proc, void *data);
 61 
 67 DllSpec void htmlSetScriptProcessor(const char *name, ScriptProcessorExt proc, void *data=0);
 68 
 69 } // namespace vfihtml
 70 
 71 #undef DllSpec
 72 
 73 #endif
```
