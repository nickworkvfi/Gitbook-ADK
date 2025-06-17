---
title: Gemalto/Pure- Application flow capabilities
summary: Defines for EMV_CTLS_APPLIDATA_GK_STRUCT::AppFlowCap_DFAB31. 

---

# Gemalto/Pure: Application flow capabilities

**Module:** **[Configuration](group___a_d_k___c_o_n_f_i_g_u_r_a_t_i_o_n.md)** **/** **[Application data](group___d_e_f___c_o_n_f___a_p_p_l_i.md)**

Defines for [EMV_CTLS_APPLIDATA_GK_STRUCT::AppFlowCap_DFAB31](struct_e_m_v___c_t_l_s___a_p_p_l_i_d_a_t_a___g_k___s_t_r_u_c_t.md#variable-appflowcap-dfab31). 

## Defines

|                | Name           |
| -------------- | -------------- |
|  | **[EMV_CTLS_FLOW_GK_SUPPORT_APPLI_AUTHENTICATE_0](group___d_e_f___f_l_o_w___g_k.md#define-emv-ctls-flow-gk-support-appli-authenticate-0)** <br>B1b1: (Vel: y VFI: y) Support for special transaction type "Application Authentication Transaction", see also [EMV_CTLS_TRAN_TYPE_PURE_AUTHENTICATE]().  |
|  | **[EMV_CTLS_FLOW_GK_SUPPORT_GETDATA_0](group___d_e_f___f_l_o_w___g_k.md#define-emv-ctls-flow-gk-support-getdata-0)** <br>B1b2: (Vel: y VFI: y) Support for special transaction type "Retrieve application data elements using GET DATA command", see also [EMV_CTLS_TRAN_TYPE_PURE_GETDATA](), leads to invocation of [TAG_BF18_CBK_PURE_GET_PUT_DATA]().  |
|  | **[EMV_CTLS_FLOW_GK_SUPPORT_PUTDATA_0](group___d_e_f___f_l_o_w___g_k.md#define-emv-ctls-flow-gk-support-putdata-0)** <br>B1b3: (Vel: y VFI: y) Support for special transaction type "Update application data elements using PUT DATA command", see also [EMV_CTLS_TRAN_TYPE_PURE_PUTDATA](), leads to invocation of [TAG_BF18_CBK_PURE_GET_PUT_DATA]().  |
|  | **[EMV_CTLS_FLOW_GK_AMOUNT_MULTIPLY_100_0](group___d_e_f___f_l_o_w___g_k.md#define-emv-ctls-flow-gk-amount-multiply-100-0)** <br>B1b4: (Vel: y VFI: n) Vietnam VCCS special feature: Multiply amount by 100 before using it in GENAC1.  |




## Macros Documentation

### define EMV_CTLS_FLOW_GK_SUPPORT_APPLI_AUTHENTICATE_0

```
#define EMV_CTLS_FLOW_GK_SUPPORT_APPLI_AUTHENTICATE_0 0x01
```

B1b1: (Vel: y VFI: y) Support for special transaction type "Application Authentication Transaction", see also [EMV_CTLS_TRAN_TYPE_PURE_AUTHENTICATE](). 

### define EMV_CTLS_FLOW_GK_SUPPORT_GETDATA_0

```
#define EMV_CTLS_FLOW_GK_SUPPORT_GETDATA_0 0x02
```

B1b2: (Vel: y VFI: y) Support for special transaction type "Retrieve application data elements using GET DATA command", see also [EMV_CTLS_TRAN_TYPE_PURE_GETDATA](), leads to invocation of [TAG_BF18_CBK_PURE_GET_PUT_DATA](). 

### define EMV_CTLS_FLOW_GK_SUPPORT_PUTDATA_0

```
#define EMV_CTLS_FLOW_GK_SUPPORT_PUTDATA_0 0x04
```

B1b3: (Vel: y VFI: y) Support for special transaction type "Update application data elements using PUT DATA command", see also [EMV_CTLS_TRAN_TYPE_PURE_PUTDATA](), leads to invocation of [TAG_BF18_CBK_PURE_GET_PUT_DATA](). 

### define EMV_CTLS_FLOW_GK_AMOUNT_MULTIPLY_100_0

```
#define EMV_CTLS_FLOW_GK_AMOUNT_MULTIPLY_100_0 0x08
```

B1b4: (Vel: y VFI: n) Vietnam VCCS special feature: Multiply amount by 100 before using it in GENAC1. 



-------------------------------

Updated on 2025-06-17 at 11:52:22 +0100