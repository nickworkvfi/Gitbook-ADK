---
title: Application flow capabilities for RuPay
summary: Contents of EMV_CTLS_APPLIDATA_RK_STRUCT::AppFlowCap_DFAB31. 

---

# Application flow capabilities for RuPay

**Module:** **[Configuration](group___a_d_k___c_o_n_f_i_g_u_r_a_t_i_o_n.md)** **/** **[Application data](group___d_e_f___c_o_n_f___a_p_p_l_i.md)**

Contents of [EMV_CTLS_APPLIDATA_RK_STRUCT::AppFlowCap_DFAB31](struct_e_m_v___c_t_l_s___a_p_p_l_i_d_a_t_a___r_k___s_t_r_u_c_t.md#variable-appflowcap-dfab31). 

## Defines

|                | Name           |
| -------------- | -------------- |
|  | **[EMV_CTLS_FLOW_RK_SERVICE_FEATURE_ENABLE_0](group___d_e_f___f_l_o_w___r_k.md#define-emv-ctls-flow-rk-service-feature-enable-0)** <br>B1b1: (Vel: y VFI: y) Rupay Service Feature Enable/Disable.  |
|  | **[EMV_CTLS_FLOW_RK_TORN_TRANSACTION_INDICATOR_0](group___d_e_f___f_l_o_w___r_k.md#define-emv-ctls-flow-rk-torn-transaction-indicator-0)** <br>B1b2: (Vel: y VFI: y) Rupay Torn Transaction Indicator.  |
|  | **[EMV_CTLS_FLOW_RK_READ_RECORD_SFI1_QDDA_0](group___d_e_f___f_l_o_w___r_k.md#define-emv-ctls-flow-rk-read-record-sfi1-qdda-0)** <br>B1b3: (Vel: n VFI: y) Perform READ RECORD of SFI 1 only when qDDA is disabled.  |
|  | **[EMV_CTLS_FLOW_RK_MULTIPLE_RANDOM_NUMBERS_0](group___d_e_f___f_l_o_w___r_k.md#define-emv-ctls-flow-rk-multiple-random-numbers-0)** <br>B1b4: (Vel: y VFI: n) Generate new random number ('9F37') with each kernel activation, that is 2nd GAC.  |
|  | **[EMV_CTLS_FLOW_RK_ONLINE_PIN_SUPPORTED_0](group___d_e_f___f_l_o_w___r_k.md#define-emv-ctls-flow-rk-online-pin-supported-0)** <br>B1b5: (Vel: y VFI: n) Online PIN supported.  |
|  | **[EMV_CTLS_FLOW_RK_SIGNATURE_SUPPORTED_0](group___d_e_f___f_l_o_w___r_k.md#define-emv-ctls-flow-rk-signature-supported-0)** <br>B1b6: (Vel: y VFI: n) Signature supported.  |
|  | **[EMV_CTLS_FLOW_RK_ON_DEVICE_CVM_SUPPORTED_0](group___d_e_f___f_l_o_w___r_k.md#define-emv-ctls-flow-rk-on-device-cvm-supported-0)** <br>B1b7: (Vel: y VFI: n) On-Device CVM (mobile CVM) supported.  |
|  | **[EMV_CTLS_FLOW_RK_CVM_REQUIRED_0](group___d_e_f___f_l_o_w___r_k.md#define-emv-ctls-flow-rk-cvm-required-0)** <br>B1b8: (Vel: y VFI: n) CVM required, transaction will fail in case card decision is "no CVM)  |
|  | **[EMV_CTLS_FLOW_RK_ISSUER_UPDATE_SUPPORTED_1](group___d_e_f___f_l_o_w___r_k.md#define-emv-ctls-flow-rk-issuer-update-supported-1)** <br>B2b1: (Vel: y VFI: n) Issuer script processing supported.  |




## Macros Documentation

### define EMV_CTLS_FLOW_RK_SERVICE_FEATURE_ENABLE_0

```
#define EMV_CTLS_FLOW_RK_SERVICE_FEATURE_ENABLE_0 0x01
```

B1b1: (Vel: y VFI: y) Rupay Service Feature Enable/Disable. 

### define EMV_CTLS_FLOW_RK_TORN_TRANSACTION_INDICATOR_0

```
#define EMV_CTLS_FLOW_RK_TORN_TRANSACTION_INDICATOR_0 0x02
```

B1b2: (Vel: y VFI: y) Rupay Torn Transaction Indicator. 

### define EMV_CTLS_FLOW_RK_READ_RECORD_SFI1_QDDA_0

```
#define EMV_CTLS_FLOW_RK_READ_RECORD_SFI1_QDDA_0 0x04
```

B1b3: (Vel: n VFI: y) Perform READ RECORD of SFI 1 only when qDDA is disabled. 

### define EMV_CTLS_FLOW_RK_MULTIPLE_RANDOM_NUMBERS_0

```
#define EMV_CTLS_FLOW_RK_MULTIPLE_RANDOM_NUMBERS_0 0x08
```

B1b4: (Vel: y VFI: n) Generate new random number ('9F37') with each kernel activation, that is 2nd GAC. 

### define EMV_CTLS_FLOW_RK_ONLINE_PIN_SUPPORTED_0

```
#define EMV_CTLS_FLOW_RK_ONLINE_PIN_SUPPORTED_0 0x10
```

B1b5: (Vel: y VFI: n) Online PIN supported. 

### define EMV_CTLS_FLOW_RK_SIGNATURE_SUPPORTED_0

```
#define EMV_CTLS_FLOW_RK_SIGNATURE_SUPPORTED_0 0x20
```

B1b6: (Vel: y VFI: n) Signature supported. 

### define EMV_CTLS_FLOW_RK_ON_DEVICE_CVM_SUPPORTED_0

```
#define EMV_CTLS_FLOW_RK_ON_DEVICE_CVM_SUPPORTED_0 0x40
```

B1b7: (Vel: y VFI: n) On-Device CVM (mobile CVM) supported. 

### define EMV_CTLS_FLOW_RK_CVM_REQUIRED_0

```
#define EMV_CTLS_FLOW_RK_CVM_REQUIRED_0 0x80
```

B1b8: (Vel: y VFI: n) CVM required, transaction will fail in case card decision is "no CVM) 

### define EMV_CTLS_FLOW_RK_ISSUER_UPDATE_SUPPORTED_1

```
#define EMV_CTLS_FLOW_RK_ISSUER_UPDATE_SUPPORTED_1 0x01
```

B2b1: (Vel: y VFI: n) Issuer script processing supported. 



-------------------------------

Updated on 2025-06-17 at 11:52:22 +0100