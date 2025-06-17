---
title: EMV_CTLS_PAYMENT_STRUCT
summary: Transaction parameters of an EMV transaction. 

---

# EMV_CTLS_PAYMENT_STRUCT

**Module:** **[Transaction execution](group___a_d_k___t_r_x___e_x_e_c.md)** **/** **[Input data](group___d_e_f___f_l_o_w___i_n_p_u_t.md)**



Transaction parameters of an EMV transaction.  [More...](#detailed-description)


`#include <EMV_CTLS_Interface.h>`

## Public Attributes

|                | Name           |
| -------------- | -------------- |
| unsigned char[6] | **[Amount](struct_e_m_v___c_t_l_s___p_a_y_m_e_n_t___s_t_r_u_c_t.md#variable-amount)** <br>Transaction amount (will also be used for EMVCo tags 81, 9F3A)    mandatory    TLV tag [TAG_9F02_NUM_AMOUNT_AUTH](), validity bit: [INPUT_CTLS_SEL_AMOUNT]().  |
| unsigned char[2] | **[CurrencyTrans](struct_e_m_v___c_t_l_s___p_a_y_m_e_n_t___s_t_r_u_c_t.md#variable-currencytrans)** <br>Currency code to be used for transaction. Only needed in case of DCC    TLV tag [TAG_5F2A_TRANS_CURRENCY](), validity bit: [INPUT_CTLS_SEL_AMOUNT_CURRENCY]().  |
| unsigned char | **[ExpTrans](struct_e_m_v___c_t_l_s___p_a_y_m_e_n_t___s_t_r_u_c_t.md#variable-exptrans)** <br>Currency exponent to be used for transaction. Only needed in case of DCC.    TLV tag [TAG_5F36_TRANS_CURRENCY_EXP](), validity bit: [INPUT_CTLS_SEL_CUREXPONENT]().  |
| unsigned char[3] | **[Date](struct_e_m_v___c_t_l_s___p_a_y_m_e_n_t___s_t_r_u_c_t.md#variable-date)** <br>Transaction date (YYMMDD)    mandatory    TLV tag [TAG_9A_TRANS_DATE](), validity bit: [INPUT_CTLS_SEL_DATE]().  |
| unsigned char[3] | **[Time](struct_e_m_v___c_t_l_s___p_a_y_m_e_n_t___s_t_r_u_c_t.md#variable-time)** <br>Transaction time (HHMMSS)    mandatory    TLV tag [TAG_9F21_TRANS_TIME](), validity bit: [INPUT_CTLS_SEL_TIME]().  |
| unsigned char[4] | **[TransCount](struct_e_m_v___c_t_l_s___p_a_y_m_e_n_t___s_t_r_u_c_t.md#variable-transcount)** <br>Transaction sequence counter managed by calling application    mandatory    TLV tag [TAG_9F41_TRANS_SEQUENCE_NB](), validity bit: [INPUT_CTLS_SEL_TXN_COUNTER]().  |
| unsigned char[6] | **[Cashback_Amount](struct_e_m_v___c_t_l_s___p_a_y_m_e_n_t___s_t_r_u_c_t.md#variable-cashback-amount)**  |
| unsigned char | **[Force_Online](struct_e_m_v___c_t_l_s___p_a_y_m_e_n_t___s_t_r_u_c_t.md#variable-force-online)** <br>`BOOL`, set Merchant Forced Online-TVR bit if enabled by [EMV_CTLS_FLOW_GLOB_FORCE_ONLINE_1]() in [Application flow capabilities for all schemes]()   Not supported by all payment schemes.    Validity bit: [INPUT_CTLS_SEL_FORCE_ONLINE]()   TLV tag [TAG_DF40_FORCE_ONLINE]() |
| unsigned char | **[Online_Switch](struct_e_m_v___c_t_l_s___p_a_y_m_e_n_t___s_t_r_u_c_t.md#variable-online-switch)** <br>`BOOL`, request ARQC from card, but don't set "suspicious bit"    Not supported by all payment schemes.    TLV tag [TAG_DF48_ONLINE_SWITCH](), validity bit: [INPUT_CTLS_SEL_ONLINE_SWITCH]() |
| unsigned char | **[uc_AccountType](struct_e_m_v___c_t_l_s___p_a_y_m_e_n_t___s_t_r_u_c_t.md#variable-uc-accounttype)**  |
| [EMV_CTLS_TAGLIST_TYPE](group___d_e_f___c_o_n_f___a_p_p_l_i.md#typedef-emv-ctls-taglist-type) | **[Additional_Result_Tags](struct_e_m_v___c_t_l_s___p_a_y_m_e_n_t___s_t_r_u_c_t.md#variable-additional-result-tags)**  |

## Detailed Description

```cpp
struct EMV_CTLS_PAYMENT_STRUCT;
```

Transaction parameters of an EMV transaction. 

Part of [EMV_CTLS_START_STRUCT](struct_e_m_v___c_t_l_s___s_t_a_r_t___s_t_r_u_c_t.md)

## Public Attributes Documentation

### variable Amount

```cpp
unsigned char[6] Amount;
```

Transaction amount (will also be used for EMVCo tags 81, 9F3A)    mandatory    TLV tag [TAG_9F02_NUM_AMOUNT_AUTH](), validity bit: [INPUT_CTLS_SEL_AMOUNT](). 

### variable CurrencyTrans

```cpp
unsigned char[2] CurrencyTrans;
```

Currency code to be used for transaction. Only needed in case of DCC    TLV tag [TAG_5F2A_TRANS_CURRENCY](), validity bit: [INPUT_CTLS_SEL_AMOUNT_CURRENCY](). 

### variable ExpTrans

```cpp
unsigned char ExpTrans;
```

Currency exponent to be used for transaction. Only needed in case of DCC.    TLV tag [TAG_5F36_TRANS_CURRENCY_EXP](), validity bit: [INPUT_CTLS_SEL_CUREXPONENT](). 

### variable Date

```cpp
unsigned char[3] Date;
```

Transaction date (YYMMDD)    mandatory    TLV tag [TAG_9A_TRANS_DATE](), validity bit: [INPUT_CTLS_SEL_DATE](). 

### variable Time

```cpp
unsigned char[3] Time;
```

Transaction time (HHMMSS)    mandatory    TLV tag [TAG_9F21_TRANS_TIME](), validity bit: [INPUT_CTLS_SEL_TIME](). 

### variable TransCount

```cpp
unsigned char[4] TransCount;
```

Transaction sequence counter managed by calling application    mandatory    TLV tag [TAG_9F41_TRANS_SEQUENCE_NB](), validity bit: [INPUT_CTLS_SEL_TXN_COUNTER](). 

### variable Cashback_Amount

```cpp
unsigned char[6] Cashback_Amount;
```


cashback amount, calling application must care that this amount is already included in 9F02 presented to the EMV ADK 

 dependency to [EMV_CTLS_FLOW_GLOB_CASHBACK_SUPPORT_0](group___d_e_f___f_l_o_w___g_l_o_b.md#define-emv-ctls-flow-glob-cashback-support-0) in [Application flow capabilities for all schemes](group___d_e_f___f_l_o_w___g_l_o_b.md)

 TLV tag [TAG_9F03_NUM_AMOUNT_OTHER](group___e_m_v_c_o___t_a_g_s.md#define-tag-9f03-num-amount-other), validity bit: [INPUT_CTLS_SEL_CB_AMOUNT](group___d_e_f___i_n_p_u_t___s_e_l_e_c_t.md#define-input-ctls-sel-cb-amount)


### variable Force_Online

```cpp
unsigned char Force_Online;
```

`BOOL`, set Merchant Forced Online-TVR bit if enabled by [EMV_CTLS_FLOW_GLOB_FORCE_ONLINE_1]() in [Application flow capabilities for all schemes]()   Not supported by all payment schemes.    Validity bit: [INPUT_CTLS_SEL_FORCE_ONLINE]()   TLV tag [TAG_DF40_FORCE_ONLINE]()

### variable Online_Switch

```cpp
unsigned char Online_Switch;
```

`BOOL`, request ARQC from card, but don't set "suspicious bit"    Not supported by all payment schemes.    TLV tag [TAG_DF48_ONLINE_SWITCH](), validity bit: [INPUT_CTLS_SEL_ONLINE_SWITCH]()

### variable uc_AccountType

```cpp
unsigned char uc_AccountType;
```


5F57, defines of CommonServices to be used: `AT_00_DEFAULT`, `AT_10_SAVINGS`, `AT_20_CHEQUE_DEBIT` 0x20u, `AT_30_CREDIT`

 TLV tag [TAG_5F57_ACCOUNT_TYPE](group___e_m_v_c_o___t_a_g_s.md#define-tag-5f57-account-type), validity bit: [INPUT_CTLS_SEL_ACCOUNT_TYPE](group___d_e_f___i_n_p_u_t___s_e_l_e_c_t.md#define-input-ctls-sel-account-type)


### variable Additional_Result_Tags

```cpp
EMV_CTLS_TAGLIST_TYPE Additional_Result_Tags;
```


**Deprecated**: 

Use [EMV_CTLS_fetchTxnTags()](group___f_u_n_c___f_l_o_w.md#function-emv-ctls-fetchtxntags) instead. 

-------------------------------

Updated on 2025-06-17 at 11:52:23 +0100