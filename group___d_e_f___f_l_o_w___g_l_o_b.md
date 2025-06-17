---
title: Application flow capabilities for all schemes
summary: Contents of EMV_CTLS_APPLIDATA_SCHEME_SPECIFIC_STRUCT::AppFlowCap_DFAB03. 

---

# Application flow capabilities for all schemes

**Module:** **[Configuration](group___a_d_k___c_o_n_f_i_g_u_r_a_t_i_o_n.md)** **/** **[Application data](group___d_e_f___c_o_n_f___a_p_p_l_i.md)**

Contents of [EMV_CTLS_APPLIDATA_SCHEME_SPECIFIC_STRUCT::AppFlowCap_DFAB03](struct_e_m_v___c_t_l_s___a_p_p_l_i_d_a_t_a___s_c_h_e_m_e___s_p_e_c_i_f_i_c___s_t_r_u_c_t.md#variable-appflowcap-dfab03). 

## Defines

|                | Name           |
| -------------- | -------------- |
|  | **[EMV_CTLS_FLOW_GLOB_DOM_NO_FINAL_SELECT_0](group___d_e_f___f_l_o_w___g_l_o_b.md#define-emv-ctls-flow-glob-dom-no-final-select-0)** <br>B1b1: (Vel: y VFI: n) Do not perform the final select if the AID belongs to a nonEMV/Domestic kernel.  |
|  | **[EMV_CTLS_FLOW_GLOB_LOA_ENABLE_0](group___d_e_f___f_l_o_w___g_l_o_b.md#define-emv-ctls-flow-glob-loa-enable-0)** <br>B1b2: (Vel: y VFI: y) Enable list of applications processing for this AID (per default not recommended for CTLS txns because directory file is available)  |
|  | **[EMV_CTLS_FLOW_GLOB_CASH_SUPPORT_0](group___d_e_f___f_l_o_w___g_l_o_b.md#define-emv-ctls-flow-glob-cash-support-0)** <br>B1b3: (Vel: y VFI: y) Support of cash transactions.  |
|  | **[EMV_CTLS_FLOW_GLOB_CASHBACK_SUPPORT_0](group___d_e_f___f_l_o_w___g_l_o_b.md#define-emv-ctls-flow-glob-cashback-support-0)** <br>B1b4: (Vel: y VFI: y) Support of cashback transactions.  |
|  | **[EMV_CTLS_FLOW_GLOB_OMIT_NOT_ALLOWED_SELECTION_0](group___d_e_f___f_l_o_w___g_l_o_b.md#define-emv-ctls-flow-glob-omit-not-allowed-selection-0)** <br>B1b5: (Vel: y VFI: n) Omit not allowed candidates already during Entry Point selection process, e.g. above CTLS transaction limit. However: Warning: The EP defines Contactless transaction Limit >=, while MasterCard PP3 defines it as >. So do not set it for MasterCard AIDs.  |
|  | **[EMV_CTLS_FLOW_GLOB_FORCE_ENTRY_POINT_0](group___d_e_f___f_l_o_w___g_l_o_b.md#define-emv-ctls-flow-glob-force-entry-point-0)** <br>B1b6: (Vel: y VFI: n) Force Entry Point processing of the former EMVCo Entry Point specification. It has the effect like [EMV_CTLS_FLOW_GLOB_OMIT_NOT_ALLOWED_SELECTION_0](group___d_e_f___f_l_o_w___g_l_o_b.md#define-emv-ctls-flow-glob-omit-not-allowed-selection-0) plus continue with START_B after L1 error at Combination Selection.  |
|  | **[EMV_CTLS_FLOW_GLOB_FORCE_KERNEL_USAGE_0](group___d_e_f___f_l_o_w___g_l_o_b.md#define-emv-ctls-flow-glob-force-kernel-usage-0)** <br>B1b7: (Vel: y VFI: n) Force Kernel ID to be used, even if EP tag 9F2A is available.  |
|  | **[EMV_CTLS_FLOW_GLOB_LIST_OF_AIDS_IF_PPSE_MISSING_ONLY_0](group___d_e_f___f_l_o_w___g_l_o_b.md#define-emv-ctls-flow-glob-list-of-aids-if-ppse-missing-only-0)** <br>B1b8: (Vel: y VFI: y) List of AIDs method only if PPSE directory does not exist in a card with the corresponding AID. Precondition: [EMV_CTLS_FLOW_GLOB_LOA_ENABLE_0](group___d_e_f___f_l_o_w___g_l_o_b.md#define-emv-ctls-flow-glob-loa-enable-0) is set.  |
|  | **[EMV_CTLS_FLOW_GLOB_LIST_OF_AIDS_IF_PPSE_FAILED_ONLY_1](group___d_e_f___f_l_o_w___g_l_o_b.md#define-emv-ctls-flow-glob-list-of-aids-if-ppse-failed-only-1)** <br>B2b1: (Vel: n VFI: y) List of AIDs method only if PPSE directory exists in the card but a response for PPSE request was badly formatted and PPSE stage failed. Precondition: [EMV_CTLS_FLOW_GLOB_LOA_ENABLE_0](group___d_e_f___f_l_o_w___g_l_o_b.md#define-emv-ctls-flow-glob-loa-enable-0) is set.  |
|  | **[EMV_CTLS_FLOW_GLOB_CARD_READ_TXN_ZERO_AMOUNT_1](group___d_e_f___f_l_o_w___g_l_o_b.md#define-emv-ctls-flow-glob-card-read-txn-zero-amount-1)** <br>B2b2: (Vel: y VFI: y) If this bit is set then the reader will send an amount of zero to the card for card read transactions, otherwise the reader will send the normal amount.  |
|  | **[EMV_CTLS_FLOW_GLOB_SKIP_CARDSELECTION_APPS_1](group___d_e_f___f_l_o_w___g_l_o_b.md#define-emv-ctls-flow-glob-skip-cardselection-apps-1)** <br>B2b3: (Vel: y VFI: n) If this bit is set this AID will be skipped if requiring explicit cardholder selection.  |
|  | **[EMV_CTLS_FLOW_GLOB_SKIP_TXN_LIMIT_CHECK_1](group___d_e_f___f_l_o_w___g_l_o_b.md#define-emv-ctls-flow-glob-skip-txn-limit-check-1)** <br>B2b4: (Vel: y VFI: n) If this bit is set for this AID the transaction limit check will be skipped and the AID remains in the candidate list.  |
|  | **[EMV_CTLS_FLOW_GLOB_FORCE_ONLINE_1](group___d_e_f___f_l_o_w___g_l_o_b.md#define-emv-ctls-flow-glob-force-online-1)** <br>B2b5: (Vel: y VFI: n) Feature "Force online" supported (suspicious customer). This relates to Terminal Verification Result B4b4 "Merchant forced transaction online". Note: Force Online is performed if both flags are set, the support flag here and the transaction flow option [EMV_CTLS_PAYMENT_STRUCT::Force_Online](struct_e_m_v___c_t_l_s___p_a_y_m_e_n_t___s_t_r_u_c_t.md#variable-force-online).  |
|  | **[EMV_CTLS_FLOW_GLOB_WAIT_CARD_REMOVAL_END_1](group___d_e_f___f_l_o_w___g_l_o_b.md#define-emv-ctls-flow-glob-wait-card-removal-end-1)** <br>B2b6: (Vel: y VFI: y) Wait for card removal at the end of an EMV transaction before returning to application (on TC, AAC and ARQC --> Card Read Complete)  |
|  | **[EMV_CTLS_FLOW_GLOB_START_REMOVAL_DETECTION_1](group___d_e_f___f_l_o_w___g_l_o_b.md#define-emv-ctls-flow-glob-start-removal-detection-1)** <br>B2b7: (Vel: y VFI: n) Start card removal procedure after kernel processing. This enables the service [EMV_CTLS_CardRemoval]().    Only effective on deactivated [EMV_CTLS_FLOW_GLOB_WAIT_CARD_REMOVAL_END_1](group___d_e_f___f_l_o_w___g_l_o_b.md#define-emv-ctls-flow-glob-wait-card-removal-end-1).  |
|  | **[EMV_CTLS_FLOW_GLOB_EP_EXTENDED_SELECTION_1](group___d_e_f___f_l_o_w___g_l_o_b.md#define-emv-ctls-flow-glob-ep-extended-selection-1)** <br>B2b8: (Vel: y VFI: n) Enable the Entry Point extended selection (9F29 is used if present on ICC)  |
|  | **[EMV_CTLS_FLOW_GLOB_MULTIPLE_AID_KERNEL_ID_2](group___d_e_f___f_l_o_w___g_l_o_b.md#define-emv-ctls-flow-glob-multiple-aid-kernel-id-2)** <br>B3b1: (Vel: y VFI: n) byte 3 of kernel id is used to store multiple configurations of same kernel Id-AID pair. If this flag is set the 3rd byte of the kernel id is set to zero in the Terminal Candidate List which is presented to the EntryPoint while the original value is used towards application interface.  |
|  | **[EMV_CTLS_FLOW_GLOB_ENABLE_OFFLINE_CASHBACK_2](group___d_e_f___f_l_o_w___g_l_o_b.md#define-emv-ctls-flow-glob-enable-offline-cashback-2)**  |
|  | **[EMV_CTLS_FLOW_GLOB_RESET_TXN_TYPE_2](group___d_e_f___f_l_o_w___g_l_o_b.md#define-emv-ctls-flow-glob-reset-txn-type-2)**  |
|  | **[EMV_CTLS_FLOW_GLOB_CFG_APPL_NAME_2](group___d_e_f___f_l_o_w___g_l_o_b.md#define-emv-ctls-flow-glob-cfg-appl-name-2)**  |
|  | **[EMV_CTLS_FLOW_GLOB_CARD_READ_SKIP_TXN_LIMIT_CHECK_2](group___d_e_f___f_l_o_w___g_l_o_b.md#define-emv-ctls-flow-glob-card-read-skip-txn-limit-check-2)** <br>B3b5: (Vel: y VFI: n) If this bit is set for this AID the transaction limit check will be skipped for card read transactions and the AID remains in the candidate list.  |




## Macros Documentation

### define EMV_CTLS_FLOW_GLOB_DOM_NO_FINAL_SELECT_0

```
#define EMV_CTLS_FLOW_GLOB_DOM_NO_FINAL_SELECT_0 0x01
```

B1b1: (Vel: y VFI: n) Do not perform the final select if the AID belongs to a nonEMV/Domestic kernel. 

### define EMV_CTLS_FLOW_GLOB_LOA_ENABLE_0

```
#define EMV_CTLS_FLOW_GLOB_LOA_ENABLE_0 0x02
```

B1b2: (Vel: y VFI: y) Enable list of applications processing for this AID (per default not recommended for CTLS txns because directory file is available) 

### define EMV_CTLS_FLOW_GLOB_CASH_SUPPORT_0

```
#define EMV_CTLS_FLOW_GLOB_CASH_SUPPORT_0 0x04
```

B1b3: (Vel: y VFI: y) Support of cash transactions. 

### define EMV_CTLS_FLOW_GLOB_CASHBACK_SUPPORT_0

```
#define EMV_CTLS_FLOW_GLOB_CASHBACK_SUPPORT_0 0x08
```

B1b4: (Vel: y VFI: y) Support of cashback transactions. 

### define EMV_CTLS_FLOW_GLOB_OMIT_NOT_ALLOWED_SELECTION_0

```
#define EMV_CTLS_FLOW_GLOB_OMIT_NOT_ALLOWED_SELECTION_0 0x10
```

B1b5: (Vel: y VFI: n) Omit not allowed candidates already during Entry Point selection process, e.g. above CTLS transaction limit. However: Warning: The EP defines Contactless transaction Limit >=, while MasterCard PP3 defines it as >. So do not set it for MasterCard AIDs. 

### define EMV_CTLS_FLOW_GLOB_FORCE_ENTRY_POINT_0

```
#define EMV_CTLS_FLOW_GLOB_FORCE_ENTRY_POINT_0 0x20
```

B1b6: (Vel: y VFI: n) Force Entry Point processing of the former EMVCo Entry Point specification. It has the effect like [EMV_CTLS_FLOW_GLOB_OMIT_NOT_ALLOWED_SELECTION_0](group___d_e_f___f_l_o_w___g_l_o_b.md#define-emv-ctls-flow-glob-omit-not-allowed-selection-0) plus continue with START_B after L1 error at Combination Selection. 

### define EMV_CTLS_FLOW_GLOB_FORCE_KERNEL_USAGE_0

```
#define EMV_CTLS_FLOW_GLOB_FORCE_KERNEL_USAGE_0 0x40
```

B1b7: (Vel: y VFI: n) Force Kernel ID to be used, even if EP tag 9F2A is available. 

### define EMV_CTLS_FLOW_GLOB_LIST_OF_AIDS_IF_PPSE_MISSING_ONLY_0

```
#define EMV_CTLS_FLOW_GLOB_LIST_OF_AIDS_IF_PPSE_MISSING_ONLY_0 0x80
```

B1b8: (Vel: y VFI: y) List of AIDs method only if PPSE directory does not exist in a card with the corresponding AID. Precondition: [EMV_CTLS_FLOW_GLOB_LOA_ENABLE_0](group___d_e_f___f_l_o_w___g_l_o_b.md#define-emv-ctls-flow-glob-loa-enable-0) is set. 

### define EMV_CTLS_FLOW_GLOB_LIST_OF_AIDS_IF_PPSE_FAILED_ONLY_1

```
#define EMV_CTLS_FLOW_GLOB_LIST_OF_AIDS_IF_PPSE_FAILED_ONLY_1 0x01
```

B2b1: (Vel: n VFI: y) List of AIDs method only if PPSE directory exists in the card but a response for PPSE request was badly formatted and PPSE stage failed. Precondition: [EMV_CTLS_FLOW_GLOB_LOA_ENABLE_0](group___d_e_f___f_l_o_w___g_l_o_b.md#define-emv-ctls-flow-glob-loa-enable-0) is set. 

### define EMV_CTLS_FLOW_GLOB_CARD_READ_TXN_ZERO_AMOUNT_1

```
#define EMV_CTLS_FLOW_GLOB_CARD_READ_TXN_ZERO_AMOUNT_1 0x02
```

B2b2: (Vel: y VFI: y) If this bit is set then the reader will send an amount of zero to the card for card read transactions, otherwise the reader will send the normal amount. 

### define EMV_CTLS_FLOW_GLOB_SKIP_CARDSELECTION_APPS_1

```
#define EMV_CTLS_FLOW_GLOB_SKIP_CARDSELECTION_APPS_1 0x04
```

B2b3: (Vel: y VFI: n) If this bit is set this AID will be skipped if requiring explicit cardholder selection. 

### define EMV_CTLS_FLOW_GLOB_SKIP_TXN_LIMIT_CHECK_1

```
#define EMV_CTLS_FLOW_GLOB_SKIP_TXN_LIMIT_CHECK_1 0x08
```

B2b4: (Vel: y VFI: n) If this bit is set for this AID the transaction limit check will be skipped and the AID remains in the candidate list. 

### define EMV_CTLS_FLOW_GLOB_FORCE_ONLINE_1

```
#define EMV_CTLS_FLOW_GLOB_FORCE_ONLINE_1 0x10
```

B2b5: (Vel: y VFI: n) Feature "Force online" supported (suspicious customer). This relates to Terminal Verification Result B4b4 "Merchant forced transaction online". Note: Force Online is performed if both flags are set, the support flag here and the transaction flow option [EMV_CTLS_PAYMENT_STRUCT::Force_Online](struct_e_m_v___c_t_l_s___p_a_y_m_e_n_t___s_t_r_u_c_t.md#variable-force-online). 

### define EMV_CTLS_FLOW_GLOB_WAIT_CARD_REMOVAL_END_1

```
#define EMV_CTLS_FLOW_GLOB_WAIT_CARD_REMOVAL_END_1 0x20
```

B2b6: (Vel: y VFI: y) Wait for card removal at the end of an EMV transaction before returning to application (on TC, AAC and ARQC --> Card Read Complete) 

### define EMV_CTLS_FLOW_GLOB_START_REMOVAL_DETECTION_1

```
#define EMV_CTLS_FLOW_GLOB_START_REMOVAL_DETECTION_1 0x40
```

B2b7: (Vel: y VFI: n) Start card removal procedure after kernel processing. This enables the service [EMV_CTLS_CardRemoval]().    Only effective on deactivated [EMV_CTLS_FLOW_GLOB_WAIT_CARD_REMOVAL_END_1](group___d_e_f___f_l_o_w___g_l_o_b.md#define-emv-ctls-flow-glob-wait-card-removal-end-1). 

### define EMV_CTLS_FLOW_GLOB_EP_EXTENDED_SELECTION_1

```
#define EMV_CTLS_FLOW_GLOB_EP_EXTENDED_SELECTION_1 0x80
```

B2b8: (Vel: y VFI: n) Enable the Entry Point extended selection (9F29 is used if present on ICC) 

### define EMV_CTLS_FLOW_GLOB_MULTIPLE_AID_KERNEL_ID_2

```
#define EMV_CTLS_FLOW_GLOB_MULTIPLE_AID_KERNEL_ID_2 0x01
```

B3b1: (Vel: y VFI: n) byte 3 of kernel id is used to store multiple configurations of same kernel Id-AID pair. If this flag is set the 3rd byte of the kernel id is set to zero in the Terminal Candidate List which is presented to the EntryPoint while the original value is used towards application interface. 

### define EMV_CTLS_FLOW_GLOB_ENABLE_OFFLINE_CASHBACK_2

```
#define EMV_CTLS_FLOW_GLOB_ENABLE_OFFLINE_CASHBACK_2 0x02
```


B3b2: (Vel: y VFI: n) Do not apply business rule: "Cash back is online only". Instead rely on terminal and card risk management. Anyhow the application might force the transaction online by transaction flow option [EMV_CTLS_PAYMENT_STRUCT::Online_Switch](struct_e_m_v___c_t_l_s___p_a_y_m_e_n_t___s_t_r_u_c_t.md#variable-online-switch). 
**Caution**: For Visa like schemes (Visa, Visa-AP, Discover and UPI) this flag has a different effect: It suppresses the mandory reduction of the floor limit to zero. 


### define EMV_CTLS_FLOW_GLOB_RESET_TXN_TYPE_2

```
#define EMV_CTLS_FLOW_GLOB_RESET_TXN_TYPE_2 0x04
```


B3b3: (Vel: y VFI: n) A custom transaction type ('9C') might be used during kernel processing in a virtual terminal for card read transactions. Therefore tag '9C' has to be configured to [EMV_CTLS_APPLIDATA_SCHEME_SPECIFIC_STRUCT::AdditionalTagsTRM_DFAB20](struct_e_m_v___c_t_l_s___a_p_p_l_i_d_a_t_a___s_c_h_e_m_e___s_p_e_c_i_f_i_c___s_t_r_u_c_t.md#variable-additionaltagstrm-dfab20). If this flag is raised the transaction type in the kernel database will be reset after completion (e.g. to '20' for refund) in order to hide this modification from the outside world (vouchers, host messages) 


### define EMV_CTLS_FLOW_GLOB_CFG_APPL_NAME_2

```
#define EMV_CTLS_FLOW_GLOB_CFG_APPL_NAME_2 0x08
```


B3b4: (Vel: y VFI: n) **Use with care**: Do not use card's application name (EMVCo rule: 9F12 prior to 50) but always use the default application label [EMV_CTLS_APPLIDATA_SCHEME_SPECIFIC_STRUCT::DefaultApplicationName_DFAB22](struct_e_m_v___c_t_l_s___a_p_p_l_i_d_a_t_a___s_c_h_e_m_e___s_p_e_c_i_f_i_c___s_t_r_u_c_t.md#variable-defaultapplicationname-dfab22) in result data [EMV_CTLS_TRANSRES_STRUCT::AppName](struct_e_m_v___c_t_l_s___t_r_a_n_s_r_e_s___s_t_r_u_c_t.md#variable-appname)


### define EMV_CTLS_FLOW_GLOB_CARD_READ_SKIP_TXN_LIMIT_CHECK_2

```
#define EMV_CTLS_FLOW_GLOB_CARD_READ_SKIP_TXN_LIMIT_CHECK_2 0x10
```

B3b5: (Vel: y VFI: n) If this bit is set for this AID the transaction limit check will be skipped for card read transactions and the AID remains in the candidate list. 



-------------------------------

Updated on 2025-06-17 at 11:52:22 +0100