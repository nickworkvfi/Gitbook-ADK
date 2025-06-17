---
title: EMV_CTLS_LED_CONFIG_STRUCT
summary: Data structure for LED configuration. Input for EMV_CTLS_LED_ConfigDesign_Extended()

---

# EMV_CTLS_LED_CONFIG_STRUCT

**Module:** **[LED control](group___a_d_k___l_e_d.md)**



Data structure for LED configuration. Input for [EMV_CTLS_LED_ConfigDesign_Extended()]()


`#include <EMV_CTLS_Interface.h>`

## Public Attributes

|                | Name           |
| -------------- | -------------- |
| unsigned short | **[region_x](struct_e_m_v___c_t_l_s___l_e_d___c_o_n_f_i_g___s_t_r_u_c_t.md#variable-region-x)** <br>x coordinate of the LED Region (upper left corner)  |
| unsigned short | **[region_y](struct_e_m_v___c_t_l_s___l_e_d___c_o_n_f_i_g___s_t_r_u_c_t.md#variable-region-y)** <br>y coordinate of the LED Region (upper left corner)  |
| unsigned short | **[region_width](struct_e_m_v___c_t_l_s___l_e_d___c_o_n_f_i_g___s_t_r_u_c_t.md#variable-region-width)** <br>width of the LED Region  |
| unsigned short | **[region_height](struct_e_m_v___c_t_l_s___l_e_d___c_o_n_f_i_g___s_t_r_u_c_t.md#variable-region-height)** <br>height of the LED Region  |
| [EMV_CTLS_LED_COLORS](group___a_d_k___l_e_d.md#typedef-emv-ctls-led-colors) | **[colors_off](struct_e_m_v___c_t_l_s___l_e_d___c_o_n_f_i_g___s_t_r_u_c_t.md#variable-colors-off)** <br>colors of LEDs in off state  |
| [EMV_CTLS_LED_COLORS](group___a_d_k___l_e_d.md#typedef-emv-ctls-led-colors) | **[colors_on](struct_e_m_v___c_t_l_s___l_e_d___c_o_n_f_i_g___s_t_r_u_c_t.md#variable-colors-on)** <br>colors of LEDs in on state  |
| unsigned char * | **[bg_color](struct_e_m_v___c_t_l_s___l_e_d___c_o_n_f_i_g___s_t_r_u_c_t.md#variable-bg-color)** <br>background color, only used if shape == EMV_CTLS_LED_SHAPE_CIRCLE  |
| unsigned char | **[shape](struct_e_m_v___c_t_l_s___l_e_d___c_o_n_f_i_g___s_t_r_u_c_t.md#variable-shape)** <br>shape of LEDs, one of EMV_CTLS_LED_SHAPE_RECTANGLE, EMV_CTLS_LED_SHAPE_CIRCLE  |
| unsigned short * | **[shape_params](struct_e_m_v___c_t_l_s___l_e_d___c_o_n_f_i_g___s_t_r_u_c_t.md#variable-shape-params)** <br>if shape == EMV_CTLS_LED_SHAPE_RECTANGLE: first value: width of LED, second value: height of LED; if shape == EMV_CTLS_LED_SHAPE_CIRCLE: first value: radius of LED (width=height=2*radius+1)  |
| unsigned char * | **[options](struct_e_m_v___c_t_l_s___l_e_d___c_o_n_f_i_g___s_t_r_u_c_t.md#variable-options)** <br>RFU, set to NULL.  |

## Public Attributes Documentation

### variable region_x

```cpp
unsigned short region_x;
```

x coordinate of the LED Region (upper left corner) 

### variable region_y

```cpp
unsigned short region_y;
```

y coordinate of the LED Region (upper left corner) 

### variable region_width

```cpp
unsigned short region_width;
```

width of the LED Region 

### variable region_height

```cpp
unsigned short region_height;
```

height of the LED Region 

### variable colors_off

```cpp
EMV_CTLS_LED_COLORS colors_off;
```

colors of LEDs in off state 

### variable colors_on

```cpp
EMV_CTLS_LED_COLORS colors_on;
```

colors of LEDs in on state 

### variable bg_color

```cpp
unsigned char * bg_color;
```

background color, only used if shape == EMV_CTLS_LED_SHAPE_CIRCLE 

### variable shape

```cpp
unsigned char shape;
```

shape of LEDs, one of EMV_CTLS_LED_SHAPE_RECTANGLE, EMV_CTLS_LED_SHAPE_CIRCLE 

### variable shape_params

```cpp
unsigned short * shape_params;
```

if shape == EMV_CTLS_LED_SHAPE_RECTANGLE: first value: width of LED, second value: height of LED; if shape == EMV_CTLS_LED_SHAPE_CIRCLE: first value: radius of LED (width=height=2*radius+1) 

### variable options

```cpp
unsigned char * options;
```

RFU, set to NULL. 

-------------------------------

Updated on 2025-06-17 at 11:52:23 +0100