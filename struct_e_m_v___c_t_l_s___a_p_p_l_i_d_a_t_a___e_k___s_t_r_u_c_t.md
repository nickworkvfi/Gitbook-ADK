---
title: EMV_CTLS_APPLIDATA_EK_STRUCT
summary: Structure for configuration of one single application, EK specific part. See EMV_CTLS_SetAppliDataSchemeSpecific()

---

# EMV_CTLS_APPLIDATA_EK_STRUCT

**Module:** **[Configuration](group___a_d_k___c_o_n_f_i_g_u_r_a_t_i_o_n.md)** **/** **[Application data](group___d_e_f___c_o_n_f___a_p_p_l_i.md)**



Structure for configuration of one single application, EK specific part. See [EMV_CTLS_SetAppliDataSchemeSpecific()]()


`#include <EMV_CTLS_Interface.h>`

## Public Attributes

|                | Name           |
| -------------- | -------------- |
| unsigned char[8] | **[IncludedData](struct_e_m_v___c_t_l_s___a_p_p_l_i_d_a_t_a___e_k___s_t_r_u_c_t.md#variable-includeddata)** <br>Availability bits, see [Appli data scheme specific - Epal - Availability bits]().  |
| unsigned char[8] | **[TermIdent_9F1C](struct_e_m_v___c_t_l_s___a_p_p_l_i_d_a_t_a___e_k___s_t_r_u_c_t.md#variable-termident-9f1c)** <br>TempUpdate allowed: YES    Description: Terminal Identification    mandatory for [EMV_CTLS_SetAppliDataSchemeSpecific]()   Availability bit: [INPUT_CTLS_APL_EK_9F1C_0]()   TLV tag: [TAG_9F1C_TRM_ID](),    XML Tag: [XML_TAG_AD_EK_9F1C_TERM_IDENT]().  |
| unsigned char[2] | **[TerminalCountryCode_9F1A](struct_e_m_v___c_t_l_s___a_p_p_l_i_d_a_t_a___e_k___s_t_r_u_c_t.md#variable-terminalcountrycode-9f1a)** <br>TempUpdate allowed: YES    Description: "Terminal country code" (e.g. VISA Germany 0276)    Availability bit: [INPUT_CTLS_APL_EK_9F1A_0]()   TLV tag: [TAG_9F1A_TRM_COUNTRY_CODE](),    XML Tag: [XML_TAG_AD_EK_9F1A_TERM_COUNTRY_CODE]().  |
| unsigned char | **[TerminalType_9F35](struct_e_m_v___c_t_l_s___a_p_p_l_i_d_a_t_a___e_k___s_t_r_u_c_t.md#variable-terminaltype-9f35)** <br>TempUpdate allowed: YES    Description: Terminal type, possible values see [Terminaltypes (Tag 9F35)]())    mandatory for first call of [EMV_CTLS_SetTermData()]()   Availability bit: [INPUT_CTLS_APL_EK_9F35_0]()   TLV tag: [TAG_9F35_TRM_TYPE](),    XML Tag: [XML_TAG_AD_EK_9F35_TERM_TYPE]().  |
| unsigned char[3] | **[TerminalCapabilities_9F33](struct_e_m_v___c_t_l_s___a_p_p_l_i_d_a_t_a___e_k___s_t_r_u_c_t.md#variable-terminalcapabilities-9f33)** <br>TempUpdate allowed: YES    Description: "Terminal Capabilities" for this application, for PayPass 3 the tags DF81xx, DF81yy, DF81zz are filled with these 3 byte, for VISA this is used for host compliancy only, for Amex in accordance with tag 9F6E,    Availability bit: [INPUT_CTLS_APL_EK_9F33_0]()   TLV tag: [TAG_9F33_TRM_CAPABILITIES](),    XML Tag: [XML_TAG_AD_EK_9F33_TERM_CAPS]().  |
| unsigned char[5] | **[AdditionalTerminalCapabilities_9F40](struct_e_m_v___c_t_l_s___a_p_p_l_i_d_a_t_a___e_k___s_t_r_u_c_t.md#variable-additionalterminalcapabilities-9f40)** <br>TempUpdate allowed: YES    Description: "Additional Terminal Capabilities" for this application, only 1st byte is effective    Availability bit: [INPUT_CTLS_APL_EK_9F40_0]()   TLV tag: [TAG_9F40_ADD_TRM_CAP](),    XML Tag: [XML_TAG_AD_EK_9F40_ADD_TERM_CAPS]().  |
| unsigned char[2 *EMV_CTLS_MAX_APP_VERS] | **[VersionNumber_9F09](struct_e_m_v___c_t_l_s___a_p_p_l_i_d_a_t_a___e_k___s_t_r_u_c_t.md#variable-versionnumber-9f09)** <br>TempUpdate allowed: NO    Description: Application chip version number    mandatory for [EMV_CTLS_SetAppliDataSchemeSpecific]()   Availability bit: [INPUT_CTLS_APL_EK_9F09_0]()   TLV tag: [TAG_9F09_TRM_APP_VERSION_NB](),    XML Tag: [XML_TAG_AD_EK_9F09_VERSION_NUMBER]().  |
| unsigned char[2] | **[MerchantCategoryCode_9F15](struct_e_m_v___c_t_l_s___a_p_p_l_i_d_a_t_a___e_k___s_t_r_u_c_t.md#variable-merchantcategorycode-9f15)** <br>TempUpdate allowed: NO    Description: Merchant category code    mandatory for [EMV_CTLS_SetAppliDataSchemeSpecific]()   Availability bit: [INPUT_CTLS_APL_EK_9F15_0]()   TLV tag: [TAG_9F15_MERCH_CATEG_CODE](),    XML Tag: [XML_TAG_AD_EK_9F15_MERCHANT_CATEGORY_CODE]().  |
| char[15+1] | **[MerchantIdentifier_9F16](struct_e_m_v___c_t_l_s___a_p_p_l_i_d_a_t_a___e_k___s_t_r_u_c_t.md#variable-merchantidentifier-9f16)** <br>TempUpdate allowed: NO    Description: Merchant Identifier    mandatory for [EMV_CTLS_SetAppliDataSchemeSpecific]()   Availability bit: [INPUT_CTLS_APL_EK_9F16_0]()   TLV tag: [TAG_9F16_MERCHANT_ID](),    XML Tag: [XML_TAG_AD_EK_9F16_MERCHANT_ID]().  |
| char[40+1] | **[MerchantNameAndLocation_9F4E](struct_e_m_v___c_t_l_s___a_p_p_l_i_d_a_t_a___e_k___s_t_r_u_c_t.md#variable-merchantnameandlocation-9f4e)** <br>TempUpdate allowed: NO    Description: Indicates the name and location of the merchant.    Availability bit: [INPUT_CTLS_APL_EK_9F4E_1]()   TLV tag: [TAG_9F4E_TAC_MERCHANTLOC](),    XML Tag: [XML_TAG_AD_EK_9F4E_MERCHANT_NAME_LOCATION]().  |
| unsigned char[6] | **[AcquirerIdentifier_9F01](struct_e_m_v___c_t_l_s___a_p_p_l_i_d_a_t_a___e_k___s_t_r_u_c_t.md#variable-acquireridentifier-9f01)** <br>TempUpdate allowed: NO    Description: Uniquely identifies the acquirer within each payment system.    Availability bit: [INPUT_CTLS_APL_EK_9F01_1]()   TLV tag: [TAG_9F01_ACQ_ID]()   XML Tag: [XML_TAG_AD_EK_9F01_ACQUIRER_ID]().  |
| unsigned char[4] | **[TerminalTransactionQualifier_9F66](struct_e_m_v___c_t_l_s___a_p_p_l_i_d_a_t_a___e_k___s_t_r_u_c_t.md#variable-terminaltransactionqualifier-9f66)** <br>TempUpdate allowed: YES    Description: Visa-defined Terminal Transaction Qualifiers    Availability bit: [INPUT_CTLS_APL_EK_9F66_2]()   TLV tag: [TAG_9F66_TTQ](),    XML Tag: [XML_TAG_AD_EK_9F66_TERM_TRX_QUALIFIER]().  |
| unsigned char[5] | **[AppFlowCap_DFAB31](struct_e_m_v___c_t_l_s___a_p_p_l_i_d_a_t_a___e_k___s_t_r_u_c_t.md#variable-appflowcap-dfab31)** <br>TempUpdate allowed: YES    Description: Configure special application characteristics, see [Application flow capabilities for EPAL]()   Availability bit: [INPUT_CTLS_APL_EK_DFAB31_1]()   TLV tag: [TAG_DFAB31_APP_FLOW_CAP](),    XML Tag: [XML_TAG_AD_EK_DFAB31_APP_FLOW_CAP]().  |
| unsigned char[6] | **[ContactlessFloorLimit_DFAB40](struct_e_m_v___c_t_l_s___a_p_p_l_i_d_a_t_a___e_k___s_t_r_u_c_t.md#variable-contactlessfloorlimit-dfab40)** <br>TempUpdate allowed: NO    Description: Reader Contactless Floor Limit (n12)    Use '9999999999' to disable.    Availability bit: [INPUT_CTLS_APL_EK_DFAB40_1]()   TLV tag: [TAG_DFAB40_CTLS_FLOOR_LIMIT](),    XML Tag: [XML_TAG_AD_EK_DFAB40_CTLS_FLOOR_LIMIT]().  |
| unsigned char[6] | **[ContactlessTransactionLimit_DFAB41](struct_e_m_v___c_t_l_s___a_p_p_l_i_d_a_t_a___e_k___s_t_r_u_c_t.md#variable-contactlesstransactionlimit-dfab41)** <br>TempUpdate allowed: NO    Description: Reader Contactless Transaction Limit (n12)    Use '9999999999' to disable.    Availability bit: [INPUT_CTLS_APL_EK_DFAB41_1]()   TLV tag: [TAG_DFAB41_CTLS_TRX_LIMIT](),    XML Tag: [XML_TAG_AD_EK_DFAB41_CTLS_TRX_LIMIT]().  |
| unsigned char[5] | **[TACDefault_DFAB43](struct_e_m_v___c_t_l_s___a_p_p_l_i_d_a_t_a___e_k___s_t_r_u_c_t.md#variable-tacdefault-dfab43)** <br>TempUpdate allowed: YES    Description: Terminal Action Code - Default    mandatory for [EMV_CTLS_SetAppliDataSchemeSpecific]()   Availability bit: [INPUT_CTLS_APL_EK_DFAB43_1]()   TLV tag: [TAG_DFAB43_TAC_DEFAULT](),    XML Tag: [XML_TAG_AD_EK_DFAB43_TAC_DEFAULT]().  |
| unsigned char[5] | **[TACDenial_DFAB44](struct_e_m_v___c_t_l_s___a_p_p_l_i_d_a_t_a___e_k___s_t_r_u_c_t.md#variable-tacdenial-dfab44)** <br>TempUpdate allowed: YES    Description: Terminal Action Code - Denial    mandatory for [EMV_CTLS_SetAppliDataSchemeSpecific]()   Availability bit: [INPUT_CTLS_APL_EK_DFAB44_1]()   TLV tag: [TAG_DFAB44_TAC_DENIAL](),    XML Tag: [XML_TAG_AD_EK_DFAB44_TAC_DENIAL]().  |
| unsigned char[5] | **[TACOnline_DFAB45](struct_e_m_v___c_t_l_s___a_p_p_l_i_d_a_t_a___e_k___s_t_r_u_c_t.md#variable-taconline-dfab45)** <br>TempUpdate allowed: YES    Description: Terminal Action Code - Online    mandatory for [EMV_CTLS_SetAppliDataSchemeSpecific]()   Availability bit: [INPUT_CTLS_APL_EK_DFAB45_1]()   TLV tag: [TAG_DFAB45_TAC_ONLINE](),    XML Tag: [XML_TAG_AD_EK_DFAB45_TAC_ONLINE]().  |
| unsigned char[6] | **[CtlsTransactionLimitCash_DFAB4A](struct_e_m_v___c_t_l_s___a_p_p_l_i_d_a_t_a___e_k___s_t_r_u_c_t.md#variable-ctlstransactionlimitcash-dfab4a)** <br>TempUpdate allowed: NO    Description: Reader Contactless Transaction Limit for cash and cashback transactions (n12)    Availability bit: [INPUT_CTLS_APL_EK_DFAB4A_2]()   TLV tag: [TAG_DFAB4A_CTLS_TRX_LIMIT_CASH](),    XML Tag: [XML_TAG_AD_EK_DFAB4A_CTLS_TRX_LIMIT_CASH]().  |

## Public Attributes Documentation

### variable IncludedData

```cpp
unsigned char[8] IncludedData;
```

Availability bits, see [Appli data scheme specific - Epal - Availability bits](). 

### variable TermIdent_9F1C

```cpp
unsigned char[8] TermIdent_9F1C;
```

TempUpdate allowed: YES    Description: Terminal Identification    mandatory for [EMV_CTLS_SetAppliDataSchemeSpecific]()   Availability bit: [INPUT_CTLS_APL_EK_9F1C_0]()   TLV tag: [TAG_9F1C_TRM_ID](),    XML Tag: [XML_TAG_AD_EK_9F1C_TERM_IDENT](). 

### variable TerminalCountryCode_9F1A

```cpp
unsigned char[2] TerminalCountryCode_9F1A;
```

TempUpdate allowed: YES    Description: "Terminal country code" (e.g. VISA Germany 0276)    Availability bit: [INPUT_CTLS_APL_EK_9F1A_0]()   TLV tag: [TAG_9F1A_TRM_COUNTRY_CODE](),    XML Tag: [XML_TAG_AD_EK_9F1A_TERM_COUNTRY_CODE](). 

### variable TerminalType_9F35

```cpp
unsigned char TerminalType_9F35;
```

TempUpdate allowed: YES    Description: Terminal type, possible values see [Terminaltypes (Tag 9F35)]())    mandatory for first call of [EMV_CTLS_SetTermData()]()   Availability bit: [INPUT_CTLS_APL_EK_9F35_0]()   TLV tag: [TAG_9F35_TRM_TYPE](),    XML Tag: [XML_TAG_AD_EK_9F35_TERM_TYPE](). 

### variable TerminalCapabilities_9F33

```cpp
unsigned char[3] TerminalCapabilities_9F33;
```

TempUpdate allowed: YES    Description: "Terminal Capabilities" for this application, for PayPass 3 the tags DF81xx, DF81yy, DF81zz are filled with these 3 byte, for VISA this is used for host compliancy only, for Amex in accordance with tag 9F6E,    Availability bit: [INPUT_CTLS_APL_EK_9F33_0]()   TLV tag: [TAG_9F33_TRM_CAPABILITIES](),    XML Tag: [XML_TAG_AD_EK_9F33_TERM_CAPS](). 

### variable AdditionalTerminalCapabilities_9F40

```cpp
unsigned char[5] AdditionalTerminalCapabilities_9F40;
```

TempUpdate allowed: YES    Description: "Additional Terminal Capabilities" for this application, only 1st byte is effective    Availability bit: [INPUT_CTLS_APL_EK_9F40_0]()   TLV tag: [TAG_9F40_ADD_TRM_CAP](),    XML Tag: [XML_TAG_AD_EK_9F40_ADD_TERM_CAPS](). 

### variable VersionNumber_9F09

```cpp
unsigned char[2 *EMV_CTLS_MAX_APP_VERS] VersionNumber_9F09;
```

TempUpdate allowed: NO    Description: Application chip version number    mandatory for [EMV_CTLS_SetAppliDataSchemeSpecific]()   Availability bit: [INPUT_CTLS_APL_EK_9F09_0]()   TLV tag: [TAG_9F09_TRM_APP_VERSION_NB](),    XML Tag: [XML_TAG_AD_EK_9F09_VERSION_NUMBER](). 

### variable MerchantCategoryCode_9F15

```cpp
unsigned char[2] MerchantCategoryCode_9F15;
```

TempUpdate allowed: NO    Description: Merchant category code    mandatory for [EMV_CTLS_SetAppliDataSchemeSpecific]()   Availability bit: [INPUT_CTLS_APL_EK_9F15_0]()   TLV tag: [TAG_9F15_MERCH_CATEG_CODE](),    XML Tag: [XML_TAG_AD_EK_9F15_MERCHANT_CATEGORY_CODE](). 

### variable MerchantIdentifier_9F16

```cpp
char[15+1] MerchantIdentifier_9F16;
```

TempUpdate allowed: NO    Description: Merchant Identifier    mandatory for [EMV_CTLS_SetAppliDataSchemeSpecific]()   Availability bit: [INPUT_CTLS_APL_EK_9F16_0]()   TLV tag: [TAG_9F16_MERCHANT_ID](),    XML Tag: [XML_TAG_AD_EK_9F16_MERCHANT_ID](). 

### variable MerchantNameAndLocation_9F4E

```cpp
char[40+1] MerchantNameAndLocation_9F4E;
```

TempUpdate allowed: NO    Description: Indicates the name and location of the merchant.    Availability bit: [INPUT_CTLS_APL_EK_9F4E_1]()   TLV tag: [TAG_9F4E_TAC_MERCHANTLOC](),    XML Tag: [XML_TAG_AD_EK_9F4E_MERCHANT_NAME_LOCATION](). 

### variable AcquirerIdentifier_9F01

```cpp
unsigned char[6] AcquirerIdentifier_9F01;
```

TempUpdate allowed: NO    Description: Uniquely identifies the acquirer within each payment system.    Availability bit: [INPUT_CTLS_APL_EK_9F01_1]()   TLV tag: [TAG_9F01_ACQ_ID]()   XML Tag: [XML_TAG_AD_EK_9F01_ACQUIRER_ID](). 

### variable TerminalTransactionQualifier_9F66

```cpp
unsigned char[4] TerminalTransactionQualifier_9F66;
```

TempUpdate allowed: YES    Description: Visa-defined Terminal Transaction Qualifiers    Availability bit: [INPUT_CTLS_APL_EK_9F66_2]()   TLV tag: [TAG_9F66_TTQ](),    XML Tag: [XML_TAG_AD_EK_9F66_TERM_TRX_QUALIFIER](). 

### variable AppFlowCap_DFAB31

```cpp
unsigned char[5] AppFlowCap_DFAB31;
```

TempUpdate allowed: YES    Description: Configure special application characteristics, see [Application flow capabilities for EPAL]()   Availability bit: [INPUT_CTLS_APL_EK_DFAB31_1]()   TLV tag: [TAG_DFAB31_APP_FLOW_CAP](),    XML Tag: [XML_TAG_AD_EK_DFAB31_APP_FLOW_CAP](). 

### variable ContactlessFloorLimit_DFAB40

```cpp
unsigned char[6] ContactlessFloorLimit_DFAB40;
```

TempUpdate allowed: NO    Description: Reader Contactless Floor Limit (n12)    Use '9999999999' to disable.    Availability bit: [INPUT_CTLS_APL_EK_DFAB40_1]()   TLV tag: [TAG_DFAB40_CTLS_FLOOR_LIMIT](),    XML Tag: [XML_TAG_AD_EK_DFAB40_CTLS_FLOOR_LIMIT](). 

### variable ContactlessTransactionLimit_DFAB41

```cpp
unsigned char[6] ContactlessTransactionLimit_DFAB41;
```

TempUpdate allowed: NO    Description: Reader Contactless Transaction Limit (n12)    Use '9999999999' to disable.    Availability bit: [INPUT_CTLS_APL_EK_DFAB41_1]()   TLV tag: [TAG_DFAB41_CTLS_TRX_LIMIT](),    XML Tag: [XML_TAG_AD_EK_DFAB41_CTLS_TRX_LIMIT](). 

### variable TACDefault_DFAB43

```cpp
unsigned char[5] TACDefault_DFAB43;
```

TempUpdate allowed: YES    Description: Terminal Action Code - Default    mandatory for [EMV_CTLS_SetAppliDataSchemeSpecific]()   Availability bit: [INPUT_CTLS_APL_EK_DFAB43_1]()   TLV tag: [TAG_DFAB43_TAC_DEFAULT](),    XML Tag: [XML_TAG_AD_EK_DFAB43_TAC_DEFAULT](). 

### variable TACDenial_DFAB44

```cpp
unsigned char[5] TACDenial_DFAB44;
```

TempUpdate allowed: YES    Description: Terminal Action Code - Denial    mandatory for [EMV_CTLS_SetAppliDataSchemeSpecific]()   Availability bit: [INPUT_CTLS_APL_EK_DFAB44_1]()   TLV tag: [TAG_DFAB44_TAC_DENIAL](),    XML Tag: [XML_TAG_AD_EK_DFAB44_TAC_DENIAL](). 

### variable TACOnline_DFAB45

```cpp
unsigned char[5] TACOnline_DFAB45;
```

TempUpdate allowed: YES    Description: Terminal Action Code - Online    mandatory for [EMV_CTLS_SetAppliDataSchemeSpecific]()   Availability bit: [INPUT_CTLS_APL_EK_DFAB45_1]()   TLV tag: [TAG_DFAB45_TAC_ONLINE](),    XML Tag: [XML_TAG_AD_EK_DFAB45_TAC_ONLINE](). 

### variable CtlsTransactionLimitCash_DFAB4A

```cpp
unsigned char[6] CtlsTransactionLimitCash_DFAB4A;
```

TempUpdate allowed: NO    Description: Reader Contactless Transaction Limit for cash and cashback transactions (n12)    Availability bit: [INPUT_CTLS_APL_EK_DFAB4A_2]()   TLV tag: [TAG_DFAB4A_CTLS_TRX_LIMIT_CASH](),    XML Tag: [XML_TAG_AD_EK_DFAB4A_CTLS_TRX_LIMIT_CASH](). 

-------------------------------

Updated on 2025-06-17 at 11:52:22 +0100