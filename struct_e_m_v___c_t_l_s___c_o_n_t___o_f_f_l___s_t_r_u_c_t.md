---
title: EMV_CTLS_CONT_OFFL_STRUCT
summary: Transaction parameters of an EMV transaction at EMV_CTLS_ContinueOfflineExt()

---

# EMV_CTLS_CONT_OFFL_STRUCT

**Module:** **[Transaction execution](group___a_d_k___t_r_x___e_x_e_c.md)** **/** **[Input data](group___d_e_f___f_l_o_w___i_n_p_u_t.md)**



Transaction parameters of an EMV transaction at [EMV_CTLS_ContinueOfflineExt()]()


`#include <EMV_CTLS_Interface.h>`

## Public Attributes

|                | Name           |
| -------------- | -------------- |
| unsigned long | **[options](struct_e_m_v___c_t_l_s___c_o_n_t___o_f_f_l___s_t_r_u_c_t.md#variable-options)** <br>see [Options for contactless transaction processing at EMV_CTLS_ContinueOfflineExt()](), availability bit [INPUT_CTLS_CONT_OFFL_OPTIONS](), TLV tag: [TAG_DF3B_PARAMETER_1]() |
| unsigned char[8] | **[Info_Included_Data](struct_e_m_v___c_t_l_s___c_o_n_t___o_f_f_l___s_t_r_u_c_t.md#variable-info-included-data)** <br>Which data is included in the message.  |

## Public Attributes Documentation

### variable options

```cpp
unsigned long options;
```

see [Options for contactless transaction processing at EMV_CTLS_ContinueOfflineExt()](), availability bit [INPUT_CTLS_CONT_OFFL_OPTIONS](), TLV tag: [TAG_DF3B_PARAMETER_1]()

### variable Info_Included_Data

```cpp
unsigned char[8] Info_Included_Data;
```

Which data is included in the message. 

-------------------------------

Updated on 2025-06-17 at 11:52:23 +0100