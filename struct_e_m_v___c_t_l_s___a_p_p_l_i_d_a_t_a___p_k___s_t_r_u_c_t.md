---
title: EMV_CTLS_APPLIDATA_PK_STRUCT
summary: Structure for configuration of one single application, PK specific part (VisaAP resp. Visa Asia/Pacific resp. Visa Wave 2). See EMV_CTLS_SetAppliDataSchemeSpecific()

---

# EMV_CTLS_APPLIDATA_PK_STRUCT

**Module:** **[Configuration](group___a_d_k___c_o_n_f_i_g_u_r_a_t_i_o_n.md)** **/** **[Application data](group___d_e_f___c_o_n_f___a_p_p_l_i.md)**



Structure for configuration of one single application, PK specific part (VisaAP resp. Visa Asia/Pacific resp. Visa Wave 2). See [EMV_CTLS_SetAppliDataSchemeSpecific()]()


`#include <EMV_CTLS_Interface.h>`

## Public Attributes

|                | Name           |
| -------------- | -------------- |
| unsigned char[8] | **[IncludedData](struct_e_m_v___c_t_l_s___a_p_p_l_i_d_a_t_a___p_k___s_t_r_u_c_t.md#variable-includeddata)** <br>Availability bits, see [Appli data scheme specific - Visa Asia/Pacific - Availability bits]().  |
| unsigned char[8] | **[TermIdent_9F1C](struct_e_m_v___c_t_l_s___a_p_p_l_i_d_a_t_a___p_k___s_t_r_u_c_t.md#variable-termident-9f1c)** <br>TempUpdate allowed: YES    Description: Terminal Identification    mandatory for [EMV_CTLS_SetAppliDataSchemeSpecific]()   Availability bit: [INPUT_CTLS_APL_PK_9F1C_0]()   TLV tag: [TAG_9F1C_TRM_ID](),    XML Tag: [XML_TAG_AD_PK_9F1C_TERM_IDENT]().  |
| unsigned char[2] | **[TerminalCountryCode_9F1A](struct_e_m_v___c_t_l_s___a_p_p_l_i_d_a_t_a___p_k___s_t_r_u_c_t.md#variable-terminalcountrycode-9f1a)** <br>TempUpdate allowed: YES    Description: "Terminal country code" (e.g. VISA Germany 0276)    Availability bit: [INPUT_CTLS_APL_PK_9F1A_0]()   TLV tag: [TAG_9F1A_TRM_COUNTRY_CODE](),    XML Tag: [XML_TAG_AD_PK_9F1A_TERM_COUNTRY_CODE]().  |
| unsigned char | **[TerminalType_9F35](struct_e_m_v___c_t_l_s___a_p_p_l_i_d_a_t_a___p_k___s_t_r_u_c_t.md#variable-terminaltype-9f35)** <br>TempUpdate allowed: YES    Description: Terminal type, possible values: 00 = international, 01 = domestic only    mandatory for first call of [EMV_CTLS_SetTermData()]()   Availability bit: [INPUT_CTLS_APL_PK_9F35_0]()   TLV tag: [TAG_9F35_TRM_TYPE](),    XML Tag: [XML_TAG_AD_PK_9F35_TERM_TYPE]().  |
| unsigned char | **[CvmRequirements_DF04](struct_e_m_v___c_t_l_s___a_p_p_l_i_d_a_t_a___p_k___s_t_r_u_c_t.md#variable-cvmrequirements-df04)** <br>TempUpdate allowed: YES    Description: VisaAP specific, CVM requirements, bitlist, 01 = signature, 02 = Online PIN    Availability bit: [INPUT_CTLS_APL_PK_DF04_0]()   TLV tag: [TAG_DF04_PK_CVM_REQUIREMENTS](),    XML Tag: [XML_TAG_AD_PK_CVM_REQUIREMENTS]().  |
| unsigned char[5] | **[AppFlowCap_DFAB31](struct_e_m_v___c_t_l_s___a_p_p_l_i_d_a_t_a___p_k___s_t_r_u_c_t.md#variable-appflowcap-dfab31)** <br>TempUpdate allowed: YES    Description: Configure special application characteristics, see [Application flow capabilities for Visa Asia/Pacific]()   Availability bit: [INPUT_CTLS_APL_PK_DFAB31_0]()   TLV tag: [TAG_DFAB31_APP_FLOW_CAP](),    XML Tag: [XML_TAG_AD_PK_DFAB31_APP_FLOW_CAP]().  |
| unsigned char[6] | **[ContactlessFloorLimit_DF02](struct_e_m_v___c_t_l_s___a_p_p_l_i_d_a_t_a___p_k___s_t_r_u_c_t.md#variable-contactlessfloorlimit-df02)** <br>TempUpdate allowed: NO    Description: Terminal floor limit (BCD encoded)    Use FF FF FF FF to disable    Availability bit: [INPUT_CTLS_APL_PK_DF02_0]()   TLV tag: [TAG_DF02_PK_FLOOR_LIMIT](),    XML Tag: [XML_TAG_AD_PK_DF02_CTLS_FLOOR_LIMIT]().  |
| unsigned char[6] | **[ContactlessTransactionLimit_DFAB41](struct_e_m_v___c_t_l_s___a_p_p_l_i_d_a_t_a___p_k___s_t_r_u_c_t.md#variable-contactlesstransactionlimit-dfab41)** <br>TempUpdate allowed: NO    Description: BCD encoded. No contactless txns above this limit (as defined by PayPass)    PayPass spec naming: "Reader Contactless Transaction Limit"    Visa spec naming: "Reader Contactless Transaction Limit (RCTL)"    Visa spec strongly recommends to disable this limit.    Use FF FF FF FF to disable    Availability bit: [INPUT_CTLS_APL_PK_DFAB41_0]()   TLV tag: [TAG_DFAB41_CTLS_TRX_LIMIT]()   XML Tag: [XML_TAG_AD_PK_DFAB41_CTLS_TRX_LIMIT]().  |
| unsigned char[6] | **[ContactlessCVMRequiredLimit_DF01](struct_e_m_v___c_t_l_s___a_p_p_l_i_d_a_t_a___p_k___s_t_r_u_c_t.md#variable-contactlesscvmrequiredlimit-df01)** <br>TempUpdate allowed: NO    Description: BCD encoded. Below this limit CVM processing is skipped, above performed    Equal to this limit it depends on the scheme: with payWave it's performed, with PayPass not    Use FF FF FF FF to disable    Visa and MasterCard spec naming: "Reader CVM Required Limit"    Availability bit: [INPUT_CTLS_APL_PK_DF01_0]()   TLV tag: [TAG_DF01_PK_CVM_REQ_LIMIT]()   XML Tag: [XML_TAG_AD_PK_DF01_CTLS_CVM_REQ_LIMIT]().  |

## Public Attributes Documentation

### variable IncludedData

```cpp
unsigned char[8] IncludedData;
```

Availability bits, see [Appli data scheme specific - Visa Asia/Pacific - Availability bits](). 

### variable TermIdent_9F1C

```cpp
unsigned char[8] TermIdent_9F1C;
```

TempUpdate allowed: YES    Description: Terminal Identification    mandatory for [EMV_CTLS_SetAppliDataSchemeSpecific]()   Availability bit: [INPUT_CTLS_APL_PK_9F1C_0]()   TLV tag: [TAG_9F1C_TRM_ID](),    XML Tag: [XML_TAG_AD_PK_9F1C_TERM_IDENT](). 

### variable TerminalCountryCode_9F1A

```cpp
unsigned char[2] TerminalCountryCode_9F1A;
```

TempUpdate allowed: YES    Description: "Terminal country code" (e.g. VISA Germany 0276)    Availability bit: [INPUT_CTLS_APL_PK_9F1A_0]()   TLV tag: [TAG_9F1A_TRM_COUNTRY_CODE](),    XML Tag: [XML_TAG_AD_PK_9F1A_TERM_COUNTRY_CODE](). 

### variable TerminalType_9F35

```cpp
unsigned char TerminalType_9F35;
```

TempUpdate allowed: YES    Description: Terminal type, possible values: 00 = international, 01 = domestic only    mandatory for first call of [EMV_CTLS_SetTermData()]()   Availability bit: [INPUT_CTLS_APL_PK_9F35_0]()   TLV tag: [TAG_9F35_TRM_TYPE](),    XML Tag: [XML_TAG_AD_PK_9F35_TERM_TYPE](). 

### variable CvmRequirements_DF04

```cpp
unsigned char CvmRequirements_DF04;
```

TempUpdate allowed: YES    Description: VisaAP specific, CVM requirements, bitlist, 01 = signature, 02 = Online PIN    Availability bit: [INPUT_CTLS_APL_PK_DF04_0]()   TLV tag: [TAG_DF04_PK_CVM_REQUIREMENTS](),    XML Tag: [XML_TAG_AD_PK_CVM_REQUIREMENTS](). 

### variable AppFlowCap_DFAB31

```cpp
unsigned char[5] AppFlowCap_DFAB31;
```

TempUpdate allowed: YES    Description: Configure special application characteristics, see [Application flow capabilities for Visa Asia/Pacific]()   Availability bit: [INPUT_CTLS_APL_PK_DFAB31_0]()   TLV tag: [TAG_DFAB31_APP_FLOW_CAP](),    XML Tag: [XML_TAG_AD_PK_DFAB31_APP_FLOW_CAP](). 

### variable ContactlessFloorLimit_DF02

```cpp
unsigned char[6] ContactlessFloorLimit_DF02;
```

TempUpdate allowed: NO    Description: Terminal floor limit (BCD encoded)    Use FF FF FF FF to disable    Availability bit: [INPUT_CTLS_APL_PK_DF02_0]()   TLV tag: [TAG_DF02_PK_FLOOR_LIMIT](),    XML Tag: [XML_TAG_AD_PK_DF02_CTLS_FLOOR_LIMIT](). 

### variable ContactlessTransactionLimit_DFAB41

```cpp
unsigned char[6] ContactlessTransactionLimit_DFAB41;
```

TempUpdate allowed: NO    Description: BCD encoded. No contactless txns above this limit (as defined by PayPass)    PayPass spec naming: "Reader Contactless Transaction Limit"    Visa spec naming: "Reader Contactless Transaction Limit (RCTL)"    Visa spec strongly recommends to disable this limit.    Use FF FF FF FF to disable    Availability bit: [INPUT_CTLS_APL_PK_DFAB41_0]()   TLV tag: [TAG_DFAB41_CTLS_TRX_LIMIT]()   XML Tag: [XML_TAG_AD_PK_DFAB41_CTLS_TRX_LIMIT](). 

### variable ContactlessCVMRequiredLimit_DF01

```cpp
unsigned char[6] ContactlessCVMRequiredLimit_DF01;
```

TempUpdate allowed: NO    Description: BCD encoded. Below this limit CVM processing is skipped, above performed    Equal to this limit it depends on the scheme: with payWave it's performed, with PayPass not    Use FF FF FF FF to disable    Visa and MasterCard spec naming: "Reader CVM Required Limit"    Availability bit: [INPUT_CTLS_APL_PK_DF01_0]()   TLV tag: [TAG_DF01_PK_CVM_REQ_LIMIT]()   XML Tag: [XML_TAG_AD_PK_DF01_CTLS_CVM_REQ_LIMIT](). 

-------------------------------

Updated on 2025-06-17 at 11:52:22 +0100