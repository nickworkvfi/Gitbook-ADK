---
title: SDIPluginCtx

---

# SDIPluginCtx



 [More...](#detailed-description)


`#include <loadplugin.h>`

## Public Functions

|                | Name           |
| -------------- | -------------- |
| | **[SDIPluginCtx](class_s_d_i_plugin_ctx.md#function-sdipluginctx)**() |
| | **[SDIPluginCtx](class_s_d_i_plugin_ctx.md#function-sdipluginctx)**(const std::string & file) |
| virtual | **[~SDIPluginCtx](class_s_d_i_plugin_ctx.md#function-~sdipluginctx)**() |
| bool | **[load](class_s_d_i_plugin_ctx.md#function-load)**(const std::string & file) |
| bool | **[loaded](class_s_d_i_plugin_ctx.md#function-loaded)**() const |
| void | **[unload](class_s_d_i_plugin_ctx.md#function-unload)**() |
| const std::string & | **[getFile](class_s_d_i_plugin_ctx.md#function-getfile)**() const |
| const std::string & | **[getName](class_s_d_i_plugin_ctx.md#function-getname)**() const |
| const std::string & | **[getVersion](class_s_d_i_plugin_ctx.md#function-getversion)**() const |
| [SDIPlugin](class_s_d_i_plugin.md) * | **[getObj](class_s_d_i_plugin_ctx.md#function-getobj)**() |

## Detailed Description

```cpp
class SDIPluginCtx;
```


helper class to store the context of a loaded plugin 

## Public Functions Documentation

### function SDIPluginCtx

```cpp
inline SDIPluginCtx()
```


### function SDIPluginCtx

```cpp
inline SDIPluginCtx(
    const std::string & file
)
```


### function ~SDIPluginCtx

```cpp
inline virtual ~SDIPluginCtx()
```


### function load

```cpp
bool load(
    const std::string & file
)
```


**Return**: true for success, else false 

load a SDI plugin by its filename. If the plugin is already loaded, it is reloaded. 


### function loaded

```cpp
inline bool loaded() const
```


**Return**: true for successfully loaded, else false 

check if the SDI plugin was successfully loaded 


### function unload

```cpp
void unload()
```


unload a SDI plugin and free the plugin context 


### function getFile

```cpp
inline const std::string & getFile() const
```


**Return**: filename of the plugin shared object as full path 

returns the filename of the plugin shared object (including full path) 


### function getName

```cpp
inline const std::string & getName() const
```


**Return**: plugin name as string 

returns the plugin name 


### function getVersion

```cpp
inline const std::string & getVersion() const
```


**Return**: plugin version string 

returns the plugin version as string in format "\<major\>.\<minor\>.\<bugfix\>" 


### function getObj

```cpp
inline SDIPlugin * getObj()
```


-------------------------------

Updated on 2025-06-17 at 11:52:20 +0100