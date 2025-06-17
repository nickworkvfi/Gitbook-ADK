---
title: Scheme specific transaction types
summary: Defines for EMV_CTLS_START_TYPE::TransType. 

---

# Scheme specific transaction types

**Module:** **[Transaction execution](group___a_d_k___t_r_x___e_x_e_c.md)** **/** **[Input data](group___d_e_f___f_l_o_w___i_n_p_u_t.md)**

Defines for [EMV_CTLS_START_TYPE::TransType](struct_e_m_v___c_t_l_s___s_t_a_r_t___s_t_r_u_c_t.md#variable-transtype). 

## Defines

|                | Name           |
| -------------- | -------------- |
|  | **[EMV_CTLS_TRAN_TYPE_PURE_GETDATA](group___c_l_t_r_x___s_c_h_e_m_e___t_r_x___t_y_p_e_s.md#define-emv-ctls-tran-type-pure-getdata)** <br>Gemalto/Pure: Retrieval of application proprietary data elements using GET DATA command, needs to be activated by means of [EMV_CTLS_FLOW_GK_SUPPORT_GETDATA_0](group___d_e_f___f_l_o_w___g_k.md#define-emv-ctls-flow-gk-support-getdata-0).  |
|  | **[EMV_CTLS_TRAN_TYPE_PURE_PUTDATA](group___c_l_t_r_x___s_c_h_e_m_e___t_r_x___t_y_p_e_s.md#define-emv-ctls-tran-type-pure-putdata)** <br>Gemalto/Pure: Update of application data proprietary elements using PUT DATA command, needs to be activated by means of [EMV_CTLS_FLOW_GK_SUPPORT_PUTDATA_0](group___d_e_f___f_l_o_w___g_k.md#define-emv-ctls-flow-gk-support-putdata-0).  |
|  | **[EMV_CTLS_TRAN_TYPE_PURE_AUTHENTICATE](group___c_l_t_r_x___s_c_h_e_m_e___t_r_x___t_y_p_e_s.md#define-emv-ctls-tran-type-pure-authenticate)**  |




## Macros Documentation

### define EMV_CTLS_TRAN_TYPE_PURE_GETDATA

```
#define EMV_CTLS_TRAN_TYPE_PURE_GETDATA 0x78
```

Gemalto/Pure: Retrieval of application proprietary data elements using GET DATA command, needs to be activated by means of [EMV_CTLS_FLOW_GK_SUPPORT_GETDATA_0](group___d_e_f___f_l_o_w___g_k.md#define-emv-ctls-flow-gk-support-getdata-0). 

### define EMV_CTLS_TRAN_TYPE_PURE_PUTDATA

```
#define EMV_CTLS_TRAN_TYPE_PURE_PUTDATA 0x79
```

Gemalto/Pure: Update of application data proprietary elements using PUT DATA command, needs to be activated by means of [EMV_CTLS_FLOW_GK_SUPPORT_PUTDATA_0](group___d_e_f___f_l_o_w___g_k.md#define-emv-ctls-flow-gk-support-putdata-0). 

### define EMV_CTLS_TRAN_TYPE_PURE_AUTHENTICATE

```
#define EMV_CTLS_TRAN_TYPE_PURE_AUTHENTICATE 0x90
```


Gemalto/Pure: Default value for transaction type of "Application Authentication Transaction" 

 Special type of transaction allowing the terminal to only authenticate the contactless device, needs to be activated by [Gemalto/Pure: Application flow capabilities](group___d_e_f___f_l_o_w___g_k.md)

 Value can be changed by means of [EMV_CTLS_APPLIDATA_GK_TYPE::AppliAuthTransType_DFAB5A](struct_e_m_v___c_t_l_s___a_p_p_l_i_d_a_t_a___g_k___s_t_r_u_c_t.md#variable-appliauthtranstype-dfab5a)




-------------------------------

Updated on 2025-06-17 at 11:52:23 +0100