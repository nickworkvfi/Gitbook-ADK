---
title: EMV_CTLS_SetupTransaction: Which data is included in input struct
summary: Contents of the input in EMV_CTLS_START_STRUCT::Info_Included_Data, EMV_CTLS_SetupTransaction()

---

# EMV_CTLS_SetupTransaction: Which data is included in input struct

**Module:** **[Transaction execution](group___a_d_k___t_r_x___e_x_e_c.md)** **/** **[Input data](group___d_e_f___f_l_o_w___i_n_p_u_t.md)**

Contents of the input in [EMV_CTLS_START_STRUCT::Info_Included_Data](struct_e_m_v___c_t_l_s___s_t_a_r_t___s_t_r_u_c_t.md#variable-info-included-data), [EMV_CTLS_SetupTransaction()](group___f_u_n_c___f_l_o_w.md#function-emv-ctls-setuptransaction) [More...](#detailed-description)

## Defines

|                | Name           |
| -------------- | -------------- |
|  | **[INPUT_CTLS_SEL_AMOUNT](group___d_e_f___i_n_p_u_t___s_e_l_e_c_t.md#define-input-ctls-sel-amount)** <br>B1b1: [EMV_CTLS_PAYMENT_STRUCT::Amount](struct_e_m_v___c_t_l_s___p_a_y_m_e_n_t___s_t_r_u_c_t.md#variable-amount).  |
|  | **[INPUT_CTLS_SEL_AMOUNT_CURRENCY](group___d_e_f___i_n_p_u_t___s_e_l_e_c_t.md#define-input-ctls-sel-amount-currency)** <br>B1b2: [EMV_CTLS_PAYMENT_STRUCT::CurrencyTrans](struct_e_m_v___c_t_l_s___p_a_y_m_e_n_t___s_t_r_u_c_t.md#variable-currencytrans).  |
|  | **[INPUT_CTLS_SEL_CUREXPONENT](group___d_e_f___i_n_p_u_t___s_e_l_e_c_t.md#define-input-ctls-sel-curexponent)** <br>B1b3: [EMV_CTLS_PAYMENT_STRUCT::ExpTrans](struct_e_m_v___c_t_l_s___p_a_y_m_e_n_t___s_t_r_u_c_t.md#variable-exptrans).  |
|  | **[INPUT_CTLS_SEL_DATE](group___d_e_f___i_n_p_u_t___s_e_l_e_c_t.md#define-input-ctls-sel-date)** <br>B1b4: [EMV_CTLS_PAYMENT_STRUCT::Date](struct_e_m_v___c_t_l_s___p_a_y_m_e_n_t___s_t_r_u_c_t.md#variable-date).  |
|  | **[INPUT_CTLS_SEL_TIME](group___d_e_f___i_n_p_u_t___s_e_l_e_c_t.md#define-input-ctls-sel-time)** <br>B1b5: [EMV_CTLS_PAYMENT_STRUCT::Time](struct_e_m_v___c_t_l_s___p_a_y_m_e_n_t___s_t_r_u_c_t.md#variable-time).  |
|  | **[INPUT_CTLS_SEL_TTYPE](group___d_e_f___i_n_p_u_t___s_e_l_e_c_t.md#define-input-ctls-sel-ttype)** <br>B1b6: [EMV_CTLS_START_STRUCT::TransType](struct_e_m_v___c_t_l_s___s_t_a_r_t___s_t_r_u_c_t.md#variable-transtype).  |
|  | **[INPUT_CTLS_SEL_EXCLUDE_AID](group___d_e_f___i_n_p_u_t___s_e_l_e_c_t.md#define-input-ctls-sel-exclude-aid)** <br>B1b7: [EMV_CTLS_APPS_SELECT_STRUCT::ExcludeEmvAIDs](struct_e_m_v___c_t_l_s___a_p_p_s___s_e_l_e_c_t___s_t_r_u_c_t.md#variable-excludeemvaids).  |
|  | **[INPUT_CTLS_SEL_FORCE_ONLINE](group___d_e_f___i_n_p_u_t___s_e_l_e_c_t.md#define-input-ctls-sel-force-online)** <br>B1b8: [EMV_CTLS_PAYMENT_STRUCT::Force_Online](struct_e_m_v___c_t_l_s___p_a_y_m_e_n_t___s_t_r_u_c_t.md#variable-force-online).  |
|  | **[INPUT_CTLS_SEL_ONLINE_SWITCH](group___d_e_f___i_n_p_u_t___s_e_l_e_c_t.md#define-input-ctls-sel-online-switch)** <br>B2b1: [EMV_CTLS_PAYMENT_STRUCT::Online_Switch](struct_e_m_v___c_t_l_s___p_a_y_m_e_n_t___s_t_r_u_c_t.md#variable-online-switch).  |
|  | **[INPUT_CTLS_SEL_TXN_COUNTER](group___d_e_f___i_n_p_u_t___s_e_l_e_c_t.md#define-input-ctls-sel-txn-counter)** <br>B2b2: [EMV_CTLS_PAYMENT_STRUCT::TransCount](struct_e_m_v___c_t_l_s___p_a_y_m_e_n_t___s_t_r_u_c_t.md#variable-transcount).  |
|  | **[INPUT_CTLS_SEL_CB_AMOUNT](group___d_e_f___i_n_p_u_t___s_e_l_e_c_t.md#define-input-ctls-sel-cb-amount)** <br>B2b3: [EMV_CTLS_PAYMENT_STRUCT::Cashback_Amount](struct_e_m_v___c_t_l_s___p_a_y_m_e_n_t___s_t_r_u_c_t.md#variable-cashback-amount).  |
|  | **[INPUT_CTLS_SEL_ACCOUNT_TYPE](group___d_e_f___i_n_p_u_t___s_e_l_e_c_t.md#define-input-ctls-sel-account-type)** <br>B2b4: [EMV_CTLS_PAYMENT_STRUCT::uc_AccountType](struct_e_m_v___c_t_l_s___p_a_y_m_e_n_t___s_t_r_u_c_t.md#variable-uc-accounttype).  |
|  | **[INPUT_CTLS_SEL_TXN_OPTIONS](group___d_e_f___i_n_p_u_t___s_e_l_e_c_t.md#define-input-ctls-sel-txn-options)** <br>B2b5: [EMV_CTLS_START_STRUCT::TxnOptions](struct_e_m_v___c_t_l_s___s_t_a_r_t___s_t_r_u_c_t.md#variable-txnoptions).  |
|  | **[INPUT_CTLS_SEL_POLL_TIMEOUT](group___d_e_f___i_n_p_u_t___s_e_l_e_c_t.md#define-input-ctls-sel-poll-timeout)** <br>B2b6: [EMV_CTLS_START_STRUCT::ServerPollTimeout](struct_e_m_v___c_t_l_s___s_t_a_r_t___s_t_r_u_c_t.md#variable-serverpolltimeout).  |
|  | **[INPUT_CTLS_SEL_PASSTHROUGH](group___d_e_f___i_n_p_u_t___s_e_l_e_c_t.md#define-input-ctls-sel-passthrough)** <br>B2b7: [EMV_CTLS_START_STRUCT::passthroughCardTypes](struct_e_m_v___c_t_l_s___s_t_a_r_t___s_t_r_u_c_t.md#variable-passthroughcardtypes).  |
|  | **[INPUT_CTLS_SEL_ADD_TAGS](group___d_e_f___i_n_p_u_t___s_e_l_e_c_t.md#define-input-ctls-sel-add-tags)** <br>B2b8:  |
|  | **[INPUT_CTLS_SEL_EXCLUDE_COMBO](group___d_e_f___i_n_p_u_t___s_e_l_e_c_t.md#define-input-ctls-sel-exclude-combo)** <br>B3b1: [EMV_CTLS_APPS_SELECT_STRUCT::ExcludeCombos](struct_e_m_v___c_t_l_s___a_p_p_s___s_e_l_e_c_t___s_t_r_u_c_t.md#variable-excludecombos).  |
|  | **[INPUT_SEL_AMOUNT](group___d_e_f___i_n_p_u_t___s_e_l_e_c_t.md#define-input-sel-amount)** <br>B1b1: `txn` amount, [EMV_CT_PAYMENT_STRUCT::Amount](struct_e_m_v___c_t___p_a_y_m_e_n_t___s_t_r_u_c_t.md#variable-amount).  |
|  | **[INPUT_SEL_AMOUNT_CURRENCY](group___d_e_f___i_n_p_u_t___s_e_l_e_c_t.md#define-input-sel-amount-currency)** <br>B1b2: `currency` of txn, [EMV_CT_PAYMENT_STRUCT::CurrencyTrans](struct_e_m_v___c_t___p_a_y_m_e_n_t___s_t_r_u_c_t.md#variable-currencytrans).  |
|  | **[INPUT_SEL_CUREXPONENT](group___d_e_f___i_n_p_u_t___s_e_l_e_c_t.md#define-input-sel-curexponent)** <br>B1b3: `currency` exponent of txn, [EMV_CT_PAYMENT_STRUCT::ExpTrans](struct_e_m_v___c_t___p_a_y_m_e_n_t___s_t_r_u_c_t.md#variable-exptrans).  |
|  | **[INPUT_SEL_DATE](group___d_e_f___i_n_p_u_t___s_e_l_e_c_t.md#define-input-sel-date)** <br>B1b4: `date` of txn, [EMV_CT_PAYMENT_STRUCT::Date](struct_e_m_v___c_t___p_a_y_m_e_n_t___s_t_r_u_c_t.md#variable-date).  |
|  | **[INPUT_SEL_TIME](group___d_e_f___i_n_p_u_t___s_e_l_e_c_t.md#define-input-sel-time)** <br>B1b5: `time` of txn, [EMV_CT_PAYMENT_STRUCT::Time](struct_e_m_v___c_t___p_a_y_m_e_n_t___s_t_r_u_c_t.md#variable-time).  |
|  | **[INPUT_SEL_TTYPE](group___d_e_f___i_n_p_u_t___s_e_l_e_c_t.md#define-input-sel-ttype)** <br>B1b6: `transaction` type of txn, [EMV_CT_SELECT_STRUCT::TransType](struct_e_m_v___c_t___s_e_l_e_c_t___s_t_r_u_c_t.md#variable-transtype).  |
|  | **[INPUT_SEL_EXCLUDE_AID](group___d_e_f___i_n_p_u_t___s_e_l_e_c_t.md#define-input-sel-exclude-aid)** <br>B1b7: `AIDs` to exclude for this transaction, [EMV_CT_APPS_SELECT_STRUCT::ExcludeEmvAIDs](struct_e_m_v___c_t___a_p_p_s___s_e_l_e_c_t___s_t_r_u_c_t.md#variable-excludeemvaids).  |
|  | **[INPUT_SEL_BUILDLIST](group___d_e_f___i_n_p_u_t___s_e_l_e_c_t.md#define-input-sel-buildlist)** <br>B1b8: `build` the candidate list or not, [EMV_CT_SELECT_STRUCT::InitTXN_Buildlist](struct_e_m_v___c_t___s_e_l_e_c_t___s_t_r_u_c_t.md#variable-inittxn-buildlist).  |
|  | **[INPUT_SEL_FORCE_ONLINE](group___d_e_f___i_n_p_u_t___s_e_l_e_c_t.md#define-input-sel-force-online)** <br>B2b1: `force` it online (suspicious, EMVCo), [EMV_CT_PAYMENT_STRUCT::Force_Online](struct_e_m_v___c_t___p_a_y_m_e_n_t___s_t_r_u_c_t.md#variable-force-online).  |
|  | **[INPUT_SEL_FORCE_ACCEPT](group___d_e_f___i_n_p_u_t___s_e_l_e_c_t.md#define-input-sel-force-accept)** <br>B2b2: `force` acceptance, [EMV_CT_PAYMENT_STRUCT::Force_Acceptance](struct_e_m_v___c_t___p_a_y_m_e_n_t___s_t_r_u_c_t.md#variable-force-acceptance).  |
|  | **[INPUT_SEL_NO_PSE](group___d_e_f___i_n_p_u_t___s_e_l_e_c_t.md#define-input-sel-no-pse)** <br>B2b3: `no` PSE, [EMV_CT_APPS_SELECT_STRUCT::No_DirectorySelect](struct_e_m_v___c_t___a_p_p_s___s_e_l_e_c_t___s_t_r_u_c_t.md#variable-no-directoryselect).  |
|  | **[INPUT_SEL_CARDCONF](group___d_e_f___i_n_p_u_t___s_e_l_e_c_t.md#define-input-sel-cardconf)** <br>B2b4: `cardholder` confirmation, [EMV_CT_APPS_SELECT_STRUCT::ucCardholderConfirmation](struct_e_m_v___c_t___a_p_p_s___s_e_l_e_c_t___s_t_r_u_c_t.md#variable-uccardholderconfirmation).  |
|  | **[INPUT_SEL_ONLINE_SWITCH](group___d_e_f___i_n_p_u_t___s_e_l_e_c_t.md#define-input-sel-online-switch)** <br>B2b5: `force` it online (domestic need), [EMV_CT_PAYMENT_STRUCT::Online_Switch](struct_e_m_v___c_t___p_a_y_m_e_n_t___s_t_r_u_c_t.md#variable-online-switch).  |
|  | **[INPUT_SEL_TXN_OPTIONS](group___d_e_f___i_n_p_u_t___s_e_l_e_c_t.md#define-input-sel-txn-options)** <br>B2b6: `transaction` options, [EMV_CT_SELECT_STRUCT::TxnOptions](struct_e_m_v___c_t___s_e_l_e_c_t___s_t_r_u_c_t.md#variable-txnoptions).  |
|  | **[INPUT_SEL_DOMCHIP](group___d_e_f___i_n_p_u_t___s_e_l_e_c_t.md#define-input-sel-domchip)** <br>B2b7: `domestic` chip apps included, [EMV_CT_APPS_SELECT_STRUCT::countDomesticChip](struct_e_m_v___c_t___a_p_p_s___s_e_l_e_c_t___s_t_r_u_c_t.md#variable-countdomesticchip) and [EMV_CT_APPS_SELECT_STRUCT](struct_e_m_v___c_t___a_p_p_s___s_e_l_e_c_t___s_t_r_u_c_t.md):: xDomestic_Chip.  |
|  | **[INPUT_SEL_FALLBACK_MSR](group___d_e_f___i_n_p_u_t___s_e_l_e_c_t.md#define-input-sel-fallback-msr)** <br>B2b8: `fallback` msr apps included, [EMV_CT_APPS_SELECT_STRUCT](struct_e_m_v___c_t___a_p_p_s___s_e_l_e_c_t___s_t_r_u_c_t.md):: countFallbackMS and [EMV_CT_APPS_SELECT_STRUCT::xFallback_MS](struct_e_m_v___c_t___a_p_p_s___s_e_l_e_c_t___s_t_r_u_c_t.md#variable-xfallback-ms).  |
|  | **[INPUT_SEL_TXN_COUNTER](group___d_e_f___i_n_p_u_t___s_e_l_e_c_t.md#define-input-sel-txn-counter)** <br>B3b1: `transaction` counter, [EMV_CT_PAYMENT_STRUCT::TransCount](struct_e_m_v___c_t___p_a_y_m_e_n_t___s_t_r_u_c_t.md#variable-transcount).  |
|  | **[INPUT_SEL_TXN_STEPS](group___d_e_f___i_n_p_u_t___s_e_l_e_c_t.md#define-input-sel-txn-steps)** <br>B3b2: `transaction` steps if interrupt needed instead of 1 step processing, [EMV_CT_SELECT_STRUCT::TxnSteps](struct_e_m_v___c_t___s_e_l_e_c_t___s_t_r_u_c_t.md#variable-txnsteps).  |
|  | **[INPUT_SEL_CB_AMOUNT](group___d_e_f___i_n_p_u_t___s_e_l_e_c_t.md#define-input-sel-cb-amount)** <br>B3b3: `cashback` amount, [EMV_CT_PAYMENT_STRUCT::Cashback_Amount](struct_e_m_v___c_t___p_a_y_m_e_n_t___s_t_r_u_c_t.md#variable-cashback-amount).  |
|  | **[INPUT_SEL_ACCOUNT_TYPE](group___d_e_f___i_n_p_u_t___s_e_l_e_c_t.md#define-input-sel-account-type)** <br>B3b4: `account` type, [EMV_CT_PAYMENT_STRUCT::uc_AccountType](struct_e_m_v___c_t___p_a_y_m_e_n_t___s_t_r_u_c_t.md#variable-uc-accounttype).  |
|  | **[INPUT_SEL_LANGUAGE](group___d_e_f___i_n_p_u_t___s_e_l_e_c_t.md#define-input-sel-language)** <br>B3b5: `language` preselected, [EMV_CT_PAYMENT_STRUCT::PreSelected_Language](struct_e_m_v___c_t___p_a_y_m_e_n_t___s_t_r_u_c_t.md#variable-preselected-language).  |
|  | **[INPUT_SEL_AMOUNT_CONF](group___d_e_f___i_n_p_u_t___s_e_l_e_c_t.md#define-input-sel-amount-conf)** <br>B3b6: `amount` confirmation, [EMV_CT_PAYMENT_STRUCT::uc_AmountConfirmation](struct_e_m_v___c_t___p_a_y_m_e_n_t___s_t_r_u_c_t.md#variable-uc-amountconfirmation).  |
|  | **[INPUT_SEL_ADD_TAGS](group___d_e_f___i_n_p_u_t___s_e_l_e_c_t.md#define-input-sel-add-tags)** <br>B3b7:  |
|  | **[INPUT_SEL_MOD_CANDLIST](group___d_e_f___i_n_p_u_t___s_e_l_e_c_t.md#define-input-sel-mod-candlist)** <br>B3b8: `modified` candidate list (only valid in reentrance mode using the candidate list manipulation option [RETURN_CAND_LIST_PREPROC]())  |

## Detailed Description

Contents of the input in [EMV_CTLS_START_STRUCT::Info_Included_Data](struct_e_m_v___c_t_l_s___s_t_a_r_t___s_t_r_u_c_t.md#variable-info-included-data), [EMV_CTLS_SetupTransaction()](group___f_u_n_c___f_l_o_w.md#function-emv-ctls-setuptransaction)

Contents of [EMV_CT_SELECT_STRUCT::Info_Included_Data](struct_e_m_v___c_t___s_e_l_e_c_t___s_t_r_u_c_t.md#variable-info-included-data).




## Macros Documentation

### define INPUT_CTLS_SEL_AMOUNT

```
#define INPUT_CTLS_SEL_AMOUNT 0x01
```

B1b1: [EMV_CTLS_PAYMENT_STRUCT::Amount](struct_e_m_v___c_t_l_s___p_a_y_m_e_n_t___s_t_r_u_c_t.md#variable-amount). 

### define INPUT_CTLS_SEL_AMOUNT_CURRENCY

```
#define INPUT_CTLS_SEL_AMOUNT_CURRENCY 0x02
```

B1b2: [EMV_CTLS_PAYMENT_STRUCT::CurrencyTrans](struct_e_m_v___c_t_l_s___p_a_y_m_e_n_t___s_t_r_u_c_t.md#variable-currencytrans). 

### define INPUT_CTLS_SEL_CUREXPONENT

```
#define INPUT_CTLS_SEL_CUREXPONENT 0x04
```

B1b3: [EMV_CTLS_PAYMENT_STRUCT::ExpTrans](struct_e_m_v___c_t_l_s___p_a_y_m_e_n_t___s_t_r_u_c_t.md#variable-exptrans). 

### define INPUT_CTLS_SEL_DATE

```
#define INPUT_CTLS_SEL_DATE 0x08
```

B1b4: [EMV_CTLS_PAYMENT_STRUCT::Date](struct_e_m_v___c_t_l_s___p_a_y_m_e_n_t___s_t_r_u_c_t.md#variable-date). 

### define INPUT_CTLS_SEL_TIME

```
#define INPUT_CTLS_SEL_TIME 0x10
```

B1b5: [EMV_CTLS_PAYMENT_STRUCT::Time](struct_e_m_v___c_t_l_s___p_a_y_m_e_n_t___s_t_r_u_c_t.md#variable-time). 

### define INPUT_CTLS_SEL_TTYPE

```
#define INPUT_CTLS_SEL_TTYPE 0x20
```

B1b6: [EMV_CTLS_START_STRUCT::TransType](struct_e_m_v___c_t_l_s___s_t_a_r_t___s_t_r_u_c_t.md#variable-transtype). 

### define INPUT_CTLS_SEL_EXCLUDE_AID

```
#define INPUT_CTLS_SEL_EXCLUDE_AID 0x40
```

B1b7: [EMV_CTLS_APPS_SELECT_STRUCT::ExcludeEmvAIDs](struct_e_m_v___c_t_l_s___a_p_p_s___s_e_l_e_c_t___s_t_r_u_c_t.md#variable-excludeemvaids). 

### define INPUT_CTLS_SEL_FORCE_ONLINE

```
#define INPUT_CTLS_SEL_FORCE_ONLINE 0x80
```

B1b8: [EMV_CTLS_PAYMENT_STRUCT::Force_Online](struct_e_m_v___c_t_l_s___p_a_y_m_e_n_t___s_t_r_u_c_t.md#variable-force-online). 

### define INPUT_CTLS_SEL_ONLINE_SWITCH

```
#define INPUT_CTLS_SEL_ONLINE_SWITCH 0x01
```

B2b1: [EMV_CTLS_PAYMENT_STRUCT::Online_Switch](struct_e_m_v___c_t_l_s___p_a_y_m_e_n_t___s_t_r_u_c_t.md#variable-online-switch). 

### define INPUT_CTLS_SEL_TXN_COUNTER

```
#define INPUT_CTLS_SEL_TXN_COUNTER 0x02
```

B2b2: [EMV_CTLS_PAYMENT_STRUCT::TransCount](struct_e_m_v___c_t_l_s___p_a_y_m_e_n_t___s_t_r_u_c_t.md#variable-transcount). 

### define INPUT_CTLS_SEL_CB_AMOUNT

```
#define INPUT_CTLS_SEL_CB_AMOUNT 0x04
```

B2b3: [EMV_CTLS_PAYMENT_STRUCT::Cashback_Amount](struct_e_m_v___c_t_l_s___p_a_y_m_e_n_t___s_t_r_u_c_t.md#variable-cashback-amount). 

### define INPUT_CTLS_SEL_ACCOUNT_TYPE

```
#define INPUT_CTLS_SEL_ACCOUNT_TYPE 0x08
```

B2b4: [EMV_CTLS_PAYMENT_STRUCT::uc_AccountType](struct_e_m_v___c_t_l_s___p_a_y_m_e_n_t___s_t_r_u_c_t.md#variable-uc-accounttype). 

### define INPUT_CTLS_SEL_TXN_OPTIONS

```
#define INPUT_CTLS_SEL_TXN_OPTIONS 0x10
```

B2b5: [EMV_CTLS_START_STRUCT::TxnOptions](struct_e_m_v___c_t_l_s___s_t_a_r_t___s_t_r_u_c_t.md#variable-txnoptions). 

### define INPUT_CTLS_SEL_POLL_TIMEOUT

```
#define INPUT_CTLS_SEL_POLL_TIMEOUT 0x20
```

B2b6: [EMV_CTLS_START_STRUCT::ServerPollTimeout](struct_e_m_v___c_t_l_s___s_t_a_r_t___s_t_r_u_c_t.md#variable-serverpolltimeout). 

### define INPUT_CTLS_SEL_PASSTHROUGH

```
#define INPUT_CTLS_SEL_PASSTHROUGH 0x40
```

B2b7: [EMV_CTLS_START_STRUCT::passthroughCardTypes](struct_e_m_v___c_t_l_s___s_t_a_r_t___s_t_r_u_c_t.md#variable-passthroughcardtypes). 

### define INPUT_CTLS_SEL_ADD_TAGS

```
#define INPUT_CTLS_SEL_ADD_TAGS 0x80
```

B2b8: 

**Deprecated**: 

Don't use [EMV_CTLS_PAYMENT_STRUCT::Additional_Result_Tags](struct_e_m_v___c_t_l_s___p_a_y_m_e_n_t___s_t_r_u_c_t.md#variable-additional-result-tags) anymore. Use [EMV_CTLS_fetchTxnTags()](group___f_u_n_c___f_l_o_w.md#function-emv-ctls-fetchtxntags) instead. 

### define INPUT_CTLS_SEL_EXCLUDE_COMBO

```
#define INPUT_CTLS_SEL_EXCLUDE_COMBO 0x01
```

B3b1: [EMV_CTLS_APPS_SELECT_STRUCT::ExcludeCombos](struct_e_m_v___c_t_l_s___a_p_p_s___s_e_l_e_c_t___s_t_r_u_c_t.md#variable-excludecombos). 

### define INPUT_SEL_AMOUNT

```
#define INPUT_SEL_AMOUNT 0x01
```

B1b1: `txn` amount, [EMV_CT_PAYMENT_STRUCT::Amount](struct_e_m_v___c_t___p_a_y_m_e_n_t___s_t_r_u_c_t.md#variable-amount). 

### define INPUT_SEL_AMOUNT_CURRENCY

```
#define INPUT_SEL_AMOUNT_CURRENCY 0x02
```

B1b2: `currency` of txn, [EMV_CT_PAYMENT_STRUCT::CurrencyTrans](struct_e_m_v___c_t___p_a_y_m_e_n_t___s_t_r_u_c_t.md#variable-currencytrans). 

### define INPUT_SEL_CUREXPONENT

```
#define INPUT_SEL_CUREXPONENT 0x04
```

B1b3: `currency` exponent of txn, [EMV_CT_PAYMENT_STRUCT::ExpTrans](struct_e_m_v___c_t___p_a_y_m_e_n_t___s_t_r_u_c_t.md#variable-exptrans). 

### define INPUT_SEL_DATE

```
#define INPUT_SEL_DATE 0x08
```

B1b4: `date` of txn, [EMV_CT_PAYMENT_STRUCT::Date](struct_e_m_v___c_t___p_a_y_m_e_n_t___s_t_r_u_c_t.md#variable-date). 

### define INPUT_SEL_TIME

```
#define INPUT_SEL_TIME 0x10
```

B1b5: `time` of txn, [EMV_CT_PAYMENT_STRUCT::Time](struct_e_m_v___c_t___p_a_y_m_e_n_t___s_t_r_u_c_t.md#variable-time). 

### define INPUT_SEL_TTYPE

```
#define INPUT_SEL_TTYPE 0x20
```

B1b6: `transaction` type of txn, [EMV_CT_SELECT_STRUCT::TransType](struct_e_m_v___c_t___s_e_l_e_c_t___s_t_r_u_c_t.md#variable-transtype). 

### define INPUT_SEL_EXCLUDE_AID

```
#define INPUT_SEL_EXCLUDE_AID 0x40
```

B1b7: `AIDs` to exclude for this transaction, [EMV_CT_APPS_SELECT_STRUCT::ExcludeEmvAIDs](struct_e_m_v___c_t___a_p_p_s___s_e_l_e_c_t___s_t_r_u_c_t.md#variable-excludeemvaids). 

### define INPUT_SEL_BUILDLIST

```
#define INPUT_SEL_BUILDLIST 0x80
```

B1b8: `build` the candidate list or not, [EMV_CT_SELECT_STRUCT::InitTXN_Buildlist](struct_e_m_v___c_t___s_e_l_e_c_t___s_t_r_u_c_t.md#variable-inittxn-buildlist). 

### define INPUT_SEL_FORCE_ONLINE

```
#define INPUT_SEL_FORCE_ONLINE 0x01
```

B2b1: `force` it online (suspicious, EMVCo), [EMV_CT_PAYMENT_STRUCT::Force_Online](struct_e_m_v___c_t___p_a_y_m_e_n_t___s_t_r_u_c_t.md#variable-force-online). 

### define INPUT_SEL_FORCE_ACCEPT

```
#define INPUT_SEL_FORCE_ACCEPT 0x02
```

B2b2: `force` acceptance, [EMV_CT_PAYMENT_STRUCT::Force_Acceptance](struct_e_m_v___c_t___p_a_y_m_e_n_t___s_t_r_u_c_t.md#variable-force-acceptance). 

### define INPUT_SEL_NO_PSE

```
#define INPUT_SEL_NO_PSE 0x04
```

B2b3: `no` PSE, [EMV_CT_APPS_SELECT_STRUCT::No_DirectorySelect](struct_e_m_v___c_t___a_p_p_s___s_e_l_e_c_t___s_t_r_u_c_t.md#variable-no-directoryselect). 

### define INPUT_SEL_CARDCONF

```
#define INPUT_SEL_CARDCONF 0x08
```

B2b4: `cardholder` confirmation, [EMV_CT_APPS_SELECT_STRUCT::ucCardholderConfirmation](struct_e_m_v___c_t___a_p_p_s___s_e_l_e_c_t___s_t_r_u_c_t.md#variable-uccardholderconfirmation). 

### define INPUT_SEL_ONLINE_SWITCH

```
#define INPUT_SEL_ONLINE_SWITCH 0x10
```

B2b5: `force` it online (domestic need), [EMV_CT_PAYMENT_STRUCT::Online_Switch](struct_e_m_v___c_t___p_a_y_m_e_n_t___s_t_r_u_c_t.md#variable-online-switch). 

### define INPUT_SEL_TXN_OPTIONS

```
#define INPUT_SEL_TXN_OPTIONS 0x20
```

B2b6: `transaction` options, [EMV_CT_SELECT_STRUCT::TxnOptions](struct_e_m_v___c_t___s_e_l_e_c_t___s_t_r_u_c_t.md#variable-txnoptions). 

### define INPUT_SEL_DOMCHIP

```
#define INPUT_SEL_DOMCHIP 0x40
```

B2b7: `domestic` chip apps included, [EMV_CT_APPS_SELECT_STRUCT::countDomesticChip](struct_e_m_v___c_t___a_p_p_s___s_e_l_e_c_t___s_t_r_u_c_t.md#variable-countdomesticchip) and [EMV_CT_APPS_SELECT_STRUCT](struct_e_m_v___c_t___a_p_p_s___s_e_l_e_c_t___s_t_r_u_c_t.md):: xDomestic_Chip. 

### define INPUT_SEL_FALLBACK_MSR

```
#define INPUT_SEL_FALLBACK_MSR 0x80
```

B2b8: `fallback` msr apps included, [EMV_CT_APPS_SELECT_STRUCT](struct_e_m_v___c_t___a_p_p_s___s_e_l_e_c_t___s_t_r_u_c_t.md):: countFallbackMS and [EMV_CT_APPS_SELECT_STRUCT::xFallback_MS](struct_e_m_v___c_t___a_p_p_s___s_e_l_e_c_t___s_t_r_u_c_t.md#variable-xfallback-ms). 

### define INPUT_SEL_TXN_COUNTER

```
#define INPUT_SEL_TXN_COUNTER 0x01
```

B3b1: `transaction` counter, [EMV_CT_PAYMENT_STRUCT::TransCount](struct_e_m_v___c_t___p_a_y_m_e_n_t___s_t_r_u_c_t.md#variable-transcount). 

### define INPUT_SEL_TXN_STEPS

```
#define INPUT_SEL_TXN_STEPS 0x02
```

B3b2: `transaction` steps if interrupt needed instead of 1 step processing, [EMV_CT_SELECT_STRUCT::TxnSteps](struct_e_m_v___c_t___s_e_l_e_c_t___s_t_r_u_c_t.md#variable-txnsteps). 

### define INPUT_SEL_CB_AMOUNT

```
#define INPUT_SEL_CB_AMOUNT 0x04
```

B3b3: `cashback` amount, [EMV_CT_PAYMENT_STRUCT::Cashback_Amount](struct_e_m_v___c_t___p_a_y_m_e_n_t___s_t_r_u_c_t.md#variable-cashback-amount). 

### define INPUT_SEL_ACCOUNT_TYPE

```
#define INPUT_SEL_ACCOUNT_TYPE 0x08
```

B3b4: `account` type, [EMV_CT_PAYMENT_STRUCT::uc_AccountType](struct_e_m_v___c_t___p_a_y_m_e_n_t___s_t_r_u_c_t.md#variable-uc-accounttype). 

### define INPUT_SEL_LANGUAGE

```
#define INPUT_SEL_LANGUAGE 0x10
```

B3b5: `language` preselected, [EMV_CT_PAYMENT_STRUCT::PreSelected_Language](struct_e_m_v___c_t___p_a_y_m_e_n_t___s_t_r_u_c_t.md#variable-preselected-language). 

### define INPUT_SEL_AMOUNT_CONF

```
#define INPUT_SEL_AMOUNT_CONF 0x20
```

B3b6: `amount` confirmation, [EMV_CT_PAYMENT_STRUCT::uc_AmountConfirmation](struct_e_m_v___c_t___p_a_y_m_e_n_t___s_t_r_u_c_t.md#variable-uc-amountconfirmation). 

### define INPUT_SEL_ADD_TAGS

```
#define INPUT_SEL_ADD_TAGS 0x40
```

B3b7: 

**Deprecated**: 

Don't use [EMV_CT_PAYMENT_STRUCT::Additional_Result_Tags](struct_e_m_v___c_t___p_a_y_m_e_n_t___s_t_r_u_c_t.md#variable-additional-result-tags) anymore. Use [EMV_CT_fetchTxnTags()](group___f_u_n_c___f_l_o_w.md#function-emv-ct-fetchtxntags) instead. 

### define INPUT_SEL_MOD_CANDLIST

```
#define INPUT_SEL_MOD_CANDLIST 0x80
```

B3b8: `modified` candidate list (only valid in reentrance mode using the candidate list manipulation option [RETURN_CAND_LIST_PREPROC]()) 



-------------------------------

Updated on 2025-06-17 at 11:52:23 +0100