---
hidden: true
title: input_plugin.h
---

<a href="input__plugin_8h.md">Go to the documentation of this file.</a>

``` cpp
 1 #ifndef INPUT_PLUGIN_H_20160330
 2 #define INPUT_PLUGIN_H_20160330
 3 
 8 #if defined _WIN32 && defined VFI_INPUTPLUGIN_SHARED_EXPORT
 9 # define DllSpec __declspec(dllexport)
 10 #elif defined __GNUC__ && defined VFI_INPUTPLUGIN_SHARED_EXPORT
 11 # define DllSpec __attribute__((visibility ("default")))
 12 #else
 13 # define DllSpec
 14 #endif
 15 
 16 #ifdef __cplusplus
 17 extern "C" {
 18 #endif
 19 
 27 DllSpec void *input_start(const char *parameter, char **log_msg);
 28 
 34 DllSpec char *input_poll(void *handle);
 35 
 40 DllSpec void input_end(void *handle);
 41 
 42 
 43 #ifdef __cplusplus
 44 }
 45 #endif
 46 
 47 #undef DllSpec
 48 
 49 #endif
```
