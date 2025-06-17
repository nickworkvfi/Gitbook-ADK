---
title: Defines for LED IDs
summary: LED numbers in EMV_CTLS_LED()

---

# Defines for LED IDs

**Module:** **[LED control](group___a_d_k___l_e_d.md)**

LED numbers in [EMV_CTLS_LED()](group___a_d_k___l_e_d.md#function-emv-ctls-led)

## Defines

|                | Name           |
| -------------- | -------------- |
|  | **[CONTACTLESS_LED_FIRST](group___a_d_k___l_e_d___d_e_f_i_n_e_s___i_d_s.md#define-contactless-led-first)** <br>first contacless LED  |
|  | **[CONTACTLESS_LED_SECOND](group___a_d_k___l_e_d___d_e_f_i_n_e_s___i_d_s.md#define-contactless-led-second)** <br>second contacless LED  |
|  | **[CONTACTLESS_LED_THIRD](group___a_d_k___l_e_d___d_e_f_i_n_e_s___i_d_s.md#define-contactless-led-third)** <br>third contacless LED  |
|  | **[CONTACTLESS_LED_FOURTH](group___a_d_k___l_e_d___d_e_f_i_n_e_s___i_d_s.md#define-contactless-led-fourth)** <br>fourth contacless LED  |
|  | **[CONTACTLESS_LED_BLUE](group___a_d_k___l_e_d___d_e_f_i_n_e_s___i_d_s.md#define-contactless-led-blue)** <br>first LED for signalling field on  |
|  | **[CONTACTLESS_LED_YELLOW](group___a_d_k___l_e_d___d_e_f_i_n_e_s___i_d_s.md#define-contactless-led-yellow)** <br>second LED indicating chip card communication  |
|  | **[CONTACTLESS_LED_GREEN](group___a_d_k___l_e_d___d_e_f_i_n_e_s___i_d_s.md#define-contactless-led-green)** <br>third LED "Card read successfully"  |
|  | **[CONTACTLESS_LED_RED](group___a_d_k___l_e_d___d_e_f_i_n_e_s___i_d_s.md#define-contactless-led-red)** <br>fourth LED indicating error  |
|  | **[CONTACTLESS_LED_0](group___a_d_k___l_e_d___d_e_f_i_n_e_s___i_d_s.md#define-contactless-led-0)** <br>Contactless LED 1,.  |
|  | **[CONTACTLESS_LED_1](group___a_d_k___l_e_d___d_e_f_i_n_e_s___i_d_s.md#define-contactless-led-1)** <br>Contactless LED 2,.  |
|  | **[CONTACTLESS_LED_2](group___a_d_k___l_e_d___d_e_f_i_n_e_s___i_d_s.md#define-contactless-led-2)** <br>Contactless LED 3,.  |
|  | **[CONTACTLESS_LED_3](group___a_d_k___l_e_d___d_e_f_i_n_e_s___i_d_s.md#define-contactless-led-3)** <br>Contactless LED 4,.  |
|  | **[CONTACTLESS_LED_ALL](group___a_d_k___l_e_d___d_e_f_i_n_e_s___i_d_s.md#define-contactless-led-all)** <br>All Contactless LEDs.  |
|  | **[CONTACTLESS_LED_LOGO](group___a_d_k___l_e_d___d_e_f_i_n_e_s___i_d_s.md#define-contactless-led-logo)** <br>CTLS Logo LED (only UX family), not combinable with other LEDs.  |




## Macros Documentation

### define CONTACTLESS_LED_FIRST

```
#define CONTACTLESS_LED_FIRST 0x01
```

first contacless LED 

### define CONTACTLESS_LED_SECOND

```
#define CONTACTLESS_LED_SECOND 0x02
```

second contacless LED 

### define CONTACTLESS_LED_THIRD

```
#define CONTACTLESS_LED_THIRD 0x04
```

third contacless LED 

### define CONTACTLESS_LED_FOURTH

```
#define CONTACTLESS_LED_FOURTH 0x08
```

fourth contacless LED 

### define CONTACTLESS_LED_BLUE

```
#define CONTACTLESS_LED_BLUE CONTACTLESS_LED_FIRST
```

first LED for signalling field on 

### define CONTACTLESS_LED_YELLOW

```
#define CONTACTLESS_LED_YELLOW CONTACTLESS_LED_SECOND
```

second LED indicating chip card communication 

### define CONTACTLESS_LED_GREEN

```
#define CONTACTLESS_LED_GREEN CONTACTLESS_LED_THIRD
```

third LED "Card read successfully" 

### define CONTACTLESS_LED_RED

```
#define CONTACTLESS_LED_RED CONTACTLESS_LED_FOURTH
```

fourth LED indicating error 

### define CONTACTLESS_LED_0

```
#define CONTACTLESS_LED_0 CONTACTLESS_LED_FIRST
```

Contactless LED 1,. 

**Deprecated**: 

because confusing, use [CONTACTLESS_LED_FIRST](group___a_d_k___l_e_d___d_e_f_i_n_e_s___i_d_s.md#define-contactless-led-first) instead 

### define CONTACTLESS_LED_1

```
#define CONTACTLESS_LED_1 CONTACTLESS_LED_SECOND
```

Contactless LED 2,. 

**Deprecated**: 

because confusing, use [CONTACTLESS_LED_SECOND](group___a_d_k___l_e_d___d_e_f_i_n_e_s___i_d_s.md#define-contactless-led-second) instead 

### define CONTACTLESS_LED_2

```
#define CONTACTLESS_LED_2 CONTACTLESS_LED_THIRD
```

Contactless LED 3,. 

**Deprecated**: 

because confusing, use [CONTACTLESS_LED_THIRD](group___a_d_k___l_e_d___d_e_f_i_n_e_s___i_d_s.md#define-contactless-led-third) instead 

### define CONTACTLESS_LED_3

```
#define CONTACTLESS_LED_3 CONTACTLESS_LED_FOURTH
```

Contactless LED 4,. 

**Deprecated**: 

because confusing, use [CONTACTLESS_LED_FOURTH](group___a_d_k___l_e_d___d_e_f_i_n_e_s___i_d_s.md#define-contactless-led-fourth) instead 

### define CONTACTLESS_LED_ALL

```
#define CONTACTLESS_LED_ALL 0x0F
```

All Contactless LEDs. 

### define CONTACTLESS_LED_LOGO

```
#define CONTACTLESS_LED_LOGO 0x80
```

CTLS Logo LED (only UX family), not combinable with other LEDs. 



-------------------------------

Updated on 2025-06-17 at 11:52:23 +0100