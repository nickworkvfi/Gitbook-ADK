---
title: Defines for LED handling
summary: LED numbers and modes to be used in EMV_CT_LED()

---

# Defines for LED handling

**Module:** **[LED control](group___a_d_k___l_e_d.md)**

LED numbers and modes to be used in [EMV_CT_LED()](group___f_u_n_c___c_o_n_f.md#function-emv-ct-led)

## Defines

|                | Name           |
| -------------- | -------------- |
|  | **[CONTACT_LED_ID_0](group___a_d_k___l_e_d___d_e_f_i_n_e_s.md#define-contact-led-id-0)** <br>There is currently maximum one CT Slot.  |
|  | **[CONTACT_LED_OFF](group___a_d_k___l_e_d___d_e_f_i_n_e_s.md#define-contact-led-off)** <br>Switch LED Off.  |
|  | **[CONTACT_LED_ON](group___a_d_k___l_e_d___d_e_f_i_n_e_s.md#define-contact-led-on)** <br>Switch LED On.  |
|  | **[CONTACT_LED_BLINK](group___a_d_k___l_e_d___d_e_f_i_n_e_s.md#define-contact-led-blink)** <br>Enable blinking, fixed timing.  |
|  | **[CONTACT_LED_COLOR_WHITE](group___a_d_k___l_e_d___d_e_f_i_n_e_s.md#define-contact-led-color-white)** <br>white led  |
|  | **[CONTACT_LED_COLOR_RED](group___a_d_k___l_e_d___d_e_f_i_n_e_s.md#define-contact-led-color-red)** <br>red led  |
|  | **[CONTACT_LED_COLOR_GREEN](group___a_d_k___l_e_d___d_e_f_i_n_e_s.md#define-contact-led-color-green)** <br>green led  |
|  | **[CONTACT_LED_COLOR_BLUE](group___a_d_k___l_e_d___d_e_f_i_n_e_s.md#define-contact-led-color-blue)** <br>blue led  |
|  | **[CONTACT_LED_COLOR_YELLOW](group___a_d_k___l_e_d___d_e_f_i_n_e_s.md#define-contact-led-color-yellow)** <br>yellow led  |




## Macros Documentation

### define CONTACT_LED_ID_0

```
#define CONTACT_LED_ID_0 0x00
```

There is currently maximum one CT Slot. 

### define CONTACT_LED_OFF

```
#define CONTACT_LED_OFF 0x00
```

Switch LED Off. 

### define CONTACT_LED_ON

```
#define CONTACT_LED_ON 0x01
```

Switch LED On. 

### define CONTACT_LED_BLINK

```
#define CONTACT_LED_BLINK 0x02
```

Enable blinking, fixed timing. 

**Deprecated**: 

: No more supported, for instance, because it relies on SVRMGR functionality that is going to be removed 

### define CONTACT_LED_COLOR_WHITE

```
#define CONTACT_LED_COLOR_WHITE 0x01
```

white led 

### define CONTACT_LED_COLOR_RED

```
#define CONTACT_LED_COLOR_RED 0x02
```

red led 

### define CONTACT_LED_COLOR_GREEN

```
#define CONTACT_LED_COLOR_GREEN 0x03
```

green led 

### define CONTACT_LED_COLOR_BLUE

```
#define CONTACT_LED_COLOR_BLUE 0x04
```

blue led 

### define CONTACT_LED_COLOR_YELLOW

```
#define CONTACT_LED_COLOR_YELLOW 0x05
```

yellow led 



-------------------------------

Updated on 2025-06-17 at 11:52:23 +0100