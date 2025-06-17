---
title: EMV_CTLS_APPS_SELECT_STRUCT
summary: Application selection parameters of an EMV transaction. 

---

# EMV_CTLS_APPS_SELECT_STRUCT

**Module:** **[Transaction execution](group___a_d_k___t_r_x___e_x_e_c.md)** **/** **[Input data](group___d_e_f___f_l_o_w___i_n_p_u_t.md)**



Application selection parameters of an EMV transaction.  [More...](#detailed-description)


`#include <EMV_CTLS_Interface.h>`

## Public Attributes

|                | Name           |
| -------------- | -------------- |
| [EMV_CTLS_APPLI_TYPE](_e_m_v___c_t_l_s___interface_8h.md#typedef-emv-ctls-appli-type)[3] | **[ExcludeEmvAIDs](struct_e_m_v___c_t_l_s___a_p_p_s___s_e_l_e_c_t___s_t_r_u_c_t.md#variable-excludeemvaids)** <br>Exclude EMV AIDs for this transaction dynamically (without removing from the config)    TLV tag [TAG_EXCLUDE_AID](), validity bit [INPUT_CTLS_SEL_EXCLUDE_AID]().  |
| [EMV_CTLS_APPLI_KERNEL_TYPE](_e_m_v___c_t_l_s___interface_8h.md#typedef-emv-ctls-appli-kernel-type)[3] | **[ExcludeCombos](struct_e_m_v___c_t_l_s___a_p_p_s___s_e_l_e_c_t___s_t_r_u_c_t.md#variable-excludecombos)** <br>Exclude EMV Combos for this transaction dynamically (without removing from the config). Can also be used to exclude kernel IDs or AIDs by setting the other item, aidlen or kernelID[0] to 0.    TLV template [TAG_EXCLUDE_COMBO]() containing [TAG_4F_APP_ID]() and [TAG_DFAB01_KERNEL_ID](), validity bit [INPUT_CTLS_SEL_EXCLUDE_COMBO]().  |

## Detailed Description

```cpp
struct EMV_CTLS_APPS_SELECT_STRUCT;
```

Application selection parameters of an EMV transaction. 

Part of [EMV_CTLS_START_STRUCT](struct_e_m_v___c_t_l_s___s_t_a_r_t___s_t_r_u_c_t.md)

## Public Attributes Documentation

### variable ExcludeEmvAIDs

```cpp
EMV_CTLS_APPLI_TYPE[3] ExcludeEmvAIDs;
```

Exclude EMV AIDs for this transaction dynamically (without removing from the config)    TLV tag [TAG_EXCLUDE_AID](), validity bit [INPUT_CTLS_SEL_EXCLUDE_AID](). 

### variable ExcludeCombos

```cpp
EMV_CTLS_APPLI_KERNEL_TYPE[3] ExcludeCombos;
```

Exclude EMV Combos for this transaction dynamically (without removing from the config). Can also be used to exclude kernel IDs or AIDs by setting the other item, aidlen or kernelID[0] to 0.    TLV template [TAG_EXCLUDE_COMBO]() containing [TAG_4F_APP_ID]() and [TAG_DFAB01_KERNEL_ID](), validity bit [INPUT_CTLS_SEL_EXCLUDE_COMBO](). 

-------------------------------

Updated on 2025-06-17 at 11:52:23 +0100