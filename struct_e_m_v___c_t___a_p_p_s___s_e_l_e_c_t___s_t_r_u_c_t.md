---
title: EMV_CT_APPS_SELECT_STRUCT
summary: Application selection parameters of an EMV transaction used for EMV_CT_SELECT_STRUCT::SEL_Data. 

---

# EMV_CT_APPS_SELECT_STRUCT

**Module:** **[Transaction execution](group___a_d_k___t_r_x___e_x_e_c.md)**



Application selection parameters of an EMV transaction used for [EMV_CT_SELECT_STRUCT::SEL_Data](). 


`#include <EMV_CT_Interface.h>`

## Public Attributes

|                | Name           |
| -------------- | -------------- |
| unsigned char | **[No_DirectorySelect](struct_e_m_v___c_t___a_p_p_s___s_e_l_e_c_t___s_t_r_u_c_t.md#variable-no-directoryselect)** <br>Application Selection: Skip PSE (Payment System Environment) handling    BOOL    TLV tag [TAG_DF45_NO_DIR_SELECT]()   Validity bit [INPUT_SEL_NO_PSE]().  |
| char | **[ucCardholderConfirmation](struct_e_m_v___c_t___a_p_p_s___s_e_l_e_c_t___s_t_r_u_c_t.md#variable-uccardholderconfirmation)** <br>Support of cardholder confirmation, see [Support of cardholder confirmation]()   TLV tag [TAG_DF4D_CARD_CONF]()   Validity bit [INPUT_SEL_CARDCONF]().  |
| [EMV_CT_APPLI_TYPE](_e_m_v___c_t___interface_8h.md#typedef-emv-ct-appli-type)[3] | **[ExcludeEmvAIDs](struct_e_m_v___c_t___a_p_p_s___s_e_l_e_c_t___s_t_r_u_c_t.md#variable-excludeemvaids)** <br>Exclude EMV AIDs for this transaction dynamically (without removing from the config)    Struct elements: [EMV_CT_APPLI_STRUCT](struct_e_m_v___c_t___a_p_p_l_i___s_t_r_u_c_t.md)   TLV tag [TAG_EXCLUDE_AID]()   Validity bit [INPUT_SEL_EXCLUDE_AID]().  |
| unsigned char | **[countDomesticChip](struct_e_m_v___c_t___a_p_p_s___s_e_l_e_c_t___s_t_r_u_c_t.md#variable-countdomesticchip)** <br>Number of domestic non-EMV chip applications supporting AID selection, max. see [EMV_ADK_MAX_DOM_CHP]()   Validity bit [INPUT_SEL_DOMCHIP]()   TLV tag [TAG_DOM_CHIP]().  |
| [EMV_CT_DOM_CHIP_TYPE](group___a_d_k___t_r_x___e_x_e_c.md#typedef-emv-ct-dom-chip-type)[EMV_ADK_MAX_DOM_CHP] | **[xDomestic_Chip](struct_e_m_v___c_t___a_p_p_s___s_e_l_e_c_t___s_t_r_u_c_t.md#variable-xdomestic-chip)** <br>Data of domestic chip applications ([EMV_CT_DOM_CHIP_STRUCT]())    Max. number see [EMV_ADK_MAX_DOM_CHP]()   Validity bit [INPUT_SEL_DOMCHIP]()   TLV tag [TAG_DOM_CHIP]().  |
| unsigned char | **[countFallbackMS](struct_e_m_v___c_t___a_p_p_s___s_e_l_e_c_t___s_t_r_u_c_t.md#variable-countfallbackms)** <br>Number of MID applications    Max. see [EMV_ADK_MAX_FB_MSR]()   Necessary for fallback handling according to German ZKA specification    Validity bit [INPUT_SEL_FALLBACK_MSR]()   TLV tag [TAG_FALLBACK_MSR]().  |
| [EMV_CT_FALLBCK_MSR_TYPE](group___a_d_k___t_r_x___e_x_e_c.md#typedef-emv-ct-fallbck-msr-type)[EMV_ADK_MAX_FB_MSR] | **[xFallback_MS](struct_e_m_v___c_t___a_p_p_s___s_e_l_e_c_t___s_t_r_u_c_t.md#variable-xfallback-ms)** <br>List of MID applications ([EMV_CT_FALLBCK_MSR_STRUCT]())    Not presented to customer but automatically reduced to allow MID apps    Max. number see [EMV_ADK_MAX_FB_MSR]()   Validity bit [INPUT_SEL_FALLBACK_MSR]()   TLV tag [TAG_FALLBACK_MSR]().  |
| unsigned char | **[countCommonCands](struct_e_m_v___c_t___a_p_p_s___s_e_l_e_c_t___s_t_r_u_c_t.md#variable-countcommoncands)** <br>Number remaining candidates in the modified candidate list    Only valid in reentrance mode using the candidate list manipulation option [RETURN_CAND_LIST_PREPROC]().    Validity bit [INPUT_SEL_MOD_CANDLIST]()   TLV tag [TAG_DF8F01_MANI_CANDLIST]().  |
| unsigned char[EMV_CT_COMMON_CANDS] | **[ModifiedCandidates](struct_e_m_v___c_t___a_p_p_s___s_e_l_e_c_t___s_t_r_u_c_t.md#variable-modifiedcandidates)** <br>Modified candidate list if the txn steps indicate    Only valid in reentrance mode using the candidate list manipulation option [RETURN_CAND_LIST_PREPROC]().    Validity bit [INPUT_SEL_MOD_CANDLIST]()   TLV tag [TAG_DF8F01_MANI_CANDLIST]().  |

## Public Attributes Documentation

### variable No_DirectorySelect

```cpp
unsigned char No_DirectorySelect;
```

Application Selection: Skip PSE (Payment System Environment) handling    BOOL    TLV tag [TAG_DF45_NO_DIR_SELECT]()   Validity bit [INPUT_SEL_NO_PSE](). 

### variable ucCardholderConfirmation

```cpp
char ucCardholderConfirmation;
```

Support of cardholder confirmation, see [Support of cardholder confirmation]()   TLV tag [TAG_DF4D_CARD_CONF]()   Validity bit [INPUT_SEL_CARDCONF](). 

### variable ExcludeEmvAIDs

```cpp
EMV_CT_APPLI_TYPE[3] ExcludeEmvAIDs;
```

Exclude EMV AIDs for this transaction dynamically (without removing from the config)    Struct elements: [EMV_CT_APPLI_STRUCT](struct_e_m_v___c_t___a_p_p_l_i___s_t_r_u_c_t.md)   TLV tag [TAG_EXCLUDE_AID]()   Validity bit [INPUT_SEL_EXCLUDE_AID](). 

### variable countDomesticChip

```cpp
unsigned char countDomesticChip;
```

Number of domestic non-EMV chip applications supporting AID selection, max. see [EMV_ADK_MAX_DOM_CHP]()   Validity bit [INPUT_SEL_DOMCHIP]()   TLV tag [TAG_DOM_CHIP](). 

### variable xDomestic_Chip

```cpp
EMV_CT_DOM_CHIP_TYPE[EMV_ADK_MAX_DOM_CHP] xDomestic_Chip;
```

Data of domestic chip applications ([EMV_CT_DOM_CHIP_STRUCT]())    Max. number see [EMV_ADK_MAX_DOM_CHP]()   Validity bit [INPUT_SEL_DOMCHIP]()   TLV tag [TAG_DOM_CHIP](). 

### variable countFallbackMS

```cpp
unsigned char countFallbackMS;
```

Number of MID applications    Max. see [EMV_ADK_MAX_FB_MSR]()   Necessary for fallback handling according to German ZKA specification    Validity bit [INPUT_SEL_FALLBACK_MSR]()   TLV tag [TAG_FALLBACK_MSR](). 

### variable xFallback_MS

```cpp
EMV_CT_FALLBCK_MSR_TYPE[EMV_ADK_MAX_FB_MSR] xFallback_MS;
```

List of MID applications ([EMV_CT_FALLBCK_MSR_STRUCT]())    Not presented to customer but automatically reduced to allow MID apps    Max. number see [EMV_ADK_MAX_FB_MSR]()   Validity bit [INPUT_SEL_FALLBACK_MSR]()   TLV tag [TAG_FALLBACK_MSR](). 

### variable countCommonCands

```cpp
unsigned char countCommonCands;
```

Number remaining candidates in the modified candidate list    Only valid in reentrance mode using the candidate list manipulation option [RETURN_CAND_LIST_PREPROC]().    Validity bit [INPUT_SEL_MOD_CANDLIST]()   TLV tag [TAG_DF8F01_MANI_CANDLIST](). 

### variable ModifiedCandidates

```cpp
unsigned char[EMV_CT_COMMON_CANDS] ModifiedCandidates;
```

Modified candidate list if the txn steps indicate    Only valid in reentrance mode using the candidate list manipulation option [RETURN_CAND_LIST_PREPROC]().    Validity bit [INPUT_SEL_MOD_CANDLIST]()   TLV tag [TAG_DF8F01_MANI_CANDLIST](). 

-------------------------------

Updated on 2025-06-17 at 11:52:23 +0100