---
title: Options bitmask
summary: These options configure the behavior of magnetic card reader library, set by MSR_SetOptions(). A combination is possible using | operator. 

---

# Options bitmask

These options configure the behavior of magnetic card reader library, set by [MSR_SetOptions()](). A combination is possible using | operator. 

## Defines

|                | Name           |
| -------------- | -------------- |
|  | **[MSR_UX_ENHANCEMENTS](group___m_s_r___o_p_t_i_o_n_s___b_i_t_m_a_s_k.md#define-msr-ux-enhancements)** <br>options[0] Hybrid reader: ignore card insertion  |
|  | **[MSR_SAMSUNG_TRACK1](group___m_s_r___o_p_t_i_o_n_s___b_i_t_m_a_s_k.md#define-msr-samsung-track1)** <br>options[0] not used anymore  |
|  | **[MSR_ONE_SWIPE](group___m_s_r___o_p_t_i_o_n_s___b_i_t_m_a_s_k.md#define-msr-one-swipe)** <br>options[0] Only read on first swipe  |
|  | **[MSR_LEDS](group___m_s_r___o_p_t_i_o_n_s___b_i_t_m_a_s_k.md#define-msr-leds)** <br>options[0] Light MSR LEDs while card swipe is possible.  |
|  | **[MSR_ENABLE_LICENSE_DECODE](group___m_s_r___o_p_t_i_o_n_s___b_i_t_m_a_s_k.md#define-msr-enable-license-decode)** <br>options[0] Enable detection of US driving license  |
|  | **[MSR_DETECT_ISO](group___m_s_r___o_p_t_i_o_n_s___b_i_t_m_a_s_k.md#define-msr-detect-iso)** <br>options[1] Detect ISO cards  |
|  | **[MSR_DETECT_JIS_II](group___m_s_r___o_p_t_i_o_n_s___b_i_t_m_a_s_k.md#define-msr-detect-jis-ii)** <br>options[1] Detect JIS-II cards  |
|  | **[MSR_DETECT_ALL](group___m_s_r___o_p_t_i_o_n_s___b_i_t_m_a_s_k.md#define-msr-detect-all)** <br>options[1] Detect both ISO and JIS-II cards.  |




## Macros Documentation

### define MSR_UX_ENHANCEMENTS

```
#define MSR_UX_ENHANCEMENTS 0x01
```

options[0] Hybrid reader: ignore card insertion 

Relevant for UX, V/OS only: use improved noise filter and ignore card insertion, only read on card removal. 


### define MSR_SAMSUNG_TRACK1

```
#define MSR_SAMSUNG_TRACK1 0x02
```

options[0] not used anymore 

**Deprecated**: 

Samsung LoopPay Detection is activated by default. 

### define MSR_ONE_SWIPE

```
#define MSR_ONE_SWIPE 0x04
```

options[0] Only read on first swipe 

In opposite to default behavior only read first swiped card after each call of [MSR_Activate()](msr_8h.md#function-msr-activate). Subsequently swiped cards will not be read and will not overwrite the stored data. The stored data is deleted as usually upon call of [MSR_GetData()](msr_8h.md#function-msr-getdata) or [MSR_Deactivate()](msr_8h.md#function-msr-deactivate). To read the next card application has to call [MSR_Deactivate()](msr_8h.md#function-msr-deactivate) and [MSR_Activate()](msr_8h.md#function-msr-activate). 


### define MSR_LEDS

```
#define MSR_LEDS 0x08
```

options[0] Light MSR LEDs while card swipe is possible. 

### define MSR_ENABLE_LICENSE_DECODE

```
#define MSR_ENABLE_LICENSE_DECODE 0x10
```

options[0] Enable detection of US driving license 

Enable the decoding of California Drivers License and American Association of Motor Vehicle Administrators (AAMVA) Drivers License. By default, this option is disabled. 


### define MSR_DETECT_ISO

```
#define MSR_DETECT_ISO 0x01
```

options[1] Detect ISO cards 

this is the default and presumed if options[1] == 0. 


### define MSR_DETECT_JIS_II

```
#define MSR_DETECT_JIS_II 0x02
```

options[1] Detect JIS-II cards 

Currently only supported on V/OS2. 


### define MSR_DETECT_ALL

```
#define MSR_DETECT_ALL 0x03
```

options[1] Detect both ISO and JIS-II cards. 

JIS-II cards currently only supported on V/OS2. 




-------------------------------

Updated on 2025-06-17 at 11:52:23 +0100