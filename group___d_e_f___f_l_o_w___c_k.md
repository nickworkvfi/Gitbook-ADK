---
title: Application flow capabilities for China Union Pay
summary: Contents of EMV_CTLS_APPLIDATA_CK_STRUCT::AppFlowCap_DFAB31. 

---

# Application flow capabilities for China Union Pay

**Module:** **[Configuration](group___a_d_k___c_o_n_f_i_g_u_r_a_t_i_o_n.md)** **/** **[Application data](group___d_e_f___c_o_n_f___a_p_p_l_i.md)**

Contents of [EMV_CTLS_APPLIDATA_CK_STRUCT::AppFlowCap_DFAB31](struct_e_m_v___c_t_l_s___a_p_p_l_i_d_a_t_a___c_k___s_t_r_u_c_t.md#variable-appflowcap-dfab31). 

## Defines

|                | Name           |
| -------------- | -------------- |
|  | **[EMV_CTLS_FLOW_CK_STATUS_CHECK_ENABLE_0](group___d_e_f___f_l_o_w___c_k.md#define-emv-ctls-flow-ck-status-check-enable-0)** <br>B1b1: (Vel: y VFI: y) Enable status check for one single unit of currency (1$ txn is going online for status check)  |
|  | **[EMV_CTLS_FLOW_CK_ZERO_CHECK_ENABLE_SKIP_0](group___d_e_f___f_l_o_w___c_k.md#define-emv-ctls-flow-ck-zero-check-enable-skip-0)** <br>B1b2: (Vel: y VFI: y) Enable zero check for zero amount transaction, skip AID for zero amount.  |
|  | **[EMV_CTLS_FLOW_CK_ZERO_CHECK_ENABLE_ONLINE_0](group___d_e_f___f_l_o_w___c_k.md#define-emv-ctls-flow-ck-zero-check-enable-online-0)** <br>B1b3: (Vel: y VFI: y) Enable zero check for zero amount transaction, going online for zero amount txns.  |
|  | **[EMV_CTLS_FLOW_CK_CHECK_INCONS_TRACK2_PAN_0](group___d_e_f___f_l_o_w___c_k.md#define-emv-ctls-flow-ck-check-incons-track2-pan-0)** <br>B1b4: (Vel: y VFI: n) Check consistency of track2 equivalent data ([TAG_57_TRACK2_EQUIVALENT](group___e_m_v_c_o___t_a_g_s.md#define-tag-57-track2-equivalent)) provided by ICC. Validate format and that contents matches to [TAG_5A_APP_PAN](group___e_m_v_c_o___t_a_g_s.md#define-tag-5a-app-pan). Visa Europe stuff VppT.  |
|  | **[EMV_CTLS_FLOW_CK_CASHBACK_NOT_FORCED_CVM_0](group___d_e_f___f_l_o_w___c_k.md#define-emv-ctls-flow-ck-cashback-not-forced-cvm-0)** <br>B1b5: (Vel: y VFI: n) Per default cashback transactions require CVM and are forced online by setting floorlimit to 0, you can use standard CVM limit and floorlimit if you set this flag.  |
|  | **[EMV_CTLS_FLOW_CK_ENABLE_FDDA_VERSION_0](group___d_e_f___f_l_o_w___c_k.md#define-emv-ctls-flow-ck-enable-fdda-version-0)** <br>B1b6: (Vel: y VFI: n) Per default the legacy fDDA version 0 is switched off. If you want to support it on top of the up date fDDA version 1. you can enable it by setting this bit.  |
|  | **[EMV_CTLS_FLOW_CK_DISABLE_PIN_BELOW_CVM_0](group___d_e_f___f_l_o_w___c_k.md#define-emv-ctls-flow-ck-disable-pin-below-cvm-0)** <br>B1b7: (Vel: y VFI: y) Do not ask for online PIN and Signature for transactions below CVM Limit when this was requested by card. This bit should be set for Credit / Quasi Credit AIDs according to Ref. "UPI QuickPass Implementation Guide for Acquirers v1.3.9": Terminals shall not ask for online PIN when all of below situations are met -QuickPass credit/Quasi credit cards are accepted, -Contactless transaction amount is below CVM limit of the terminal.  |




## Macros Documentation

### define EMV_CTLS_FLOW_CK_STATUS_CHECK_ENABLE_0

```
#define EMV_CTLS_FLOW_CK_STATUS_CHECK_ENABLE_0 0x01
```

B1b1: (Vel: y VFI: y) Enable status check for one single unit of currency (1$ txn is going online for status check) 

### define EMV_CTLS_FLOW_CK_ZERO_CHECK_ENABLE_SKIP_0

```
#define EMV_CTLS_FLOW_CK_ZERO_CHECK_ENABLE_SKIP_0 0x02
```

B1b2: (Vel: y VFI: y) Enable zero check for zero amount transaction, skip AID for zero amount. 

### define EMV_CTLS_FLOW_CK_ZERO_CHECK_ENABLE_ONLINE_0

```
#define EMV_CTLS_FLOW_CK_ZERO_CHECK_ENABLE_ONLINE_0 0x04
```

B1b3: (Vel: y VFI: y) Enable zero check for zero amount transaction, going online for zero amount txns. 

### define EMV_CTLS_FLOW_CK_CHECK_INCONS_TRACK2_PAN_0

```
#define EMV_CTLS_FLOW_CK_CHECK_INCONS_TRACK2_PAN_0 0x08
```

B1b4: (Vel: y VFI: n) Check consistency of track2 equivalent data ([TAG_57_TRACK2_EQUIVALENT](group___e_m_v_c_o___t_a_g_s.md#define-tag-57-track2-equivalent)) provided by ICC. Validate format and that contents matches to [TAG_5A_APP_PAN](group___e_m_v_c_o___t_a_g_s.md#define-tag-5a-app-pan). Visa Europe stuff VppT. 

### define EMV_CTLS_FLOW_CK_CASHBACK_NOT_FORCED_CVM_0

```
#define EMV_CTLS_FLOW_CK_CASHBACK_NOT_FORCED_CVM_0 0x10
```

B1b5: (Vel: y VFI: n) Per default cashback transactions require CVM and are forced online by setting floorlimit to 0, you can use standard CVM limit and floorlimit if you set this flag. 

### define EMV_CTLS_FLOW_CK_ENABLE_FDDA_VERSION_0

```
#define EMV_CTLS_FLOW_CK_ENABLE_FDDA_VERSION_0 0x20
```

B1b6: (Vel: y VFI: n) Per default the legacy fDDA version 0 is switched off. If you want to support it on top of the up date fDDA version 1. you can enable it by setting this bit. 

### define EMV_CTLS_FLOW_CK_DISABLE_PIN_BELOW_CVM_0

```
#define EMV_CTLS_FLOW_CK_DISABLE_PIN_BELOW_CVM_0 0x40
```

B1b7: (Vel: y VFI: y) Do not ask for online PIN and Signature for transactions below CVM Limit when this was requested by card. This bit should be set for Credit / Quasi Credit AIDs according to Ref. "UPI QuickPass Implementation Guide for Acquirers v1.3.9": Terminals shall not ask for online PIN when all of below situations are met -QuickPass credit/Quasi credit cards are accepted, -Contactless transaction amount is below CVM limit of the terminal. 



-------------------------------

Updated on 2025-06-17 at 11:52:22 +0100