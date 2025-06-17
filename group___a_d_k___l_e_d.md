---
title: LED control

---

# LED control



## Modules

| Name           |
| -------------- |
| **[Defines for LED IDs](group___a_d_k___l_e_d___d_e_f_i_n_e_s___i_d_s.md)** <br>LED numbers in [EMV_CTLS_LED()](group___a_d_k___l_e_d.md#function-emv-ctls-led) |
| **[Defines for LED states](group___a_d_k___l_e_d___d_e_f_i_n_e_s___s_t_a_t_e_s.md)** <br>LED states to be used in [EMV_CTLS_LED()](group___a_d_k___l_e_d.md#function-emv-ctls-led) |
| **[Defines for LED modes](group___a_d_k___l_e_d___d_e_f_i_n_e_s___m_o_d_e_s.md)** <br>LED modes to be used in [EMV_CTLS_LED_SetMode()](group___a_d_k___l_e_d.md#function-emv-ctls-led-setmode) |
| **[Defines for LED handling](group___a_d_k___l_e_d___d_e_f_i_n_e_s.md)** <br>LED numbers and modes to be used in [EMV_CT_LED()](group___f_u_n_c___c_o_n_f.md#function-emv-ct-led) |

## Classes

|                | Name           |
| -------------- | -------------- |
| struct | **[EMV_CTLS_LED_COLORS_STRUCT](struct_e_m_v___c_t_l_s___l_e_d___c_o_l_o_r_s___s_t_r_u_c_t.md)** <br>Data structure for LED colors. Input for [EMV_CTLS_LED_ConfigDesign_Extended()]() |
| struct | **[EMV_CTLS_LED_CONFIG_STRUCT](struct_e_m_v___c_t_l_s___l_e_d___c_o_n_f_i_g___s_t_r_u_c_t.md)** <br>Data structure for LED configuration. Input for [EMV_CTLS_LED_ConfigDesign_Extended()]() |

## Types

|                | Name           |
| -------------- | -------------- |
| typedef struct [EMV_CTLS_LED_COLORS_STRUCT](struct_e_m_v___c_t_l_s___l_e_d___c_o_l_o_r_s___s_t_r_u_c_t.md) | **[EMV_CTLS_LED_COLORS](group___a_d_k___l_e_d.md#typedef-emv-ctls-led-colors)** <br>Data structure for LED colors. Input for [EMV_CTLS_LED_ConfigDesign_Extended()]() |
| typedef struct [EMV_CTLS_LED_CONFIG_STRUCT](struct_e_m_v___c_t_l_s___l_e_d___c_o_n_f_i_g___s_t_r_u_c_t.md) | **[EMV_CTLS_LED_CONFIG](group___a_d_k___l_e_d.md#typedef-emv-ctls-led-config)** <br>Data structure for LED configuration. Input for [EMV_CTLS_LED_ConfigDesign_Extended()]() |

## Functions

|                | Name           |
| -------------- | -------------- |
| [DLL_CLC](_e_m_v___c_t_l_s___interface_8h.md#define-dll-clc) unsigned char | **[EMV_CTLS_LED_SetMode](group___a_d_k___l_e_d.md#function-emv-ctls-led-setmode)**(unsigned char ucLedMode)<br>Set mode of LED control.  |
| [DLL_CLC](_e_m_v___c_t_l_s___interface_8h.md#define-dll-clc) unsigned char | **[EMV_CTLS_LED](group___a_d_k___l_e_d.md#function-emv-ctls-led)**(unsigned char ucLedId, unsigned char ucLedState)<br>Switch on LED.  |
| [DLL_CLC](_e_m_v___c_t_l_s___interface_8h.md#define-dll-clc) unsigned char | **[EMV_CTLS_LED_ConfigDesign](group___a_d_k___l_e_d.md#function-emv-ctls-led-configdesign)**(unsigned short width, unsigned short height, unsigned char * color_off, unsigned char * color_on, unsigned short xRegion, unsigned short yRegion, unsigned short wRegion, unsigned short hRegion)<br>Configure the desing for the framebuffer LEDs used for virtual CTLS LEDs  ** Only required when using virtual LEDs. **  .  |
| [DLL_CLC](_e_m_v___c_t_l_s___interface_8h.md#define-dll-clc) unsigned char | **[EMV_CTLS_LED_ConfigDesign_Extended](group___a_d_k___l_e_d.md#function-emv-ctls-led-configdesign-extended)**(const [EMV_CTLS_LED_CONFIG](group___a_d_k___l_e_d.md#typedef-emv-ctls-led-config) * led_config)<br>Configure the design for the framebuffer LEDs used for virtual CTLS LEDs  ** Only required when using virtual LEDs. **  .  |

## Defines

|                | Name           |
| -------------- | -------------- |
|  | **[EMV_CTLS_LED_SHAPE_RECTANGLE](group___a_d_k___l_e_d.md#define-emv-ctls-led-shape-rectangle)** <br>Data structure for LED colors. Used in [EMV_CTLS_LED_CONFIG_STRUCT::shape](struct_e_m_v___c_t_l_s___l_e_d___c_o_n_f_i_g___s_t_r_u_c_t.md#variable-shape).  |

## Types Documentation

### typedef EMV_CTLS_LED_COLORS

```
typedef struct EMV_CTLS_LED_COLORS_STRUCT EMV_CTLS_LED_COLORS;
```

Data structure for LED colors. Input for [EMV_CTLS_LED_ConfigDesign_Extended()]()

### typedef EMV_CTLS_LED_CONFIG

```
typedef struct EMV_CTLS_LED_CONFIG_STRUCT EMV_CTLS_LED_CONFIG;
```

Data structure for LED configuration. Input for [EMV_CTLS_LED_ConfigDesign_Extended()]()


## Functions Documentation

### function EMV_CTLS_LED_SetMode

```
DLL_CLC unsigned char EMV_CTLS_LED_SetMode(
    unsigned char ucLedMode
)
```

Set mode of LED control. 

**Parameters**: 

  * **ucLedMode** LED mode, see [Defines for LED modes](group___a_d_k___l_e_d___d_e_f_i_n_e_s___m_o_d_e_s.md)


**Return**: [EMV_ADK_OK](group___a_d_k___r_e_t___c_o_d_e.md#define-emv-adk-ok): success
[EMV_ADK_TLV_BUILD_ERR](group___a_d_k___r_e_t___c_o_d_e.md#define-emv-adk-tlv-build-err): TLV processing problem
[EMV_ADK_INTERNAL](group___a_d_k___r_e_t___c_o_d_e.md#define-emv-adk-internal): internal communication problem, illegal file content, memory allocation
[EMV_ADK_NOT_ALLOWED](group___a_d_k___r_e_t___c_o_d_e.md#define-emv-adk-not-allowed): function not allowed in a concurrent call or not allowed within callback

**Author**: GSS R&D Germany

**Note**: For special needs only. Usage of [EMV_CTLS_LED()](group___a_d_k___l_e_d.md#function-emv-ctls-led) is possible without using this function.


Before starting a contactless transaction, it must be set to `CONTACTLESS_LED_MODE_EMV`. In case the application wants to switch LEDs independent of EMV, it may set the mode to `CONTACTLESS_LED_MODE_API`. The status is saved when switching to EMV mode at the beginning of a transaction and restored once switching back to API mode. This use case is optional. By default, the application may simply use the EMV mode. In EMV mode, the application has even the ability to change the LEDs after the end of the transaction (e.g. switch on idle blinking).

Transport tags used for serialization: [CLA_LED](group___a_d_k___t_r_a_n_s_p_o_r_t___t_a_g_s.md#define-cla-led)[INS_LED_MODE](group___a_d_k___t_r_a_n_s_p_o_r_t___t_a_g_s.md#define-ins-led-mode)


### function EMV_CTLS_LED

```
DLL_CLC unsigned char EMV_CTLS_LED(
    unsigned char ucLedId,
    unsigned char ucLedState
)
```

Switch on LED. 

**Parameters**: 

  * **ucLedId** LED number, see [Defines for LED IDs](group___a_d_k___l_e_d___d_e_f_i_n_e_s___i_d_s.md)

 This is a combination of LEDs. (use binary bitwise inclusive OR of LED-Bit-masks defined in [Defines for LED IDs](group___a_d_k___l_e_d___d_e_f_i_n_e_s___i_d_s.md)) 

 Bits which are not defined in [Defines for LED IDs](group___a_d_k___l_e_d___d_e_f_i_n_e_s___i_d_s.md) should be 0. They are reserved for future use and will be ignored. 
  * **ucLedState** LED state, see [Defines for LED states](group___a_d_k___l_e_d___d_e_f_i_n_e_s___s_t_a_t_e_s.md)


**Return**: [EMV_ADK_OK](group___a_d_k___r_e_t___c_o_d_e.md#define-emv-adk-ok): success
[EMV_ADK_TLV_BUILD_ERR](group___a_d_k___r_e_t___c_o_d_e.md#define-emv-adk-tlv-build-err): TLV processing problem
[EMV_ADK_INTERNAL](group___a_d_k___r_e_t___c_o_d_e.md#define-emv-adk-internal): internal communication problem, illegal file content, memory allocation
[EMV_ADK_NOT_ALLOWED](group___a_d_k___r_e_t___c_o_d_e.md#define-emv-adk-not-allowed): function not allowed in a concurrent call or not allowed within callback

**Author**: GSS R&D Germany

Using this function instead of ADK-GUI API ([ADK-GUI Programmers Guide]) may be useful as

* ADK-GUI does not control physical (hardware) LEDs
* in standard mode the SDI has control of the UI
* blinking functionality for 1st LED can be used
* application can use common code for terminals with and without physical LEDs
* "end of transaction" handling (e.g. [CONTACTLESS_LED_HANDLE_EOT_SUCCESS](group___a_d_k___l_e_d___d_e_f_i_n_e_s___s_t_a_t_e_s.md#define-contactless-led-handle-eot-success)) can be used for domestic cards

Transport tags used for serialization: [CLA_LED](group___a_d_k___t_r_a_n_s_p_o_r_t___t_a_g_s.md#define-cla-led)[INS_LED_SWITCH](group___a_d_k___t_r_a_n_s_p_o_r_t___t_a_g_s.md#define-ins-led-switch)

[Explanation in programmers guide]


### function EMV_CTLS_LED_ConfigDesign

```
DLL_CLC unsigned char EMV_CTLS_LED_ConfigDesign(
    unsigned short width,
    unsigned short height,
    unsigned char * color_off,
    unsigned char * color_on,
    unsigned short xRegion,
    unsigned short yRegion,
    unsigned short wRegion,
    unsigned short hRegion
)
```

Configure the desing for the framebuffer LEDs used for virtual CTLS LEDs  ** Only required when using virtual LEDs. **  . 

**Parameters**: 

  * **width** width of the rectangular LED 
  * **height** height of the rectangular LED 
  * **color_off** off color (24bit) (usually black == 0) 
  * **color_on** color of the LED (24bit) 
  * **xRegion** x coordinate of the LED Region (upper left corner) 
  * **yRegion** y coordinate of the LED Region (upper left corner) 
  * **wRegion** width of the LED Region 
  * **hRegion** height of the LED Region


**Deprecated**: 

The direct framebuffer approach is deprecated - use LED callbacks and LED-API from ADK-GUIPRT instead

**Return**: [EMV_ADK_OK](group___a_d_k___r_e_t___c_o_d_e.md#define-emv-adk-ok): success
[EMV_ADK_TLV_BUILD_ERR](group___a_d_k___r_e_t___c_o_d_e.md#define-emv-adk-tlv-build-err): TLV processing problem
[EMV_ADK_INTERNAL](group___a_d_k___r_e_t___c_o_d_e.md#define-emv-adk-internal): internal communication problem, illegal file content, memory allocation
[EMV_ADK_PARAM](group___a_d_k___r_e_t___c_o_d_e.md#define-emv-adk-param): bad color_off or color_on input params
[EMV_ADK_NOT_ALLOWED](group___a_d_k___r_e_t___c_o_d_e.md#define-emv-adk-not-allowed): function not allowed in a concurrent call or not allowed within callback
[EMV_ADK_NO_EXEC](group___a_d_k___r_e_t___c_o_d_e.md#define-emv-adk-no-exec): terminal is not VOS or VOS2

**Author**: GSS R&D Germany



Transport tags used for serialization: [CLA_LED](group___a_d_k___t_r_a_n_s_p_o_r_t___t_a_g_s.md#define-cla-led)[INS_LED_CONF_DESIGN](group___a_d_k___t_r_a_n_s_p_o_r_t___t_a_g_s.md#define-ins-led-conf-design)


### function EMV_CTLS_LED_ConfigDesign_Extended

```
DLL_CLC unsigned char EMV_CTLS_LED_ConfigDesign_Extended(
    const EMV_CTLS_LED_CONFIG * led_config
)
```

Configure the design for the framebuffer LEDs used for virtual CTLS LEDs  ** Only required when using virtual LEDs. **  . 

**Parameters**: 

  * **led_config** LED configuration, see [EMV_CTLS_LED_CONFIG_STRUCT](struct_e_m_v___c_t_l_s___l_e_d___c_o_n_f_i_g___s_t_r_u_c_t.md)


**Deprecated**: 

The direct framebuffer approach is deprecated - use LED callbacks and LED-API from ADK-GUIPRT instead

**Return**: `0` ... okay 
`!=0` ... error 

**Author**: GSS R&D Germany



Coloured LEDs should be used together with [INPUT_CTLS_TRM_FLOWOPT_LED_EP_OPTION_2](group___t_e_r_m___f_l_o_w___o_p_t_i_o_n_s.md#define-input-ctls-trm-flowopt-led-ep-option-2).

Transport tags used for serialization: [CLA_LED](group___a_d_k___t_r_a_n_s_p_o_r_t___t_a_g_s.md#define-cla-led)[INS_LED_CONF_DESIGN](group___a_d_k___t_r_a_n_s_p_o_r_t___t_a_g_s.md#define-ins-led-conf-design)




## Macros Documentation

### define EMV_CTLS_LED_SHAPE_RECTANGLE

```
#define EMV_CTLS_LED_SHAPE_RECTANGLE 0
```

Data structure for LED colors. Used in [EMV_CTLS_LED_CONFIG_STRUCT::shape](struct_e_m_v___c_t_l_s___l_e_d___c_o_n_f_i_g___s_t_r_u_c_t.md#variable-shape). 

rectangular LEDs 




-------------------------------

Updated on 2025-06-17 at 11:52:23 +0100