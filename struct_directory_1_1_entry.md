---
title: Directory::Entry

---

# Directory::Entry



 [More...](#detailed-description)


`#include <directory.h>`

## Public Functions

|                | Name           |
| -------------- | -------------- |
| | **[Entry](struct_directory_1_1_entry.md#function-entry)**() |

## Public Attributes

|                | Name           |
| -------------- | -------------- |
| std::string | **[name](struct_directory_1_1_entry.md#variable-name)**  |
| std::string | **[filename](struct_directory_1_1_entry.md#variable-filename)**  |
| unsigned | **[type](struct_directory_1_1_entry.md#variable-type)**  |
| unsigned | **[mode](struct_directory_1_1_entry.md#variable-mode)**  |
| unsigned | **[size](struct_directory_1_1_entry.md#variable-size)**  |
| unsigned | **[year](struct_directory_1_1_entry.md#variable-year)**  |
| unsigned char | **[month](struct_directory_1_1_entry.md#variable-month)**  |
| unsigned char | **[day](struct_directory_1_1_entry.md#variable-day)**  |
| unsigned char | **[hour](struct_directory_1_1_entry.md#variable-hour)**  |
| unsigned char | **[min](struct_directory_1_1_entry.md#variable-min)**  |
| unsigned char | **[sec](struct_directory_1_1_entry.md#variable-sec)**  |

## Detailed Description

```cpp
struct Directory::Entry;
```


directory entry 

## Public Functions Documentation

### function Entry

```cpp
inline Entry()
```


## Public Attributes Documentation

### variable name

```cpp
std::string name;
```


file-/directory name including full path 


### variable filename

```cpp
std::string filename;
```


file-/directory name without path 


### variable type

```cpp
unsigned type;
```


type of entry (see FileType) 


### variable mode

```cpp
unsigned mode;
```


file mode (permissions) 


### variable size

```cpp
unsigned size;
```


file size 


### variable year

```cpp
unsigned year;
```


modification date: year 


### variable month

```cpp
unsigned char month;
```


modification date: month 


### variable day

```cpp
unsigned char day;
```


modification date: day 


### variable hour

```cpp
unsigned char hour;
```


modification time: hour 


### variable min

```cpp
unsigned char min;
```


modification time: minute 


### variable sec

```cpp
unsigned char sec;
```


modification time: second 


-------------------------------

Updated on 2025-06-17 at 11:52:20 +0100