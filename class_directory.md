---
title: Directory

---

# Directory



 [More...](#detailed-description)


`#include <directory.h>`

## Public Classes

|                | Name           |
| -------------- | -------------- |
| struct | **[Entry](struct_directory_1_1_entry.md)**  |

## Public Types

|                | Name           |
| -------------- | -------------- |
| enum| **[FileType](class_directory.md#enum-filetype)** { File, Dir, Link, Special} |
| enum| **[@8](class_directory.md#enum-@8)** { Read = 1, Write = 2} |

## Public Functions

|                | Name           |
| -------------- | -------------- |
| | **[Directory](class_directory.md#function-directory)**() |
| virtual | **[~Directory](class_directory.md#function-~directory)**() |
| int | **[open](class_directory.md#function-open)**(const std::string & _dirname) |
| int | **[readEntry](class_directory.md#function-readentry)**([Entry](struct_directory_1_1_entry.md) & entry) |
| void | **[pushBack](class_directory.md#function-pushback)**() |
| void | **[close](class_directory.md#function-close)**() |

## Detailed Description

```cpp
class Directory;
```


class for reading directories 

## Public Types Documentation

### enum FileType

| Enumerator | Value | Description |
| ---------- | ----- | ----------- |
| File | |   |
| Dir | |   |
| Link | |   |
| Special | |   |




### enum @8

| Enumerator | Value | Description |
| ---------- | ----- | ----------- |
| Read | 1|   |
| Write | 2|   |




## Public Functions Documentation

### function Directory

```cpp
Directory()
```


constructor 


### function ~Directory

```cpp
inline virtual ~Directory()
```


destructor 


### function open

```cpp
int open(
    const std::string & _dirname
)
```


**Parameters**: 

  * **_dirname** name of the directory 


**Return**: 1 in case of success, 0 in case of failure 

open a directory for reading 


### function readEntry

```cpp
int readEntry(
    Entry & entry
)
```


**Parameters**: 

  * **entry** next directory entry 


**Return**: 1 in case of success, 0 in case of failure (e.g. end of directory) 

read the next directory entry 


### function pushBack

```cpp
inline void pushBack()
```


push back one directory entry (it will be read by the next [readEntry()](class_directory.md#function-readentry)). Only one entry can be pushed back. 


### function close

```cpp
void close()
```


close the directory 


-------------------------------

Updated on 2025-06-17 at 11:52:20 +0100