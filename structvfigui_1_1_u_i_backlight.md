---
title: vfigui::UIBacklight

---

# vfigui::UIBacklight



 [More...](#detailed-description)


`#include <gui.h>`

## Public Attributes

|                | Name           |
| -------------- | -------------- |
| unsigned | **[brightness](structvfigui_1_1_u_i_backlight.md#variable-brightness)**  |
| unsigned | **[timeout](structvfigui_1_1_u_i_backlight.md#variable-timeout)**  |

## Detailed Description

```cpp
struct vfigui::UIBacklight;
```


backlight brightness level 

## Public Attributes Documentation

### variable brightness

```cpp
unsigned brightness;
```


brightness level (0..100) 


### variable timeout

```cpp
unsigned timeout;
```


timeout in milliseconds after which to switch to the next level (if there is another one) 


-------------------------------

Updated on 2025-06-17 at 11:52:23 +0100