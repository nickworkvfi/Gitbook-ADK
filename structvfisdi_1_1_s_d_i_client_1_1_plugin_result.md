---
title: vfisdi::SDIClient::PluginResult

---

# vfisdi::SDIClient::PluginResult

**Module:** **[Card reader interface](group__sdicrd.md)**



 [More...](#detailed-description)


`#include <sdi.h>`

## Public Attributes

|                | Name           |
| -------------- | -------------- |
| short | **[id](structvfisdi_1_1_s_d_i_client_1_1_plugin_result.md#variable-id)**  |
| unsigned short | **[responseCode](structvfisdi_1_1_s_d_i_client_1_1_plugin_result.md#variable-responsecode)**  |
| [bytevector](classvfisdi_1_1_s_d_i_client.md#typedef-bytevector) | **[responseData](structvfisdi_1_1_s_d_i_client_1_1_plugin_result.md#variable-responsedata)**  |

## Detailed Description

```cpp
struct vfisdi::SDIClient::PluginResult;
```


Plugin result entry 

## Public Attributes Documentation

### variable id

```cpp
short id;
```


plugin ID or -1 if unknown 


### variable responseCode

```cpp
unsigned short responseCode;
```


response code or 0x9100 if unknown 


### variable responseData

```cpp
bytevector responseData;
```


plugin response data 


-------------------------------

Updated on 2025-06-17 at 11:52:23 +0100