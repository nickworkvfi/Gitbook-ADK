---
title: vfigui::UIRegion

---

# vfigui::UIRegion



 [More...](#detailed-description)


`#include <gui.h>`

## Public Attributes

|                | Name           |
| -------------- | -------------- |
| int | **[id](structvfigui_1_1_u_i_region.md#variable-id)**  |
| int | **[left](structvfigui_1_1_u_i_region.md#variable-left)**  |
| int | **[top](structvfigui_1_1_u_i_region.md#variable-top)**  |
| int | **[right](structvfigui_1_1_u_i_region.md#variable-right)**  |
| int | **[bottom](structvfigui_1_1_u_i_region.md#variable-bottom)**  |
| int | **[flags](structvfigui_1_1_u_i_region.md#variable-flags)**  |

## Detailed Description

```cpp
struct vfigui::UIRegion;
```


structure describing the position and size of an output region 

## Public Attributes Documentation

### variable id

```cpp
int id;
```


region ID, 0 is the default region 


### variable left

```cpp
int left;
```


left position in pixels (+=width if negative) 


### variable top

```cpp
int top;
```


top position in pixels (+=height if negative) 


### variable right

```cpp
int right;
```


right position in pixels (+=width if negative) 


### variable bottom

```cpp
int bottom;
```


bottom position in pixels (+=height if negative) 


### variable flags

```cpp
int flags;
```


flags: UI_REGION_FLAG_HIDDEN 


-------------------------------

Updated on 2025-06-17 at 11:52:23 +0100