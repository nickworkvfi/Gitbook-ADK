---
hidden: true
title: compatibilityHelper.h
---

<a href="compatibility_helper_8h.md">Go to the documentation of this file.</a>

``` cpp
 1 
 11 #ifndef API_EXPORT_COMPATIBILITYHELPER_H_
 12 #define API_EXPORT_COMPATIBILITYHELPER_H_
 13 
 14 #include <stdlib.h>
 15 #include "libsec.h"
 16 
 17 #if (defined _VRXEVO || defined _WIN32)
 18 # if defined VFI_SEC_SHARED_EXPORT
 19 # define DllSpecSEC __declspec(dllexport)
 20 # elif defined VFI_SEC_STATIC_EXPORT || defined _WIN32 // dllimport not required for Windows
 21 # define DllSpecSEC
 22 # else
 23 # define DllSpecSEC __declspec(dllimport)
 24 # endif
 25 #elif defined __GNUC__ && defined VFI_SEC_SHARED_EXPORT
 26 # define DllSpecSEC __attribute__((visibility ("default")))
 27 #else
 28 # define DllSpecSEC
 29 #endif
 30 
 31 
 32 DllSpecSEC secError secCompatiblity_getHandle(u_char oldHandle, secHandle_t& newHandle);
 33 
 34 DllSpecSEC u_char secCompatiblity_registerHandle(secHandle_t handle, u_char hash = 0);
 35 
 36 DllSpecSEC secError secCompatiblity_deregisterHandle(u_char oldHandle);
 37 
 38 #undef DllSpecSEC // important to avoid duplicated definitions of DllSpec with other component header files
 39 
 40 #endif /* API_EXPORT_COMPATIBILITYHELPER_H_ */
```
