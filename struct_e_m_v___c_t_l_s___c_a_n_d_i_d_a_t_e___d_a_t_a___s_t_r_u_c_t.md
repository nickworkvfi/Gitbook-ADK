---
title: EMV_CTLS_CANDIDATE_DATA_STRUCT
summary: Candidate list additional data. 

---

# EMV_CTLS_CANDIDATE_DATA_STRUCT

**Module:** **[Transaction execution](group___a_d_k___t_r_x___e_x_e_c.md)** **/** **[Functions for performing transactions](group___f_u_n_c___f_l_o_w.md)**



Candidate list additional data.  [More...](#detailed-description)


`#include <EMV_CTLS_Interface.h>`

## Public Attributes

|                | Name           |
| -------------- | -------------- |
| unsigned char | **[API](struct_e_m_v___c_t_l_s___c_a_n_d_i_d_a_t_e___d_a_t_a___s_t_r_u_c_t.md#variable-api)** <br>tag '87' application priority indicator  |
| unsigned char[4] | **[IIN](struct_e_m_v___c_t_l_s___c_a_n_d_i_d_a_t_e___d_a_t_a___s_t_r_u_c_t.md#variable-iin)** <br>tag '42'/'9F0C' issuer identification number (n6 or n8, padded from right with 0xff like PAN), 0xff if absent  |
| unsigned char[35] | **[IBAN](struct_e_m_v___c_t_l_s___c_a_n_d_i_d_a_t_e___d_a_t_a___s_t_r_u_c_t.md#variable-iban)** <br>tag '5F53' International bank account (an ..34, terminated by '0')  |
| unsigned char[12] | **[BIC](struct_e_m_v___c_t_l_s___c_a_n_d_i_d_a_t_e___d_a_t_a___s_t_r_u_c_t.md#variable-bic)** <br>tag '5F54' Bank identification code (an 8 or 11, terminated by '0')  |
| unsigned char[2] | **[country2](struct_e_m_v___c_t_l_s___c_a_n_d_i_d_a_t_e___d_a_t_a___s_t_r_u_c_t.md#variable-country2)** <br>tag '5F55' Issuer Country Code (a2)  |
| unsigned char[3] | **[country3](struct_e_m_v___c_t_l_s___c_a_n_d_i_d_a_t_e___d_a_t_a___s_t_r_u_c_t.md#variable-country3)** <br>tag '5F56' Issuer Country Code (a3)  |
| unsigned char | **[len9F06](struct_e_m_v___c_t_l_s___c_a_n_d_i_d_a_t_e___d_a_t_a___s_t_r_u_c_t.md#variable-len9f06)** <br>for determining the terminal candidate ('9F06') in case of "AID chain" and partial select  |
| unsigned char[1+EMV_CTLS_SUPPORTED_SIZE_9F0A] | **[selData](struct_e_m_v___c_t_l_s___c_a_n_d_i_d_a_t_e___d_a_t_a___s_t_r_u_c_t.md#variable-seldata)** <br>Application Selection Registered Proprietary Data (9F0A), Bulletin No. 175, first byte length.  |
| unsigned char[1+50] | **[disc](struct_e_m_v___c_t_l_s___c_a_n_d_i_d_a_t_e___d_a_t_a___s_t_r_u_c_t.md#variable-disc)** <br>discretionary data, content of tag 73, first byte is length  |

## Detailed Description

```cpp
struct EMV_CTLS_CANDIDATE_DATA_STRUCT;
```

Candidate list additional data. 

To be used in conjunction with AID list in combo candidates callback [TAG_BF12_CBK_MODIFY_CAND](group___c_b_c_k___f_c_t___t_a_g_s.md#define-tag-bf12-cbk-modify-cand)

 See also [EMV_CTLS_GetCandidateData()](group___f_u_n_c___f_l_o_w.md#function-emv-ctls-getcandidatedata)

## Public Attributes Documentation

### variable API

```cpp
unsigned char API;
```

tag '87' application priority indicator 

### variable IIN

```cpp
unsigned char[4] IIN;
```

tag '42'/'9F0C' issuer identification number (n6 or n8, padded from right with 0xff like PAN), 0xff if absent 

### variable IBAN

```cpp
unsigned char[35] IBAN;
```

tag '5F53' International bank account (an ..34, terminated by '0') 

### variable BIC

```cpp
unsigned char[12] BIC;
```

tag '5F54' Bank identification code (an 8 or 11, terminated by '0') 

### variable country2

```cpp
unsigned char[2] country2;
```

tag '5F55' Issuer Country Code (a2) 

### variable country3

```cpp
unsigned char[3] country3;
```

tag '5F56' Issuer Country Code (a3) 

### variable len9F06

```cpp
unsigned char len9F06;
```

for determining the terminal candidate ('9F06') in case of "AID chain" and partial select 

### variable selData

```cpp
unsigned char[1+EMV_CTLS_SUPPORTED_SIZE_9F0A] selData;
```

Application Selection Registered Proprietary Data (9F0A), Bulletin No. 175, first byte length. 

### variable disc

```cpp
unsigned char[1+50] disc;
```

discretionary data, content of tag 73, first byte is length 

-------------------------------

Updated on 2025-06-17 at 11:52:23 +0100