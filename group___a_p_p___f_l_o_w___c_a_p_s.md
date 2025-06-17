---
title: Defines for Application flow capabilities
summary: Application (transaction flow) capabilities (see EMV_CT_APPLIDATA_STRUCT::App_FlowCap) 

---

# Defines for Application flow capabilities

**Module:** **[Configuration](group___a_d_k___c_o_n_f_i_g_u_r_a_t_i_o_n.md)** **/** **[Application data](group___d_e_f___c_o_n_f___a_p_p_l_i.md)**

Application (transaction flow) capabilities (see [EMV_CT_APPLIDATA_STRUCT::App_FlowCap](struct_e_m_v___c_t___a_p_p_l_i_d_a_t_a___s_t_r_u_c_t.md#variable-app-flowcap)) 

## Defines

|                | Name           |
| -------------- | -------------- |
|  | **[FORCE_RISK_MANAGEMENT](group___a_p_p___f_l_o_w___c_a_p_s.md#define-force-risk-management)** <br>B1b1: Perform Terminal Risk Management regardless of Application Interchange Profile bit "Terminal risk management is to be performed". **Important Note** Enable this flag because it is required according EMVCo Book 3, chapter 10.6 Terminal Risk Management.  |
|  | **[BLACKLIST](group___a_p_p___f_l_o_w___c_a_p_s.md#define-blacklist)** <br>B1b2: Enables blacklist/transaction log callback (aka exception list, hot list), [EMV_CT_CALLBACK_FnT]() ([TAG_BF03_CBK_LOG_HOTLIST]()) will be invoked    Depends on [EMV_CT_TRXOP_HOTLST_LOG_CALLBACK]() and [MS_RETURN_CALLBACKS]().  |
|  | **[TRANSACTION_LOG](group___a_p_p___f_l_o_w___c_a_p_s.md#define-transaction-log)** <br>B1b3: Enables blacklist/transaction log callback for avoiding spit payments according EMVCo Book 3, chapter 10.6.1 Floor Limits. [EMV_CT_CALLBACK_FnT]() ([TAG_BF03_CBK_LOG_HOTLIST]()) will be invoked    Depends on [EMV_CT_TRXOP_HOTLST_LOG_CALLBACK]() and [MS_RETURN_CALLBACKS]().  |
|  | **[PIN_BYPASS](group___a_p_p___f_l_o_w___c_a_p_s.md#define-pin-bypass)** <br>B1b4: PIN bypass supported.  |
|  | **[FORCE_ONLINE](group___a_p_p___f_l_o_w___c_a_p_s.md#define-force-online)** <br>B1b5: Feature "Force online" supported (suspicious customer). This relates to Terminal Verification Result B4b4 "Merchant forced transaction online". Note: Force Online is performed if both flags are set, the support flag here and the transaction flow option [EMV_CT_PAYMENT_STRUCT::Force_Online](struct_e_m_v___c_t___p_a_y_m_e_n_t___s_t_r_u_c_t.md#variable-force-online).  |
|  | **[FORCE_ACCEPTANCE](group___a_p_p___f_l_o_w___c_a_p_s.md#define-force-acceptance)** <br>B1b6: Feature "Force acceptance" supported (accept on merchant's risk). **Use with care**: This overrules the card's or terminal or authorisation host decision. Note: Force Acceptance is performed if both flags are set, the support flag here and the transaction flow option [EMV_CT_PAYMENT_STRUCT::Force_Acceptance](struct_e_m_v___c_t___p_a_y_m_e_n_t___s_t_r_u_c_t.md#variable-force-acceptance).  |
|  | **[CASH_SUPPORT](group___a_p_p___f_l_o_w___c_a_p_s.md#define-cash-support)** <br>B2b1: Support of cash transactions.  |
|  | **[CASHBACK_SUPPORT](group___a_p_p___f_l_o_w___c_a_p_s.md#define-cashback-support)** <br>B2b2: Support of cashback transactions.  |
|  | **[EMV_CT_CHECK_INCONS_TRACK2_PAN](group___a_p_p___f_l_o_w___c_a_p_s.md#define-emv-ct-check-incons-track2-pan)** <br>B2b3: Check consistency of track2 equivalent data ([TAG_57_TRACK2_EQUIVALENT](group___e_m_v_c_o___t_a_g_s.md#define-tag-57-track2-equivalent)) provided by ICC.    Mandated for MasterCard and Amex.    Validate format and that contents matches to [TAG_5A_APP_PAN](group___e_m_v_c_o___t_a_g_s.md#define-tag-5a-app-pan) and [TAG_5F24_APP_EXP_DATE](group___e_m_v_c_o___t_a_g_s.md#define-tag-5f24-app-exp-date).    See also [EMV_CT_FALLBACK_ON_INCONS_TRACK2]().  |
|  | **[EMV_CT_CONF_AMOUNT_PIN](group___a_p_p___f_l_o_w___c_a_p_s.md#define-emv-ct-conf-amount-pin)** <br>B2b4: Confirm amount and enter PIN in one display.    Invoking callback for amount confirmation depends on [EMV_CT_TRXOP_AMOUNT_CONF]().    May be deactivated by [MS_RETURN_CALLBACKS]().  |
|  | **[EMV_CT_DOMESTIC_CHECK](group___a_p_p___f_l_o_w___c_a_p_s.md#define-emv-ct-domestic-check)** <br>B2b5: Callback function [EMV_CT_CALLBACK_FnT]() ([TAG_BF06_CBK_LOCAL_CHECKS]()) will be called.    Needs to be activated per transaction by [EMV_CT_TRXOP_LOCAL_CHCK_CALLBACK]().    May be deactivated by [MS_RETURN_CALLBACKS]().  |
|  | **[TRANSACTION_TYPE_17_FOR_CASH](group___a_p_p___f_l_o_w___c_a_p_s.md#define-transaction-type-17-for-cash)** <br>B2b6: Transaction type 17 for MasterCard cash transactions.  |
|  | **[EMV_CT_CHECK_INCONS_TRACK2_NO_EXP](group___a_p_p___f_l_o_w___c_a_p_s.md#define-emv-ct-check-incons-track2-no-exp)** <br>B2b7: Check consistency of track2 equivalent data ([TAG_57_TRACK2_EQUIVALENT](group___e_m_v_c_o___t_a_g_s.md#define-tag-57-track2-equivalent)) provided by ICC.    Mandated for MasterCard and Amex.    Validate format and that contents matches to [TAG_5A_APP_PAN](group___e_m_v_c_o___t_a_g_s.md#define-tag-5a-app-pan)   Only effective if [EMV_CT_CHECK_INCONS_TRACK2_PAN](group___a_p_p___f_l_o_w___c_a_p_s.md#define-emv-ct-check-incons-track2-pan) is deactivated. See also [EMV_CT_FALLBACK_ON_INCONS_TRACK2]().  |
|  | **[TRANSACTION_TYPE_30_FOR_PREAUTH](group___a_p_p___f_l_o_w___c_a_p_s.md#define-transaction-type-30-for-preauth)** <br>B2b8: Amex Pre-Authorization with transaction type 30.  |
|  | **[REFERRAL_AFTER_TRX](group___a_p_p___f_l_o_w___c_a_p_s.md#define-referral-after-trx)** <br>B3b1: In case voice referral is required: Chip transaction is terminated with AAC. Referral transaction is performed subsequently as "CardNotPresent" (German handling).  |
|  | **[DCC_CHECK](group___a_p_p___f_l_o_w___c_a_p_s.md#define-dcc-check)** <br>B3b2: Enable DCC (Dynamic currency conversion).    Invocation depends on [MS_RETURN_CALLBACKS](), [EMV_CT_TRXOP_DCC_CALLBACK](), and [EMV_CT_TRXOP_DCC_CALLBACK_ALWAYS]().  |
|  | **[REFUND_CONFIRM_AMOUNT](group___a_p_p___f_l_o_w___c_a_p_s.md#define-refund-confirm-amount)** <br>B3b3: Confirm amount during refund transaction    Invoking callback for amount confirmation depends on [EMV_CT_TRXOP_AMOUNT_CONF]() and [MS_RETURN_CALLBACKS]().  |
|  | **[EMV_CT_USE_CFG_APPL_NAME](group___a_p_p___f_l_o_w___c_a_p_s.md#define-emv-ct-use-cfg-appl-name)** <br>B3b4: **Use with care**: Do not use card's application name (EMVCo rule: 9F12 prior to 50) but always the default label. Effective for cardholder's application selection.  |
|  | **[EMV_CT_FALLBACK_ON_INCONS_TRACK2](group___a_p_p___f_l_o_w___c_a_p_s.md#define-emv-ct-fallback-on-incons-track2)** <br>B3b5: Valid only in case of activated [EMV_CT_CHECK_INCONS_TRACK2_PAN](group___a_p_p___f_l_o_w___c_a_p_s.md#define-emv-ct-check-incons-track2-pan).    If activated: Check will be done before Cardholder Verification. In case of fail EMV ADK will process fallback handling (may result in [EMV_ADK_FALLBACK](group___a_d_k___r_e_t___c_o_d_e.md#define-emv-adk-fallback)). E.g. required for German dcpos 2.4, may be used for "M/Chip Functional Architecture", AMEX ED-031 in test plan ver. 4.2.    If not activated: Check will be done just before processing 1st cryptogram. If fail: GENAC1 will be requested with AAC. E.g. required for MasterCard REQ22, AMEX ED-031 in Swedish AMEX test plan 1.0.  |
|  | **[EMV_CT_AMOUNT_CONFIRM_ON_SIGNATURE](group___a_p_p___f_l_o_w___c_a_p_s.md#define-emv-ct-amount-confirm-on-signature)** <br>B3b6: Customer amount confirmation in case of CVM signature    Invoking callback for amount confirmation depends on [EMV_CT_TRXOP_AMOUNT_CONF]() and [MS_RETURN_CALLBACKS]().  |
|  | **[EMV_CT_SDA_SELECTED_TVR_ON](group___a_p_p___f_l_o_w___c_a_p_s.md#define-emv-ct-sda-selected-tvr-on)** <br>B3b7: Activate the support of the TVR byte SDA selected, introduced in Nov 2013 for kernels not yet supporting this feature, configurable per AID (for kernels supporting this it'll be always activated, config is don't care)  |
|  | **[EMV_CASHBACK_OFFLINE_SUPPORT](group___a_p_p___f_l_o_w___c_a_p_s.md#define-emv-cashback-offline-support)** <br>B3b8: If set cash back transactions are not automatically forced online. **Use with care**: Usual business rules require online processing.  |
|  | **[REFUND_PROCESSING_RESTRICTIONS](group___a_p_p___f_l_o_w___c_a_p_s.md#define-refund-processing-restrictions)** <br>B4b1: Perform Processing restrictions for Refund transactions (French Refund Requirements).  |
|  | **[REFUND_NO_GENERATE_AC](group___a_p_p___f_l_o_w___c_a_p_s.md#define-refund-no-generate-ac)** <br>B4b2: Do not perform Generate AC when finishing Refund transactions (French Refund Requirements).  |
|  | **[REFUND_FLOW_INTERAC](group___a_p_p___f_l_o_w___c_a_p_s.md#define-refund-flow-interac)** <br>B4b3: Perform full EMV transaction although transaction type is refund. **Use with care**: Is is recommended by EMVCo to abort the transaction once the account data has been read. Activation of the "full" flow requires that all cards and background systems support it.  |
|  | **[REFUND_NO_ZERO_AMOUNT](group___a_p_p___f_l_o_w___c_a_p_s.md#define-refund-no-zero-amount)** <br>B4b4: Do NOT set the amount to zero in CDOL1 for Refund transactions with Generate AC. **Use with care**: Card read transactions are just for getting the account data and it is best practice to "close" the card session by requesting an ARQC with zero amount.  |
|  | **[DPAS_DATA_STORAGE_SUPPORT](group___a_p_p___f_l_o_w___c_a_p_s.md#define-dpas-data-storage-support)** <br>B4b5: Support of Data Storage for D-PAS Connect. Useful only for Discover AIDs.  |
|  | **[DPAS_EXTENDED_LOGGING_SUPPORT](group___a_p_p___f_l_o_w___c_a_p_s.md#define-dpas-extended-logging-support)** <br>B4b6: Support of Extended Logging for D-PAS Connect. Useful only for Discover AIDs.  |
|  | **[DPAS_CDCVM_SUPPORT](group___a_p_p___f_l_o_w___c_a_p_s.md#define-dpas-cdcvm-support)** <br>B4b7: Support of Consumer Device CVM for D-PAS Connect. Useful only for Discover AIDs.  |
|  | **[APP_FLOW_VISA_QUASI_CASH](group___a_p_p___f_l_o_w___c_a_p_s.md#define-app-flow-visa-quasi-cash)** <br>B4b8: Convert transaction type from '01' to '11' indicating VISA Quasi Cash. Use in conjunction with [EMV_CT_APPLIDATA_TYPE.TxnTypesCash](struct_e_m_v___c_t___a_p_p_l_i_d_a_t_a___s_t_r_u_c_t.md#variable-txntypescash) if AUC checks shall be applied, that is both values '01' and '11' should be set.  |
|  | **[APP_FLOW_CASHBACK_TRANS_TYPE_00](group___a_p_p___f_l_o_w___c_a_p_s.md#define-app-flow-cashback-trans-type-00)** <br>B5b1: For cashback transaction (amount other != 0) use transaction type '00' as required by Visa.  |
|  | **[REFUND_FLOW_ARQC](group___a_p_p___f_l_o_w___c_a_p_s.md#define-refund-flow-arqc)** <br>B5b2: Like standard refund flow but request ARQC at first Generate AC (Discover requirement)  |




## Macros Documentation

### define FORCE_RISK_MANAGEMENT

```
#define FORCE_RISK_MANAGEMENT 0x01
```

B1b1: Perform Terminal Risk Management regardless of Application Interchange Profile bit "Terminal risk management is to be performed". **Important Note** Enable this flag because it is required according EMVCo Book 3, chapter 10.6 Terminal Risk Management. 

### define BLACKLIST

```
#define BLACKLIST 0x02
```

B1b2: Enables blacklist/transaction log callback (aka exception list, hot list), [EMV_CT_CALLBACK_FnT]() ([TAG_BF03_CBK_LOG_HOTLIST]()) will be invoked    Depends on [EMV_CT_TRXOP_HOTLST_LOG_CALLBACK]() and [MS_RETURN_CALLBACKS](). 

### define TRANSACTION_LOG

```
#define TRANSACTION_LOG 0x04
```

B1b3: Enables blacklist/transaction log callback for avoiding spit payments according EMVCo Book 3, chapter 10.6.1 Floor Limits. [EMV_CT_CALLBACK_FnT]() ([TAG_BF03_CBK_LOG_HOTLIST]()) will be invoked    Depends on [EMV_CT_TRXOP_HOTLST_LOG_CALLBACK]() and [MS_RETURN_CALLBACKS](). 

### define PIN_BYPASS

```
#define PIN_BYPASS 0x08
```

B1b4: PIN bypass supported. 

### define FORCE_ONLINE

```
#define FORCE_ONLINE 0x10
```

B1b5: Feature "Force online" supported (suspicious customer). This relates to Terminal Verification Result B4b4 "Merchant forced transaction online". Note: Force Online is performed if both flags are set, the support flag here and the transaction flow option [EMV_CT_PAYMENT_STRUCT::Force_Online](struct_e_m_v___c_t___p_a_y_m_e_n_t___s_t_r_u_c_t.md#variable-force-online). 

### define FORCE_ACCEPTANCE

```
#define FORCE_ACCEPTANCE 0x20
```

B1b6: Feature "Force acceptance" supported (accept on merchant's risk). **Use with care**: This overrules the card's or terminal or authorisation host decision. Note: Force Acceptance is performed if both flags are set, the support flag here and the transaction flow option [EMV_CT_PAYMENT_STRUCT::Force_Acceptance](struct_e_m_v___c_t___p_a_y_m_e_n_t___s_t_r_u_c_t.md#variable-force-acceptance). 

### define CASH_SUPPORT

```
#define CASH_SUPPORT 0x01
```

B2b1: Support of cash transactions. 

### define CASHBACK_SUPPORT

```
#define CASHBACK_SUPPORT 0x02
```

B2b2: Support of cashback transactions. 

### define EMV_CT_CHECK_INCONS_TRACK2_PAN

```
#define EMV_CT_CHECK_INCONS_TRACK2_PAN 0x04
```

B2b3: Check consistency of track2 equivalent data ([TAG_57_TRACK2_EQUIVALENT](group___e_m_v_c_o___t_a_g_s.md#define-tag-57-track2-equivalent)) provided by ICC.    Mandated for MasterCard and Amex.    Validate format and that contents matches to [TAG_5A_APP_PAN](group___e_m_v_c_o___t_a_g_s.md#define-tag-5a-app-pan) and [TAG_5F24_APP_EXP_DATE](group___e_m_v_c_o___t_a_g_s.md#define-tag-5f24-app-exp-date).    See also [EMV_CT_FALLBACK_ON_INCONS_TRACK2](). 

### define EMV_CT_CONF_AMOUNT_PIN

```
#define EMV_CT_CONF_AMOUNT_PIN 0x08
```

B2b4: Confirm amount and enter PIN in one display.    Invoking callback for amount confirmation depends on [EMV_CT_TRXOP_AMOUNT_CONF]().    May be deactivated by [MS_RETURN_CALLBACKS](). 

### define EMV_CT_DOMESTIC_CHECK

```
#define EMV_CT_DOMESTIC_CHECK 0x10
```

B2b5: Callback function [EMV_CT_CALLBACK_FnT]() ([TAG_BF06_CBK_LOCAL_CHECKS]()) will be called.    Needs to be activated per transaction by [EMV_CT_TRXOP_LOCAL_CHCK_CALLBACK]().    May be deactivated by [MS_RETURN_CALLBACKS](). 

### define TRANSACTION_TYPE_17_FOR_CASH

```
#define TRANSACTION_TYPE_17_FOR_CASH 0x20
```

B2b6: Transaction type 17 for MasterCard cash transactions. 

Use [EMV_ADK_TRAN_TYPE_MASTERCARD_CASH](group___t_r_a_n_s___t_y_p_e_s.md#define-emv-adk-tran-type-mastercard-cash) for cash transactions 

 Note: Cash transaction types are defined in [EMV_CT_APPLIDATA_STRUCT::TxnTypesCash](struct_e_m_v___c_t___a_p_p_l_i_d_a_t_a___s_t_r_u_c_t.md#variable-txntypescash). 

 The modified transaction type is used towards card and put out in [EMV_CT_TRANSRES_STRUCT::T_9C_TransType](struct_e_m_v___c_t___t_r_a_n_s_r_e_s___s_t_r_u_c_t.md#variable-t-9c-transtype). 


### define EMV_CT_CHECK_INCONS_TRACK2_NO_EXP

```
#define EMV_CT_CHECK_INCONS_TRACK2_NO_EXP 0x40
```

B2b7: Check consistency of track2 equivalent data ([TAG_57_TRACK2_EQUIVALENT](group___e_m_v_c_o___t_a_g_s.md#define-tag-57-track2-equivalent)) provided by ICC.    Mandated for MasterCard and Amex.    Validate format and that contents matches to [TAG_5A_APP_PAN](group___e_m_v_c_o___t_a_g_s.md#define-tag-5a-app-pan)   Only effective if [EMV_CT_CHECK_INCONS_TRACK2_PAN](group___a_p_p___f_l_o_w___c_a_p_s.md#define-emv-ct-check-incons-track2-pan) is deactivated. See also [EMV_CT_FALLBACK_ON_INCONS_TRACK2](). 

### define TRANSACTION_TYPE_30_FOR_PREAUTH

```
#define TRANSACTION_TYPE_30_FOR_PREAUTH 0x80
```

B2b8: Amex Pre-Authorization with transaction type 30. 

**Note**: Pre-Authorization and reservation transactions are equivalent. They are initiated with [EMV_ADK_TRAN_TYPE_INIT_RESERVATION_A](group___t_r_a_n_s___t_y_p_e_s.md#define-emv-adk-tran-type-init-reservation-a) or [EMV_ADK_TRAN_TYPE_INIT_RESERVATION_B](group___t_r_a_n_s___t_y_p_e_s.md#define-emv-adk-tran-type-init-reservation-b). 



 Use [EMV_ADK_TRAN_TYPE_AMEX_PREAUTH](group___t_r_a_n_s___t_y_p_e_s.md#define-emv-adk-tran-type-amex-preauth) for pre-authorization resp. reservation transactions 

 The modified transaction type is used towards card and put out in [EMV_CT_TRANSRES_STRUCT::T_9C_TransType](struct_e_m_v___c_t___t_r_a_n_s_r_e_s___s_t_r_u_c_t.md#variable-t-9c-transtype). 


### define REFERRAL_AFTER_TRX

```
#define REFERRAL_AFTER_TRX 0x01
```

B3b1: In case voice referral is required: Chip transaction is terminated with AAC. Referral transaction is performed subsequently as "CardNotPresent" (German handling). 

### define DCC_CHECK

```
#define DCC_CHECK 0x02
```

B3b2: Enable DCC (Dynamic currency conversion).    Invocation depends on [MS_RETURN_CALLBACKS](), [EMV_CT_TRXOP_DCC_CALLBACK](), and [EMV_CT_TRXOP_DCC_CALLBACK_ALWAYS](). 

### define REFUND_CONFIRM_AMOUNT

```
#define REFUND_CONFIRM_AMOUNT 0x04
```

B3b3: Confirm amount during refund transaction    Invoking callback for amount confirmation depends on [EMV_CT_TRXOP_AMOUNT_CONF]() and [MS_RETURN_CALLBACKS](). 

### define EMV_CT_USE_CFG_APPL_NAME

```
#define EMV_CT_USE_CFG_APPL_NAME 0x08
```

B3b4: **Use with care**: Do not use card's application name (EMVCo rule: 9F12 prior to 50) but always the default label. Effective for cardholder's application selection. 

### define EMV_CT_FALLBACK_ON_INCONS_TRACK2

```
#define EMV_CT_FALLBACK_ON_INCONS_TRACK2 0x10
```

B3b5: Valid only in case of activated [EMV_CT_CHECK_INCONS_TRACK2_PAN](group___a_p_p___f_l_o_w___c_a_p_s.md#define-emv-ct-check-incons-track2-pan).    If activated: Check will be done before Cardholder Verification. In case of fail EMV ADK will process fallback handling (may result in [EMV_ADK_FALLBACK](group___a_d_k___r_e_t___c_o_d_e.md#define-emv-adk-fallback)). E.g. required for German dcpos 2.4, may be used for "M/Chip Functional Architecture", AMEX ED-031 in test plan ver. 4.2.    If not activated: Check will be done just before processing 1st cryptogram. If fail: GENAC1 will be requested with AAC. E.g. required for MasterCard REQ22, AMEX ED-031 in Swedish AMEX test plan 1.0. 

### define EMV_CT_AMOUNT_CONFIRM_ON_SIGNATURE

```
#define EMV_CT_AMOUNT_CONFIRM_ON_SIGNATURE 0x20
```

B3b6: Customer amount confirmation in case of CVM signature    Invoking callback for amount confirmation depends on [EMV_CT_TRXOP_AMOUNT_CONF]() and [MS_RETURN_CALLBACKS](). 

### define EMV_CT_SDA_SELECTED_TVR_ON

```
#define EMV_CT_SDA_SELECTED_TVR_ON 0x40
```

B3b7: Activate the support of the TVR byte SDA selected, introduced in Nov 2013 for kernels not yet supporting this feature, configurable per AID (for kernels supporting this it'll be always activated, config is don't care) 

### define EMV_CASHBACK_OFFLINE_SUPPORT

```
#define EMV_CASHBACK_OFFLINE_SUPPORT 0x80
```

B3b8: If set cash back transactions are not automatically forced online. **Use with care**: Usual business rules require online processing. 

### define REFUND_PROCESSING_RESTRICTIONS

```
#define REFUND_PROCESSING_RESTRICTIONS 0x01
```

B4b1: Perform Processing restrictions for Refund transactions (French Refund Requirements). 

### define REFUND_NO_GENERATE_AC

```
#define REFUND_NO_GENERATE_AC 0x02
```

B4b2: Do not perform Generate AC when finishing Refund transactions (French Refund Requirements). 

### define REFUND_FLOW_INTERAC

```
#define REFUND_FLOW_INTERAC 0x04
```

B4b3: Perform full EMV transaction although transaction type is refund. **Use with care**: Is is recommended by EMVCo to abort the transaction once the account data has been read. Activation of the "full" flow requires that all cards and background systems support it. 

### define REFUND_NO_ZERO_AMOUNT

```
#define REFUND_NO_ZERO_AMOUNT 0x08
```

B4b4: Do NOT set the amount to zero in CDOL1 for Refund transactions with Generate AC. **Use with care**: Card read transactions are just for getting the account data and it is best practice to "close" the card session by requesting an ARQC with zero amount. 

### define DPAS_DATA_STORAGE_SUPPORT

```
#define DPAS_DATA_STORAGE_SUPPORT 0x10
```

B4b5: Support of Data Storage for D-PAS Connect. Useful only for Discover AIDs. 

### define DPAS_EXTENDED_LOGGING_SUPPORT

```
#define DPAS_EXTENDED_LOGGING_SUPPORT 0x20
```

B4b6: Support of Extended Logging for D-PAS Connect. Useful only for Discover AIDs. 

### define DPAS_CDCVM_SUPPORT

```
#define DPAS_CDCVM_SUPPORT 0x40
```

B4b7: Support of Consumer Device CVM for D-PAS Connect. Useful only for Discover AIDs. 

### define APP_FLOW_VISA_QUASI_CASH

```
#define APP_FLOW_VISA_QUASI_CASH 0x80
```

B4b8: Convert transaction type from '01' to '11' indicating VISA Quasi Cash. Use in conjunction with [EMV_CT_APPLIDATA_TYPE.TxnTypesCash](struct_e_m_v___c_t___a_p_p_l_i_d_a_t_a___s_t_r_u_c_t.md#variable-txntypescash) if AUC checks shall be applied, that is both values '01' and '11' should be set. 

### define APP_FLOW_CASHBACK_TRANS_TYPE_00

```
#define APP_FLOW_CASHBACK_TRANS_TYPE_00 0x01
```

B5b1: For cashback transaction (amount other != 0) use transaction type '00' as required by Visa. 

[EMV_CT_APPLIDATA_TYPE.TxnTypesCashback](struct_e_m_v___c_t___a_p_p_l_i_d_a_t_a___s_t_r_u_c_t.md#variable-txntypescashback) will be adjusted automatically to include '00' for CVM processing. 

 For L2 kernel version <= 7.0.3 there is a work-around to temporarily set back to given transaction type (usually '09', must not indicate sale or cash) during AUC checks. 


### define REFUND_FLOW_ARQC

```
#define REFUND_FLOW_ARQC 0x02
```

B5b2: Like standard refund flow but request ARQC at first Generate AC (Discover requirement) 



-------------------------------

Updated on 2025-06-17 at 11:52:22 +0100