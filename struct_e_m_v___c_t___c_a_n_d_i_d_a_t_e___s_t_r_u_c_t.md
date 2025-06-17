---
title: EMV_CT_CANDIDATE_STRUCT
summary: Candidate list structure. 

---

# EMV_CT_CANDIDATE_STRUCT

**Module:** **[Transaction execution](group___a_d_k___t_r_x___e_x_e_c.md)**



Candidate list structure.  [More...](#detailed-description)


`#include <EMV_CT_Interface.h>`

## Public Attributes

|                | Name           |
| -------------- | -------------- |
| [EMV_CT_APPLI_TYPE](_e_m_v___c_t___interface_8h.md#typedef-emv-ct-appli-type) | **[candidate](struct_e_m_v___c_t___c_a_n_d_i_d_a_t_e___s_t_r_u_c_t.md#variable-candidate)** <br>Candidate AID ([EMV_CT_APPLI_STRUCT](struct_e_m_v___c_t___a_p_p_l_i___s_t_r_u_c_t.md))  |
| unsigned char[17] | **[name](struct_e_m_v___c_t___c_a_n_d_i_d_a_t_e___s_t_r_u_c_t.md#variable-name)** <br>Candidate name, could be 9F12 or 50 or 84(converted to ascii)  |

## Detailed Description

```cpp
struct EMV_CT_CANDIDATE_STRUCT;
```

Candidate list structure. 

used as [EMV_CT_SELECTRES_STRUCT::T_BF04_Candidates](struct_e_m_v___c_t___s_e_l_e_c_t_r_e_s___s_t_r_u_c_t.md#variable-t-bf04-candidates)

## Public Attributes Documentation

### variable candidate

```cpp
EMV_CT_APPLI_TYPE candidate;
```

Candidate AID ([EMV_CT_APPLI_STRUCT](struct_e_m_v___c_t___a_p_p_l_i___s_t_r_u_c_t.md)) 

### variable name

```cpp
unsigned char[17] name;
```

Candidate name, could be 9F12 or 50 or 84(converted to ascii) 

-------------------------------

Updated on 2025-06-17 at 11:52:22 +0100