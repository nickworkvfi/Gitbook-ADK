---
title: Application flow capabilities for EPAL
summary: Contents of EMV_CTLS_APPLIDATA_EK_STRUCT::AppFlowCap_DFAB31. 

---

# Application flow capabilities for EPAL

**Module:** **[Configuration](group___a_d_k___c_o_n_f_i_g_u_r_a_t_i_o_n.md)** **/** **[Application data](group___d_e_f___c_o_n_f___a_p_p_l_i.md)**

Contents of [EMV_CTLS_APPLIDATA_EK_STRUCT::AppFlowCap_DFAB31](struct_e_m_v___c_t_l_s___a_p_p_l_i_d_a_t_a___e_k___s_t_r_u_c_t.md#variable-appflowcap-dfab31). 

## Defines

|                | Name           |
| -------------- | -------------- |
|  | **[EMV_CTLS_FLOW_EK_READ_CARD_REFUND_0](group___d_e_f___f_l_o_w___e_k.md#define-emv-ctls-flow-ek-read-card-refund-0)** <br>B1b1: (Vel: y VFI: n) Work-around: Use transaction type refund for card read transactions as the terminal ignores AppAction parameter.  |




## Macros Documentation

### define EMV_CTLS_FLOW_EK_READ_CARD_REFUND_0

```
#define EMV_CTLS_FLOW_EK_READ_CARD_REFUND_0 0x01
```

B1b1: (Vel: y VFI: n) Work-around: Use transaction type refund for card read transactions as the terminal ignores AppAction parameter. 



-------------------------------

Updated on 2025-06-17 at 11:52:22 +0100