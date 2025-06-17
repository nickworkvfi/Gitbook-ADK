---
title: Application flow capabilities for payWave (Visa)
summary: Contents of EMV_CTLS_APPLIDATA_VK_STRUCT::AppFlowCap_DFAB31. 

---

# Application flow capabilities for payWave (Visa)

**Module:** **[Configuration](group___a_d_k___c_o_n_f_i_g_u_r_a_t_i_o_n.md)** **/** **[Application data](group___d_e_f___c_o_n_f___a_p_p_l_i.md)**

Contents of [EMV_CTLS_APPLIDATA_VK_STRUCT::AppFlowCap_DFAB31](struct_e_m_v___c_t_l_s___a_p_p_l_i_d_a_t_a___v_k___s_t_r_u_c_t.md#variable-appflowcap-dfab31). 

## Defines

|                | Name           |
| -------------- | -------------- |
|  | **[EMV_CTLS_FLOW_VK_STATUS_CHECK_ENABLE_0](group___d_e_f___f_l_o_w___v_k.md#define-emv-ctls-flow-vk-status-check-enable-0)** <br>B1b1: (Vel: y VFI: y) Enable status check for one single unit of currency (1$ txn is going online for status check)  |
|  | **[EMV_CTLS_FLOW_VK_ZERO_CHECK_ENABLE_SKIP_0](group___d_e_f___f_l_o_w___v_k.md#define-emv-ctls-flow-vk-zero-check-enable-skip-0)** <br>B1b2: (Vel: y VFI: y) Enable zero check for zero amount transaction, Option 2: skip AID for zero amount txns. Can't be combined with Option 2 in B1b3.  |
|  | **[EMV_CTLS_FLOW_VK_ZERO_CHECK_ENABLE_ONLINE_0](group___d_e_f___f_l_o_w___v_k.md#define-emv-ctls-flow-vk-zero-check-enable-online-0)** <br>B1b3: (Vel: y VFI: y) Enable zero check for zero amount transaction, Option 1: going online for zero amount txns. Can't be combined with Option 1 in B1b2. This is the default option. This is the prioritary option if both options are set.  |
|  | **[EMV_CTLS_FLOW_VK_CHECK_INCONS_TRACK2_PAN_0](group___d_e_f___f_l_o_w___v_k.md#define-emv-ctls-flow-vk-check-incons-track2-pan-0)** <br>B1b4: (Vel: y VFI: n) Check consistency of track2 equivalent data ([TAG_57_TRACK2_EQUIVALENT](group___e_m_v_c_o___t_a_g_s.md#define-tag-57-track2-equivalent)) provided by ICC. Validate format and that contents matches to [TAG_5A_APP_PAN](group___e_m_v_c_o___t_a_g_s.md#define-tag-5a-app-pan). Visa Europe stuff VppT.  |
|  | **[EMV_CTLS_FLOW_VK_CASHBACK_NOT_FORCED_CVM_0](group___d_e_f___f_l_o_w___v_k.md#define-emv-ctls-flow-vk-cashback-not-forced-cvm-0)** <br>B1b5: (Vel: y VFI: n) Per default cashback transactions require CVM and are forced online by setting floorlimit to 0, you can use standard CVM limit and floorlimit if you set this flag.  |
|  | **[EMV_CTLS_FLOW_VK_SUCCESS_TONE_ON_DECLINE](group___d_e_f___f_l_o_w___v_k.md#define-emv-ctls-flow-vk-success-tone-on-decline)** <br>B1b6:  |
|  | **[EMV_CTLS_FLOW_VK_ALERT_TONE_ON_DECLINE](group___d_e_f___f_l_o_w___v_k.md#define-emv-ctls-flow-vk-alert-tone-on-decline)**  |
|  | **[EMV_CTLS_FLOW_VK_GET_DATA_9F68_0](group___d_e_f___f_l_o_w___v_k.md#define-emv-ctls-flow-vk-get-data-9f68-0)** <br>B1b8: (Vel: y VFI: n) Card Read Flow initiated with [EMV_ADK_TRAN_TYPE_READ_CARD_DATA]() for retrieval of tag 9F68 (Card Additional Processes)  |
|  | **[EMV_CTLS_FLOW_VK_ENABLE_TAGS_AT_GPO](group___d_e_f___f_l_o_w___v_k.md#define-emv-ctls-flow-vk-enable-tags-at-gpo)** <br>B2b1: (Vel: y VFI: n) Apply workaround that Visa kernel up to version 2.1.5 accepts certain tags at GPO step. These are 9F07 & 5F28 for instance.  |
|  | **[EMV_CTLS_FLOW_VK_ZERO_CHECK_DISABLE_1](group___d_e_f___f_l_o_w___v_k.md#define-emv-ctls-flow-vk-zero-check-disable-1)** <br>B2b2: (Vel: y VFI: n) Disable Visa zero check.  |
|  | **[EMV_CTLS_FLOW_VK_ODO_SUPPORT_1](group___d_e_f___f_l_o_w___v_k.md#define-emv-ctls-flow-vk-odo-support-1)** <br>B2b4: (Vel: y VFI n) VK2.2.3 only: Enable Offline Data Authentication for online transactions (ODO) according "Visa ODA for qVSDC Online Specification". Note: To enable this feature, additionally TTQ B1b1 (9F66, Offline Data Authentication for Online Authorizations supported) must be set.  |
|  | **[EMV_CTLS_FLOW_VK_ODO_SDA_1](group___d_e_f___f_l_o_w___v_k.md#define-emv-ctls-flow-vk-odo-sda-1)** <br>B2b5: (Vel: y VFI n) VK2.2.3 only: Enable SDA for ODO.  |
|  | **[EMV_CTLS_FLOW_VK_ODO_DDA_1](group___d_e_f___f_l_o_w___v_k.md#define-emv-ctls-flow-vk-odo-dda-1)** <br>B2b6: (Vel: y VFI n) VK2.2.3 only: Enable fDDA for ODO.  |
|  | **[EMV_CTLS_FLOW_VK_ODO_SDA_ERR_ONLINE_1](group___d_e_f___f_l_o_w___v_k.md#define-emv-ctls-flow-vk-odo-sda-err-online-1)** <br>B2b7: (Vel: y VFI n) VK2.2.3 only: Outcome for ODO SDA error: 0 = Decline, 1 = Go online.  |
|  | **[EMV_CTLS_FLOW_VK_ODO_DDA_ERR_ONLINE_1](group___d_e_f___f_l_o_w___v_k.md#define-emv-ctls-flow-vk-odo-dda-err-online-1)** <br>B2b8: (Vel: y VFI n) VK2.2.3 only: Outcome for ODO fDDA error: 0 = Decline, 1 = Go online.  |
|  | **[EMV_CTLS_FLOW_VK_OMIT_AUC_INT_CASH_2](group___d_e_f___f_l_o_w___v_k.md#define-emv-ctls-flow-vk-omit-auc-int-cash-2)** <br>B3b1: (Vel: y VFI n) Omit AUC "International Cash" check.  |
|  | **[EMV_CTLS_FLOW_VK_OMIT_AUC_INT_CASHBACK_2](group___d_e_f___f_l_o_w___v_k.md#define-emv-ctls-flow-vk-omit-auc-int-cashback-2)** <br>B3b2: (Vel: y VFI n) Omit AUC "International Cashback" check.  |
|  | **[EMV_CTLS_FLOW_VK_OMIT_AUC_DOM_CASH_2](group___d_e_f___f_l_o_w___v_k.md#define-emv-ctls-flow-vk-omit-auc-dom-cash-2)** <br>B3b3: (Vel: y VFI n) Omit AUC "Domestic Cash" check.  |
|  | **[EMV_CTLS_FLOW_VK_OMIT_AUC_DOM_CASHBACK_2](group___d_e_f___f_l_o_w___v_k.md#define-emv-ctls-flow-vk-omit-auc-dom-cashback-2)** <br>B3b4: (Vel: y VFI n) Omit AUC "Domestic Cashback" check.  |
|  | **[EMV_CTLS_FLOW_VK_ZERO_CASHBACK_AMOUNT_2](group___d_e_f___f_l_o_w___v_k.md#define-emv-ctls-flow-vk-zero-cashback-amount-2)** <br>B3b5: (Vel: y VFI n) Set Cashback amount to zero for Cashback transactions. Workaround to allow Cashback transactions with Russian cards not supporting domestic Cashback.  |
|  | **[EMV_CTLS_FLOW_VK_CASHBACK_TRANS_TYPE_09_2](group___d_e_f___f_l_o_w___v_k.md#define-emv-ctls-flow-vk-cashback-trans-type-09-2)** <br>B3b6: (Vel: y VFI n) Use Transaction Type 09 for cashback transactions. VCSP 2.2 mandates Transaction Type 00.  |
|  | **[EMV_CTLS_FLOW_VK_QUASI_CASH_2](group___d_e_f___f_l_o_w___v_k.md#define-emv-ctls-flow-vk-quasi-cash-2)** <br>B3b7: (Vel: y VFI n) Convert transaction type from '01' to '11' indicating VISA Quasi Cash. If supported by L2 kernel AUC checks for cash will be applied.  |
|  | **[EMV_CTLS_FLOW_VK_DO_NOT_CFG_9F21_TIME_2](group___d_e_f___f_l_o_w___v_k.md#define-emv-ctls-flow-vk-do-not-cfg-9f21-time-2)** <br>B3b8: (Vel: y VFI n) Set Transaction Time tag 9F21 to "000000".  |




## Macros Documentation

### define EMV_CTLS_FLOW_VK_STATUS_CHECK_ENABLE_0

```
#define EMV_CTLS_FLOW_VK_STATUS_CHECK_ENABLE_0 0x01
```

B1b1: (Vel: y VFI: y) Enable status check for one single unit of currency (1$ txn is going online for status check) 

### define EMV_CTLS_FLOW_VK_ZERO_CHECK_ENABLE_SKIP_0

```
#define EMV_CTLS_FLOW_VK_ZERO_CHECK_ENABLE_SKIP_0 0x02
```

B1b2: (Vel: y VFI: y) Enable zero check for zero amount transaction, Option 2: skip AID for zero amount txns. Can't be combined with Option 2 in B1b3. 

### define EMV_CTLS_FLOW_VK_ZERO_CHECK_ENABLE_ONLINE_0

```
#define EMV_CTLS_FLOW_VK_ZERO_CHECK_ENABLE_ONLINE_0 0x04
```

B1b3: (Vel: y VFI: y) Enable zero check for zero amount transaction, Option 1: going online for zero amount txns. Can't be combined with Option 1 in B1b2. This is the default option. This is the prioritary option if both options are set. 

### define EMV_CTLS_FLOW_VK_CHECK_INCONS_TRACK2_PAN_0

```
#define EMV_CTLS_FLOW_VK_CHECK_INCONS_TRACK2_PAN_0 0x08
```

B1b4: (Vel: y VFI: n) Check consistency of track2 equivalent data ([TAG_57_TRACK2_EQUIVALENT](group___e_m_v_c_o___t_a_g_s.md#define-tag-57-track2-equivalent)) provided by ICC. Validate format and that contents matches to [TAG_5A_APP_PAN](group___e_m_v_c_o___t_a_g_s.md#define-tag-5a-app-pan). Visa Europe stuff VppT. 

### define EMV_CTLS_FLOW_VK_CASHBACK_NOT_FORCED_CVM_0

```
#define EMV_CTLS_FLOW_VK_CASHBACK_NOT_FORCED_CVM_0 0x10
```

B1b5: (Vel: y VFI: n) Per default cashback transactions require CVM and are forced online by setting floorlimit to 0, you can use standard CVM limit and floorlimit if you set this flag. 

### define EMV_CTLS_FLOW_VK_SUCCESS_TONE_ON_DECLINE

```
#define EMV_CTLS_FLOW_VK_SUCCESS_TONE_ON_DECLINE 0x20
```

B1b6: 

**Deprecated**: 

: If GPO results in AAC: default was changed to sound solely success tone 

### define EMV_CTLS_FLOW_VK_ALERT_TONE_ON_DECLINE

```
#define EMV_CTLS_FLOW_VK_ALERT_TONE_ON_DECLINE 0x40
```


B1b7: (Vel: y VFI: n) Per default the tone indicates if card read successful or not. Outcome of the transaction is not indicated. With this option an additional alert tone is sounded in case transaction is declined. 


### define EMV_CTLS_FLOW_VK_GET_DATA_9F68_0

```
#define EMV_CTLS_FLOW_VK_GET_DATA_9F68_0 0x80
```

B1b8: (Vel: y VFI: n) Card Read Flow initiated with [EMV_ADK_TRAN_TYPE_READ_CARD_DATA]() for retrieval of tag 9F68 (Card Additional Processes) 

### define EMV_CTLS_FLOW_VK_ENABLE_TAGS_AT_GPO

```
#define EMV_CTLS_FLOW_VK_ENABLE_TAGS_AT_GPO 0x01
```

B2b1: (Vel: y VFI: n) Apply workaround that Visa kernel up to version 2.1.5 accepts certain tags at GPO step. These are 9F07 & 5F28 for instance. 

### define EMV_CTLS_FLOW_VK_ZERO_CHECK_DISABLE_1

```
#define EMV_CTLS_FLOW_VK_ZERO_CHECK_DISABLE_1 0x02
```

B2b2: (Vel: y VFI: n) Disable Visa zero check. 

### define EMV_CTLS_FLOW_VK_ODO_SUPPORT_1

```
#define EMV_CTLS_FLOW_VK_ODO_SUPPORT_1 0x08
```

B2b4: (Vel: y VFI n) VK2.2.3 only: Enable Offline Data Authentication for online transactions (ODO) according "Visa ODA for qVSDC Online Specification". Note: To enable this feature, additionally TTQ B1b1 (9F66, Offline Data Authentication for Online Authorizations supported) must be set. 

### define EMV_CTLS_FLOW_VK_ODO_SDA_1

```
#define EMV_CTLS_FLOW_VK_ODO_SDA_1 0x10
```

B2b5: (Vel: y VFI n) VK2.2.3 only: Enable SDA for ODO. 

### define EMV_CTLS_FLOW_VK_ODO_DDA_1

```
#define EMV_CTLS_FLOW_VK_ODO_DDA_1 0x20
```

B2b6: (Vel: y VFI n) VK2.2.3 only: Enable fDDA for ODO. 

### define EMV_CTLS_FLOW_VK_ODO_SDA_ERR_ONLINE_1

```
#define EMV_CTLS_FLOW_VK_ODO_SDA_ERR_ONLINE_1 0x40
```

B2b7: (Vel: y VFI n) VK2.2.3 only: Outcome for ODO SDA error: 0 = Decline, 1 = Go online. 

### define EMV_CTLS_FLOW_VK_ODO_DDA_ERR_ONLINE_1

```
#define EMV_CTLS_FLOW_VK_ODO_DDA_ERR_ONLINE_1 0x80
```

B2b8: (Vel: y VFI n) VK2.2.3 only: Outcome for ODO fDDA error: 0 = Decline, 1 = Go online. 

### define EMV_CTLS_FLOW_VK_OMIT_AUC_INT_CASH_2

```
#define EMV_CTLS_FLOW_VK_OMIT_AUC_INT_CASH_2 0x01
```

B3b1: (Vel: y VFI n) Omit AUC "International Cash" check. 

### define EMV_CTLS_FLOW_VK_OMIT_AUC_INT_CASHBACK_2

```
#define EMV_CTLS_FLOW_VK_OMIT_AUC_INT_CASHBACK_2 0x02
```

B3b2: (Vel: y VFI n) Omit AUC "International Cashback" check. 

### define EMV_CTLS_FLOW_VK_OMIT_AUC_DOM_CASH_2

```
#define EMV_CTLS_FLOW_VK_OMIT_AUC_DOM_CASH_2 0x04
```

B3b3: (Vel: y VFI n) Omit AUC "Domestic Cash" check. 

### define EMV_CTLS_FLOW_VK_OMIT_AUC_DOM_CASHBACK_2

```
#define EMV_CTLS_FLOW_VK_OMIT_AUC_DOM_CASHBACK_2 0x08
```

B3b4: (Vel: y VFI n) Omit AUC "Domestic Cashback" check. 

### define EMV_CTLS_FLOW_VK_ZERO_CASHBACK_AMOUNT_2

```
#define EMV_CTLS_FLOW_VK_ZERO_CASHBACK_AMOUNT_2 0x10
```

B3b5: (Vel: y VFI n) Set Cashback amount to zero for Cashback transactions. Workaround to allow Cashback transactions with Russian cards not supporting domestic Cashback. 

### define EMV_CTLS_FLOW_VK_CASHBACK_TRANS_TYPE_09_2

```
#define EMV_CTLS_FLOW_VK_CASHBACK_TRANS_TYPE_09_2 0x20
```

B3b6: (Vel: y VFI n) Use Transaction Type 09 for cashback transactions. VCSP 2.2 mandates Transaction Type 00. 

### define EMV_CTLS_FLOW_VK_QUASI_CASH_2

```
#define EMV_CTLS_FLOW_VK_QUASI_CASH_2 0x40
```

B3b7: (Vel: y VFI n) Convert transaction type from '01' to '11' indicating VISA Quasi Cash. If supported by L2 kernel AUC checks for cash will be applied. 

### define EMV_CTLS_FLOW_VK_DO_NOT_CFG_9F21_TIME_2

```
#define EMV_CTLS_FLOW_VK_DO_NOT_CFG_9F21_TIME_2 0x80
```

B3b8: (Vel: y VFI n) Set Transaction Time tag 9F21 to "000000". 



-------------------------------

Updated on 2025-06-17 at 11:52:22 +0100