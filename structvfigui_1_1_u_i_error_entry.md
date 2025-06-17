---
title: vfigui::UIErrorEntry

---

# vfigui::UIErrorEntry



 [More...](#detailed-description)


`#include <gui.h>`

## Public Types

|                | Name           |
| -------------- | -------------- |
| enum| **[ErrorType](structvfigui_1_1_u_i_error_entry.md#enum-errortype)** { NOT_FOUND, UNSUPPORTED, CORRUPT} |

## Public Functions

|                | Name           |
| -------------- | -------------- |
| | **[UIErrorEntry](structvfigui_1_1_u_i_error_entry.md#function-uierrorentry)**([ErrorType](structvfigui_1_1_u_i_error_entry.md#enum-errortype) t, const std::string & n) |

## Public Attributes

|                | Name           |
| -------------- | -------------- |
| enum [vfigui::UIErrorEntry::ErrorType](structvfigui_1_1_u_i_error_entry.md#enum-errortype) | **[type](structvfigui_1_1_u_i_error_entry.md#variable-type)**  |
| std::string | **[name](structvfigui_1_1_u_i_error_entry.md#variable-name)**  |

## Detailed Description

```cpp
struct vfigui::UIErrorEntry;
```


error entry 

## Public Types Documentation

### enum ErrorType

| Enumerator | Value | Description |
| ---------- | ----- | ----------- |
| NOT_FOUND | |  resource not found  |
| UNSUPPORTED | |  unsupported data format  |
| CORRUPT | |  corrupt file  |




error type 


## Public Functions Documentation

### function UIErrorEntry

```cpp
inline UIErrorEntry(
    ErrorType t,
    const std::string & n
)
```


constructor 


## Public Attributes Documentation

### variable type

```cpp
enum vfigui::UIErrorEntry::ErrorType type;
```


type of the error 


### variable name

```cpp
std::string name;
```


involved resource name or error message in case of SCRIPT_ERROR 


-------------------------------

Updated on 2025-06-17 at 11:52:23 +0100