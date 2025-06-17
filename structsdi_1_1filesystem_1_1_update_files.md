---
title: sdi::filesystem::UpdateFiles

---

# sdi::filesystem::UpdateFiles



 [More...](#detailed-description)

## Public Attributes

|                | Name           |
| -------------- | -------------- |
| const char * | **[prefix](structsdi_1_1filesystem_1_1_update_files.md#variable-prefix)**  |
| const char * | **[file](structsdi_1_1filesystem_1_1_update_files.md#variable-file)**  |
| bool | **[regex](structsdi_1_1filesystem_1_1_update_files.md#variable-regex)**  |
| enum [Location](namespacesdi_1_1filesystem.md#enum-location) | **[dest](structsdi_1_1filesystem_1_1_update_files.md#variable-dest)**  |
| const char * | **[dest_prefix](structsdi_1_1filesystem_1_1_update_files.md#variable-dest-prefix)**  |
| unsigned long | **[pre_actions](structsdi_1_1filesystem_1_1_update_files.md#variable-pre-actions)**  |
| unsigned long | **[post_actions](structsdi_1_1filesystem_1_1_update_files.md#variable-post-actions)**  |

## Detailed Description

```cpp
struct sdi::filesystem::UpdateFiles;
```


update file definition to check for allowed files to update and remove 

## Public Attributes Documentation

### variable prefix

```cpp
const char * prefix;
```


file prefix (path) in the user configuration package 


### variable file

```cpp
const char * file;
```


name of the update file (without path) 


### variable regex

```cpp
bool regex;
```


file is already a regular expression 


### variable dest

```cpp
enum Location dest;
```


destination on terminal, see enum Dest 


### variable dest_prefix

```cpp
const char * dest_prefix;
```


file prefix (path) used in application folder (if any) 


### variable pre_actions

```cpp
unsigned long pre_actions;
```


pre-actions (bitmask) to execute for this file before update (see enum Action) 


### variable post_actions

```cpp
unsigned long post_actions;
```


post-actions (bitmask) to execute for this file after update (see enum Action) 


-------------------------------

Updated on 2025-06-17 at 11:52:21 +0100