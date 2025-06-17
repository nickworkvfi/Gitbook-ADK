---
title: EMV_CT_APPLI_STRUCT
summary: 9F06, AID (5 bytes RID + n bytes PIX) 

---

# EMV_CT_APPLI_STRUCT



9F06, AID (5 bytes RID + n bytes PIX) 


`#include <EMV_CT_Interface.h>`

## Public Attributes

|                | Name           |
| -------------- | -------------- |
| unsigned char | **[aidlen](struct_e_m_v___c_t___a_p_p_l_i___s_t_r_u_c_t.md#variable-aidlen)** <br>length of AID    length of value from [TAG_DF04_AID]() |
| unsigned char[16] | **[AID](struct_e_m_v___c_t___a_p_p_l_i___s_t_r_u_c_t.md#variable-aid)** <br>AID data    TLV tag [TAG_DF04_AID]().  |

## Public Attributes Documentation

### variable aidlen

```cpp
unsigned char aidlen;
```

length of AID    length of value from [TAG_DF04_AID]()

### variable AID

```cpp
unsigned char[16] AID;
```

AID data    TLV tag [TAG_DF04_AID](). 

-------------------------------

Updated on 2025-06-17 at 11:52:20 +0100