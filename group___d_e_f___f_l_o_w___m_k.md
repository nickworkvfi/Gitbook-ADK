---
title: Application flow capabilities for PayPass (MasterCard)
summary: Contents of EMV_CTLS_APPLIDATA_MK_STRUCT::AppFlowCap_DFAB31. 

---

# Application flow capabilities for PayPass (MasterCard)

**Module:** **[Configuration](group___a_d_k___c_o_n_f_i_g_u_r_a_t_i_o_n.md)** **/** **[Application data](group___d_e_f___c_o_n_f___a_p_p_l_i.md)**

Contents of [EMV_CTLS_APPLIDATA_MK_STRUCT::AppFlowCap_DFAB31](struct_e_m_v___c_t_l_s___a_p_p_l_i_d_a_t_a___m_k___s_t_r_u_c_t.md#variable-appflowcap-dfab31). 

## Defines

|                | Name           |
| -------------- | -------------- |
|  | **[EMV_CTLS_FLOW_MK_READ_BALANCE_BEFORE_GAC_0](group___d_e_f___f_l_o_w___m_k.md#define-emv-ctls-flow-mk-read-balance-before-gac-0)** <br>B1b1: (Vel: y VFI: y) Feature Read Balance before GenAC.  |
|  | **[EMV_CTLS_FLOW_MK_READ_BALANCE_AFTER_GAC_0](group___d_e_f___f_l_o_w___m_k.md#define-emv-ctls-flow-mk-read-balance-after-gac-0)** <br>B1b2: (Vel: y VFI: y) Feature Read Balance after GenAC.  |
|  | **[EMV_CTLS_FLOW_MK_ENABLE_DATA_EXCHANGE_0](group___d_e_f___f_l_o_w___m_k.md#define-emv-ctls-flow-mk-enable-data-exchange-0)** <br>B1b3: (Vel: y VFI: n) Enable DataExchange ([TAG_BF0E_CBK_DATA_EXCHANGE]())  |
|  | **[EMV_CTLS_FLOW_MK_TRANSACTION_TYPE_17_FOR_CASH_0](group___d_e_f___f_l_o_w___m_k.md#define-emv-ctls-flow-mk-transaction-type-17-for-cash-0)** <br>B1b4: (Vel: y VFI: n) Transaction type 17 for MasterCard cash transactions.  |
|  | **[EMV_CTLS_FLOW_MK_CARD_READ_ACTION_ANALYSIS_0](group___d_e_f___f_l_o_w___m_k.md#define-emv-ctls-flow-mk-card-read-action-analysis-0)** <br>B1b5: (Vel: y VFI: n) On card read transaction do not force decline but let the kernel do TAC/IAC Action Analysis.  |




## Macros Documentation

### define EMV_CTLS_FLOW_MK_READ_BALANCE_BEFORE_GAC_0

```
#define EMV_CTLS_FLOW_MK_READ_BALANCE_BEFORE_GAC_0 0x01
```

B1b1: (Vel: y VFI: y) Feature Read Balance before GenAC. 

### define EMV_CTLS_FLOW_MK_READ_BALANCE_AFTER_GAC_0

```
#define EMV_CTLS_FLOW_MK_READ_BALANCE_AFTER_GAC_0 0x02
```

B1b2: (Vel: y VFI: y) Feature Read Balance after GenAC. 

### define EMV_CTLS_FLOW_MK_ENABLE_DATA_EXCHANGE_0

```
#define EMV_CTLS_FLOW_MK_ENABLE_DATA_EXCHANGE_0 0x04
```

B1b3: (Vel: y VFI: n) Enable DataExchange ([TAG_BF0E_CBK_DATA_EXCHANGE]()) 

### define EMV_CTLS_FLOW_MK_TRANSACTION_TYPE_17_FOR_CASH_0

```
#define EMV_CTLS_FLOW_MK_TRANSACTION_TYPE_17_FOR_CASH_0 0x08
```

B1b4: (Vel: y VFI: n) Transaction type 17 for MasterCard cash transactions. 



 Use [EMV_ADK_TRAN_TYPE_MASTERCARD_CASH](group___t_r_a_n_s___t_y_p_e_s.md#define-emv-adk-tran-type-mastercard-cash) for cash transactions (initiated with [EMV_ADK_TRAN_TYPE_CASH](group___t_r_a_n_s___t_y_p_e_s.md#define-emv-adk-tran-type-cash)) 

 The modified transaction type is used towards card and put out in [EMV_CTLS_TRANSRES_STRUCT::T_9C_TransType](struct_e_m_v___c_t_l_s___t_r_a_n_s_r_e_s___s_t_r_u_c_t.md#variable-t-9c-transtype). 


### define EMV_CTLS_FLOW_MK_CARD_READ_ACTION_ANALYSIS_0

```
#define EMV_CTLS_FLOW_MK_CARD_READ_ACTION_ANALYSIS_0 0x10
```

B1b5: (Vel: y VFI: n) On card read transaction do not force decline but let the kernel do TAC/IAC Action Analysis. 



-------------------------------

Updated on 2025-06-17 at 11:52:22 +0100