---
title: vfisysinfo::IniFile

---

# vfisysinfo::IniFile



 [More...](#detailed-description)


`#include <inifile.h>`

## Public Types

|                | Name           |
| -------------- | -------------- |
| enum| **[Mode](classvfisysinfo_1_1_ini_file.md#enum-mode)** { READONLY, READWRITE, WRITEONLY} |

## Public Functions

|                | Name           |
| -------------- | -------------- |
| [SYS_INFO_API](dllspec_8h.md#define-sys-info-api) | **[IniFile](classvfisysinfo_1_1_ini_file.md#function-inifile)**(const std::string & filename_, [Mode](classvfisysinfo_1_1_ini_file.md#enum-mode) mode) |
| [SYS_INFO_API](dllspec_8h.md#define-sys-info-api) | **[IniFile](classvfisysinfo_1_1_ini_file.md#function-inifile)**(const std::string & content) |
| [SYS_INFO_API](dllspec_8h.md#define-sys-info-api) | **[IniFile](classvfisysinfo_1_1_ini_file.md#function-inifile)**(const std::string & filename_, const std::string & content, [Mode](classvfisysinfo_1_1_ini_file.md#enum-mode) mode =[READWRITE](classvfisysinfo_1_1_ini_file.md#enumvalue-readwrite)) |
| [SYS_INFO_API](dllspec_8h.md#define-sys-info-api) std::string | **[operator()](classvfisysinfo_1_1_ini_file.md#function-operator())**(const std::string & section) const |
| [SYS_INFO_API](dllspec_8h.md#define-sys-info-api) std::string | **[operator()](classvfisysinfo_1_1_ini_file.md#function-operator())**(const std::string & section, const std::string & var, const std::string & defaultvalue ="") const |
| [SYS_INFO_API](dllspec_8h.md#define-sys-info-api) void | **[get_section](classvfisysinfo_1_1_ini_file.md#function-get-section)**(const std::string & section, std::map< std::string, std::string > & values) |
| [SYS_INFO_API](dllspec_8h.md#define-sys-info-api) void | **[remove](classvfisysinfo_1_1_ini_file.md#function-remove)**(const std::string & section, const std::string & var) |
| [SYS_INFO_API](dllspec_8h.md#define-sys-info-api) void | **[set](classvfisysinfo_1_1_ini_file.md#function-set)**(const std::string & section, const std::string & var, const std::string & value) |
| [SYS_INFO_API](dllspec_8h.md#define-sys-info-api) bool | **[write](classvfisysinfo_1_1_ini_file.md#function-write)**() const |
| [SYS_INFO_API](dllspec_8h.md#define-sys-info-api) int | **[error](classvfisysinfo_1_1_ini_file.md#function-error)**() const |
| [SYS_INFO_API](dllspec_8h.md#define-sys-info-api) void | **[clear](classvfisysinfo_1_1_ini_file.md#function-clear)**() |
| std::string | **[getstring](classvfisysinfo_1_1_ini_file.md#function-getstring)**(std::map< std::string, std::string > & values, const std::string & id, const std::string & alternative ="") |

## Public Attributes

|                | Name           |
| -------------- | -------------- |
| std::vector< std::string > | **[section_names](classvfisysinfo_1_1_ini_file.md#variable-section-names)**  |

## Detailed Description

```cpp
class vfisysinfo::IniFile;
```


class for accessing INI files 

## Public Types Documentation

### enum Mode

| Enumerator | Value | Description |
| ---------- | ----- | ----------- |
| READONLY | |   |
| READWRITE | |   |
| WRITEONLY | |   |




## Public Functions Documentation

### function IniFile

```cpp
SYS_INFO_API IniFile(
    const std::string & filename_,
    Mode mode
)
```


**Parameters**: 

  * **filename_** file name 


constructor, open INI file 


### function IniFile

```cpp
SYS_INFO_API IniFile(
    const std::string & content
)
```


**Parameters**: 

  * **in** file content 


constructor, open INI file 


### function IniFile

```cpp
SYS_INFO_API IniFile(
    const std::string & filename_,
    const std::string & content,
    Mode mode =READWRITE
)
```


**Parameters**: 

  * **filename_** file name 
  * **in** file content 


constructor, open INI file 


### function operator()

```cpp
SYS_INFO_API std::string operator()(
    const std::string & section
) const
```


**Parameters**: 

  * **section** section to be read 


**Return**: section content 

read content of section 


### function operator()

```cpp
SYS_INFO_API std::string operator()(
    const std::string & section,
    const std::string & var,
    const std::string & defaultvalue =""
) const
```


**Parameters**: 

  * **section** section that contains the key 
  * **var** key name 
  * **defaultvalue** default value that is returned if the key does not exist 


**Return**: key value 

read key 


### function get_section

```cpp
SYS_INFO_API void get_section(
    const std::string & section,
    std::map< std::string, std::string > & values
)
```


**Parameters**: 

  * **section** section that contains the key value pairs 
  * **values** 


reads all values from _section_ to map _values_ as key-value pairs 


### function remove

```cpp
SYS_INFO_API void remove(
    const std::string & section,
    const std::string & var
)
```


**Parameters**: 

  * **section** section that contains the key 
  * **var** key name 


remove key from memory 


### function set

```cpp
SYS_INFO_API void set(
    const std::string & section,
    const std::string & var,
    const std::string & value
)
```


**Parameters**: 

  * **section** section that contains the key 
  * **var** key name 
  * **value** key value 


set key in memory 


### function write

```cpp
SYS_INFO_API bool write() const
```


**Return**: true in case of success, else false 

write memory content back to file 


### function error

```cpp
inline SYS_INFO_API int error() const
```


**Return**: -1 in case the file did not exist, 0 in case the file could be read without error, >0 line number of syntax error 

Check if the constructor has read a file or if a new configuration file is to be created 


### function clear

```cpp
inline SYS_INFO_API void clear()
```


clear content, reset error 


### function getstring

```cpp
std::string getstring(
    std::map< std::string, std::string > & values,
    const std::string & id,
    const std::string & alternative =""
)
```


## Public Attributes Documentation

### variable section_names

```cpp
std::vector< std::string > section_names;
```


-------------------------------

Updated on 2025-06-17 at 11:52:23 +0100