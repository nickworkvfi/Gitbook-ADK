---
title: EMV_CT_SELECT_STRUCT
summary: struct for interface to EMV_CT_StartTransaction()

---

# EMV_CT_SELECT_STRUCT

**Module:** **[Transaction execution](group___a_d_k___t_r_x___e_x_e_c.md)**



struct for interface to [EMV_CT_StartTransaction()]()


`#include <EMV_CT_Interface.h>`

## Public Attributes

|                | Name           |
| -------------- | -------------- |
| unsigned char | **[InitTXN_Buildlist](struct_e_m_v___c_t___s_e_l_e_c_t___s_t_r_u_c_t.md#variable-inittxn-buildlist)** <br>Decides if a new candidate list will be built    Optional. For values see [Buildlist options for EMV_CT_StartTransaction()]()   TLV tag [TAG_DF05_BUILD_APPLILIST]()   Validity bit: [INPUT_SEL_BUILDLIST]().  |
| unsigned char | **[TransType](struct_e_m_v___c_t___s_e_l_e_c_t___s_t_r_u_c_t.md#variable-transtype)** <br>Transaction type, according to ISO 8583 - Annex A: Processing Code, Position 1 + 2    see [Transaction type (Tag 9C)]()   mandatory    Is checked against [EMV_CT_APPLIDATA_STRUCT::xuc_Special_TRX](struct_e_m_v___c_t___a_p_p_l_i_d_a_t_a___s_t_r_u_c_t.md#variable-xuc-special-trx), [EMV_CT_DOM_CHIP_TYPE](), and [EMV_CT_FALLBCK_MSR_TYPE]()   Can also be changed by [EMV_CT_updateTxnTags()]()   TLV tag [TAG_9C_TRANS_TYPE]()   Validity bit: [INPUT_SEL_TTYPE]().  |
| [EMV_CT_PAYMENT_TYPE](group___a_d_k___t_r_x___e_x_e_c.md#typedef-emv-ct-payment-type) | **[TXN_Data](struct_e_m_v___c_t___s_e_l_e_c_t___s_t_r_u_c_t.md#variable-txn-data)** <br>Transaction data ([EMV_CT_PAYMENT_STRUCT](struct_e_m_v___c_t___p_a_y_m_e_n_t___s_t_r_u_c_t.md))    Can be presented at the beginning of the transaction or (if not yet available) later, e.g. after the final select.    Anyhow data should be presented as soon as available.  |
| [EMV_CT_APPS_SELECT_TYPE](group___a_d_k___t_r_x___e_x_e_c.md#typedef-emv-ct-apps-select-type) | **[SEL_Data](struct_e_m_v___c_t___s_e_l_e_c_t___s_t_r_u_c_t.md#variable-sel-data)** <br>Data for application selection process (see [EMV_CT_APPS_SELECT_STRUCT](struct_e_m_v___c_t___a_p_p_s___s_e_l_e_c_t___s_t_r_u_c_t.md))  |
| unsigned char[5] | **[TxnOptions](struct_e_m_v___c_t___s_e_l_e_c_t___s_t_r_u_c_t.md#variable-txnoptions)**  |
| unsigned char[3] | **[TxnSteps](struct_e_m_v___c_t___s_e_l_e_c_t___s_t_r_u_c_t.md#variable-txnsteps)**  |
| unsigned char[8] | **[Info_Included_Data](struct_e_m_v___c_t___s_e_l_e_c_t___s_t_r_u_c_t.md#variable-info-included-data)** <br>Which data is included in the message, see [EMV_CTLS_SetupTransaction: Which data is included in input struct]().  |

## Public Attributes Documentation

### variable InitTXN_Buildlist

```cpp
unsigned char InitTXN_Buildlist;
```

Decides if a new candidate list will be built    Optional. For values see [Buildlist options for EMV_CT_StartTransaction()]()   TLV tag [TAG_DF05_BUILD_APPLILIST]()   Validity bit: [INPUT_SEL_BUILDLIST](). 

### variable TransType

```cpp
unsigned char TransType;
```

Transaction type, according to ISO 8583 - Annex A: Processing Code, Position 1 + 2    see [Transaction type (Tag 9C)]()   mandatory    Is checked against [EMV_CT_APPLIDATA_STRUCT::xuc_Special_TRX](struct_e_m_v___c_t___a_p_p_l_i_d_a_t_a___s_t_r_u_c_t.md#variable-xuc-special-trx), [EMV_CT_DOM_CHIP_TYPE](), and [EMV_CT_FALLBCK_MSR_TYPE]()   Can also be changed by [EMV_CT_updateTxnTags()]()   TLV tag [TAG_9C_TRANS_TYPE]()   Validity bit: [INPUT_SEL_TTYPE](). 

### variable TXN_Data

```cpp
EMV_CT_PAYMENT_TYPE TXN_Data;
```

Transaction data ([EMV_CT_PAYMENT_STRUCT](struct_e_m_v___c_t___p_a_y_m_e_n_t___s_t_r_u_c_t.md))    Can be presented at the beginning of the transaction or (if not yet available) later, e.g. after the final select.    Anyhow data should be presented as soon as available. 

### variable SEL_Data

```cpp
EMV_CT_APPS_SELECT_TYPE SEL_Data;
```

Data for application selection process (see [EMV_CT_APPS_SELECT_STRUCT](struct_e_m_v___c_t___a_p_p_s___s_e_l_e_c_t___s_t_r_u_c_t.md)) 

### variable TxnOptions

```cpp
unsigned char[5] TxnOptions;
```


Options, allowed values see [Options for transaction processing](group___t_x_n___o_p_t_i_o_n_s.md), validity bit [INPUT_SEL_TXN_OPTIONS](group___d_e_f___i_n_p_u_t___s_e_l_e_c_t.md#define-input-sel-txn-options)

 TLV tag [TAG_DF36_TRX_OPTIONS](group___v_e_r_i___p_r_i_m___t_a_g_s.md#define-tag-df36-trx-options)


### variable TxnSteps

```cpp
unsigned char[3] TxnSteps;
```


This parameter allows to interrupt the transaction at given steps for intermediate application processing, allowed values see [Re-entrance options](group___t_x_n___s_t_e_p_s.md)

 TLV tag [TAG_DF37_TRX_STEPS](group___v_e_r_i___p_r_i_m___t_a_g_s.md#define-tag-df37-trx-steps)

 Validity bit [INPUT_SEL_TXN_STEPS](group___d_e_f___i_n_p_u_t___s_e_l_e_c_t.md#define-input-sel-txn-steps)


### variable Info_Included_Data

```cpp
unsigned char[8] Info_Included_Data;
```

Which data is included in the message, see [EMV_CTLS_SetupTransaction: Which data is included in input struct](). 

-------------------------------

Updated on 2025-06-17 at 11:52:23 +0100