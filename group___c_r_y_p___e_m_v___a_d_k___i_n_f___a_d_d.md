---
title: Additional information in cryptogram information (9F27)
summary: 9F27 (cryptogram information) can carry more information than just AAC, TC, and ARQC. The ICC has the possibility to give back these additional information. Calling application may use these defines to analyse EMV_CT_TRANSRES_STRUCT::T_9F27_CryptInfo. 

---

# Additional information in cryptogram information (9F27)

**Module:** **[Transaction execution](group___a_d_k___t_r_x___e_x_e_c.md)** **/** **[Output data](group___d_e_f___f_l_o_w___o_u_t_p_u_t.md)**

9F27 (cryptogram information) can carry more information than just AAC, TC, and ARQC. The ICC has the possibility to give back these additional information. Calling application may use these defines to analyse [EMV_CT_TRANSRES_STRUCT::T_9F27_CryptInfo](struct_e_m_v___c_t___t_r_a_n_s_r_e_s___s_t_r_u_c_t.md#variable-t-9f27-cryptinfo). 

## Defines

|                | Name           |
| -------------- | -------------- |
|  | **[EMV_ADK_CARD_REQUESTS_ADVICE](group___c_r_y_p___e_m_v___a_d_k___i_n_f___a_d_d.md#define-emv-adk-card-requests-advice)** <br>Card requests advice.  |
|  | **[EMV_ADK_CARD_ADDITIONAL_INFO](group___c_r_y_p___e_m_v___a_d_k___i_n_f___a_d_d.md#define-emv-adk-card-additional-info)** <br>Mask for "service not allowed", "PIN try limit exceeded", "Issuer authentication failed".  |




## Macros Documentation

### define EMV_ADK_CARD_REQUESTS_ADVICE

```
#define EMV_ADK_CARD_REQUESTS_ADVICE 0x08
```

Card requests advice. 

### define EMV_ADK_CARD_ADDITIONAL_INFO

```
#define EMV_ADK_CARD_ADDITIONAL_INFO 0x07
```

Mask for "service not allowed", "PIN try limit exceeded", "Issuer authentication failed". 



-------------------------------

Updated on 2025-06-17 at 11:52:23 +0100