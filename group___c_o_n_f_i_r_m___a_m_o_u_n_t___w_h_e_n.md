---
title: Amount confirmation before or after CVM processing
summary: Byte defines for EMV_CT_PAYMENT_STRUCT::uc_AmountConfirmation
 only valid in case no combined amount confirmation configured (see EMV_CT_CONF_AMOUNT_PIN in Defines for Application flow capabilities) 

---

# Amount confirmation before or after CVM processing

**Module:** **[Transaction execution](group___a_d_k___t_r_x___e_x_e_c.md)** **/** **[Input data](group___d_e_f___f_l_o_w___i_n_p_u_t.md)**

Byte defines for [EMV_CT_PAYMENT_STRUCT::uc_AmountConfirmation](struct_e_m_v___c_t___p_a_y_m_e_n_t___s_t_r_u_c_t.md#variable-uc-amountconfirmation)   only valid in case no combined amount confirmation configured (see [EMV_CT_CONF_AMOUNT_PIN](group___a_p_p___f_l_o_w___c_a_p_s.md#define-emv-ct-conf-amount-pin) in [Defines for Application flow capabilities](group___a_p_p___f_l_o_w___c_a_p_s.md)) 

## Defines

|                | Name           |
| -------------- | -------------- |
|  | **[CONFIRM_AMOUNT_BEFORE_CVM](group___c_o_n_f_i_r_m___a_m_o_u_n_t___w_h_e_n.md#define-confirm-amount-before-cvm)** <br>**default**   immediately after language selection before CVM  |
|  | **[CONFIRM_AMOUNT_AFTER_CVM](group___c_o_n_f_i_r_m___a_m_o_u_n_t___w_h_e_n.md#define-confirm-amount-after-cvm)** <br>after cardholder verification  |




## Macros Documentation

### define CONFIRM_AMOUNT_BEFORE_CVM

```
#define CONFIRM_AMOUNT_BEFORE_CVM 0x00
```

**default**   immediately after language selection before CVM 

### define CONFIRM_AMOUNT_AFTER_CVM

```
#define CONFIRM_AMOUNT_AFTER_CVM 0x01
```

after cardholder verification 



-------------------------------

Updated on 2025-06-17 at 11:52:23 +0100