---
title: Application flow capabilities for Visa Asia/Pacific
summary: Contents of EMV_CTLS_APPLIDATA_PK_STRUCT::AppFlowCap_DFAB31. 

---

# Application flow capabilities for Visa Asia/Pacific

**Module:** **[Configuration](group___a_d_k___c_o_n_f_i_g_u_r_a_t_i_o_n.md)** **/** **[Application data](group___d_e_f___c_o_n_f___a_p_p_l_i.md)**

Contents of [EMV_CTLS_APPLIDATA_PK_STRUCT::AppFlowCap_DFAB31](struct_e_m_v___c_t_l_s___a_p_p_l_i_d_a_t_a___p_k___s_t_r_u_c_t.md#variable-appflowcap-dfab31). 

## Defines

|                | Name           |
| -------------- | -------------- |
|  | **[EMV_CTLS_FLOW_PK_CHECK_INCONS_TRACK2_PAN_0](group___d_e_f___f_l_o_w___p_k.md#define-emv-ctls-flow-pk-check-incons-track2-pan-0)** <br>B1b1: (Vel: y VFI: n) Check consistency of track2 equivalent data ([TAG_57_TRACK2_EQUIVALENT](group___e_m_v_c_o___t_a_g_s.md#define-tag-57-track2-equivalent)) provided by ICC. Validate format and that contents matches to [TAG_5A_APP_PAN](group___e_m_v_c_o___t_a_g_s.md#define-tag-5a-app-pan). Visa Europe stuff VppT.  |
|  | **[EMV_CTLS_FLOW_PK_CASHBACK_NOT_FORCED_CVM_0](group___d_e_f___f_l_o_w___p_k.md#define-emv-ctls-flow-pk-cashback-not-forced-cvm-0)** <br>B1b2: (Vel: y VFI: n) Per default cashback transactions require CVM and are forced online by setting floorlimit to 0, you can use standard CVM limit and floorlimit if you set this flag.  |




## Macros Documentation

### define EMV_CTLS_FLOW_PK_CHECK_INCONS_TRACK2_PAN_0

```
#define EMV_CTLS_FLOW_PK_CHECK_INCONS_TRACK2_PAN_0 0x01
```

B1b1: (Vel: y VFI: n) Check consistency of track2 equivalent data ([TAG_57_TRACK2_EQUIVALENT](group___e_m_v_c_o___t_a_g_s.md#define-tag-57-track2-equivalent)) provided by ICC. Validate format and that contents matches to [TAG_5A_APP_PAN](group___e_m_v_c_o___t_a_g_s.md#define-tag-5a-app-pan). Visa Europe stuff VppT. 

### define EMV_CTLS_FLOW_PK_CASHBACK_NOT_FORCED_CVM_0

```
#define EMV_CTLS_FLOW_PK_CASHBACK_NOT_FORCED_CVM_0 0x02
```

B1b2: (Vel: y VFI: n) Per default cashback transactions require CVM and are forced online by setting floorlimit to 0, you can use standard CVM limit and floorlimit if you set this flag. 



-------------------------------

Updated on 2025-06-17 at 11:52:22 +0100