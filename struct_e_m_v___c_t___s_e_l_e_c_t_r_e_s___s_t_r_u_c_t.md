---
title: EMV_CT_SELECTRES_STRUCT
summary: result data of EMV_CT_StartTransaction()

---

# EMV_CT_SELECTRES_STRUCT

**Module:** **[Transaction execution](group___a_d_k___t_r_x___e_x_e_c.md)**



result data of [EMV_CT_StartTransaction()]()


`#include <EMV_CT_Interface.h>`

## Public Attributes

|                | Name           |
| -------------- | -------------- |
| [EMV_CT_APPLI_TYPE](_e_m_v___c_t___interface_8h.md#typedef-emv-ct-appli-type) | **[T_84_DFName](struct_e_m_v___c_t___s_e_l_e_c_t_r_e_s___s_t_r_u_c_t.md#variable-t-84-dfname)** <br>Dedicated File (DF) Name ([EMV_CT_APPLI_STRUCT](struct_e_m_v___c_t___a_p_p_l_i___s_t_r_u_c_t.md))    If provided bit [DF61_SEL_84_DF_NAME]() has to be set    TLV tag [TAG_84_DF_NAME]().  |
| unsigned char[16+1] | **[AppName](struct_e_m_v___c_t___s_e_l_e_c_t_r_e_s___s_t_r_u_c_t.md#variable-appname)** <br>Application name (tag 9F12, tag 50, or configured default [EMV_CT_APPLIDATA_STRUCT::AppName](struct_e_m_v___c_t___a_p_p_l_i_d_a_t_a___s_t_r_u_c_t.md#variable-appname))    If provided bit [DF61_SEL_AGREED_APPNAME]() has to be set    EMVCo rules may be overwritten by [EMV_CT_USE_CFG_APPL_NAME]()   TLV tag [TAG_50_APP_LABEL]().  |
| unsigned char[16+1] | **[T_50_ApplicationName](struct_e_m_v___c_t___s_e_l_e_c_t_r_e_s___s_t_r_u_c_t.md#variable-t-50-applicationname)** <br>Application label (tag 50)    If provided bit [DF61_SEL_50_APPLICATION_NAME]() has to be set    TLV tag [TAG_DF33_APPLICATION_TAG_50]().  |
| unsigned char | **[T_9F11_CodeTable](struct_e_m_v___c_t___s_e_l_e_c_t_r_e_s___s_t_r_u_c_t.md#variable-t-9f11-codetable)** <br>Application issuer code table index (tag 9F11)    If provided bit [DF61_SEL_9F11_CODE_TABLE]() has to be set    TLV tag [TAG_9F11_ISS_CODE_TABLE_ID]()   Indicates the code table according to ISO/IEC 8859 for displaying the Application Preferred Name    Examples: 1 ... Latin-1 (West Europe), 2 ... Latin-2 (East Europe), 6 ... Arabic, 9 ... Latin-5.  |
| unsigned char[16+1] | **[T_9F12_PreferredName](struct_e_m_v___c_t___s_e_l_e_c_t_r_e_s___s_t_r_u_c_t.md#variable-t-9f12-preferredname)** <br>Application preferred name    If provided bit [DF61_SEL_9F12_PREF_NAME]() has to be set    TLV tag [TAG_9F12_APP_PREFERRED_NAME]().  |
| unsigned char[8+1] | **[T_5F2D_Lang_Pref](struct_e_m_v___c_t___s_e_l_e_c_t_r_e_s___s_t_r_u_c_t.md#variable-t-5f2d-lang-pref)** <br>Language Preference (zero terminated)    If provided bit [DF61_SEL_5F2D_LANG_PREF]() has to be set    TLV tag [TAG_5F2D_LANGUAGE]().  |
| unsigned char[15] | **[T_DF62_ErrorData](struct_e_m_v___c_t___s_e_l_e_c_t_r_e_s___s_t_r_u_c_t.md#variable-t-df62-errordata)** <br>Optional: filled if transaction is not successful    see [Additional error data]()   If provided bit [DF61_SEL_DF62_ERRORDATA]() has to be set    TLV tag [TAG_DF62_ERROR_DATA]().  |
| unsigned char | **[T_DF63_DisplayText](struct_e_m_v___c_t___s_e_l_e_c_t_r_e_s___s_t_r_u_c_t.md#variable-t-df63-displaytext)** <br>Optional: filled with index of display text id if anything was displayed    If provided bit [DF61_SEL_9F63_DISPTXT]() has to be set    TLV tag [TAG_DF63_DISPLAY_TEXT]().  |
| unsigned char | **[countFallbackMS](struct_e_m_v___c_t___s_e_l_e_c_t_r_e_s___s_t_r_u_c_t.md#variable-countfallbackms)** <br>Reduced number of MID applications    max. [EMV_ADK_MAX_FB_MSR]()   If provided bit [DF61_SEL_MID_DATA]() has to be set    TLV tag [TAG_DF4C_FALLB_MSR_APPLI]().  |
| [EMV_CT_FALLBCK_MSR_TYPE](group___a_d_k___t_r_x___e_x_e_c.md#typedef-emv-ct-fallbck-msr-type)[EMV_ADK_MAX_FB_MSR] | **[xFallback_MS](struct_e_m_v___c_t___s_e_l_e_c_t_r_e_s___s_t_r_u_c_t.md#variable-xfallback-ms)** <br>Reduced list of MID applications    max. number [EMV_ADK_MAX_FB_MSR]()   If provided bit [DF61_SEL_MID_DATA]() has to be set    TLV tag [TAG_DF4C_FALLB_MSR_APPLI]().  |
| unsigned char | **[PDOL_tags](struct_e_m_v___c_t___s_e_l_e_c_t_r_e_s___s_t_r_u_c_t.md#variable-pdol-tags)** <br>PDOL tag information: (b8 set) == final amount (9F02/81) is required at step application initialization (GPO)    If provided bit [DF61_SEL_PDOL]() has to be set    TLV tag [TAG_DF4E_PDOL_INFO]().  |
| [EMV_CT_CANDIDATE_TYPE](group___a_d_k___t_r_x___e_x_e_c.md#typedef-emv-ct-candidate-type)[EMV_CT_COMMON_CANDS] | **[T_BF04_Candidates](struct_e_m_v___c_t___s_e_l_e_c_t_r_e_s___s_t_r_u_c_t.md#variable-t-bf04-candidates)** <br>The candidate list which is used in the selection process, see [EMV_CT_CANDIDATE_STRUCT](struct_e_m_v___c_t___c_a_n_d_i_d_a_t_e___s_t_r_u_c_t.md)   up to 10 entries, 1st entry with zero AID length marks end of the list    If provided bit [DF61_SEL_CANDIDATES]() has to be set    Can also be changed by [EMV_CT_updateTxnTags()]()   TLV tag [TAG_CAND_LIST]().  |
| [EMV_CT_APPLI_TYPE](_e_m_v___c_t___interface_8h.md#typedef-emv-ct-appli-type) | **[T_DF04_Aidselected](struct_e_m_v___c_t___s_e_l_e_c_t_r_e_s___s_t_r_u_c_t.md#variable-t-df04-aidselected)** <br>Selected AID ([EMV_CT_APPLI_STRUCT](struct_e_m_v___c_t___a_p_p_l_i___s_t_r_u_c_t.md))    If provided bit [DF61_SEL_AID]() has to be set    TLV tag [TAG_DF04_AID]().  |
| unsigned char[8] | **[T_DF61_Info_Received_Data](struct_e_m_v___c_t___s_e_l_e_c_t_r_e_s___s_t_r_u_c_t.md#variable-t-df61-info-received-data)** <br>Which data was received from the chip    see [StartTransaction: Which data was received from the chip]().  |

## Public Attributes Documentation

### variable T_84_DFName

```cpp
EMV_CT_APPLI_TYPE T_84_DFName;
```

Dedicated File (DF) Name ([EMV_CT_APPLI_STRUCT](struct_e_m_v___c_t___a_p_p_l_i___s_t_r_u_c_t.md))    If provided bit [DF61_SEL_84_DF_NAME]() has to be set    TLV tag [TAG_84_DF_NAME](). 

### variable AppName

```cpp
unsigned char[16+1] AppName;
```

Application name (tag 9F12, tag 50, or configured default [EMV_CT_APPLIDATA_STRUCT::AppName](struct_e_m_v___c_t___a_p_p_l_i_d_a_t_a___s_t_r_u_c_t.md#variable-appname))    If provided bit [DF61_SEL_AGREED_APPNAME]() has to be set    EMVCo rules may be overwritten by [EMV_CT_USE_CFG_APPL_NAME]()   TLV tag [TAG_50_APP_LABEL](). 

### variable T_50_ApplicationName

```cpp
unsigned char[16+1] T_50_ApplicationName;
```

Application label (tag 50)    If provided bit [DF61_SEL_50_APPLICATION_NAME]() has to be set    TLV tag [TAG_DF33_APPLICATION_TAG_50](). 

### variable T_9F11_CodeTable

```cpp
unsigned char T_9F11_CodeTable;
```

Application issuer code table index (tag 9F11)    If provided bit [DF61_SEL_9F11_CODE_TABLE]() has to be set    TLV tag [TAG_9F11_ISS_CODE_TABLE_ID]()   Indicates the code table according to ISO/IEC 8859 for displaying the Application Preferred Name    Examples: 1 ... Latin-1 (West Europe), 2 ... Latin-2 (East Europe), 6 ... Arabic, 9 ... Latin-5. 

### variable T_9F12_PreferredName

```cpp
unsigned char[16+1] T_9F12_PreferredName;
```

Application preferred name    If provided bit [DF61_SEL_9F12_PREF_NAME]() has to be set    TLV tag [TAG_9F12_APP_PREFERRED_NAME](). 

### variable T_5F2D_Lang_Pref

```cpp
unsigned char[8+1] T_5F2D_Lang_Pref;
```

Language Preference (zero terminated)    If provided bit [DF61_SEL_5F2D_LANG_PREF]() has to be set    TLV tag [TAG_5F2D_LANGUAGE](). 

### variable T_DF62_ErrorData

```cpp
unsigned char[15] T_DF62_ErrorData;
```

Optional: filled if transaction is not successful    see [Additional error data]()   If provided bit [DF61_SEL_DF62_ERRORDATA]() has to be set    TLV tag [TAG_DF62_ERROR_DATA](). 

### variable T_DF63_DisplayText

```cpp
unsigned char T_DF63_DisplayText;
```

Optional: filled with index of display text id if anything was displayed    If provided bit [DF61_SEL_9F63_DISPTXT]() has to be set    TLV tag [TAG_DF63_DISPLAY_TEXT](). 

### variable countFallbackMS

```cpp
unsigned char countFallbackMS;
```

Reduced number of MID applications    max. [EMV_ADK_MAX_FB_MSR]()   If provided bit [DF61_SEL_MID_DATA]() has to be set    TLV tag [TAG_DF4C_FALLB_MSR_APPLI](). 

### variable xFallback_MS

```cpp
EMV_CT_FALLBCK_MSR_TYPE[EMV_ADK_MAX_FB_MSR] xFallback_MS;
```

Reduced list of MID applications    max. number [EMV_ADK_MAX_FB_MSR]()   If provided bit [DF61_SEL_MID_DATA]() has to be set    TLV tag [TAG_DF4C_FALLB_MSR_APPLI](). 

### variable PDOL_tags

```cpp
unsigned char PDOL_tags;
```

PDOL tag information: (b8 set) == final amount (9F02/81) is required at step application initialization (GPO)    If provided bit [DF61_SEL_PDOL]() has to be set    TLV tag [TAG_DF4E_PDOL_INFO](). 

### variable T_BF04_Candidates

```cpp
EMV_CT_CANDIDATE_TYPE[EMV_CT_COMMON_CANDS] T_BF04_Candidates;
```

The candidate list which is used in the selection process, see [EMV_CT_CANDIDATE_STRUCT](struct_e_m_v___c_t___c_a_n_d_i_d_a_t_e___s_t_r_u_c_t.md)   up to 10 entries, 1st entry with zero AID length marks end of the list    If provided bit [DF61_SEL_CANDIDATES]() has to be set    Can also be changed by [EMV_CT_updateTxnTags()]()   TLV tag [TAG_CAND_LIST](). 

### variable T_DF04_Aidselected

```cpp
EMV_CT_APPLI_TYPE T_DF04_Aidselected;
```

Selected AID ([EMV_CT_APPLI_STRUCT](struct_e_m_v___c_t___a_p_p_l_i___s_t_r_u_c_t.md))    If provided bit [DF61_SEL_AID]() has to be set    TLV tag [TAG_DF04_AID](). 

### variable T_DF61_Info_Received_Data

```cpp
unsigned char[8] T_DF61_Info_Received_Data;
```

Which data was received from the chip    see [StartTransaction: Which data was received from the chip](). 

-------------------------------

Updated on 2025-06-17 at 11:52:23 +0100