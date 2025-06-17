---
title: EMV_CTLS_APPLI_KERNEL_STRUCT
summary: AID (9F06) and kernel ID. 

---

# EMV_CTLS_APPLI_KERNEL_STRUCT



AID (9F06) and kernel ID. 


`#include <EMV_CTLS_Interface.h>`

## Public Attributes

|                | Name           |
| -------------- | -------------- |
| unsigned char[3] | **[KernelID](struct_e_m_v___c_t_l_s___a_p_p_l_i___k_e_r_n_e_l___s_t_r_u_c_t.md#variable-kernelid)** <br>Kernel ID, see [Contactless Kernel Ids]()   TLV tag [TAG_DFAB01_KERNEL_ID]()   XML tag [XML_TAG_AD_KERNEL_ID]().  |
| unsigned char | **[aidlen](struct_e_m_v___c_t_l_s___a_p_p_l_i___k_e_r_n_e_l___s_t_r_u_c_t.md#variable-aidlen)** <br>length of AID    length of value from [TAG_4F_APP_ID]() |
| unsigned char[16] | **[AID](struct_e_m_v___c_t_l_s___a_p_p_l_i___k_e_r_n_e_l___s_t_r_u_c_t.md#variable-aid)** <br>AID data    TLV tag [TAG_4F_APP_ID]()   XML tag [XML_TAG_AD_AID]().  |

## Public Attributes Documentation

### variable KernelID

```cpp
unsigned char[3] KernelID;
```

Kernel ID, see [Contactless Kernel Ids]()   TLV tag [TAG_DFAB01_KERNEL_ID]()   XML tag [XML_TAG_AD_KERNEL_ID](). 

### variable aidlen

```cpp
unsigned char aidlen;
```

length of AID    length of value from [TAG_4F_APP_ID]()

### variable AID

```cpp
unsigned char[16] AID;
```

AID data    TLV tag [TAG_4F_APP_ID]()   XML tag [XML_TAG_AD_AID](). 

-------------------------------

Updated on 2025-06-17 at 11:52:20 +0100