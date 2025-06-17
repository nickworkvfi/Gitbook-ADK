---
title: EMV_CTLS_STARTRES_STRUCT
summary: Result data of EMV_CTLS_SetupTransaction()

---

# EMV_CTLS_STARTRES_STRUCT

**Module:** **[Transaction execution](group___a_d_k___t_r_x___e_x_e_c.md)** **/** **[Output data](group___d_e_f___f_l_o_w___o_u_t_p_u_t.md)**



Result data of [EMV_CTLS_SetupTransaction()]()


`#include <EMV_CTLS_Interface.h>`

## Public Attributes

|                | Name           |
| -------------- | -------------- |
| unsigned char[5] | **[TxnInformation](struct_e_m_v___c_t_l_s___s_t_a_r_t_r_e_s___s_t_r_u_c_t.md#variable-txninformation)**  |
| unsigned char[8] | **[T_DF61_Info_Received_Data](struct_e_m_v___c_t_l_s___s_t_a_r_t_r_e_s___s_t_r_u_c_t.md#variable-t-df61-info-received-data)** <br>Which data is valid, see [EMV_CTLS_SetupTransaction: Which data is included in result struct]().  |

## Public Attributes Documentation

### variable TxnInformation

```cpp
unsigned char[5] TxnInformation;
```


Bitstring with information about the outcome of [EMV_CTLS_SetupTransaction()](group___f_u_n_c___f_l_o_w.md#function-emv-ctls-setuptransaction), see [Bitstring with information about the outcome of EMV_CTLS_SetupTransaction()](group___d_e_f___s_e_l_e_c_t_r_e_s___t_r_x_i_n_f_o.md)

 Available flag [OUTPUT_CTLS_SEL_TXN_INFO](group___d_e_f___o_u_t_p_u_t___s_e_l_e_c_t.md#define-output-ctls-sel-txn-info)

 TLV tag [TAG_DF8F0D_SETUP_RES_TRXINFO](group___p_r_i_m___t_a_g_s__3_b_y_t_e.md#define-tag-df8f0d-setup-res-trxinfo)


### variable T_DF61_Info_Received_Data

```cpp
unsigned char[8] T_DF61_Info_Received_Data;
```

Which data is valid, see [EMV_CTLS_SetupTransaction: Which data is included in result struct](). 

-------------------------------

Updated on 2025-06-17 at 11:52:23 +0100