---
title: EMV_CTLS_START_STRUCT
summary: struct for interface to EMV_CTLS_SetupTransaction()

---

# EMV_CTLS_START_STRUCT

**Module:** **[Transaction execution](group___a_d_k___t_r_x___e_x_e_c.md)** **/** **[Input data](group___d_e_f___f_l_o_w___i_n_p_u_t.md)**



struct for interface to [EMV_CTLS_SetupTransaction()]()


`#include <EMV_CTLS_Interface.h>`

## Public Attributes

|                | Name           |
| -------------- | -------------- |
| unsigned char | **[ServerPollTimeout](struct_e_m_v___c_t_l_s___s_t_a_r_t___s_t_r_u_c_t.md#variable-serverpolltimeout)**  |
| unsigned char | **[TransType](struct_e_m_v___c_t_l_s___s_t_a_r_t___s_t_r_u_c_t.md#variable-transtype)**  |
| [EMV_CTLS_PAYMENT_TYPE](group___d_e_f___f_l_o_w___i_n_p_u_t.md#typedef-emv-ctls-payment-type) | **[TXN_Data](struct_e_m_v___c_t_l_s___s_t_a_r_t___s_t_r_u_c_t.md#variable-txn-data)**  |
| [EMV_CTLS_APPS_SELECT_TYPE](group___d_e_f___f_l_o_w___i_n_p_u_t.md#typedef-emv-ctls-apps-select-type) | **[SEL_Data](struct_e_m_v___c_t_l_s___s_t_a_r_t___s_t_r_u_c_t.md#variable-sel-data)** <br>See [EMV_CTLS_APPS_SELECT_STRUCT](struct_e_m_v___c_t_l_s___a_p_p_s___s_e_l_e_c_t___s_t_r_u_c_t.md). Data for application selection process    no TLV tag for this struct, elements are serialized one-by-one.  |
| unsigned char[5] | **[TxnOptions](struct_e_m_v___c_t_l_s___s_t_a_r_t___s_t_r_u_c_t.md#variable-txnoptions)** <br>Transaction options, allowed values see [Options for contactless transaction processing]()   TLV tag [TAG_DF36_TRX_OPTIONS](), validity bit [INPUT_CTLS_SEL_TXN_OPTIONS]().  |
| unsigned char | **[passthroughCardTypes](struct_e_m_v___c_t_l_s___s_t_a_r_t___s_t_r_u_c_t.md#variable-passthroughcardtypes)**  |
| unsigned char[8] | **[Info_Included_Data](struct_e_m_v___c_t_l_s___s_t_a_r_t___s_t_r_u_c_t.md#variable-info-included-data)** <br>Which data is included in the message.  |

## Public Attributes Documentation

### variable ServerPollTimeout

```cpp
unsigned char ServerPollTimeout;
```


Timeout in seconds for server calling [EMV_CTLS_ContinueOffline()](group___f_u_n_c___f_l_o_w.md#function-emv-ctls-continueoffline). 0 to deactivate. 
** Do not set != 0 if ADK-TEC is used,** in this case ADK-TEC takes care of polling. 

 Server invokes [TAG_BF15_CBK_CARD_TAPPED](group___c_b_c_k___f_c_t___t_a_g_s.md#define-tag-bf15-cbk-card-tapped) when card is detected. 

 TLV tag [TAG_C9_POLL_TIMEOUT](group___v_e_r_i___t_a_g_s.md#define-tag-c9-poll-timeout), validity bit [INPUT_CTLS_SEL_POLL_TIMEOUT](group___d_e_f___i_n_p_u_t___s_e_l_e_c_t.md#define-input-ctls-sel-poll-timeout). 


### variable TransType

```cpp
unsigned char TransType;
```


Transaction type, according to ISO 8583 - Annex A: Processing Code, Position 1 + 2 

 see [Transaction type (Tag 9C)](group___t_r_a_n_s___t_y_p_e_s.md) and [Scheme specific transaction types](group___c_l_t_r_x___s_c_h_e_m_e___t_r_x___t_y_p_e_s.md)

 mandatory 

 TLV tag [TAG_9C_TRANS_TYPE](group___e_m_v_c_o___t_a_g_s.md#define-tag-9c-trans-type), validity bit [INPUT_CTLS_SEL_TTYPE](group___d_e_f___i_n_p_u_t___s_e_l_e_c_t.md#define-input-ctls-sel-ttype)


### variable TXN_Data

```cpp
EMV_CTLS_PAYMENT_TYPE TXN_Data;
```


See [EMV_CTLS_PAYMENT_STRUCT](struct_e_m_v___c_t_l_s___p_a_y_m_e_n_t___s_t_r_u_c_t.md). The transaction data can be presented at the beginning of the transaction or (if not yet available) later, e.g. after the final select. Anyhow data should be presented as soon as available. 

 no TLV tag for this struct, elements are serialized one-by-one 


### variable SEL_Data

```cpp
EMV_CTLS_APPS_SELECT_TYPE SEL_Data;
```

See [EMV_CTLS_APPS_SELECT_STRUCT](struct_e_m_v___c_t_l_s___a_p_p_s___s_e_l_e_c_t___s_t_r_u_c_t.md). Data for application selection process    no TLV tag for this struct, elements are serialized one-by-one. 

### variable TxnOptions

```cpp
unsigned char[5] TxnOptions;
```

Transaction options, allowed values see [Options for contactless transaction processing]()   TLV tag [TAG_DF36_TRX_OPTIONS](), validity bit [INPUT_CTLS_SEL_TXN_OPTIONS](). 

### variable passthroughCardTypes

```cpp
unsigned char passthroughCardTypes;
```


CTLS card types for which passtrough mode is set (VFI reader only), see [CTLS card types for which passtrough mode is set](group___c_l_t_r_x___p_a_s_s_t_r_o_u_g_h.md)
[EMV_CTLS_ContinueOffline()](group___f_u_n_c___f_l_o_w.md#function-emv-ctls-continueoffline) will return [EMV_ADK_CONTINUE](group___a_d_k___r_e_t___c_o_d_e.md#define-emv-adk-continue). Then application can fetch [TAG_DF8F20_CTLS_CARD_TPYE](group___p_r_i_m___t_a_g_s__3_b_y_t_e.md#define-tag-df8f20-ctls-card-tpye) with help of [EMV_CTLS_fetchTxnTags()](group___f_u_n_c___f_l_o_w.md#function-emv-ctls-fetchtxntags)

 TLV tag [TAG_DF4E_PASSTROUGH](group___v_e_r_i___p_r_i_m___t_a_g_s.md#define-tag-df4e-passtrough), validity bit [INPUT_CTLS_SEL_PASSTHROUGH](group___d_e_f___i_n_p_u_t___s_e_l_e_c_t.md#define-input-ctls-sel-passthrough)


### variable Info_Included_Data

```cpp
unsigned char[8] Info_Included_Data;
```

Which data is included in the message. 

-------------------------------

Updated on 2025-06-17 at 11:52:23 +0100