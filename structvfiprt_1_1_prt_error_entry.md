---
title: vfiprt::PrtErrorEntry

---

# vfiprt::PrtErrorEntry



 [More...](#detailed-description)


`#include <prt.h>`

## Public Types

|                | Name           |
| -------------- | -------------- |
| enum| **[ErrorType](structvfiprt_1_1_prt_error_entry.md#enum-errortype)** { NOT_FOUND, UNSUPPORTED, CORRUPT} |

## Public Functions

|                | Name           |
| -------------- | -------------- |
| | **[PrtErrorEntry](structvfiprt_1_1_prt_error_entry.md#function-prterrorentry)**([ErrorType](structvfiprt_1_1_prt_error_entry.md#enum-errortype) t, const std::string & n) |

## Public Attributes

|                | Name           |
| -------------- | -------------- |
| enum [vfiprt::PrtErrorEntry::ErrorType](structvfiprt_1_1_prt_error_entry.md#enum-errortype) | **[type](structvfiprt_1_1_prt_error_entry.md#variable-type)**  |
| std::string | **[name](structvfiprt_1_1_prt_error_entry.md#variable-name)**  |

## Detailed Description

```cpp
struct vfiprt::PrtErrorEntry;
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

### function PrtErrorEntry

```cpp
inline PrtErrorEntry(
    ErrorType t,
    const std::string & n
)
```


constructor 


## Public Attributes Documentation

### variable type

```cpp
enum vfiprt::PrtErrorEntry::ErrorType type;
```


type of the error 


### variable name

```cpp
std::string name;
```


involved resource name or error message in case of SCRIPT_ERROR 


-------------------------------

Updated on 2025-06-17 at 11:52:23 +0100