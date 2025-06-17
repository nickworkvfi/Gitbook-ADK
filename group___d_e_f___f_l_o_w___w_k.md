---
title: Application flow capabilities for WISE
summary: Contents of EMV_CTLS_APPLIDATA_WK_STRUCT::AppFlowCap_DFAB31. 

---

# Application flow capabilities for WISE

**Module:** **[Configuration](group___a_d_k___c_o_n_f_i_g_u_r_a_t_i_o_n.md)** **/** **[Application data](group___d_e_f___c_o_n_f___a_p_p_l_i.md)**

Contents of [EMV_CTLS_APPLIDATA_WK_STRUCT::AppFlowCap_DFAB31](struct_e_m_v___c_t_l_s___a_p_p_l_i_d_a_t_a___w_k___s_t_r_u_c_t.md#variable-appflowcap-dfab31). 

## Defines

|                | Name           |
| -------------- | -------------- |
|  | **[EMV_CTLS_FLOW_WK_STATUS_CHECK_ENABLE_0](group___d_e_f___f_l_o_w___w_k.md#define-emv-ctls-flow-wk-status-check-enable-0)** <br>B1b1: Enable status check for one single unit of currency (one major currency unit, e.g. 1€ is going online for status check). If TTQ 'online capable reader' is not set, 'Contactless Application Not Allowed' indicator will be set.  |
|  | **[EMV_CTLS_FLOW_WK_ZERO_CHECK_ENABLE_SKIP_0](group___d_e_f___f_l_o_w___w_k.md#define-emv-ctls-flow-wk-zero-check-enable-skip-0)** <br>B1b2: Enable zero check for zero amount transaction, Option 2: Set 'Contactless Application Not Allowed' indicator.  |
|  | **[EMV_CTLS_FLOW_WK_ZERO_CHECK_ENABLE_ONLINE_0](group___d_e_f___f_l_o_w___w_k.md#define-emv-ctls-flow-wk-zero-check-enable-online-0)** <br>B1b3: Enable zero check for zero amount transaction, Option 1: Set TTQ 'Online cryptogram required', only possible if TTQ 'online capable reader' is set, otherwise 'Contactless Application Not Allowed' indicator is set.  |
|  | **[EMV_CTLS_FLOW_WK_NO_CDCVM](group___d_e_f___f_l_o_w___w_k.md#define-emv-ctls-flow-wk-no-cdcvm)** <br>B1b4: Do not set TTQ B3b7.  |




## Macros Documentation

### define EMV_CTLS_FLOW_WK_STATUS_CHECK_ENABLE_0

```
#define EMV_CTLS_FLOW_WK_STATUS_CHECK_ENABLE_0 0x01
```

B1b1: Enable status check for one single unit of currency (one major currency unit, e.g. 1€ is going online for status check). If TTQ 'online capable reader' is not set, 'Contactless Application Not Allowed' indicator will be set. 

### define EMV_CTLS_FLOW_WK_ZERO_CHECK_ENABLE_SKIP_0

```
#define EMV_CTLS_FLOW_WK_ZERO_CHECK_ENABLE_SKIP_0 0x02
```

B1b2: Enable zero check for zero amount transaction, Option 2: Set 'Contactless Application Not Allowed' indicator. 

### define EMV_CTLS_FLOW_WK_ZERO_CHECK_ENABLE_ONLINE_0

```
#define EMV_CTLS_FLOW_WK_ZERO_CHECK_ENABLE_ONLINE_0 0x04
```

B1b3: Enable zero check for zero amount transaction, Option 1: Set TTQ 'Online cryptogram required', only possible if TTQ 'online capable reader' is set, otherwise 'Contactless Application Not Allowed' indicator is set. 

### define EMV_CTLS_FLOW_WK_NO_CDCVM

```
#define EMV_CTLS_FLOW_WK_NO_CDCVM 0x08
```

B1b4: Do not set TTQ B3b7. 



-------------------------------

Updated on 2025-06-17 at 11:52:22 +0100