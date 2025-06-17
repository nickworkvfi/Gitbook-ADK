---
title: EMV_CT_PAYMENT_STRUCT
summary: Transaction parameters of an EMV transaction. 

---

# EMV_CT_PAYMENT_STRUCT

**Module:** **[Transaction execution](group___a_d_k___t_r_x___e_x_e_c.md)**



Transaction parameters of an EMV transaction.  [More...](#detailed-description)


`#include <EMV_CT_Interface.h>`

## Public Attributes

|                | Name           |
| -------------- | -------------- |
| unsigned char[6] | **[Amount](struct_e_m_v___c_t___p_a_y_m_e_n_t___s_t_r_u_c_t.md#variable-amount)** <br>Transaction amount (will also be used for EMVCo tags 81, 9F3A)    mandatory    Can also be changed by [EMV_CT_updateTxnTags()]()   TLV tag [TAG_9F02_NUM_AMOUNT_AUTH](), validity bit [INPUT_SEL_AMOUNT]() resp. [INPUT_OFL_AMOUNT]().  |
| unsigned char[2] | **[CurrencyTrans](struct_e_m_v___c_t___p_a_y_m_e_n_t___s_t_r_u_c_t.md#variable-currencytrans)** <br>Currency code to be used for transaction. Only needed in case of DCC    Can also be changed by [EMV_CT_updateTxnTags()]()   TLV tag [TAG_5F2A_TRANS_CURRENCY](), validity bit: [INPUT_SEL_AMOUNT_CURRENCY]() resp. [INPUT_OFL_AMOUNT_CURRENCY]().  |
| unsigned char | **[ExpTrans](struct_e_m_v___c_t___p_a_y_m_e_n_t___s_t_r_u_c_t.md#variable-exptrans)** <br>Currency exponent to be used for transaction.    Only needed in case of DCC.    Can also be changed by [EMV_CT_updateTxnTags()]()   TLV tag [TAG_5F36_TRANS_CURRENCY_EXP](), validity bit: [INPUT_SEL_CUREXPONENT]() resp. [INPUT_OFL_CUREXPONENT]().  |
| unsigned char[3] | **[Date](struct_e_m_v___c_t___p_a_y_m_e_n_t___s_t_r_u_c_t.md#variable-date)** <br>Transaction date (YYMMDD)    mandatory    Can also be changed by [EMV_CT_updateTxnTags()]()   TLV tag [TAG_9A_TRANS_DATE](), validity bit: [INPUT_SEL_DATE]() resp. [INPUT_OFL_DATE]().  |
| unsigned char[3] | **[Time](struct_e_m_v___c_t___p_a_y_m_e_n_t___s_t_r_u_c_t.md#variable-time)** <br>Transaction time (HHMMSS)    mandatory    Can also be changed by [EMV_CT_updateTxnTags()]()   TLV tag [TAG_9F21_TRANS_TIME](), validity bit: [INPUT_SEL_TIME]() resp. [INPUT_OFL_TIME]().  |
| unsigned char[4] | **[TransCount](struct_e_m_v___c_t___p_a_y_m_e_n_t___s_t_r_u_c_t.md#variable-transcount)** <br>Transaction sequence counter managed by calling application    mandatory    Can also be changed by [EMV_CT_updateTxnTags()]()   TLV tag [TAG_9F41_TRANS_SEQUENCE_NB](), validity bit: [INPUT_SEL_TXN_COUNTER]() resp. [INPUT_OFL_TXN_COUNTER]().  |
| unsigned char[6] | **[Cashback_Amount](struct_e_m_v___c_t___p_a_y_m_e_n_t___s_t_r_u_c_t.md#variable-cashback-amount)** <br>Cashback Amount    Calling application must care that this amount is already included in 9F02 presented to the EMV ADK.  |
| unsigned char | **[Force_Online](struct_e_m_v___c_t___p_a_y_m_e_n_t___s_t_r_u_c_t.md#variable-force-online)** <br>Force transaction to go online `BOOL`, dependency to [FORCE_ONLINE]() in [Defines for Application flow capabilities]()   TLV tag [TAG_DF40_FORCE_ONLINE](), validity bit: [INPUT_SEL_FORCE_ONLINE]() resp. [INPUT_OFL_FORCE_ONLINE]().  |
| unsigned char | **[Force_Acceptance](struct_e_m_v___c_t___p_a_y_m_e_n_t___s_t_r_u_c_t.md#variable-force-acceptance)** <br>Force acceptance of transaction `BOOL`, dependency to [FORCE_ACCEPTANCE]() in [Defines for Application flow capabilities]()   TLV tag [TAG_DF43_FORCE_ACCEPT](), validity bit: [INPUT_SEL_FORCE_ACCEPT]() resp. [INPUT_OFL_FORCE_ACCEPT]().  |
| unsigned char | **[Online_Switch](struct_e_m_v___c_t___p_a_y_m_e_n_t___s_t_r_u_c_t.md#variable-online-switch)** <br>Force transaction to go online `BOOL`, request ARQC from card, but don't set "suspicious bit" (TVR B4b4)    TLV tag [TAG_DF48_ONLINE_SWITCH](), validity bit: [INPUT_SEL_ONLINE_SWITCH]() resp. [INPUT_OFL_ONLINE_SWITCH]().  |
| unsigned char | **[uc_AccountType](struct_e_m_v___c_t___p_a_y_m_e_n_t___s_t_r_u_c_t.md#variable-uc-accounttype)** <br>Account Type, EMVCo definitions to be used: 0=Default, 0x10=Savings, 0x20=Cheque-Debit, 0x30=Credit    TLV tag [TAG_5F57_ACCOUNT_TYPE](), validity bit: [INPUT_SEL_ACCOUNT_TYPE]() resp. [INPUT_OFL_ACCOUNT_TYPE]().  |
| char | **[PreSelected_Language](struct_e_m_v___c_t___p_a_y_m_e_n_t___s_t_r_u_c_t.md#variable-preselected-language)** <br>Preselected customer language, see [Known languages]()   TLV tag [TAG_DF47_PRIOR_LANG_SEL](), validity bit: [INPUT_SEL_LANGUAGE]() resp. [INPUT_OFL_LANGUAGE]().  |
| unsigned char | **[uc_AmountConfirmation](struct_e_m_v___c_t___p_a_y_m_e_n_t___s_t_r_u_c_t.md#variable-uc-amountconfirmation)** <br>Configure Amount Confirmation Dialog    Possible values see [Amount confirmation before or after CVM processing]()   Anyhow the setting of this parameter does only take effect in case of not set [EMV_CT_CONF_AMOUNT_PIN]() ([EMV_CT_APPLIDATA_STRUCT::App_FlowCap](struct_e_m_v___c_t___a_p_p_l_i_d_a_t_a___s_t_r_u_c_t.md#variable-app-flowcap))    TLV tag [TAG_DF34_AMOUNT_CONF](), validity bit: [INPUT_SEL_AMOUNT_CONF]() resp. [INPUT_OFL_AMOUNT_CONF]().  |
| [EMV_CT_TAGLIST_TYPE](_e_m_v___c_t___interface_8h.md#typedef-emv-ct-taglist-type) | **[Additional_Result_Tags](struct_e_m_v___c_t___p_a_y_m_e_n_t___s_t_r_u_c_t.md#variable-additional-result-tags)**  |

## Detailed Description

```cpp
struct EMV_CT_PAYMENT_STRUCT;
```

Transaction parameters of an EMV transaction. 

Used in [EMV_CT_SELECT_STRUCT](struct_e_m_v___c_t___s_e_l_e_c_t___s_t_r_u_c_t.md) and [EMV_CT_TRANSAC_STRUCT](struct_e_m_v___c_t___t_r_a_n_s_a_c___s_t_r_u_c_t.md) . 

## Public Attributes Documentation

### variable Amount

```cpp
unsigned char[6] Amount;
```

Transaction amount (will also be used for EMVCo tags 81, 9F3A)    mandatory    Can also be changed by [EMV_CT_updateTxnTags()]()   TLV tag [TAG_9F02_NUM_AMOUNT_AUTH](), validity bit [INPUT_SEL_AMOUNT]() resp. [INPUT_OFL_AMOUNT](). 

### variable CurrencyTrans

```cpp
unsigned char[2] CurrencyTrans;
```

Currency code to be used for transaction. Only needed in case of DCC    Can also be changed by [EMV_CT_updateTxnTags()]()   TLV tag [TAG_5F2A_TRANS_CURRENCY](), validity bit: [INPUT_SEL_AMOUNT_CURRENCY]() resp. [INPUT_OFL_AMOUNT_CURRENCY](). 

### variable ExpTrans

```cpp
unsigned char ExpTrans;
```

Currency exponent to be used for transaction.    Only needed in case of DCC.    Can also be changed by [EMV_CT_updateTxnTags()]()   TLV tag [TAG_5F36_TRANS_CURRENCY_EXP](), validity bit: [INPUT_SEL_CUREXPONENT]() resp. [INPUT_OFL_CUREXPONENT](). 

### variable Date

```cpp
unsigned char[3] Date;
```

Transaction date (YYMMDD)    mandatory    Can also be changed by [EMV_CT_updateTxnTags()]()   TLV tag [TAG_9A_TRANS_DATE](), validity bit: [INPUT_SEL_DATE]() resp. [INPUT_OFL_DATE](). 

### variable Time

```cpp
unsigned char[3] Time;
```

Transaction time (HHMMSS)    mandatory    Can also be changed by [EMV_CT_updateTxnTags()]()   TLV tag [TAG_9F21_TRANS_TIME](), validity bit: [INPUT_SEL_TIME]() resp. [INPUT_OFL_TIME](). 

### variable TransCount

```cpp
unsigned char[4] TransCount;
```

Transaction sequence counter managed by calling application    mandatory    Can also be changed by [EMV_CT_updateTxnTags()]()   TLV tag [TAG_9F41_TRANS_SEQUENCE_NB](), validity bit: [INPUT_SEL_TXN_COUNTER]() resp. [INPUT_OFL_TXN_COUNTER](). 

### variable Cashback_Amount

```cpp
unsigned char[6] Cashback_Amount;
```

Cashback Amount    Calling application must care that this amount is already included in 9F02 presented to the EMV ADK. 

**Note**: This amount is only forwarded to L2 kernel if either non-zero or the initial transaction type is [EMV_ADK_TRAN_TYPE_CASHBACK](group___t_r_a_n_s___t_y_p_e_s.md#define-emv-adk-tran-type-cashback). The presence of this item, even if zero, makes the kernel perform AUC checks for cash-back.


Dependency to [CASHBACK_SUPPORT](group___a_p_p___f_l_o_w___c_a_p_s.md#define-cashback-support) in [Defines for Application flow capabilities](group___a_p_p___f_l_o_w___c_a_p_s.md)

 Can also be changed by [EMV_CT_updateTxnTags()](group___f_u_n_c___f_l_o_w.md#function-emv-ct-updatetxntags)

 TLV tag [TAG_9F03_NUM_AMOUNT_OTHER](group___e_m_v_c_o___t_a_g_s.md#define-tag-9f03-num-amount-other), validity bit: [INPUT_SEL_CB_AMOUNT](group___d_e_f___i_n_p_u_t___s_e_l_e_c_t.md#define-input-sel-cb-amount) resp. [INPUT_OFL_CB_AMOUNT](group___d_e_f___i_n_p_u_t___t_r_x.md#define-input-ofl-cb-amount)


### variable Force_Online

```cpp
unsigned char Force_Online;
```

Force transaction to go online `BOOL`, dependency to [FORCE_ONLINE]() in [Defines for Application flow capabilities]()   TLV tag [TAG_DF40_FORCE_ONLINE](), validity bit: [INPUT_SEL_FORCE_ONLINE]() resp. [INPUT_OFL_FORCE_ONLINE](). 

### variable Force_Acceptance

```cpp
unsigned char Force_Acceptance;
```

Force acceptance of transaction `BOOL`, dependency to [FORCE_ACCEPTANCE]() in [Defines for Application flow capabilities]()   TLV tag [TAG_DF43_FORCE_ACCEPT](), validity bit: [INPUT_SEL_FORCE_ACCEPT]() resp. [INPUT_OFL_FORCE_ACCEPT](). 

### variable Online_Switch

```cpp
unsigned char Online_Switch;
```

Force transaction to go online `BOOL`, request ARQC from card, but don't set "suspicious bit" (TVR B4b4)    TLV tag [TAG_DF48_ONLINE_SWITCH](), validity bit: [INPUT_SEL_ONLINE_SWITCH]() resp. [INPUT_OFL_ONLINE_SWITCH](). 

### variable uc_AccountType

```cpp
unsigned char uc_AccountType;
```

Account Type, EMVCo definitions to be used: 0=Default, 0x10=Savings, 0x20=Cheque-Debit, 0x30=Credit    TLV tag [TAG_5F57_ACCOUNT_TYPE](), validity bit: [INPUT_SEL_ACCOUNT_TYPE]() resp. [INPUT_OFL_ACCOUNT_TYPE](). 

### variable PreSelected_Language

```cpp
char PreSelected_Language;
```

Preselected customer language, see [Known languages]()   TLV tag [TAG_DF47_PRIOR_LANG_SEL](), validity bit: [INPUT_SEL_LANGUAGE]() resp. [INPUT_OFL_LANGUAGE](). 

### variable uc_AmountConfirmation

```cpp
unsigned char uc_AmountConfirmation;
```

Configure Amount Confirmation Dialog    Possible values see [Amount confirmation before or after CVM processing]()   Anyhow the setting of this parameter does only take effect in case of not set [EMV_CT_CONF_AMOUNT_PIN]() ([EMV_CT_APPLIDATA_STRUCT::App_FlowCap](struct_e_m_v___c_t___a_p_p_l_i_d_a_t_a___s_t_r_u_c_t.md#variable-app-flowcap))    TLV tag [TAG_DF34_AMOUNT_CONF](), validity bit: [INPUT_SEL_AMOUNT_CONF]() resp. [INPUT_OFL_AMOUNT_CONF](). 

### variable Additional_Result_Tags

```cpp
EMV_CT_TAGLIST_TYPE Additional_Result_Tags;
```


**Deprecated**: 

Use [EMV_CT_fetchTxnTags()](group___f_u_n_c___f_l_o_w.md#function-emv-ct-fetchtxntags) instead. 

-------------------------------

Updated on 2025-06-17 at 11:52:22 +0100