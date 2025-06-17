---
title: Defines for LED states
summary: LED states to be used in EMV_CTLS_LED()

---

# Defines for LED states

**Module:** **[LED control](group___a_d_k___l_e_d.md)**

LED states to be used in [EMV_CTLS_LED()](group___a_d_k___l_e_d.md#function-emv-ctls-led)

## Defines

|                | Name           |
| -------------- | -------------- |
|  | **[CONTACTLESS_LED_OFF](group___a_d_k___l_e_d___d_e_f_i_n_e_s___s_t_a_t_e_s.md#define-contactless-led-off)** <br>Switch LED Off.  |
|  | **[CONTACTLESS_LED_ON](group___a_d_k___l_e_d___d_e_f_i_n_e_s___s_t_a_t_e_s.md#define-contactless-led-on)** <br>Switch LED On.  |
|  | **[CONTACTLESS_LED_IDLE_BLINK](group___a_d_k___l_e_d___d_e_f_i_n_e_s___s_t_a_t_e_s.md#define-contactless-led-idle-blink)** <br>enable blinking: ALWAYS LED 1 is used for blinking, fixed timing according to specs  |
|  | **[CONTACTLESS_LED_ONLINE_BLINK](group___a_d_k___l_e_d___d_e_f_i_n_e_s___s_t_a_t_e_s.md#define-contactless-led-online-blink)** <br>enable blinking: ALWAYS LED 3 is used for blinking, fixed timing according to specs.    Option not available in mode [CONTACTLESS_LED_MODE_API]() |
|  | **[CONTACTLESS_LED_HANDLE_EOT_SILENT](group___a_d_k___l_e_d___d_e_f_i_n_e_s___s_t_a_t_e_s.md#define-contactless-led-handle-eot-silent)** <br>End of Transaction, disable LED in the background after required 750msecs.    Option not available in mode [CONTACTLESS_LED_MODE_API]().  |
|  | **[CONTACTLESS_LED_HANDLE_EOT_SUCCESS](group___a_d_k___l_e_d___d_e_f_i_n_e_s___s_t_a_t_e_s.md#define-contactless-led-handle-eot-success)** <br>End of Transaction, disable LED in the background after required 750msecs + Beep Success.    Option not available in mode [CONTACTLESS_LED_MODE_API]().  |
|  | **[CONTACTLESS_LED_HANDLE_EOT_FAIL](group___a_d_k___l_e_d___d_e_f_i_n_e_s___s_t_a_t_e_s.md#define-contactless-led-handle-eot-fail)** <br>End of Transaction, disable LED in the background after required 750msecs + Beep Fail.    Option not available in mode [CONTACTLESS_LED_MODE_API]().  |
|  | **[CONTACTLESS_LED_HANDLE_EOT_FAIL_BLINK](group___a_d_k___l_e_d___d_e_f_i_n_e_s___s_t_a_t_e_s.md#define-contactless-led-handle-eot-fail-blink)** <br>End of Transaction, LED 4 is blinking 4 times + Beep Fail.    Option not available in mode [CONTACTLESS_LED_MODE_API]().  |
|  | **[CONTACTLESS_LED_HANDLE_EOT_FAIL_BLINK_3](group___a_d_k___l_e_d___d_e_f_i_n_e_s___s_t_a_t_e_s.md#define-contactless-led-handle-eot-fail-blink-3)** <br>End of Transaction, LED 1-3 are blinking 4 times + Beep Fail.    Option not available in mode [CONTACTLESS_LED_MODE_API]().  |




## Macros Documentation

### define CONTACTLESS_LED_OFF

```
#define CONTACTLESS_LED_OFF 0x00
```

Switch LED Off. 

### define CONTACTLESS_LED_ON

```
#define CONTACTLESS_LED_ON 0x01
```

Switch LED On. 

### define CONTACTLESS_LED_IDLE_BLINK

```
#define CONTACTLESS_LED_IDLE_BLINK 0x02
```

enable blinking: ALWAYS LED 1 is used for blinking, fixed timing according to specs 

### define CONTACTLESS_LED_ONLINE_BLINK

```
#define CONTACTLESS_LED_ONLINE_BLINK 0x03
```

enable blinking: ALWAYS LED 3 is used for blinking, fixed timing according to specs.    Option not available in mode [CONTACTLESS_LED_MODE_API]()

### define CONTACTLESS_LED_HANDLE_EOT_SILENT

```
#define CONTACTLESS_LED_HANDLE_EOT_SILENT 0x04
```

End of Transaction, disable LED in the background after required 750msecs.    Option not available in mode [CONTACTLESS_LED_MODE_API](). 

### define CONTACTLESS_LED_HANDLE_EOT_SUCCESS

```
#define CONTACTLESS_LED_HANDLE_EOT_SUCCESS 0x05
```

End of Transaction, disable LED in the background after required 750msecs + Beep Success.    Option not available in mode [CONTACTLESS_LED_MODE_API](). 

### define CONTACTLESS_LED_HANDLE_EOT_FAIL

```
#define CONTACTLESS_LED_HANDLE_EOT_FAIL 0x06
```

End of Transaction, disable LED in the background after required 750msecs + Beep Fail.    Option not available in mode [CONTACTLESS_LED_MODE_API](). 

### define CONTACTLESS_LED_HANDLE_EOT_FAIL_BLINK

```
#define CONTACTLESS_LED_HANDLE_EOT_FAIL_BLINK 0x07
```

End of Transaction, LED 4 is blinking 4 times + Beep Fail.    Option not available in mode [CONTACTLESS_LED_MODE_API](). 

### define CONTACTLESS_LED_HANDLE_EOT_FAIL_BLINK_3

```
#define CONTACTLESS_LED_HANDLE_EOT_FAIL_BLINK_3 0x08
```

End of Transaction, LED 1-3 are blinking 4 times + Beep Fail.    Option not available in mode [CONTACTLESS_LED_MODE_API](). 



-------------------------------

Updated on 2025-06-17 at 11:52:23 +0100