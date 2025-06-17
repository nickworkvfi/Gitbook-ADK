---
title: EMV_CTLS_TAGLIST_STRUCT
summary: structure for EMV_CTLS_PAYMENT_TYPE::Additional_Result_Tags

---

# EMV_CTLS_TAGLIST_STRUCT

**Module:** **[Configuration](group___a_d_k___c_o_n_f_i_g_u_r_a_t_i_o_n.md)** **/** **[Application data](group___d_e_f___c_o_n_f___a_p_p_l_i.md)**



structure for [EMV_CTLS_PAYMENT_TYPE::Additional_Result_Tags](struct_e_m_v___c_t_l_s___p_a_y_m_e_n_t___s_t_r_u_c_t.md#variable-additional-result-tags)


`#include <EMV_CTLS_Interface.h>`

## Public Attributes

|                | Name           |
| -------------- | -------------- |
| unsigned char | **[anztag](struct_e_m_v___c_t_l_s___t_a_g_l_i_s_t___s_t_r_u_c_t.md#variable-anztag)** <br>Number of tags included in `tags`.  |
| unsigned short[EMV_CTLS_MAX_TAGLIST_SIZE] | **[tags](struct_e_m_v___c_t_l_s___t_a_g_l_i_s_t___s_t_r_u_c_t.md#variable-tags)** <br>Buffer for tags (no length, no value)    max. number of tags: [EMV_CTLS_MAX_TAGLIST_SIZE]().  |

## Public Attributes Documentation

### variable anztag

```cpp
unsigned char anztag;
```

Number of tags included in `tags`. 

### variable tags

```cpp
unsigned short[EMV_CTLS_MAX_TAGLIST_SIZE] tags;
```

Buffer for tags (no length, no value)    max. number of tags: [EMV_CTLS_MAX_TAGLIST_SIZE](). 

-------------------------------

Updated on 2025-06-17 at 11:52:22 +0100