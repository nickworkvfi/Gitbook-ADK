---
title: Application flow capabilities for Interac
summary: Contents of EMV_CTLS_APPLIDATA_IK_STRUCT::AppFlowCap_DFAB31. 

---

# Application flow capabilities for Interac

**Module:** **[Configuration](group___a_d_k___c_o_n_f_i_g_u_r_a_t_i_o_n.md)** **/** **[Application data](group___d_e_f___c_o_n_f___a_p_p_l_i.md)**

Contents of [EMV_CTLS_APPLIDATA_IK_STRUCT::AppFlowCap_DFAB31](struct_e_m_v___c_t_l_s___a_p_p_l_i_d_a_t_a___i_k___s_t_r_u_c_t.md#variable-appflowcap-dfab31). 

## Defines

|                | Name           |
| -------------- | -------------- |
|  | **[EMV_CTLS_FLOW_IK_REQUEST_CDA_WITH_ARQC_0](group___d_e_f___f_l_o_w___i_k.md#define-emv-ctls-flow-ik-request-cda-with-arqc-0)** <br>B1b1: (Vel: y VFI: n) On first GAC do request CDA despite cryptogram type is ARQC (P1 = '90').  |
|  | **[EMV_CTLS_FLOW_IK_REFUND_FLOW_INTERAC_0](group___d_e_f___f_l_o_w___i_k.md#define-emv-ctls-flow-ik-refund-flow-interac-0)** <br>B1b2: (Vel: y VFI: n) Do not force AppAction to decline and do not modify and TAC or limit. Note: Unless otherwise specified by regional needs, Interac flow should be enabled for Interac AIDs.  |




## Macros Documentation

### define EMV_CTLS_FLOW_IK_REQUEST_CDA_WITH_ARQC_0

```
#define EMV_CTLS_FLOW_IK_REQUEST_CDA_WITH_ARQC_0 0x01
```

B1b1: (Vel: y VFI: n) On first GAC do request CDA despite cryptogram type is ARQC (P1 = '90'). 

### define EMV_CTLS_FLOW_IK_REFUND_FLOW_INTERAC_0

```
#define EMV_CTLS_FLOW_IK_REFUND_FLOW_INTERAC_0 0x02
```

B1b2: (Vel: y VFI: n) Do not force AppAction to decline and do not modify and TAC or limit. Note: Unless otherwise specified by regional needs, Interac flow should be enabled for Interac AIDs. 



-------------------------------

Updated on 2025-06-17 at 11:52:22 +0100