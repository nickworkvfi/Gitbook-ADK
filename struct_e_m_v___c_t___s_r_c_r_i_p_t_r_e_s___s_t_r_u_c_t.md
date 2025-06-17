---
title: EMV_CT_SRCRIPTRES_STRUCT
summary: Data structure for issuer script results. Used in EMV_CT_TRANSRES_STRUCT::scriptresults. 

---

# EMV_CT_SRCRIPTRES_STRUCT

**Module:** **[Transaction execution](group___a_d_k___t_r_x___e_x_e_c.md)**



Data structure for issuer script results. Used in [EMV_CT_TRANSRES_STRUCT::scriptresults](). 


`#include <EMV_CT_Interface.h>`

## Public Attributes

|                | Name           |
| -------------- | -------------- |
| unsigned char | **[countScriptCrit](struct_e_m_v___c_t___s_r_c_r_i_p_t_r_e_s___s_t_r_u_c_t.md#variable-countscriptcrit)** <br>Number of critical script results    TLV tag [TAG_DF08_CRIT_SCR]().  |
| unsigned char[EMV_ADK_SCRIPT_RESULT_MAX][EMV_ADK_SCRIPT_RESULT_LEN] | **[ScriptCritResult](struct_e_m_v___c_t___s_r_c_r_i_p_t_r_e_s___s_t_r_u_c_t.md#variable-scriptcritresult)** <br>Results of critical scripts    TLV tag [TAG_DF08_CRIT_SCR]().  |
| unsigned char | **[countScriptUnCrit](struct_e_m_v___c_t___s_r_c_r_i_p_t_r_e_s___s_t_r_u_c_t.md#variable-countscriptuncrit)** <br>Number of uncritical script results    TLV tag [TAG_DF07_UNCRIT_SCR]().  |
| unsigned char[EMV_ADK_SCRIPT_RESULT_MAX][EMV_ADK_SCRIPT_RESULT_LEN] | **[ScriptUnCritResult](struct_e_m_v___c_t___s_r_c_r_i_p_t_r_e_s___s_t_r_u_c_t.md#variable-scriptuncritresult)** <br>Results of uncritical scripts    TLV tag [TAG_DF07_UNCRIT_SCR]().  |

## Public Attributes Documentation

### variable countScriptCrit

```cpp
unsigned char countScriptCrit;
```

Number of critical script results    TLV tag [TAG_DF08_CRIT_SCR](). 

### variable ScriptCritResult

```cpp
unsigned char[EMV_ADK_SCRIPT_RESULT_MAX][EMV_ADK_SCRIPT_RESULT_LEN] ScriptCritResult;
```

Results of critical scripts    TLV tag [TAG_DF08_CRIT_SCR](). 

### variable countScriptUnCrit

```cpp
unsigned char countScriptUnCrit;
```

Number of uncritical script results    TLV tag [TAG_DF07_UNCRIT_SCR](). 

### variable ScriptUnCritResult

```cpp
unsigned char[EMV_ADK_SCRIPT_RESULT_MAX][EMV_ADK_SCRIPT_RESULT_LEN] ScriptUnCritResult;
```

Results of uncritical scripts    TLV tag [TAG_DF07_UNCRIT_SCR](). 

-------------------------------

Updated on 2025-06-17 at 11:52:23 +0100