---
title: sec/src/api/export/sec/compatibilityHelper.h
summary: ADK Security Service Compatibility Helper. 

---

# sec/src/api/export/sec/compatibilityHelper.h

ADK Security Service Compatibility Helper.  [More...](#detailed-description)

## Functions

|                | Name           |
| -------------- | -------------- |
| [DllSpecSEC](seclogging_8h.md#define-dllspecsec)[secError](namespacecom__adksec__cmd.md#enum-secerror) | **[secCompatiblity_getHandle](compatibility_helper_8h.md#function-seccompatiblity-gethandle)**(u_char oldHandle, [secHandle_t](namespacecom__adksec__cmd.md#typedef-sechandle-t) & newHandle) |
| [DllSpecSEC](seclogging_8h.md#define-dllspecsec) u_char | **[secCompatiblity_registerHandle](compatibility_helper_8h.md#function-seccompatiblity-registerhandle)**([secHandle_t](namespacecom__adksec__cmd.md#typedef-sechandle-t) handle, u_char hash =0) |
| [DllSpecSEC](seclogging_8h.md#define-dllspecsec)[secError](namespacecom__adksec__cmd.md#enum-secerror) | **[secCompatiblity_deregisterHandle](compatibility_helper_8h.md#function-seccompatiblity-deregisterhandle)**(u_char oldHandle) |

## Defines

|                | Name           |
| -------------- | -------------- |
|  | **[DllSpecSEC](compatibility_helper_8h.md#define-dllspecsec)**  |

## Detailed Description

ADK Security Service Compatibility Helper. 

**Author**: JensW

**Date**: 06.06.2016 

## Functions Documentation

### function secCompatiblity_getHandle

```cpp
DllSpecSECsecError secCompatiblity_getHandle(
    u_char oldHandle,
    secHandle_t & newHandle
)
```


### function secCompatiblity_registerHandle

```cpp
DllSpecSEC u_char secCompatiblity_registerHandle(
    secHandle_t handle,
    u_char hash =0
)
```


### function secCompatiblity_deregisterHandle

```cpp
DllSpecSECsecError secCompatiblity_deregisterHandle(
    u_char oldHandle
)
```




## Macros Documentation

### define DllSpecSEC

```cpp
#define DllSpecSEC 
```


## Source code

```cpp

#ifndef API_EXPORT_COMPATIBILITYHELPER_H_
#define API_EXPORT_COMPATIBILITYHELPER_H_

#include <stdlib.h>
#include "libsec.h"

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


DllSpecSEC secError secCompatiblity_getHandle(u_char oldHandle, secHandle_t& newHandle);

DllSpecSEC u_char secCompatiblity_registerHandle(secHandle_t handle, u_char hash = 0);

DllSpecSEC secError secCompatiblity_deregisterHandle(u_char oldHandle);

#undef DllSpecSEC // important to avoid duplicated definitions of DllSpec with other component header files

#endif /* API_EXPORT_COMPATIBILITYHELPER_H_ */
```


-------------------------------

Updated on 2025-06-17 at 11:52:26 +0100
