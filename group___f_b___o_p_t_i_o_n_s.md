---
title: Fallback options for magstripe applications
summary: for use in ucFallback of EMV_CT_FALLBCK_MSR_TYPE

---

# Fallback options for magstripe applications

**Module:** **[Transaction execution](group___a_d_k___t_r_x___e_x_e_c.md)** **/** **[Input data](group___d_e_f___f_l_o_w___i_n_p_u_t.md)**

for use in `ucFallback` of [EMV_CT_FALLBCK_MSR_TYPE](group___a_d_k___t_r_x___e_x_e_c.md#typedef-emv-ct-fallbck-msr-type)

## Defines

|                | Name           |
| -------------- | -------------- |
|  | **[FB_NEVER](group___f_b___o_p_t_i_o_n_s.md#define-fb-never)** <br>fallback to magstripe forbidden  |
|  | **[FB_CHIP_APP](group___f_b___o_p_t_i_o_n_s.md#define-fb-chip-app)** <br>fallback allowed, but not in case of  |
|  | **[FB_APP](group___f_b___o_p_t_i_o_n_s.md#define-fb-app)** <br>fallback allowed, but not in case a chip application assigned to this magstripe application is blocked  |
|  | **[FB_CHIP](group___f_b___o_p_t_i_o_n_s.md#define-fb-chip)** <br>fallback allowed but not in case of blocked chip  |
|  | **[FB_ALWAYS](group___f_b___o_p_t_i_o_n_s.md#define-fb-always)** <br>fallback allowed in every case  |




## Macros Documentation

### define FB_NEVER

```
#define FB_NEVER 0x00
```

fallback to magstripe forbidden 

### define FB_CHIP_APP

```
#define FB_CHIP_APP 0x01
```

fallback allowed, but not in case of 



1. blocked chip -# a chip application assigned to this magstripe application is blocked 


### define FB_APP

```
#define FB_APP 0x02
```

fallback allowed, but not in case a chip application assigned to this magstripe application is blocked 

### define FB_CHIP

```
#define FB_CHIP 0x03
```

fallback allowed but not in case of blocked chip 

### define FB_ALWAYS

```
#define FB_ALWAYS 0x04
```

fallback allowed in every case 



-------------------------------

Updated on 2025-06-17 at 11:52:23 +0100