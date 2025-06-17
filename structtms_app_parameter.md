---
title: tmsAppParameter

---

# tmsAppParameter



 [More...](#detailed-description)


`#include <svc_tms.h>`

## Public Attributes

|                | Name           |
| -------------- | -------------- |
| char[64] | **[parameterName](structtms_app_parameter.md#variable-parametername)**  |
| char[256] | **[parameterValue](structtms_app_parameter.md#variable-parametervalue)**  |
| int | **[parameterType](structtms_app_parameter.md#variable-parametertype)**  |

## Detailed Description

```cpp
struct tmsAppParameter;
```


Application Parameter Structure used by the application to pass an application parameter to TMS. The application will setup one of these structures for each custom parameter it would like sent to the TMS server. An array of these structures is then pointed to in the [tmsAppInfo](structtms_app_info.md) structure that gets passed to [tms_setApplicationInfo()](svc__tms_8h.md#function-tms-setapplicationinfo) in response to a TMS_EVT_SET_APP_INFO event. 

## Public Attributes Documentation

### variable parameterName

```cpp
char[64] parameterName;
```


NULL terminated parameter name - i.e. "DeviceId" for VX terminals 


### variable parameterValue

```cpp
char[256] parameterValue;
```


NULL terminated parameter Value - i.e. Device ID value for VX terminals 


### variable parameterType

```cpp
int parameterType;
```


Parameter type (i.e. TMS_PARAMETER_TYPE_IDENTIFIER, TMS_PARAMETER_TYPE_DEVICE_PROFILE, or TMS_PARAMETER_TYPE_DIAGNOSTIC) 


-------------------------------

Updated on 2025-06-17 at 11:52:20 +0100