---
title: libsdi::SdiBase::PluginResult

---

# libsdi::SdiBase::PluginResult






`#include <sdi_if.h>`

## Public Attributes

|                | Name           |
| -------------- | -------------- |
| int32_t | **[pluginId](structlibsdi_1_1_sdi_base_1_1_plugin_result.md#variable-pluginid)**  |
| int32_t | **[responseCode](structlibsdi_1_1_sdi_base_1_1_plugin_result.md#variable-responsecode)**  |
| std::vector< unsigned char > | **[responseData](structlibsdi_1_1_sdi_base_1_1_plugin_result.md#variable-responsedata)** <br>plugin response data  |

## Public Attributes Documentation

### variable pluginId

```cpp
int32_t pluginId;
```


return value of a plugin's `moduleID` function also used as INS byte of SDI 26-xx command to invoke a plugin, 0 if not available 


### variable responseCode

```cpp
int32_t responseCode;
```


plugin's `processTrigger` function return value, [SDI_SW12_NONE](namespacelibsdi.md#enumvalue-sdi-sw12-none) if not available 


### variable responseData

```cpp
std::vector< unsigned char > responseData;
```

plugin response data 

-------------------------------

Updated on 2025-06-17 at 11:52:21 +0100