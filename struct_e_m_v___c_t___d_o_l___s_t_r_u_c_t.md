---
title: EMV_CT_DOL_STRUCT
summary: data object list 

---

# EMV_CT_DOL_STRUCT



data object list 


`#include <EMV_CT_Interface.h>`

## Public Attributes

|                | Name           |
| -------------- | -------------- |
| unsigned char | **[dollen](struct_e_m_v___c_t___d_o_l___s_t_r_u_c_t.md#variable-dollen)** <br>length of DOL data  |
| unsigned char[EMV_ADK_MAX_LG_DDOL] | **[DOL](struct_e_m_v___c_t___d_o_l___s_t_r_u_c_t.md#variable-dol)** <br>DOL data.  |

## Public Attributes Documentation

### variable dollen

```cpp
unsigned char dollen;
```

length of DOL data 

### variable DOL

```cpp
unsigned char[EMV_ADK_MAX_LG_DDOL] DOL;
```

DOL data. 

-------------------------------

Updated on 2025-06-17 at 11:52:20 +0100