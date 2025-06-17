---
title: EMV_CT_TRANSAC_STRUCT
summary: Structure for call of EMV_CT_ContinueOffline()

---

# EMV_CT_TRANSAC_STRUCT

**Module:** **[Transaction execution](group___a_d_k___t_r_x___e_x_e_c.md)**



Structure for call of [EMV_CT_ContinueOffline()]()


`#include <EMV_CT_Interface.h>`

## Public Attributes

|                | Name           |
| -------------- | -------------- |
| [EMV_CT_PAYMENT_TYPE](group___a_d_k___t_r_x___e_x_e_c.md#typedef-emv-ct-payment-type) | **[TXN_Data](struct_e_m_v___c_t___t_r_a_n_s_a_c___s_t_r_u_c_t.md#variable-txn-data)** <br>The transaction data ([EMV_CT_PAYMENT_STRUCT](struct_e_m_v___c_t___p_a_y_m_e_n_t___s_t_r_u_c_t.md)) can be presented at the beginning of the transaction or (if not yet available) later, e.g. after the final select. Anyhow data should be presented as soon as available.  |
| unsigned char[5] | **[TxnOptions](struct_e_m_v___c_t___t_r_a_n_s_a_c___s_t_r_u_c_t.md#variable-txnoptions)** <br>options, allowed values see [Options for transaction processing]()   TLV tag [TAG_DF36_TRX_OPTIONS](), validity bit [INPUT_OFL_TXN_OPTIONS]() |
| unsigned char[3] | **[TxnSteps](struct_e_m_v___c_t___t_r_a_n_s_a_c___s_t_r_u_c_t.md#variable-txnsteps)** <br>This parameter allows to interrupt the transaction at given steps for intermediate application processing, allowed values see [Re-entrance options]()   TLV tag [TAG_DF37_TRX_STEPS](), validity bit [INPUT_OFL_TXN_STEPS]().  |
| unsigned char[8] | **[Info_Included_Data](struct_e_m_v___c_t___t_r_a_n_s_a_c___s_t_r_u_c_t.md#variable-info-included-data)** <br>Which data is included in the message, see [Transaction input: Which data is included]().  |

## Public Attributes Documentation

### variable TXN_Data

```cpp
EMV_CT_PAYMENT_TYPE TXN_Data;
```

The transaction data ([EMV_CT_PAYMENT_STRUCT](struct_e_m_v___c_t___p_a_y_m_e_n_t___s_t_r_u_c_t.md)) can be presented at the beginning of the transaction or (if not yet available) later, e.g. after the final select. Anyhow data should be presented as soon as available. 

### variable TxnOptions

```cpp
unsigned char[5] TxnOptions;
```

options, allowed values see [Options for transaction processing]()   TLV tag [TAG_DF36_TRX_OPTIONS](), validity bit [INPUT_OFL_TXN_OPTIONS]()

### variable TxnSteps

```cpp
unsigned char[3] TxnSteps;
```

This parameter allows to interrupt the transaction at given steps for intermediate application processing, allowed values see [Re-entrance options]()   TLV tag [TAG_DF37_TRX_STEPS](), validity bit [INPUT_OFL_TXN_STEPS](). 

### variable Info_Included_Data

```cpp
unsigned char[8] Info_Included_Data;
```

Which data is included in the message, see [Transaction input: Which data is included](). 

-------------------------------

Updated on 2025-06-17 at 11:52:23 +0100