---
title: EMV_CT_CandListType
summary: Data structure for output of EMV_CT_CheckSupportedAID. 

---

# EMV_CT_CandListType

**Module:** **[Transaction execution](group___a_d_k___t_r_x___e_x_e_c.md)**



Data structure for output of EMV_CT_CheckSupportedAID. 


`#include <EMV_CT_Interface.h>`

## Public Attributes

|                | Name           |
| -------------- | -------------- |
| [EMV_CT_APPLI_TYPE](_e_m_v___c_t___interface_8h.md#typedef-emv-ct-appli-type) | **[aid](struct_e_m_v___c_t___cand_list_type.md#variable-aid)**  |
| unsigned char | **[API](struct_e_m_v___c_t___cand_list_type.md#variable-api)**  |
| unsigned char[17] | **[text](struct_e_m_v___c_t___cand_list_type.md#variable-text)**  |
| unsigned char[17] | **[aux_text](struct_e_m_v___c_t___cand_list_type.md#variable-aux-text)**  |
| unsigned char | **[code_table](struct_e_m_v___c_t___cand_list_type.md#variable-code-table)**  |
| unsigned char[9] | **[lang_pref](struct_e_m_v___c_t___cand_list_type.md#variable-lang-pref)**  |

## Public Attributes Documentation

### variable aid

```cpp
EMV_CT_APPLI_TYPE aid;
```


AID returned by the card (DF name, tag '84') 

 TLV tag [TAG_4F_APP_ID](group___e_m_v_c_o___t_a_g_s.md#define-tag-4f-app-id)


### variable API

```cpp
unsigned char API;
```


Application priority indicator ('82') '0' - 'F' (top bit = confirmation required) 

 TLV tag [TAG_87_APP_PRIORITY_ID](group___e_m_v_c_o___t_a_g_s.md#define-tag-87-app-priority-id)


### variable text

```cpp
unsigned char[17] text;
```


Null terminated text supplied by app, could be 9F12 or 50 or 84(converted to ascii) 

 TLV tag [TAG_50_APP_LABEL](group___e_m_v_c_o___t_a_g_s.md#define-tag-50-app-label)


### variable aux_text

```cpp
unsigned char[17] aux_text;
```


Null terminated secondary text field 

 TLV tag [TAG_DF3B_PARAMETER_1](group___v_e_r_i___p_r_i_m___t_a_g_s.md#define-tag-df3b-parameter-1)


### variable code_table

```cpp
unsigned char code_table;
```


character code table index (Value '1' - 'A') or 0 = not specified (ISO 8859)

* indicator which label went to text: EMVL2_DFLTXT=0x80 for default label EMVL2_APPLBL=0x40 for application preferred name ('9F12') EMVL2_APPLBL=0x20 for application label ('50') 

 TLV tag [TAG_9F11_ISS_CODE_TABLE_ID](group___e_m_v_c_o___t_a_g_s.md#define-tag-9f11-iss-code-table-id)


### variable lang_pref

```cpp
unsigned char[9] lang_pref;
```


language preference ASCII with string termination, converted to small letters 

 TLV tag [TAG_5F2D_LANGUAGE](group___e_m_v_c_o___t_a_g_s.md#define-tag-5f2d-language)


-------------------------------

Updated on 2025-06-17 at 11:52:23 +0100