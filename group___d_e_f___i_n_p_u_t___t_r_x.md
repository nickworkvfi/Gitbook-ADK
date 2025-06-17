---
title: Transaction input- Which data is included
summary: Contents of EMV_CT_TRANSAC_TYPE::Info_Included_Data. 

---

# Transaction input: Which data is included

**Module:** **[Transaction execution](group___a_d_k___t_r_x___e_x_e_c.md)** **/** **[Input data](group___d_e_f___f_l_o_w___i_n_p_u_t.md)**

Contents of [EMV_CT_TRANSAC_TYPE::Info_Included_Data](struct_e_m_v___c_t___t_r_a_n_s_a_c___s_t_r_u_c_t.md#variable-info-included-data). 

## Defines

|                | Name           |
| -------------- | -------------- |
|  | **[INPUT_OFL_TXN_COUNTER](group___d_e_f___i_n_p_u_t___t_r_x.md#define-input-ofl-txn-counter)** <br>B1b1: transaction counter, [EMV_CT_PAYMENT_STRUCT::TransCount](struct_e_m_v___c_t___p_a_y_m_e_n_t___s_t_r_u_c_t.md#variable-transcount).  |
|  | **[INPUT_OFL_ADD_TAGS](group___d_e_f___i_n_p_u_t___t_r_x.md#define-input-ofl-add-tags)** <br>B1b2:  |
|  | **[INPUT_OFL_CB_AMOUNT](group___d_e_f___i_n_p_u_t___t_r_x.md#define-input-ofl-cb-amount)** <br>B1b3: cashback amount, [EMV_CT_PAYMENT_STRUCT::Cashback_Amount](struct_e_m_v___c_t___p_a_y_m_e_n_t___s_t_r_u_c_t.md#variable-cashback-amount).  |
|  | **[INPUT_OFL_ACCOUNT_TYPE](group___d_e_f___i_n_p_u_t___t_r_x.md#define-input-ofl-account-type)** <br>B1b4: account type, [EMV_CT_PAYMENT_STRUCT::uc_AccountType](struct_e_m_v___c_t___p_a_y_m_e_n_t___s_t_r_u_c_t.md#variable-uc-accounttype).  |
|  | **[INPUT_OFL_LANGUAGE](group___d_e_f___i_n_p_u_t___t_r_x.md#define-input-ofl-language)** <br>B1b5: language preselected, [EMV_CT_PAYMENT_STRUCT::PreSelected_Language](struct_e_m_v___c_t___p_a_y_m_e_n_t___s_t_r_u_c_t.md#variable-preselected-language).  |
|  | **[INPUT_OFL_AMOUNT_CONF](group___d_e_f___i_n_p_u_t___t_r_x.md#define-input-ofl-amount-conf)** <br>B1b6: amount confirmation, [EMV_CT_PAYMENT_STRUCT::uc_AmountConfirmation](struct_e_m_v___c_t___p_a_y_m_e_n_t___s_t_r_u_c_t.md#variable-uc-amountconfirmation).  |
|  | **[INPUT_OFL_TXN_OPTIONS](group___d_e_f___i_n_p_u_t___t_r_x.md#define-input-ofl-txn-options)** <br>B1b7: transaction options, [EMV_CT_TRANSAC_STRUCT::TxnOptions](struct_e_m_v___c_t___t_r_a_n_s_a_c___s_t_r_u_c_t.md#variable-txnoptions).  |
|  | **[INPUT_OFL_TXN_STEPS](group___d_e_f___i_n_p_u_t___t_r_x.md#define-input-ofl-txn-steps)** <br>B1b8: transaction steps if interrupt needed instead of 1 step processing, [EMV_CT_TRANSAC_STRUCT::TxnSteps](struct_e_m_v___c_t___t_r_a_n_s_a_c___s_t_r_u_c_t.md#variable-txnsteps).  |
|  | **[INPUT_OFL_AMOUNT](group___d_e_f___i_n_p_u_t___t_r_x.md#define-input-ofl-amount)** <br>B2b1: txn amount, [EMV_CT_PAYMENT_STRUCT::Amount](struct_e_m_v___c_t___p_a_y_m_e_n_t___s_t_r_u_c_t.md#variable-amount).  |
|  | **[INPUT_OFL_AMOUNT_CURRENCY](group___d_e_f___i_n_p_u_t___t_r_x.md#define-input-ofl-amount-currency)** <br>B2b2: currency of txn, [EMV_CT_PAYMENT_STRUCT::CurrencyTrans](struct_e_m_v___c_t___p_a_y_m_e_n_t___s_t_r_u_c_t.md#variable-currencytrans).  |
|  | **[INPUT_OFL_CUREXPONENT](group___d_e_f___i_n_p_u_t___t_r_x.md#define-input-ofl-curexponent)** <br>B2b3: currency exponent of txn, [EMV_CT_PAYMENT_STRUCT::ExpTrans](struct_e_m_v___c_t___p_a_y_m_e_n_t___s_t_r_u_c_t.md#variable-exptrans).  |
|  | **[INPUT_OFL_DATE](group___d_e_f___i_n_p_u_t___t_r_x.md#define-input-ofl-date)** <br>B2b4: date of txn, [EMV_CT_PAYMENT_STRUCT::Date](struct_e_m_v___c_t___p_a_y_m_e_n_t___s_t_r_u_c_t.md#variable-date).  |
|  | **[INPUT_OFL_TIME](group___d_e_f___i_n_p_u_t___t_r_x.md#define-input-ofl-time)** <br>B2b5: time of txn, [EMV_CT_PAYMENT_STRUCT::Time](struct_e_m_v___c_t___p_a_y_m_e_n_t___s_t_r_u_c_t.md#variable-time).  |
|  | **[INPUT_OFL_FORCE_ONLINE](group___d_e_f___i_n_p_u_t___t_r_x.md#define-input-ofl-force-online)** <br>B2b6: force it online (suspicious, EMVCo), [EMV_CT_PAYMENT_STRUCT::Force_Online](struct_e_m_v___c_t___p_a_y_m_e_n_t___s_t_r_u_c_t.md#variable-force-online).  |
|  | **[INPUT_OFL_FORCE_ACCEPT](group___d_e_f___i_n_p_u_t___t_r_x.md#define-input-ofl-force-accept)** <br>B2b7: force acceptance, [EMV_CT_PAYMENT_STRUCT::Force_Acceptance](struct_e_m_v___c_t___p_a_y_m_e_n_t___s_t_r_u_c_t.md#variable-force-acceptance).  |
|  | **[INPUT_OFL_ONLINE_SWITCH](group___d_e_f___i_n_p_u_t___t_r_x.md#define-input-ofl-online-switch)** <br>B2b8: force it online (domestic need), [EMV_CT_PAYMENT_STRUCT::Online_Switch](struct_e_m_v___c_t___p_a_y_m_e_n_t___s_t_r_u_c_t.md#variable-online-switch).  |




## Macros Documentation

### define INPUT_OFL_TXN_COUNTER

```
#define INPUT_OFL_TXN_COUNTER 0x01
```

B1b1: transaction counter, [EMV_CT_PAYMENT_STRUCT::TransCount](struct_e_m_v___c_t___p_a_y_m_e_n_t___s_t_r_u_c_t.md#variable-transcount). 

### define INPUT_OFL_ADD_TAGS

```
#define INPUT_OFL_ADD_TAGS 0x02
```

B1b2: 

**Deprecated**: 

Don't use [EMV_CT_PAYMENT_STRUCT::Additional_Result_Tags](struct_e_m_v___c_t___p_a_y_m_e_n_t___s_t_r_u_c_t.md#variable-additional-result-tags) anymore. Use [EMV_CT_fetchTxnTags()](group___f_u_n_c___f_l_o_w.md#function-emv-ct-fetchtxntags) instead. 

### define INPUT_OFL_CB_AMOUNT

```
#define INPUT_OFL_CB_AMOUNT 0x04
```

B1b3: cashback amount, [EMV_CT_PAYMENT_STRUCT::Cashback_Amount](struct_e_m_v___c_t___p_a_y_m_e_n_t___s_t_r_u_c_t.md#variable-cashback-amount). 

### define INPUT_OFL_ACCOUNT_TYPE

```
#define INPUT_OFL_ACCOUNT_TYPE 0x08
```

B1b4: account type, [EMV_CT_PAYMENT_STRUCT::uc_AccountType](struct_e_m_v___c_t___p_a_y_m_e_n_t___s_t_r_u_c_t.md#variable-uc-accounttype). 

### define INPUT_OFL_LANGUAGE

```
#define INPUT_OFL_LANGUAGE 0x10
```

B1b5: language preselected, [EMV_CT_PAYMENT_STRUCT::PreSelected_Language](struct_e_m_v___c_t___p_a_y_m_e_n_t___s_t_r_u_c_t.md#variable-preselected-language). 

### define INPUT_OFL_AMOUNT_CONF

```
#define INPUT_OFL_AMOUNT_CONF 0x20
```

B1b6: amount confirmation, [EMV_CT_PAYMENT_STRUCT::uc_AmountConfirmation](struct_e_m_v___c_t___p_a_y_m_e_n_t___s_t_r_u_c_t.md#variable-uc-amountconfirmation). 

### define INPUT_OFL_TXN_OPTIONS

```
#define INPUT_OFL_TXN_OPTIONS 0x40
```

B1b7: transaction options, [EMV_CT_TRANSAC_STRUCT::TxnOptions](struct_e_m_v___c_t___t_r_a_n_s_a_c___s_t_r_u_c_t.md#variable-txnoptions). 

### define INPUT_OFL_TXN_STEPS

```
#define INPUT_OFL_TXN_STEPS 0x80
```

B1b8: transaction steps if interrupt needed instead of 1 step processing, [EMV_CT_TRANSAC_STRUCT::TxnSteps](struct_e_m_v___c_t___t_r_a_n_s_a_c___s_t_r_u_c_t.md#variable-txnsteps). 

### define INPUT_OFL_AMOUNT

```
#define INPUT_OFL_AMOUNT 0x01
```

B2b1: txn amount, [EMV_CT_PAYMENT_STRUCT::Amount](struct_e_m_v___c_t___p_a_y_m_e_n_t___s_t_r_u_c_t.md#variable-amount). 

### define INPUT_OFL_AMOUNT_CURRENCY

```
#define INPUT_OFL_AMOUNT_CURRENCY 0x02
```

B2b2: currency of txn, [EMV_CT_PAYMENT_STRUCT::CurrencyTrans](struct_e_m_v___c_t___p_a_y_m_e_n_t___s_t_r_u_c_t.md#variable-currencytrans). 

### define INPUT_OFL_CUREXPONENT

```
#define INPUT_OFL_CUREXPONENT 0x04
```

B2b3: currency exponent of txn, [EMV_CT_PAYMENT_STRUCT::ExpTrans](struct_e_m_v___c_t___p_a_y_m_e_n_t___s_t_r_u_c_t.md#variable-exptrans). 

### define INPUT_OFL_DATE

```
#define INPUT_OFL_DATE 0x08
```

B2b4: date of txn, [EMV_CT_PAYMENT_STRUCT::Date](struct_e_m_v___c_t___p_a_y_m_e_n_t___s_t_r_u_c_t.md#variable-date). 

### define INPUT_OFL_TIME

```
#define INPUT_OFL_TIME 0x10
```

B2b5: time of txn, [EMV_CT_PAYMENT_STRUCT::Time](struct_e_m_v___c_t___p_a_y_m_e_n_t___s_t_r_u_c_t.md#variable-time). 

### define INPUT_OFL_FORCE_ONLINE

```
#define INPUT_OFL_FORCE_ONLINE 0x20
```

B2b6: force it online (suspicious, EMVCo), [EMV_CT_PAYMENT_STRUCT::Force_Online](struct_e_m_v___c_t___p_a_y_m_e_n_t___s_t_r_u_c_t.md#variable-force-online). 

### define INPUT_OFL_FORCE_ACCEPT

```
#define INPUT_OFL_FORCE_ACCEPT 0x40
```

B2b7: force acceptance, [EMV_CT_PAYMENT_STRUCT::Force_Acceptance](struct_e_m_v___c_t___p_a_y_m_e_n_t___s_t_r_u_c_t.md#variable-force-acceptance). 

### define INPUT_OFL_ONLINE_SWITCH

```
#define INPUT_OFL_ONLINE_SWITCH 0x80
```

B2b8: force it online (domestic need), [EMV_CT_PAYMENT_STRUCT::Online_Switch](struct_e_m_v___c_t___p_a_y_m_e_n_t___s_t_r_u_c_t.md#variable-online-switch). 



-------------------------------

Updated on 2025-06-17 at 11:52:23 +0100