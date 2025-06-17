---
title: EMV_CT_TAGLIST_STRUCT
summary: structure for EMV_CT_APPLIDATA_STRUCT::Mandatory_Tags_CRD and EMV_CT_PAYMENT_STRUCT::Additional_Result_Tags

---

# EMV_CT_TAGLIST_STRUCT



structure for [EMV_CT_APPLIDATA_STRUCT::Mandatory_Tags_CRD](struct_e_m_v___c_t___a_p_p_l_i_d_a_t_a___s_t_r_u_c_t.md#variable-mandatory-tags-crd) and [EMV_CT_PAYMENT_STRUCT::Additional_Result_Tags](struct_e_m_v___c_t___p_a_y_m_e_n_t___s_t_r_u_c_t.md#variable-additional-result-tags)


`#include <EMV_CT_Interface.h>`

## Public Attributes

|                | Name           |
| -------------- | -------------- |
| unsigned char | **[anztag](struct_e_m_v___c_t___t_a_g_l_i_s_t___s_t_r_u_c_t.md#variable-anztag)** <br>Number of tags included in `tags`.  |
| unsigned short[EMV_CT_MAX_TAGLIST_SIZE] | **[tags](struct_e_m_v___c_t___t_a_g_l_i_s_t___s_t_r_u_c_t.md#variable-tags)** <br>Buffer for tags (no length, no value)    max. number of tags: [EMV_CT_MAX_TAGLIST_SIZE]().  |

## Public Attributes Documentation

### variable anztag

```cpp
unsigned char anztag;
```

Number of tags included in `tags`. 

### variable tags

```cpp
unsigned short[EMV_CT_MAX_TAGLIST_SIZE] tags;
```

Buffer for tags (no length, no value)    max. number of tags: [EMV_CT_MAX_TAGLIST_SIZE](). 

-------------------------------

Updated on 2025-06-17 at 11:52:20 +0100