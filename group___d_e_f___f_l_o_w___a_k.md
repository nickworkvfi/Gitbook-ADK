---
title: Application flow capabilities for ExpressPay (Amex)
summary: Contents of EMV_CTLS_APPLIDATA_AK_STRUCT::AppFlowCap_DFAB31. 

---

# Application flow capabilities for ExpressPay (Amex)

**Module:** **[Configuration](group___a_d_k___c_o_n_f_i_g_u_r_a_t_i_o_n.md)** **/** **[Application data](group___d_e_f___c_o_n_f___a_p_p_l_i.md)**

Contents of [EMV_CTLS_APPLIDATA_AK_STRUCT::AppFlowCap_DFAB31](struct_e_m_v___c_t_l_s___a_p_p_l_i_d_a_t_a___a_k___s_t_r_u_c_t.md#variable-appflowcap-dfab31). 

## Defines

|                | Name           |
| -------------- | -------------- |
|  | **[EMV_CTLS_FLOW_AK_CARDREAD_GENAC1_ARQC_0](group___d_e_f___f_l_o_w___a_k.md#define-emv-ctls-flow-ak-cardread-genac1-arqc-0)** <br>B1b1: (Vel: y VFI: n) Card read transaction (e.g. refund): request ARQC in GENAC1, usually AAC is requested.  |
|  | **[EMV_CTLS_FLOW_AK_TRANSACTION_TYPE_30_FOR_PREAUTH_0](group___d_e_f___f_l_o_w___a_k.md#define-emv-ctls-flow-ak-transaction-type-30-for-preauth-0)** <br>B1b2: (Vel: y VFI: n) Amex Pre-Authorization with transaction type 30.  |
|  | **[EMV_CTLS_FLOW_AK_STATUS_CHECK_ENABLE_0](group___d_e_f___f_l_o_w___a_k.md#define-emv-ctls-flow-ak-status-check-enable-0)** <br>B1b3: (Vel: y VFI: y) Enable status check for one single unit of currency (1$ txn is going online for status check)  |
|  | **[EMV_CTLS_FLOW_AK_ZERO_CHECK_ENABLE_ONLINE_0](group___d_e_f___f_l_o_w___a_k.md#define-emv-ctls-flow-ak-zero-check-enable-online-0)** <br>B1b4: (Vel: y VFI: y) Enable zero check for zero amount transaction, going online for zero amount txns.  |
|  | **[EMV_CTLS_FLOW_AK_DISABLE_9F6E_KERNEL_VERSION_0](group___d_e_f___f_l_o_w___a_k.md#define-emv-ctls-flow-ak-disable-9f6e-kernel-version-0)**  |




## Macros Documentation

### define EMV_CTLS_FLOW_AK_CARDREAD_GENAC1_ARQC_0

```
#define EMV_CTLS_FLOW_AK_CARDREAD_GENAC1_ARQC_0 0x01
```

B1b1: (Vel: y VFI: n) Card read transaction (e.g. refund): request ARQC in GENAC1, usually AAC is requested. 

### define EMV_CTLS_FLOW_AK_TRANSACTION_TYPE_30_FOR_PREAUTH_0

```
#define EMV_CTLS_FLOW_AK_TRANSACTION_TYPE_30_FOR_PREAUTH_0 0x02
```

B1b2: (Vel: y VFI: n) Amex Pre-Authorization with transaction type 30. 

**Note**: Pre-Authorization and reservation transactions are equivalent. They are initiated with [EMV_ADK_TRAN_TYPE_INIT_RESERVATION_A](group___t_r_a_n_s___t_y_p_e_s.md#define-emv-adk-tran-type-init-reservation-a) or [EMV_ADK_TRAN_TYPE_INIT_RESERVATION_B](group___t_r_a_n_s___t_y_p_e_s.md#define-emv-adk-tran-type-init-reservation-b). 



 Use [EMV_ADK_TRAN_TYPE_AMEX_PREAUTH](group___t_r_a_n_s___t_y_p_e_s.md#define-emv-adk-tran-type-amex-preauth) for pre-authorization resp. reservation transactions 

 The modified transaction type is used towards card and put out in [EMV_CTLS_TRANSRES_STRUCT::T_9C_TransType](struct_e_m_v___c_t_l_s___t_r_a_n_s_r_e_s___s_t_r_u_c_t.md#variable-t-9c-transtype). 


### define EMV_CTLS_FLOW_AK_STATUS_CHECK_ENABLE_0

```
#define EMV_CTLS_FLOW_AK_STATUS_CHECK_ENABLE_0 0x04
```

B1b3: (Vel: y VFI: y) Enable status check for one single unit of currency (1$ txn is going online for status check) 

### define EMV_CTLS_FLOW_AK_ZERO_CHECK_ENABLE_ONLINE_0

```
#define EMV_CTLS_FLOW_AK_ZERO_CHECK_ENABLE_ONLINE_0 0x08
```

B1b4: (Vel: y VFI: y) Enable zero check for zero amount transaction, going online for zero amount txns. 

### define EMV_CTLS_FLOW_AK_DISABLE_9F6E_KERNEL_VERSION_0

```
#define EMV_CTLS_FLOW_AK_DISABLE_9F6E_KERNEL_VERSION_0 0x10
```




-------------------------------

Updated on 2025-06-17 at 11:52:22 +0100