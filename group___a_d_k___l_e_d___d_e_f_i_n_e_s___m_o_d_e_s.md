---
title: Defines for LED modes
summary: LED modes to be used in EMV_CTLS_LED_SetMode()

---

# Defines for LED modes

**Module:** **[LED control](group___a_d_k___l_e_d.md)**

LED modes to be used in [EMV_CTLS_LED_SetMode()](group___a_d_k___l_e_d.md#function-emv-ctls-led-setmode)

## Defines

|                | Name           |
| -------------- | -------------- |
|  | **[CONTACTLESS_LED_MODE_OFF](group___a_d_k___l_e_d___d_e_f_i_n_e_s___m_o_d_e_s.md#define-contactless-led-mode-off)** <br>switching LEDs must be done by the application  |
|  | **[CONTACTLESS_LED_MODE_API](group___a_d_k___l_e_d___d_e_f_i_n_e_s___m_o_d_e_s.md#define-contactless-led-mode-api)** <br>switching LEDs must be done by the API function [EMV_CTLS_LED()](group___a_d_k___l_e_d.md#function-emv-ctls-led) |
|  | **[CONTACTLESS_LED_MODE_EMV](group___a_d_k___l_e_d___d_e_f_i_n_e_s___m_o_d_e_s.md#define-contactless-led-mode-emv)** <br>switching LEDs is done by EMV framework on its own (this is the initial mode)  |




## Macros Documentation

### define CONTACTLESS_LED_MODE_OFF

```
#define CONTACTLESS_LED_MODE_OFF 0x00
```

switching LEDs must be done by the application 

### define CONTACTLESS_LED_MODE_API

```
#define CONTACTLESS_LED_MODE_API 0x01
```

switching LEDs must be done by the API function [EMV_CTLS_LED()](group___a_d_k___l_e_d.md#function-emv-ctls-led)

### define CONTACTLESS_LED_MODE_EMV

```
#define CONTACTLESS_LED_MODE_EMV 0x02
```

switching LEDs is done by EMV framework on its own (this is the initial mode) 



-------------------------------

Updated on 2025-06-17 at 11:52:23 +0100