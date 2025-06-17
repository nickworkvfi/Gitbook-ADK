---
title: EMV_CTLS_VK_DRL_STRUCT
summary: Visa Dynamic Reader Limits Used in EMV_CTLS_APPLIDATA_VK_STRUCT::VisaDRLParams_FFAB01. 

---

# EMV_CTLS_VK_DRL_STRUCT

**Module:** **[Configuration](group___a_d_k___c_o_n_f_i_g_u_r_a_t_i_o_n.md)** **/** **[Application data](group___d_e_f___c_o_n_f___a_p_p_l_i.md)**



Visa Dynamic Reader Limits Used in [EMV_CTLS_APPLIDATA_VK_STRUCT::VisaDRLParams_FFAB01](struct_e_m_v___c_t_l_s___a_p_p_l_i_d_a_t_a___v_k___s_t_r_u_c_t.md#variable-visadrlparams-ffab01). 


`#include <EMV_CTLS_Interface.h>`

## Public Attributes

|                | Name           |
| -------------- | -------------- |
| unsigned short | **[cnt](struct_e_m_v___c_t_l_s___v_k___d_r_l___s_t_r_u_c_t.md#variable-cnt)** <br>number of DRL entries  |
| [EMV_CTLS_VK_DRL_ENTRY_TYPE](group___d_e_f___c_o_n_f___a_p_p_l_i.md#typedef-emv-ctls-vk-drl-entry-type) * | **[data](struct_e_m_v___c_t_l_s___v_k___d_r_l___s_t_r_u_c_t.md#variable-data)** <br>data  |

## Public Attributes Documentation

### variable cnt

```cpp
unsigned short cnt;
```

number of DRL entries 

### variable data

```cpp
EMV_CTLS_VK_DRL_ENTRY_TYPE * data;
```

data 

-------------------------------

Updated on 2025-06-17 at 11:52:22 +0100