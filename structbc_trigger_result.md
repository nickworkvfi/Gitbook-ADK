---
title: bcTriggerResult

---

# bcTriggerResult



 [More...](#detailed-description)


`#include <loadplugin.h>`

## Public Attributes

|                | Name           |
| -------------- | -------------- |
| int | **[retval](structbc_trigger_result.md#variable-retval)**  |
| [SDIPlugin::Buffer](class_s_d_i_plugin.md#typedef-buffer) | **[result](structbc_trigger_result.md#variable-result)**  |
| std::string | **[name](structbc_trigger_result.md#variable-name)**  |
| int | **[id](structbc_trigger_result.md#variable-id)**  |

## Detailed Description

```cpp
struct bcTriggerResult;
```


structure used by [broadcastTrigger()](loadplugin_8cpp.md#function-broadcasttrigger) to store a result for one plugin 

## Public Attributes Documentation

### variable retval

```cpp
int retval;
```


return value of processTrigger() function 


### variable result

```cpp
SDIPlugin::Buffer result;
```


result buffer returned by processTrigger() function 


### variable name

```cpp
std::string name;
```


name of the plugin, which has returned the result 


### variable id

```cpp
int id;
```


id of the plugin, which has returned the result 


-------------------------------

Updated on 2025-06-17 at 11:52:20 +0100