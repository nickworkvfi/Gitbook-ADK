---
title: tmsAppInfo

---

# tmsAppInfo



 [More...](#detailed-description)


`#include <svc_tms.h>`

## Public Attributes

|                | Name           |
| -------------- | -------------- |
| struct [tmsAppParameter](structtms_app_parameter.md) * | **[parameterList](structtms_app_info.md#variable-parameterlist)**  |
| int | **[parameterCount](structtms_app_info.md#variable-parametercount)**  |

## Detailed Description

```cpp
struct tmsAppInfo;
```


Application Information Structure used by the application to pass application parameters to TMS. This structure is filled out by the application and passed to [tms_setApplicationInfo()](svc__tms_8h.md#function-tms-setapplicationinfo) in response to a TMS_EVT_SET_APP_INFO event. 

## Public Attributes Documentation

### variable parameterList

```cpp
struct tmsAppParameter * parameterList;
```


Pointer to an array of [tmsAppParameter](structtms_app_parameter.md)[] values to be sent to the server 


### variable parameterCount

```cpp
int parameterCount;
```


number of [tmsAppParameter](structtms_app_parameter.md) values in the parameterList array 


-------------------------------

Updated on 2025-06-17 at 11:52:20 +0100