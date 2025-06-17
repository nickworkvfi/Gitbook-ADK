---
title: EMV_CTLS_LED_COLORS_STRUCT
summary: Data structure for LED colors. Input for EMV_CTLS_LED_ConfigDesign_Extended()

---

# EMV_CTLS_LED_COLORS_STRUCT

**Module:** **[LED control](group___a_d_k___l_e_d.md)**



Data structure for LED colors. Input for [EMV_CTLS_LED_ConfigDesign_Extended()]()


`#include <EMV_CTLS_Interface.h>`

## Public Attributes

|                | Name           |
| -------------- | -------------- |
| unsigned char | **[num_colors](struct_e_m_v___c_t_l_s___l_e_d___c_o_l_o_r_s___s_t_r_u_c_t.md#variable-num-colors)** <br>number of different colors; set to 1 if all LEDs should have the same color, set to 4 if all LEDs have different colors.  |
| unsigned char * | **[colors](struct_e_m_v___c_t_l_s___l_e_d___c_o_l_o_r_s___s_t_r_u_c_t.md#variable-colors)** <br>Array of colors, each color is 3 bytes (24 bit RGB), so length of array must be num_colors * 3.  |

## Public Attributes Documentation

### variable num_colors

```cpp
unsigned char num_colors;
```

number of different colors; set to 1 if all LEDs should have the same color, set to 4 if all LEDs have different colors. 

### variable colors

```cpp
unsigned char * colors;
```

Array of colors, each color is 3 bytes (24 bit RGB), so length of array must be num_colors * 3. 

-------------------------------

Updated on 2025-06-17 at 11:52:23 +0100