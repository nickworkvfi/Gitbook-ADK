---
title: EMV_CT_CAPKEY_STRUCT
summary: Data structure CAP keys. 

---

# EMV_CT_CAPKEY_STRUCT

**Module:** **[Transaction execution](group___a_d_k___t_r_x___e_x_e_c.md)** **/** **[Input data](group___d_e_f___f_l_o_w___i_n_p_u_t.md)** **/** **[Support of cardholder confirmation](group___d_e_f___c_a_r_d___c_o_n_f.md)**



Data structure CAP keys. 


`#include <EMV_CT_Interface.h>`

## Public Attributes

|                | Name           |
| -------------- | -------------- |
| unsigned char * | **[RID](struct_e_m_v___c_t___c_a_p_k_e_y___s_t_r_u_c_t.md#variable-rid)** <br>Registered Identifier    TLV tag [TAG_KEY_RID](),    RID in [EMV_CT_CAPKEY_STRUCT::RID](),    XML Tag: [XML_TAG_CAP_KEYS_RID]().  |
| unsigned char | **[Index](struct_e_m_v___c_t___c_a_p_k_e_y___s_t_r_u_c_t.md#variable-index)** <br>Index    TLV tag [TAG_KEY_INDEX](),    Index in [EMV_CT_CAPKEY_STRUCT::Index](),    XML Tag: [XML_TAG_CAP_KEYS_INDEX]().  |
| unsigned char * | **[Key](struct_e_m_v___c_t___c_a_p_k_e_y___s_t_r_u_c_t.md#variable-key)** <br>Actual Key data    TLV tag [TAG_KEY_KEY](),    Key in [EMV_CT_CAPKEY_STRUCT::Key](),    XML Tag: [XML_TAG_CAP_KEYS_KEY]().  |
| unsigned char | **[KeyLen](struct_e_m_v___c_t___c_a_p_k_e_y___s_t_r_u_c_t.md#variable-keylen)** <br>length of key in bytes    KeyLen in [EMV_CT_CAPKEY_STRUCT::KeyLen](),    XML Tag: [XML_TAG_CAP_KEYS_KEYLEN]() |
| unsigned char | **[Exponent](struct_e_m_v___c_t___c_a_p_k_e_y___s_t_r_u_c_t.md#variable-exponent)** <br>Exponent - 01 used for 65537    TLV tag [TAG_KEY_EXPONENT](),    Exponent in [EMV_CT_CAPKEY_STRUCT::Exponent](),    XML Tag: [XML_TAG_CAP_KEYS_EXPONENT]().  |
| unsigned char * | **[Hash](struct_e_m_v___c_t___c_a_p_k_e_y___s_t_r_u_c_t.md#variable-hash)** <br>Hash value of rid, index, key, exponent    Optional, if not provided it's simply not checked.    TLV tag [TAG_KEY_HASH](),    Hash in [EMV_CT_CAPKEY_STRUCT::Hash](),    XML Tag: [XML_TAG_CAP_KEYS_HASH]().  |
| unsigned char | **[noOfRevocEntries](struct_e_m_v___c_t___c_a_p_k_e_y___s_t_r_u_c_t.md#variable-noofrevocentries)** <br>No of entries in revocation list.  |
| unsigned char * | **[RevocEntries](struct_e_m_v___c_t___c_a_p_k_e_y___s_t_r_u_c_t.md#variable-revocentries)** <br>Revocation list, each entry consists of 3 byte serial no.    TLV tag [TAG_KEY_CRL](),    RevocEntries in [EMV_CT_CAPKEY_STRUCT::RevocEntries](),    XML Tag: [XML_TAG_CAP_KEYS_REVOC_LIST]().  |

## Public Attributes Documentation

### variable RID

```cpp
unsigned char * RID;
```

Registered Identifier    TLV tag [TAG_KEY_RID](),    RID in [EMV_CT_CAPKEY_STRUCT::RID](),    XML Tag: [XML_TAG_CAP_KEYS_RID](). 

### variable Index

```cpp
unsigned char Index;
```

Index    TLV tag [TAG_KEY_INDEX](),    Index in [EMV_CT_CAPKEY_STRUCT::Index](),    XML Tag: [XML_TAG_CAP_KEYS_INDEX](). 

### variable Key

```cpp
unsigned char * Key;
```

Actual Key data    TLV tag [TAG_KEY_KEY](),    Key in [EMV_CT_CAPKEY_STRUCT::Key](),    XML Tag: [XML_TAG_CAP_KEYS_KEY](). 

### variable KeyLen

```cpp
unsigned char KeyLen;
```

length of key in bytes    KeyLen in [EMV_CT_CAPKEY_STRUCT::KeyLen](),    XML Tag: [XML_TAG_CAP_KEYS_KEYLEN]()

### variable Exponent

```cpp
unsigned char Exponent;
```

Exponent - 01 used for 65537    TLV tag [TAG_KEY_EXPONENT](),    Exponent in [EMV_CT_CAPKEY_STRUCT::Exponent](),    XML Tag: [XML_TAG_CAP_KEYS_EXPONENT](). 

### variable Hash

```cpp
unsigned char * Hash;
```

Hash value of rid, index, key, exponent    Optional, if not provided it's simply not checked.    TLV tag [TAG_KEY_HASH](),    Hash in [EMV_CT_CAPKEY_STRUCT::Hash](),    XML Tag: [XML_TAG_CAP_KEYS_HASH](). 

### variable noOfRevocEntries

```cpp
unsigned char noOfRevocEntries;
```

No of entries in revocation list. 

### variable RevocEntries

```cpp
unsigned char * RevocEntries;
```

Revocation list, each entry consists of 3 byte serial no.    TLV tag [TAG_KEY_CRL](),    RevocEntries in [EMV_CT_CAPKEY_STRUCT::RevocEntries](),    XML Tag: [XML_TAG_CAP_KEYS_REVOC_LIST](). 

-------------------------------

Updated on 2025-06-17 at 11:52:23 +0100