---
title: EMV_CT_CAPREAD_STRUCT
summary: Data structure CAP keys. 

---

# EMV_CT_CAPREAD_STRUCT

**Module:** **[Transaction execution](group___a_d_k___t_r_x___e_x_e_c.md)** **/** **[Input data](group___d_e_f___f_l_o_w___i_n_p_u_t.md)** **/** **[Support of cardholder confirmation](group___d_e_f___c_a_r_d___c_o_n_f.md)**



Data structure CAP keys. 


`#include <EMV_CT_Interface.h>`

## Public Attributes

|                | Name           |
| -------------- | -------------- |
| unsigned char[5] | **[RID](struct_e_m_v___c_t___c_a_p_r_e_a_d___s_t_r_u_c_t.md#variable-rid)** <br>Registered Identifier, TLV tag [TAG_KEY_RID]().  |
| unsigned char | **[Index](struct_e_m_v___c_t___c_a_p_r_e_a_d___s_t_r_u_c_t.md#variable-index)** <br>Index, TLV tag [TAG_KEY_INDEX]().  |
| unsigned char | **[KeyLen](struct_e_m_v___c_t___c_a_p_r_e_a_d___s_t_r_u_c_t.md#variable-keylen)** <br>Length of key in bytes, TLV tag [TAG_KEY_KEYLEN]().  |

## Public Attributes Documentation

### variable RID

```cpp
unsigned char[5] RID;
```

Registered Identifier, TLV tag [TAG_KEY_RID](). 

### variable Index

```cpp
unsigned char Index;
```

Index, TLV tag [TAG_KEY_INDEX](). 

### variable KeyLen

```cpp
unsigned char KeyLen;
```

Length of key in bytes, TLV tag [TAG_KEY_KEYLEN](). 

-------------------------------

Updated on 2025-06-17 at 11:52:23 +0100