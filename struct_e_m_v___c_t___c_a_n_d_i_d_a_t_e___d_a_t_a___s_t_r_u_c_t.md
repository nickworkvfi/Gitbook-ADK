---
title: EMV_CT_CANDIDATE_DATA_STRUCT
summary: Candidate list additional data Output of EMV_CT_GetCandidateData()
 To be used in conjunction with EMV_CT_SELECTRES_STRUCT::T_BF04_Candidates. 

---

# EMV_CT_CANDIDATE_DATA_STRUCT

**Module:** **[Transaction execution](group___a_d_k___t_r_x___e_x_e_c.md)**



Candidate list additional data Output of [EMV_CT_GetCandidateData()]()   To be used in conjunction with [EMV_CT_SELECTRES_STRUCT::T_BF04_Candidates](). 


`#include <EMV_CT_Interface.h>`

## Public Attributes

|                | Name           |
| -------------- | -------------- |
| unsigned char | **[API](struct_e_m_v___c_t___c_a_n_d_i_d_a_t_e___d_a_t_a___s_t_r_u_c_t.md#variable-api)** <br>Tag '87' application priority indicator    TLV tag [TAG_87_APP_PRIORITY_ID]().  |
| unsigned char | **[CodeTableIndex](struct_e_m_v___c_t___c_a_n_d_i_d_a_t_e___d_a_t_a___s_t_r_u_c_t.md#variable-codetableindex)** <br>Tag '9F11' for the case that application name originates from application preferred name '9F12'    TLV tag [TAG_9F11_ISS_CODE_TABLE_ID]().  |
| unsigned char[4] | **[IIN](struct_e_m_v___c_t___c_a_n_d_i_d_a_t_e___d_a_t_a___s_t_r_u_c_t.md#variable-iin)** <br>Tag '42'/'9F0C' issuer identification number (n6 or n8, right padded with 0xff), starts with 0xff if absent    TLV tag [TAG_42_ISSUER_ID]() or [TAG_9F0C_ISSUER_ID_EXT]() in case of 8 digits.  |
| unsigned char[35] | **[IBAN](struct_e_m_v___c_t___c_a_n_d_i_d_a_t_e___d_a_t_a___s_t_r_u_c_t.md#variable-iban)** <br>Tag '5F53' International bank account (an ..34, terminated by '0')    TLV tag [TAG_5F53_IBAN]().  |
| unsigned char[12] | **[BIC](struct_e_m_v___c_t___c_a_n_d_i_d_a_t_e___d_a_t_a___s_t_r_u_c_t.md#variable-bic)** <br>Tag '5F54' Bank identification code (an 8 or 11, terminated by '0')    TLV tag [TAG_5F54_BIC]().  |
| unsigned char[2] | **[country2](struct_e_m_v___c_t___c_a_n_d_i_d_a_t_e___d_a_t_a___s_t_r_u_c_t.md#variable-country2)** <br>Tag '5F55' Issuer Country Code (a2)    TLV tag [TAG_5F55_ISSUER_COUNTRY_2]().  |
| unsigned char[3] | **[country3](struct_e_m_v___c_t___c_a_n_d_i_d_a_t_e___d_a_t_a___s_t_r_u_c_t.md#variable-country3)** <br>Tag '5F56' Issuer Country Code (a3)    TLV tag [TAG_5F56_ISSUER_COUNTRY_3]().  |
| unsigned char | **[len9F06](struct_e_m_v___c_t___c_a_n_d_i_d_a_t_e___d_a_t_a___s_t_r_u_c_t.md#variable-len9f06)** <br>For determining the terminal candidate ('9F06') in case of "AID chain" and partial select    TLV tag [TAG_9F06_AID]().  |
| unsigned char[33] | **[DF62_ASF](struct_e_m_v___c_t___c_a_n_d_i_d_a_t_e___d_a_t_a___s_t_r_u_c_t.md#variable-df62-asf)** <br>Application Selection Flag ('DF62', Interac, Canada), first byte indicating length    TLV tag [TAG_DF62_APPLI_SELECT_FLAG]().  |
| unsigned char[1+EMV_CT_SUPPORTED_SIZE_9F0A] | **[selData](struct_e_m_v___c_t___c_a_n_d_i_d_a_t_e___d_a_t_a___s_t_r_u_c_t.md#variable-seldata)** <br>Application Selection Registered Proprietary Data (9F0A), Bulletin No. 175, first byte length    TLV tag [TAG_9F0A_ASRPD]().  |

## Public Attributes Documentation

### variable API

```cpp
unsigned char API;
```

Tag '87' application priority indicator    TLV tag [TAG_87_APP_PRIORITY_ID](). 

### variable CodeTableIndex

```cpp
unsigned char CodeTableIndex;
```

Tag '9F11' for the case that application name originates from application preferred name '9F12'    TLV tag [TAG_9F11_ISS_CODE_TABLE_ID](). 

### variable IIN

```cpp
unsigned char[4] IIN;
```

Tag '42'/'9F0C' issuer identification number (n6 or n8, right padded with 0xff), starts with 0xff if absent    TLV tag [TAG_42_ISSUER_ID]() or [TAG_9F0C_ISSUER_ID_EXT]() in case of 8 digits. 

### variable IBAN

```cpp
unsigned char[35] IBAN;
```

Tag '5F53' International bank account (an ..34, terminated by '0')    TLV tag [TAG_5F53_IBAN](). 

### variable BIC

```cpp
unsigned char[12] BIC;
```

Tag '5F54' Bank identification code (an 8 or 11, terminated by '0')    TLV tag [TAG_5F54_BIC](). 

### variable country2

```cpp
unsigned char[2] country2;
```

Tag '5F55' Issuer Country Code (a2)    TLV tag [TAG_5F55_ISSUER_COUNTRY_2](). 

### variable country3

```cpp
unsigned char[3] country3;
```

Tag '5F56' Issuer Country Code (a3)    TLV tag [TAG_5F56_ISSUER_COUNTRY_3](). 

### variable len9F06

```cpp
unsigned char len9F06;
```

For determining the terminal candidate ('9F06') in case of "AID chain" and partial select    TLV tag [TAG_9F06_AID](). 

### variable DF62_ASF

```cpp
unsigned char[33] DF62_ASF;
```

Application Selection Flag ('DF62', Interac, Canada), first byte indicating length    TLV tag [TAG_DF62_APPLI_SELECT_FLAG](). 

### variable selData

```cpp
unsigned char[1+EMV_CT_SUPPORTED_SIZE_9F0A] selData;
```

Application Selection Registered Proprietary Data (9F0A), Bulletin No. 175, first byte length    TLV tag [TAG_9F0A_ASRPD](). 

-------------------------------

Updated on 2025-06-17 at 11:52:22 +0100