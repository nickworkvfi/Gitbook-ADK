---
title: Fallback handling after Final Select
summary: DF18, see EMV_CT_APPLIDATA_STRUCT::uc_FallBack_Handling. 

---

# Fallback handling after Final Select

**Module:** **[Configuration](group___a_d_k___c_o_n_f_i_g_u_r_a_t_i_o_n.md)** **/** **[Application data](group___d_e_f___c_o_n_f___a_p_p_l_i.md)**

DF18, see [EMV_CT_APPLIDATA_STRUCT::uc_FallBack_Handling](struct_e_m_v___c_t___a_p_p_l_i_d_a_t_a___s_t_r_u_c_t.md#variable-uc-fallback-handling). 

## Defines

|                | Name           |
| -------------- | -------------- |
|  | **[FB_DEFAULT_EMVCO](group___f_b___f_i_n_a_l___s_e_l.md#define-fb-default-emvco)** <br>Fallback handling like described by EMVCo.  |
|  | **[FB_GERMAN_POS_SPEC](group___f_b___f_i_n_a_l___s_e_l.md#define-fb-german-pos-spec)** <br>Fallback handling according to German spec. Additional specification is done by [EMV_ADK_FALLBACK_AFTER_CVM_NO]() and [EMV_ADK_FALLBACK_AFTER_CVM_YES]().  |
|  | **[FB_NO_UNATTENDED_FALLB](group___f_b___f_i_n_a_l___s_e_l.md#define-fb-no-unattended-fallb)** <br>Unattended terminal: Fallback forbidden.  |




## Macros Documentation

### define FB_DEFAULT_EMVCO

```
#define FB_DEFAULT_EMVCO 0x00
```

Fallback handling like described by EMVCo. 

### define FB_GERMAN_POS_SPEC

```
#define FB_GERMAN_POS_SPEC 0x01
```

Fallback handling according to German spec. Additional specification is done by [EMV_ADK_FALLBACK_AFTER_CVM_NO]() and [EMV_ADK_FALLBACK_AFTER_CVM_YES](). 

### define FB_NO_UNATTENDED_FALLB

```
#define FB_NO_UNATTENDED_FALLB 0x80
```

Unattended terminal: Fallback forbidden. 



-------------------------------

Updated on 2025-06-17 at 11:52:22 +0100