---
title: EMV_CTLS_APPLIDATA_AK_STRUCT
summary: Structure for configuration of one single application, AK specific part. See see Book C-4, Kernel 4 Specification at [EMVCo Homepage]. See EMV_CTLS_SetAppliDataSchemeSpecific()

---

# EMV_CTLS_APPLIDATA_AK_STRUCT

**Module:** **[Configuration](group___a_d_k___c_o_n_f_i_g_u_r_a_t_i_o_n.md)** **/** **[Application data](group___d_e_f___c_o_n_f___a_p_p_l_i.md)**



Structure for configuration of one single application, AK specific part. See see Book C-4, Kernel 4 Specification at [[EMVCo Homepage]](http://www.emvco.com/). See [EMV_CTLS_SetAppliDataSchemeSpecific()]()


`#include <EMV_CTLS_Interface.h>`

## Public Attributes

|                | Name           |
| -------------- | -------------- |
| unsigned char[8] | **[IncludedData](struct_e_m_v___c_t_l_s___a_p_p_l_i_d_a_t_a___a_k___s_t_r_u_c_t.md#variable-includeddata)** <br>Availability bits, see [Appli data scheme specific - Amex - Availability bits]().  |
| unsigned char[8] | **[TermIdent_9F1C](struct_e_m_v___c_t_l_s___a_p_p_l_i_d_a_t_a___a_k___s_t_r_u_c_t.md#variable-termident-9f1c)** <br>TempUpdate allowed: YES    Description: Terminal Identification    mandatory for [EMV_CTLS_SetAppliDataSchemeSpecific]()   Availability bit: [INPUT_CTLS_APL_AK_9F1C_0]()   TLV tag: [TAG_9F1C_TRM_ID](),    XML Tag: [XML_TAG_AD_AK_9F1C_TERM_IDENT]().  |
| unsigned char[2] | **[TerminalCountryCode_9F1A](struct_e_m_v___c_t_l_s___a_p_p_l_i_d_a_t_a___a_k___s_t_r_u_c_t.md#variable-terminalcountrycode-9f1a)** <br>TempUpdate allowed: YES    Description: "Terminal country code" (e.g. VISA Germany 0276)    Availability bit: [INPUT_CTLS_APL_AK_9F1A_0]()   TLV tag: [TAG_9F1A_TRM_COUNTRY_CODE](),    XML Tag: [XML_TAG_AD_AK_9F1A_TERM_COUNTRY_CODE]().  |
| unsigned char | **[TerminalType_9F35](struct_e_m_v___c_t_l_s___a_p_p_l_i_d_a_t_a___a_k___s_t_r_u_c_t.md#variable-terminaltype-9f35)** <br>TempUpdate allowed: YES    Description: Terminal type, possible values see [Terminaltypes (Tag 9F35)]())    mandatory for first call of [EMV_CTLS_SetTermData()]()   Availability bit: [INPUT_CTLS_APL_AK_9F35_0]()   TLV tag: [TAG_9F35_TRM_TYPE](),    XML Tag: [XML_TAG_AD_AK_9F35_TERM_TYPE]().  |
| unsigned char | **[AmexContactlessReaderCapabilities_9F6D](struct_e_m_v___c_t_l_s___a_p_p_l_i_d_a_t_a___a_k___s_t_r_u_c_t.md#variable-amexcontactlessreadercapabilities-9f6d)** <br>TempUpdate allowed: YES    Description: Special terminal capabilities of Expresspay, Amex tag 9F6D, indicating the version of Amex spec used for CTLS    Availability bit: [INPUT_CTLS_APL_AK_9F6D_0]()   TLV tag: [TAG_9F6D_AMEX_CAPABILITIES](),    XML Tag: [XML_TAG_AD_AK_9F6D_AMEX_CTLS_READER_CAPS]().  |
| unsigned char[4] | **[AmexTerminalTransactionCapabilities_9F6E](struct_e_m_v___c_t_l_s___a_p_p_l_i_d_a_t_a___a_k___s_t_r_u_c_t.md#variable-amexterminaltransactioncapabilities-9f6e)** <br>TempUpdate allowed: YES    Description: Special enhanced reader capabilities of Expresspay, Amex tag 9F6E. CV is performed both above and below the floor limit but there are different procedures for the kernel to follow in each case. The kernel no longer uses byte 2 of tag 9F33 to determine supported CV methods because byte 2 of tag 9F6E is now used instead. However only 1 value is required for tag 9F6E because the kernel itself modifies this bitmap depending if the CV limit is exceeded or not. Only 1 value for tag 9F33 is required because the kernel still uses byte 3 of this tag to determine supported DA methods    Availability bit: [INPUT_CTLS_APL_AK_9F6E_0]()   TLV tag: [TAG_9F6E_AMEX_ENHANCED_CAPABILITIES](),    XML Tag: [XML_TAG_AD_AK_9F6E_AMEX_TERM_TRX_CAPS]().  |
| unsigned char[3] | **[TerminalCapabilities_9F33](struct_e_m_v___c_t_l_s___a_p_p_l_i_d_a_t_a___a_k___s_t_r_u_c_t.md#variable-terminalcapabilities-9f33)** <br>TempUpdate allowed: YES    Description: "Terminal Capabilities" for this application, for PayPass 3 the tags DF81xx, DF81yy, DF81zz are filled with these 3 byte, for VISA this is used for host compliancy only, for Amex in accordance with tag 9F6E,    Availability bit: [INPUT_CTLS_APL_AK_9F33_0]()   TLV tag: [TAG_9F33_TRM_CAPABILITIES](),    XML Tag: [XML_TAG_AD_AK_9F33_TERM_CAPS]().  |
| unsigned char[5] | **[AdditionalTerminalCapabilities_9F40](struct_e_m_v___c_t_l_s___a_p_p_l_i_d_a_t_a___a_k___s_t_r_u_c_t.md#variable-additionalterminalcapabilities-9f40)** <br>TempUpdate allowed: YES    Description: "Additional Terminal Capabilities" for this application, only 1st byte is effective    Availability bit: [INPUT_CTLS_APL_AK_9F40_0]()   TLV tag: [TAG_9F40_ADD_TRM_CAP](),    XML Tag: [XML_TAG_AD_AK_9F40_ADD_TERM_CAPS]().  |
| unsigned char[2 *EMV_CTLS_MAX_APP_VERS] | **[VersionNumber_9F09](struct_e_m_v___c_t_l_s___a_p_p_l_i_d_a_t_a___a_k___s_t_r_u_c_t.md#variable-versionnumber-9f09)** <br>TempUpdate allowed: NO    Description: Application chip version number    mandatory for [EMV_CTLS_SetAppliDataSchemeSpecific]()   Availability bit: [INPUT_CTLS_APL_AK_9F09_0]()   TLV tag: [TAG_9F09_TRM_APP_VERSION_NB](),    XML Tag: [XML_TAG_AD_AK_9F09_VERSION_NUMBER]().  |
| unsigned char[2] | **[MerchantCategoryCode_9F15](struct_e_m_v___c_t_l_s___a_p_p_l_i_d_a_t_a___a_k___s_t_r_u_c_t.md#variable-merchantcategorycode-9f15)** <br>TempUpdate allowed: NO    Description: Merchant category code    mandatory for [EMV_CTLS_SetAppliDataSchemeSpecific]()   Availability bit: [INPUT_CTLS_APL_AK_9F15_1]()   TLV tag: [TAG_9F15_MERCH_CATEG_CODE](),    XML Tag: [XML_TAG_AD_AK_9F15_MERCHANT_CATEGORY_CODE]().  |
| char[15+1] | **[MerchantIdentifier_9F16](struct_e_m_v___c_t_l_s___a_p_p_l_i_d_a_t_a___a_k___s_t_r_u_c_t.md#variable-merchantidentifier-9f16)** <br>TempUpdate allowed: NO    Description: Merchant Identifier    mandatory for [EMV_CTLS_SetAppliDataSchemeSpecific]()   Availability bit: [INPUT_CTLS_APL_AK_9F16_1]()   TLV tag: [TAG_9F16_MERCHANT_ID](),    XML Tag: [XML_TAG_AD_AK_9F16_MERCHANT_ID]().  |
| char[40+1] | **[MerchantNameAndLocation_9F4E](struct_e_m_v___c_t_l_s___a_p_p_l_i_d_a_t_a___a_k___s_t_r_u_c_t.md#variable-merchantnameandlocation-9f4e)** <br>TempUpdate allowed: NO    Description: Indicates the name and location of the merchant.    Availability bit: [INPUT_CTLS_APL_AK_9F4E_1]()   TLV tag: [TAG_9F4E_TAC_MERCHANTLOC](),    XML Tag: [XML_TAG_AD_AK_9F4E_MERCHANT_NAME_LOCATION]().  |
| unsigned char[6] | **[AcquirerIdentifier_9F01](struct_e_m_v___c_t_l_s___a_p_p_l_i_d_a_t_a___a_k___s_t_r_u_c_t.md#variable-acquireridentifier-9f01)** <br>TempUpdate allowed: NO    Description: Uniquely identifies the acquirer within each payment system.    Availability bit: [INPUT_CTLS_APL_AK_9F01_1]()   TLV tag: [TAG_9F01_ACQ_ID]()   XML Tag: [XML_TAG_AD_AK_9F01_ACQUIRER_ID]().  |
| unsigned char | **[TecSupport_DFAB30](struct_e_m_v___c_t_l_s___a_p_p_l_i_d_a_t_a___a_k___s_t_r_u_c_t.md#variable-tecsupport-dfab30)** <br>TempUpdate allowed: NO    Description: Specifies supported technologies.    See [technologies used in TecSupport_DFAB30]()   Availability bit: [INPUT_CTLS_APL_AK_DFAB30_1]()   TLV tag: [TAG_DFAB30_TEC_SUPPORT]()   XML Tag: [XML_TAG_AD_AK_DFAB30_TEC_SUPPORT]().  |
| unsigned char[5] | **[AppFlowCap_DFAB31](struct_e_m_v___c_t_l_s___a_p_p_l_i_d_a_t_a___a_k___s_t_r_u_c_t.md#variable-appflowcap-dfab31)** <br>TempUpdate allowed: YES    Description: Configure special application characteristics, see [Application flow capabilities for ExpressPay (Amex)]()   Availability bit: [INPUT_CTLS_APL_AK_DFAB31_1]()   TLV tag: [TAG_DFAB31_APP_FLOW_CAP](),    XML Tag: [XML_TAG_AD_AK_DFAB31_APP_FLOW_CAP]().  |
| unsigned char[6] | **[ContactlessFloorLimit_DFAB40](struct_e_m_v___c_t_l_s___a_p_p_l_i_d_a_t_a___a_k___s_t_r_u_c_t.md#variable-contactlessfloorlimit-dfab40)** <br>TempUpdate allowed: NO    Description: Reader Contactless Floor Limit (n12)    Use '999999999999' to disable.    Availability bit: [INPUT_CTLS_APL_AK_DFAB40_1]()   TLV tag: [TAG_DFAB40_CTLS_FLOOR_LIMIT](),    XML Tag: [XML_TAG_AD_AK_DFAB40_CTLS_FLOOR_LIMIT]().  |
| unsigned char[6] | **[ContactlessTransactionLimit_DFAB41](struct_e_m_v___c_t_l_s___a_p_p_l_i_d_a_t_a___a_k___s_t_r_u_c_t.md#variable-contactlesstransactionlimit-dfab41)** <br>TempUpdate allowed: NO    Description: Reader Contactless Transaction Limit (n12)    Use '999999999999' to disable.    Availability bit: [INPUT_CTLS_APL_AK_DFAB41_1]()   TLV tag: [TAG_DFAB41_CTLS_TRX_LIMIT](),    XML Tag: [XML_TAG_AD_AK_DFAB41_CTLS_TRX_LIMIT]().  |
| unsigned char[6] | **[ContactlessCVMRequiredLimit_DFAB42](struct_e_m_v___c_t_l_s___a_p_p_l_i_d_a_t_a___a_k___s_t_r_u_c_t.md#variable-contactlesscvmrequiredlimit-dfab42)** <br>TempUpdate allowed: NO    Description: Reader Contactless CVM Required Limit (n12)    Use '999999999999' to disable.    Availability bit: [INPUT_CTLS_APL_AK_DFAB42_2]()   TLV tag: [TAG_DFAB42_CTLS_CVM_REQ_LIMIT](),    XML Tag: [XML_TAG_AD_AK_DFAB42_CTLS_CVM_REQ_LIMIT]().  |
| unsigned char[5] | **[TACDefault_DFAB43](struct_e_m_v___c_t_l_s___a_p_p_l_i_d_a_t_a___a_k___s_t_r_u_c_t.md#variable-tacdefault-dfab43)** <br>TempUpdate allowed: YES    Description: Terminal Action Code - Default    mandatory for [EMV_CTLS_SetAppliDataSchemeSpecific]()   Availability bit: [INPUT_CTLS_APL_AK_DFAB43_2]()   TLV tag: [TAG_DFAB43_TAC_DEFAULT](),    XML Tag: [XML_TAG_AD_AK_DFAB43_TAC_DEFAULT]().  |
| unsigned char[5] | **[TACDenial_DFAB44](struct_e_m_v___c_t_l_s___a_p_p_l_i_d_a_t_a___a_k___s_t_r_u_c_t.md#variable-tacdenial-dfab44)** <br>TempUpdate allowed: YES    Description: Terminal Action Code - Denial    mandatory for [EMV_CTLS_SetAppliDataSchemeSpecific]()   Availability bit: [INPUT_CTLS_APL_AK_DFAB44_2]()   TLV tag: [TAG_DFAB44_TAC_DENIAL](),    XML Tag: [XML_TAG_AD_AK_DFAB44_TAC_DENIAL]().  |
| unsigned char[5] | **[TACOnline_DFAB45](struct_e_m_v___c_t_l_s___a_p_p_l_i_d_a_t_a___a_k___s_t_r_u_c_t.md#variable-taconline-dfab45)** <br>TempUpdate allowed: YES    Description: Terminal Action Code - Online    mandatory for [EMV_CTLS_SetAppliDataSchemeSpecific]()   Availability bit: [INPUT_CTLS_APL_AK_DFAB45_2]()   TLV tag: [TAG_DFAB45_TAC_ONLINE](),    XML Tag: [XML_TAG_AD_AK_DFAB45_TAC_ONLINE]().  |
| [EMV_CTLS_AK_DRL_TYPE](group___d_e_f___c_o_n_f___a_p_p_l_i.md#typedef-emv-ctls-ak-drl-type) | **[AmexDRLParams_FFAB01](struct_e_m_v___c_t_l_s___a_p_p_l_i_d_a_t_a___a_k___s_t_r_u_c_t.md#variable-amexdrlparams-ffab01)** <br>TempUpdate allowed: NO    Description: Dynamic Reader Limits table    Availability bit: [INPUT_CTLS_APL_AK_FFAB01_2]()   TLV tag: [TAG_FFAB01_DRL_PARAMETER](),    XML Tag: [XML_TAG_AD_AK_FFAB01_AMEX_DRL_PARAMS]().  |
| unsigned char | **[UnpredictableNumberRange_DFAB52](struct_e_m_v___c_t_l_s___a_p_p_l_i_d_a_t_a___a_k___s_t_r_u_c_t.md#variable-unpredictablenumberrange-dfab52)** <br>TempUpdate allowed: YES    Description: Limit for MSR unpredictable nummer, 60 .. 255, default value 60. Availability bit: [INPUT_CTLS_APL_AK_DFAB52_2]()   TLV tag: [TAG_DFAB52_AMEX_UN_RANGE](),    XML Tag: [XML_TAG_AD_AK_DFAB52_UN_RANGE]().  |

## Public Attributes Documentation

### variable IncludedData

```cpp
unsigned char[8] IncludedData;
```

Availability bits, see [Appli data scheme specific - Amex - Availability bits](). 

### variable TermIdent_9F1C

```cpp
unsigned char[8] TermIdent_9F1C;
```

TempUpdate allowed: YES    Description: Terminal Identification    mandatory for [EMV_CTLS_SetAppliDataSchemeSpecific]()   Availability bit: [INPUT_CTLS_APL_AK_9F1C_0]()   TLV tag: [TAG_9F1C_TRM_ID](),    XML Tag: [XML_TAG_AD_AK_9F1C_TERM_IDENT](). 

### variable TerminalCountryCode_9F1A

```cpp
unsigned char[2] TerminalCountryCode_9F1A;
```

TempUpdate allowed: YES    Description: "Terminal country code" (e.g. VISA Germany 0276)    Availability bit: [INPUT_CTLS_APL_AK_9F1A_0]()   TLV tag: [TAG_9F1A_TRM_COUNTRY_CODE](),    XML Tag: [XML_TAG_AD_AK_9F1A_TERM_COUNTRY_CODE](). 

### variable TerminalType_9F35

```cpp
unsigned char TerminalType_9F35;
```

TempUpdate allowed: YES    Description: Terminal type, possible values see [Terminaltypes (Tag 9F35)]())    mandatory for first call of [EMV_CTLS_SetTermData()]()   Availability bit: [INPUT_CTLS_APL_AK_9F35_0]()   TLV tag: [TAG_9F35_TRM_TYPE](),    XML Tag: [XML_TAG_AD_AK_9F35_TERM_TYPE](). 

### variable AmexContactlessReaderCapabilities_9F6D

```cpp
unsigned char AmexContactlessReaderCapabilities_9F6D;
```

TempUpdate allowed: YES    Description: Special terminal capabilities of Expresspay, Amex tag 9F6D, indicating the version of Amex spec used for CTLS    Availability bit: [INPUT_CTLS_APL_AK_9F6D_0]()   TLV tag: [TAG_9F6D_AMEX_CAPABILITIES](),    XML Tag: [XML_TAG_AD_AK_9F6D_AMEX_CTLS_READER_CAPS](). 

### variable AmexTerminalTransactionCapabilities_9F6E

```cpp
unsigned char[4] AmexTerminalTransactionCapabilities_9F6E;
```

TempUpdate allowed: YES    Description: Special enhanced reader capabilities of Expresspay, Amex tag 9F6E. CV is performed both above and below the floor limit but there are different procedures for the kernel to follow in each case. The kernel no longer uses byte 2 of tag 9F33 to determine supported CV methods because byte 2 of tag 9F6E is now used instead. However only 1 value is required for tag 9F6E because the kernel itself modifies this bitmap depending if the CV limit is exceeded or not. Only 1 value for tag 9F33 is required because the kernel still uses byte 3 of this tag to determine supported DA methods    Availability bit: [INPUT_CTLS_APL_AK_9F6E_0]()   TLV tag: [TAG_9F6E_AMEX_ENHANCED_CAPABILITIES](),    XML Tag: [XML_TAG_AD_AK_9F6E_AMEX_TERM_TRX_CAPS](). 

### variable TerminalCapabilities_9F33

```cpp
unsigned char[3] TerminalCapabilities_9F33;
```

TempUpdate allowed: YES    Description: "Terminal Capabilities" for this application, for PayPass 3 the tags DF81xx, DF81yy, DF81zz are filled with these 3 byte, for VISA this is used for host compliancy only, for Amex in accordance with tag 9F6E,    Availability bit: [INPUT_CTLS_APL_AK_9F33_0]()   TLV tag: [TAG_9F33_TRM_CAPABILITIES](),    XML Tag: [XML_TAG_AD_AK_9F33_TERM_CAPS](). 

### variable AdditionalTerminalCapabilities_9F40

```cpp
unsigned char[5] AdditionalTerminalCapabilities_9F40;
```

TempUpdate allowed: YES    Description: "Additional Terminal Capabilities" for this application, only 1st byte is effective    Availability bit: [INPUT_CTLS_APL_AK_9F40_0]()   TLV tag: [TAG_9F40_ADD_TRM_CAP](),    XML Tag: [XML_TAG_AD_AK_9F40_ADD_TERM_CAPS](). 

### variable VersionNumber_9F09

```cpp
unsigned char[2 *EMV_CTLS_MAX_APP_VERS] VersionNumber_9F09;
```

TempUpdate allowed: NO    Description: Application chip version number    mandatory for [EMV_CTLS_SetAppliDataSchemeSpecific]()   Availability bit: [INPUT_CTLS_APL_AK_9F09_0]()   TLV tag: [TAG_9F09_TRM_APP_VERSION_NB](),    XML Tag: [XML_TAG_AD_AK_9F09_VERSION_NUMBER](). 

### variable MerchantCategoryCode_9F15

```cpp
unsigned char[2] MerchantCategoryCode_9F15;
```

TempUpdate allowed: NO    Description: Merchant category code    mandatory for [EMV_CTLS_SetAppliDataSchemeSpecific]()   Availability bit: [INPUT_CTLS_APL_AK_9F15_1]()   TLV tag: [TAG_9F15_MERCH_CATEG_CODE](),    XML Tag: [XML_TAG_AD_AK_9F15_MERCHANT_CATEGORY_CODE](). 

### variable MerchantIdentifier_9F16

```cpp
char[15+1] MerchantIdentifier_9F16;
```

TempUpdate allowed: NO    Description: Merchant Identifier    mandatory for [EMV_CTLS_SetAppliDataSchemeSpecific]()   Availability bit: [INPUT_CTLS_APL_AK_9F16_1]()   TLV tag: [TAG_9F16_MERCHANT_ID](),    XML Tag: [XML_TAG_AD_AK_9F16_MERCHANT_ID](). 

### variable MerchantNameAndLocation_9F4E

```cpp
char[40+1] MerchantNameAndLocation_9F4E;
```

TempUpdate allowed: NO    Description: Indicates the name and location of the merchant.    Availability bit: [INPUT_CTLS_APL_AK_9F4E_1]()   TLV tag: [TAG_9F4E_TAC_MERCHANTLOC](),    XML Tag: [XML_TAG_AD_AK_9F4E_MERCHANT_NAME_LOCATION](). 

### variable AcquirerIdentifier_9F01

```cpp
unsigned char[6] AcquirerIdentifier_9F01;
```

TempUpdate allowed: NO    Description: Uniquely identifies the acquirer within each payment system.    Availability bit: [INPUT_CTLS_APL_AK_9F01_1]()   TLV tag: [TAG_9F01_ACQ_ID]()   XML Tag: [XML_TAG_AD_AK_9F01_ACQUIRER_ID](). 

### variable TecSupport_DFAB30

```cpp
unsigned char TecSupport_DFAB30;
```

TempUpdate allowed: NO    Description: Specifies supported technologies.    See [technologies used in TecSupport_DFAB30]()   Availability bit: [INPUT_CTLS_APL_AK_DFAB30_1]()   TLV tag: [TAG_DFAB30_TEC_SUPPORT]()   XML Tag: [XML_TAG_AD_AK_DFAB30_TEC_SUPPORT](). 

### variable AppFlowCap_DFAB31

```cpp
unsigned char[5] AppFlowCap_DFAB31;
```

TempUpdate allowed: YES    Description: Configure special application characteristics, see [Application flow capabilities for ExpressPay (Amex)]()   Availability bit: [INPUT_CTLS_APL_AK_DFAB31_1]()   TLV tag: [TAG_DFAB31_APP_FLOW_CAP](),    XML Tag: [XML_TAG_AD_AK_DFAB31_APP_FLOW_CAP](). 

### variable ContactlessFloorLimit_DFAB40

```cpp
unsigned char[6] ContactlessFloorLimit_DFAB40;
```

TempUpdate allowed: NO    Description: Reader Contactless Floor Limit (n12)    Use '999999999999' to disable.    Availability bit: [INPUT_CTLS_APL_AK_DFAB40_1]()   TLV tag: [TAG_DFAB40_CTLS_FLOOR_LIMIT](),    XML Tag: [XML_TAG_AD_AK_DFAB40_CTLS_FLOOR_LIMIT](). 

### variable ContactlessTransactionLimit_DFAB41

```cpp
unsigned char[6] ContactlessTransactionLimit_DFAB41;
```

TempUpdate allowed: NO    Description: Reader Contactless Transaction Limit (n12)    Use '999999999999' to disable.    Availability bit: [INPUT_CTLS_APL_AK_DFAB41_1]()   TLV tag: [TAG_DFAB41_CTLS_TRX_LIMIT](),    XML Tag: [XML_TAG_AD_AK_DFAB41_CTLS_TRX_LIMIT](). 

### variable ContactlessCVMRequiredLimit_DFAB42

```cpp
unsigned char[6] ContactlessCVMRequiredLimit_DFAB42;
```

TempUpdate allowed: NO    Description: Reader Contactless CVM Required Limit (n12)    Use '999999999999' to disable.    Availability bit: [INPUT_CTLS_APL_AK_DFAB42_2]()   TLV tag: [TAG_DFAB42_CTLS_CVM_REQ_LIMIT](),    XML Tag: [XML_TAG_AD_AK_DFAB42_CTLS_CVM_REQ_LIMIT](). 

### variable TACDefault_DFAB43

```cpp
unsigned char[5] TACDefault_DFAB43;
```

TempUpdate allowed: YES    Description: Terminal Action Code - Default    mandatory for [EMV_CTLS_SetAppliDataSchemeSpecific]()   Availability bit: [INPUT_CTLS_APL_AK_DFAB43_2]()   TLV tag: [TAG_DFAB43_TAC_DEFAULT](),    XML Tag: [XML_TAG_AD_AK_DFAB43_TAC_DEFAULT](). 

### variable TACDenial_DFAB44

```cpp
unsigned char[5] TACDenial_DFAB44;
```

TempUpdate allowed: YES    Description: Terminal Action Code - Denial    mandatory for [EMV_CTLS_SetAppliDataSchemeSpecific]()   Availability bit: [INPUT_CTLS_APL_AK_DFAB44_2]()   TLV tag: [TAG_DFAB44_TAC_DENIAL](),    XML Tag: [XML_TAG_AD_AK_DFAB44_TAC_DENIAL](). 

### variable TACOnline_DFAB45

```cpp
unsigned char[5] TACOnline_DFAB45;
```

TempUpdate allowed: YES    Description: Terminal Action Code - Online    mandatory for [EMV_CTLS_SetAppliDataSchemeSpecific]()   Availability bit: [INPUT_CTLS_APL_AK_DFAB45_2]()   TLV tag: [TAG_DFAB45_TAC_ONLINE](),    XML Tag: [XML_TAG_AD_AK_DFAB45_TAC_ONLINE](). 

### variable AmexDRLParams_FFAB01

```cpp
EMV_CTLS_AK_DRL_TYPE AmexDRLParams_FFAB01;
```

TempUpdate allowed: NO    Description: Dynamic Reader Limits table    Availability bit: [INPUT_CTLS_APL_AK_FFAB01_2]()   TLV tag: [TAG_FFAB01_DRL_PARAMETER](),    XML Tag: [XML_TAG_AD_AK_FFAB01_AMEX_DRL_PARAMS](). 

### variable UnpredictableNumberRange_DFAB52

```cpp
unsigned char UnpredictableNumberRange_DFAB52;
```

TempUpdate allowed: YES    Description: Limit for MSR unpredictable nummer, 60 .. 255, default value 60. Availability bit: [INPUT_CTLS_APL_AK_DFAB52_2]()   TLV tag: [TAG_DFAB52_AMEX_UN_RANGE](),    XML Tag: [XML_TAG_AD_AK_DFAB52_UN_RANGE](). 

-------------------------------

Updated on 2025-06-17 at 11:52:22 +0100