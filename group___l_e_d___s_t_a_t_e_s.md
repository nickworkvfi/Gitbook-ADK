---
title: LED states
summary: These are the states of the three MSR LEDs which can be set by MSR_SwitchLeds(). On devices that don't have multicolored LEDs, all "color defines" are equivalent and imply "LED on". As there is currently no device with multicolored LEDs, multicolor feature is not implemented yet. 

---

# LED states

These are the states of the three MSR LEDs which can be set by [MSR_SwitchLeds()](). On devices that don't have multicolored LEDs, all "color defines" are equivalent and imply "LED on". As there is currently no device with multicolored LEDs, multicolor feature is not implemented yet. 

## Defines

|                | Name           |
| -------------- | -------------- |
|  | **[MSR_LED_OFF](group___l_e_d___s_t_a_t_e_s.md#define-msr-led-off)**  |
|  | **[MSR_LED_WHITE](group___l_e_d___s_t_a_t_e_s.md#define-msr-led-white)**  |
|  | **[MSR_LED_RED](group___l_e_d___s_t_a_t_e_s.md#define-msr-led-red)**  |
|  | **[MSR_LED_GREEN](group___l_e_d___s_t_a_t_e_s.md#define-msr-led-green)**  |
|  | **[MSR_LED_BLUE](group___l_e_d___s_t_a_t_e_s.md#define-msr-led-blue)**  |
|  | **[MSR_LED_YELLOW](group___l_e_d___s_t_a_t_e_s.md#define-msr-led-yellow)**  |
|  | **[MSR_LED_BLINK](group___l_e_d___s_t_a_t_e_s.md#define-msr-led-blink)**  |




## Macros Documentation

### define MSR_LED_OFF

```
#define MSR_LED_OFF 0x0000
```


LED is switched off. 


### define MSR_LED_WHITE

```
#define MSR_LED_WHITE 0x0001
```


LED shines white. 


### define MSR_LED_RED

```
#define MSR_LED_RED 0x0002
```


LED shines red. 


### define MSR_LED_GREEN

```
#define MSR_LED_GREEN 0x0003
```


LED shines green. 


### define MSR_LED_BLUE

```
#define MSR_LED_BLUE 0x0004
```


LED shines blue. 


### define MSR_LED_YELLOW

```
#define MSR_LED_YELLOW 0x0005
```


LED shines yellow. 


### define MSR_LED_BLINK

```
#define MSR_LED_BLINK 0x0100
```


LED blinks (500ms on, 500ms off), must be combined with one of the "color defines". 




-------------------------------

Updated on 2025-06-17 at 11:52:23 +0100