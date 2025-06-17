---
title: vfigui::UIStatistics

---

# vfigui::UIStatistics



 [More...](#detailed-description)


`#include <gui.h>`

## Public Attributes

|                | Name           |
| -------------- | -------------- |
| [vfigui::TimeStamp](classvfihtml_1_1_time_stamp.md) | **[start](structvfigui_1_1_u_i_statistics.md#variable-start)**  |
| [vfigui::TimeStamp](classvfihtml_1_1_time_stamp.md) | **[css](structvfigui_1_1_u_i_statistics.md#variable-css)**  |
| [vfigui::TimeStamp](classvfihtml_1_1_time_stamp.md) | **[html](structvfigui_1_1_u_i_statistics.md#variable-html)**  |
| [vfigui::TimeStamp](classvfihtml_1_1_time_stamp.md) | **[draw](structvfigui_1_1_u_i_statistics.md#variable-draw)**  |

## Detailed Description

```cpp
struct vfigui::UIStatistics;
```


Statistics information 

## Public Attributes Documentation

### variable start

```cpp
vfigui::TimeStamp start;
```


starting time 


### variable css

```cpp
vfigui::TimeStamp css;
```


css loading and parsing has finished 


### variable html

```cpp
vfigui::TimeStamp html;
```


html loading, parsing and layout has finished 


### variable draw

```cpp
vfigui::TimeStamp draw;
```


sending drawing commands to gfx system has finished (initial drawing of the HTML page) 


-------------------------------

Updated on 2025-06-17 at 11:52:23 +0100