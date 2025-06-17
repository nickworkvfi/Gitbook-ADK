---
title: EMV_CTLS_APPLIDATA_IK_STRUCT
summary: Structure for configuration of one single application, IK specific part. See EMV_CTLS_SetAppliDataSchemeSpecific()

---

# EMV_CTLS_APPLIDATA_IK_STRUCT

**Module:** **[Configuration](group___a_d_k___c_o_n_f_i_g_u_r_a_t_i_o_n.md)** **/** **[Application data](group___d_e_f___c_o_n_f___a_p_p_l_i.md)**



Structure for configuration of one single application, IK specific part. See [EMV_CTLS_SetAppliDataSchemeSpecific()]()


`#include <EMV_CTLS_Interface.h>`

## Public Attributes

|                | Name           |
| -------------- | -------------- |
| unsigned char[8] | **[IncludedData](struct_e_m_v___c_t_l_s___a_p_p_l_i_d_a_t_a___i_k___s_t_r_u_c_t.md#variable-includeddata)** <br>Availability bits, see [Appli data scheme specific - Interac - Availability bits]().  |
| unsigned char[8] | **[TermIdent_9F1C](struct_e_m_v___c_t_l_s___a_p_p_l_i_d_a_t_a___i_k___s_t_r_u_c_t.md#variable-termident-9f1c)** <br>TempUpdate allowed: YES    Description: Terminal Identification    mandatory for [EMV_CTLS_SetAppliDataSchemeSpecific]()   Availability bit: [INPUT_CTLS_APL_IK_9F1C_0]()   TLV tag: [TAG_9F1C_TRM_ID](),    XML Tag: [XML_TAG_AD_IK_9F1C_TERM_IDENT]().  |
| unsigned char[2] | **[TerminalCountryCode_9F1A](struct_e_m_v___c_t_l_s___a_p_p_l_i_d_a_t_a___i_k___s_t_r_u_c_t.md#variable-terminalcountrycode-9f1a)** <br>TempUpdate allowed: YES    Description: "Terminal country code" (e.g. VISA Germany 0276)    Availability bit: [INPUT_CTLS_APL_IK_9F1A_0]()   TLV tag: [TAG_9F1A_TRM_COUNTRY_CODE](),    XML Tag: [XML_TAG_AD_IK_9F1A_TERM_COUNTRY_CODE]().  |
| unsigned char | **[TerminalType_9F35](struct_e_m_v___c_t_l_s___a_p_p_l_i_d_a_t_a___i_k___s_t_r_u_c_t.md#variable-terminaltype-9f35)** <br>TempUpdate allowed: YES    Description: Terminal type, possible values see [Terminaltypes (Tag 9F35)]())    mandatory for first call of [EMV_CTLS_SetTermData()]()   Availability bit: [INPUT_CTLS_APL_IK_9F35_0]()   TLV tag: [TAG_9F35_TRM_TYPE](),    XML Tag: [XML_TAG_AD_IK_9F35_TERM_TYPE]().  |
| unsigned char[3] | **[TerminalCapabilities_9F33](struct_e_m_v___c_t_l_s___a_p_p_l_i_d_a_t_a___i_k___s_t_r_u_c_t.md#variable-terminalcapabilities-9f33)** <br>TempUpdate allowed: YES    Description: "terminal capabilities" for this application, for PayPass 3 the tags DF81xx, DF81yy, DF81zz are filled with these 3 byte, for VISA this is used for host compliancy only, for Amex in accordance with tag 9F6E,    Availability bit: [INPUT_CTLS_APL_IK_9F33_0]()   TLV tag: [TAG_9F33_TRM_CAPABILITIES](),    XML Tag: [XML_TAG_AD_IK_9F33_TERM_CAPS]().  |
| unsigned char[5] | **[AdditionalTerminalCapabilities_9F40](struct_e_m_v___c_t_l_s___a_p_p_l_i_d_a_t_a___i_k___s_t_r_u_c_t.md#variable-additionalterminalcapabilities-9f40)** <br>TempUpdate allowed: YES    Description: "additional terminal capabilities" for this application, only 1st byte is effective    Availability bit: [INPUT_CTLS_APL_IK_9F40_0]()   TLV tag: [TAG_9F40_ADD_TRM_CAP](),    XML Tag: [XML_TAG_AD_IK_9F40_ADD_TERM_CAPS]().  |
| unsigned char[6] | **[ContactlessFloorLimit_9F5F](struct_e_m_v___c_t_l_s___a_p_p_l_i_d_a_t_a___i_k___s_t_r_u_c_t.md#variable-contactlessfloorlimit-9f5f)** <br>TempUpdate allowed: NO    Description: Reader Contactless Floor Limit (n12)    Use '9999999999' to disable.    Availability bit: [INPUT_CTLS_APL_IK_9F5F_0]()   TLV tag: [TAG_9F5F_READER_CTLS_FLOOR_LIMIT](),    XML Tag: [XML_TAG_AD_IK_9F5F_CTLS_FLOOR_LIMIT]().  |
| unsigned char | **[MerchantTypeIndicator_9F58](struct_e_m_v___c_t_l_s___a_p_p_l_i_d_a_t_a___i_k___s_t_r_u_c_t.md#variable-merchanttypeindicator-9f58)** <br>TempUpdate allowed: NO    Description: Merchant Type Indicator (MTI)    Info: VFI reader tag 9F58    Availability bit: [INPUT_CTLS_APL_IK_9F58_0]()   TLV tag: [TAG_9F58_MERCH_TYPE_INDICATOR](),    XML Tag: [XML_TAG_AD_IK_9F58_MERCHANT_TYPE_INDICATOR]().  |
| unsigned char[3] | **[TerminalTransactionInformation_9F59](struct_e_m_v___c_t_l_s___a_p_p_l_i_d_a_t_a___i_k___s_t_r_u_c_t.md#variable-terminaltransactioninformation-9f59)** <br>TempUpdate allowed: NO    Description: Terminal Transaction Information (TTI)    Info: VFI reader tag 9F59    Default value: DC 87 00    Availability bit: [INPUT_CTLS_APL_IK_9F59_0]()   TLV tag: [TAG_9F59_TERM_TRANS_INFO](),    XML Tag: [XML_TAG_AD_IK_9F59_TERM_TRX_INFORMATION]().  |
| unsigned char | **[TerminalTransactionType_9F5A](struct_e_m_v___c_t_l_s___a_p_p_l_i_d_a_t_a___i_k___s_t_r_u_c_t.md#variable-terminaltransactiontype-9f5a)** <br>TempUpdate allowed: NO    Description: Terminal Transaction Type (TTT)    Info: VFI reader tag 9F5A    Availability bit: [INPUT_CTLS_APL_IK_9F5A_1]()   TLV tag: [TAG_9F5A_TERM_TRANS_TYPE](),    XML Tag: [XML_TAG_AD_IK_9F5A_TERM_TRX_TYPE]().  |
| unsigned char[2] | **[TerminalOptionStatus_9F5E](struct_e_m_v___c_t_l_s___a_p_p_l_i_d_a_t_a___i_k___s_t_r_u_c_t.md#variable-terminaloptionstatus-9f5e)** <br>TempUpdate allowed: YES    Description: Terminal option status (TOS)    Info: VFI reader tag: 9F5E    Availability bit: [INPUT_CTLS_APL_IK_9F5E_1]()   TLV tag: [TAG_9F5E_TERM_OPTION_STATUS](),    XML Tag: [XML_TAG_AD_IK_9F5E_TERM_OPTION_STATUS]().  |
| unsigned char[6] | **[ReceiptRequiredLimit_9F5D](struct_e_m_v___c_t_l_s___a_p_p_l_i_d_a_t_a___i_k___s_t_r_u_c_t.md#variable-receiptrequiredlimit-9f5d)** <br>TempUpdate allowed: YES    Description: Interac Terminal CTLS Receipt required limit (numeric)    Availability bit: [INPUT_CTLS_APL_IK_9F5D_1]()   TLV tag: [TAG_9F5D_TERM_CTLS_RECEIPT_REQUIRED_LIMIT](),    XML Tag: [XML_TAG_AD_IK_9F5D_RECEIPT_REQ_LIMIT]().  |
| unsigned char | **[TryAgainLimit_DF6D](struct_e_m_v___c_t_l_s___a_p_p_l_i_d_a_t_a___i_k___s_t_r_u_c_t.md#variable-tryagainlimit-df6d)** <br>TempUpdate allowed: YES    Description: allowed number of retries for Interac AID after TRY AGAIN result (n1), defaults to 3, Interac retry limit (allowed number of retries after TRY AGAIN).    Availability bit: [INPUT_CTLS_APL_IK_DF6D_1]()   TLV tag: [TAG_DF6D_TRY_AGAIN_LIMIT]()   XML Tag: [XML_TAG_AD_IK_DF6D_TRY_AGAIN_LIMIT]().  |
| unsigned char[2 *EMV_CTLS_MAX_APP_VERS] | **[VersionNumber_9F09](struct_e_m_v___c_t_l_s___a_p_p_l_i_d_a_t_a___i_k___s_t_r_u_c_t.md#variable-versionnumber-9f09)** <br>TempUpdate allowed: NO    Description: Application chip version number    mandatory for [EMV_CTLS_SetAppliDataSchemeSpecific]()   Availability bit: [INPUT_CTLS_APL_IK_9F09_1]()   TLV tag: [TAG_9F09_TRM_APP_VERSION_NB](),    XML Tag: [XML_TAG_AD_IK_9F09_VERSION_NUMBER]().  |
| unsigned char[2] | **[MerchantCategoryCode_9F15](struct_e_m_v___c_t_l_s___a_p_p_l_i_d_a_t_a___i_k___s_t_r_u_c_t.md#variable-merchantcategorycode-9f15)** <br>TempUpdate allowed: NO    Description: Merchant category code    mandatory for [EMV_CTLS_SetAppliDataSchemeSpecific]()   Availability bit: [INPUT_CTLS_APL_IK_9F15_1]()   TLV tag: [TAG_9F15_MERCH_CATEG_CODE](),    XML Tag: [XML_TAG_AD_IK_9F15_MERCHANT_CATEGORY_CODE]().  |
| char[15+1] | **[MerchantIdentifier_9F16](struct_e_m_v___c_t_l_s___a_p_p_l_i_d_a_t_a___i_k___s_t_r_u_c_t.md#variable-merchantidentifier-9f16)** <br>TempUpdate allowed: NO    Description: Merchant Identifier    mandatory for [EMV_CTLS_SetAppliDataSchemeSpecific]()   Availability bit: [INPUT_CTLS_APL_IK_9F16_1]()   TLV tag: [TAG_9F16_MERCHANT_ID](),    XML Tag: [XML_TAG_AD_IK_9F16_MERCHANT_ID]().  |
| char[40+1] | **[MerchantNameAndLocation_9F4E](struct_e_m_v___c_t_l_s___a_p_p_l_i_d_a_t_a___i_k___s_t_r_u_c_t.md#variable-merchantnameandlocation-9f4e)** <br>TempUpdate allowed: NO    Description: Indicates the name and location of the merchant.    Availability bit: [INPUT_CTLS_APL_IK_9F4E_1]()   TLV tag: [TAG_9F4E_TAC_MERCHANTLOC](),    XML Tag: [XML_TAG_AD_IK_9F4E_MERCHANT_NAME_LOCATION]().  |
| unsigned char[6] | **[AcquirerIdentifier_9F01](struct_e_m_v___c_t_l_s___a_p_p_l_i_d_a_t_a___i_k___s_t_r_u_c_t.md#variable-acquireridentifier-9f01)** <br>TempUpdate allowed: NO    Description: Uniquely identifies the acquirer within each payment system.    Availability bit: [INPUT_CTLS_APL_IK_9F01_2]()   TLV tag: [TAG_9F01_ACQ_ID]()   XML Tag: [XML_TAG_AD_IK_9F01_ACQUIRER_ID]().  |
| unsigned char[5] | **[AppFlowCap_DFAB31](struct_e_m_v___c_t_l_s___a_p_p_l_i_d_a_t_a___i_k___s_t_r_u_c_t.md#variable-appflowcap-dfab31)** <br>TempUpdate allowed: YES    Description: Configure special application characteristics, see [Application flow capabilities for Interac]()   Availability bit: [INPUT_CTLS_APL_IK_DFAB31_2]()   TLV tag: [TAG_DFAB31_APP_FLOW_CAP](),    XML Tag: [XML_TAG_AD_IK_DFAB31_APP_FLOW_CAP]().  |
| unsigned char[6] | **[ContactlessTransactionLimit_DFAB41](struct_e_m_v___c_t_l_s___a_p_p_l_i_d_a_t_a___i_k___s_t_r_u_c_t.md#variable-contactlesstransactionlimit-dfab41)** <br>TempUpdate allowed: NO    Description: Reader Contactless Transaction Limit (n12)    Use '9999999999' to disable.    Availability bit: [INPUT_CTLS_APL_IK_DFAB41_2]()   TLV tag: [TAG_DFAB41_CTLS_TRX_LIMIT](),    XML Tag: [XML_TAG_AD_IK_DFAB41_CTLS_TRX_LIMIT]().  |
| unsigned char[6] | **[ContactlessCVMRequiredLimit_DFAB42](struct_e_m_v___c_t_l_s___a_p_p_l_i_d_a_t_a___i_k___s_t_r_u_c_t.md#variable-contactlesscvmrequiredlimit-dfab42)** <br>TempUpdate allowed: NO    Description: Reader Contactless CVM Required Limit (n12)    Use '9999999999' to disable.    Availability bit: [INPUT_CTLS_APL_IK_DFAB42_2]()   TLV tag: [TAG_DFAB42_CTLS_CVM_REQ_LIMIT](),    XML Tag: [XML_TAG_AD_IK_DFAB42_CTLS_CVM_REQ_LIMIT]().  |
| unsigned char[5] | **[TACDefault_DFAB43](struct_e_m_v___c_t_l_s___a_p_p_l_i_d_a_t_a___i_k___s_t_r_u_c_t.md#variable-tacdefault-dfab43)** <br>TempUpdate allowed: YES    Description: Terminal Action Code - Default    mandatory for [EMV_CTLS_SetAppliDataSchemeSpecific]()   Availability bit: [INPUT_CTLS_APL_IK_DFAB43_2]()   TLV tag: [TAG_DFAB43_TAC_DEFAULT](),    XML Tag: [XML_TAG_AD_IK_DFAB43_TAC_DEFAULT]().  |
| unsigned char[5] | **[TACDenial_DFAB44](struct_e_m_v___c_t_l_s___a_p_p_l_i_d_a_t_a___i_k___s_t_r_u_c_t.md#variable-tacdenial-dfab44)** <br>TempUpdate allowed: YES    Description: Terminal Action Code - Denial    mandatory for [EMV_CTLS_SetAppliDataSchemeSpecific]()   Availability bit: [INPUT_CTLS_APL_IK_DFAB44_2]()   TLV tag: [TAG_DFAB44_TAC_DENIAL](),    XML Tag: [XML_TAG_AD_IK_DFAB44_TAC_DENIAL]().  |
| unsigned char[5] | **[TACOnline_DFAB45](struct_e_m_v___c_t_l_s___a_p_p_l_i_d_a_t_a___i_k___s_t_r_u_c_t.md#variable-taconline-dfab45)** <br>TempUpdate allowed: YES    Description: Terminal Action Code - Online    mandatory for [EMV_CTLS_SetAppliDataSchemeSpecific]()   Availability bit: [INPUT_CTLS_APL_IK_DFAB45_2]()   TLV tag: [TAG_DFAB45_TAC_ONLINE](),    XML Tag: [XML_TAG_AD_IK_DFAB45_TAC_ONLINE]().  |
| unsigned char[6] | **[RiskManagementThreshold_DFAB46](struct_e_m_v___c_t_l_s___a_p_p_l_i_d_a_t_a___i_k___s_t_r_u_c_t.md#variable-riskmanagementthreshold-dfab46)** <br>TempUpdate allowed: YES    Description: Threshold Value for Biased Random Online Selection during risk management (n12)    Availability bit: [INPUT_CTLS_APL_IK_DFAB46_2]()   TLV tag: [TAG_DFAB46_RISK_MGMT_THRESHOLD]()   XML Tag: [XML_TAG_AD_IK_DFAB46_RISK_MGMT_THRESHOLD]().  |
| unsigned char | **[RiskManagementTargetPercentage_DFAB47](struct_e_m_v___c_t_l_s___a_p_p_l_i_d_a_t_a___i_k___s_t_r_u_c_t.md#variable-riskmanagementtargetpercentage-dfab47)** <br>TempUpdate allowed: YES    Description: Target percentage for random online selection during risk management (n2)    Availability bit: [INPUT_CTLS_APL_IK_DFAB47_3]()   TLV tag: [TAG_DFAB47_RISK_MGMT_TRGT_PRCT]()   XML Tag: [XML_TAG_AD_IK_DFAB47_RISK_MGMT_TRGT_PERC]().  |
| unsigned char | **[RiskManagementMaximumTargetPercentage_DFAB48](struct_e_m_v___c_t_l_s___a_p_p_l_i_d_a_t_a___i_k___s_t_r_u_c_t.md#variable-riskmanagementmaximumtargetpercentage-dfab48)** <br>TempUpdate allowed: YES    Description: Maximum target percentage for random online selection during risk management (n2)    Availability bit: [INPUT_CTLS_APL_IK_DFAB48_3]()   TLV tag: [TAG_DFAB48_RISK_MGMT_MAX_TRGT_PRCT]()   XML Tag: [XML_TAG_AD_IK_DFAB48_RISK_MGMT_MAX_TRGT_PERC]().  |

## Public Attributes Documentation

### variable IncludedData

```cpp
unsigned char[8] IncludedData;
```

Availability bits, see [Appli data scheme specific - Interac - Availability bits](). 

### variable TermIdent_9F1C

```cpp
unsigned char[8] TermIdent_9F1C;
```

TempUpdate allowed: YES    Description: Terminal Identification    mandatory for [EMV_CTLS_SetAppliDataSchemeSpecific]()   Availability bit: [INPUT_CTLS_APL_IK_9F1C_0]()   TLV tag: [TAG_9F1C_TRM_ID](),    XML Tag: [XML_TAG_AD_IK_9F1C_TERM_IDENT](). 

### variable TerminalCountryCode_9F1A

```cpp
unsigned char[2] TerminalCountryCode_9F1A;
```

TempUpdate allowed: YES    Description: "Terminal country code" (e.g. VISA Germany 0276)    Availability bit: [INPUT_CTLS_APL_IK_9F1A_0]()   TLV tag: [TAG_9F1A_TRM_COUNTRY_CODE](),    XML Tag: [XML_TAG_AD_IK_9F1A_TERM_COUNTRY_CODE](). 

### variable TerminalType_9F35

```cpp
unsigned char TerminalType_9F35;
```

TempUpdate allowed: YES    Description: Terminal type, possible values see [Terminaltypes (Tag 9F35)]())    mandatory for first call of [EMV_CTLS_SetTermData()]()   Availability bit: [INPUT_CTLS_APL_IK_9F35_0]()   TLV tag: [TAG_9F35_TRM_TYPE](),    XML Tag: [XML_TAG_AD_IK_9F35_TERM_TYPE](). 

### variable TerminalCapabilities_9F33

```cpp
unsigned char[3] TerminalCapabilities_9F33;
```

TempUpdate allowed: YES    Description: "terminal capabilities" for this application, for PayPass 3 the tags DF81xx, DF81yy, DF81zz are filled with these 3 byte, for VISA this is used for host compliancy only, for Amex in accordance with tag 9F6E,    Availability bit: [INPUT_CTLS_APL_IK_9F33_0]()   TLV tag: [TAG_9F33_TRM_CAPABILITIES](),    XML Tag: [XML_TAG_AD_IK_9F33_TERM_CAPS](). 

### variable AdditionalTerminalCapabilities_9F40

```cpp
unsigned char[5] AdditionalTerminalCapabilities_9F40;
```

TempUpdate allowed: YES    Description: "additional terminal capabilities" for this application, only 1st byte is effective    Availability bit: [INPUT_CTLS_APL_IK_9F40_0]()   TLV tag: [TAG_9F40_ADD_TRM_CAP](),    XML Tag: [XML_TAG_AD_IK_9F40_ADD_TERM_CAPS](). 

### variable ContactlessFloorLimit_9F5F

```cpp
unsigned char[6] ContactlessFloorLimit_9F5F;
```

TempUpdate allowed: NO    Description: Reader Contactless Floor Limit (n12)    Use '9999999999' to disable.    Availability bit: [INPUT_CTLS_APL_IK_9F5F_0]()   TLV tag: [TAG_9F5F_READER_CTLS_FLOOR_LIMIT](),    XML Tag: [XML_TAG_AD_IK_9F5F_CTLS_FLOOR_LIMIT](). 

### variable MerchantTypeIndicator_9F58

```cpp
unsigned char MerchantTypeIndicator_9F58;
```

TempUpdate allowed: NO    Description: Merchant Type Indicator (MTI)    Info: VFI reader tag 9F58    Availability bit: [INPUT_CTLS_APL_IK_9F58_0]()   TLV tag: [TAG_9F58_MERCH_TYPE_INDICATOR](),    XML Tag: [XML_TAG_AD_IK_9F58_MERCHANT_TYPE_INDICATOR](). 

### variable TerminalTransactionInformation_9F59

```cpp
unsigned char[3] TerminalTransactionInformation_9F59;
```

TempUpdate allowed: NO    Description: Terminal Transaction Information (TTI)    Info: VFI reader tag 9F59    Default value: DC 87 00    Availability bit: [INPUT_CTLS_APL_IK_9F59_0]()   TLV tag: [TAG_9F59_TERM_TRANS_INFO](),    XML Tag: [XML_TAG_AD_IK_9F59_TERM_TRX_INFORMATION](). 

### variable TerminalTransactionType_9F5A

```cpp
unsigned char TerminalTransactionType_9F5A;
```

TempUpdate allowed: NO    Description: Terminal Transaction Type (TTT)    Info: VFI reader tag 9F5A    Availability bit: [INPUT_CTLS_APL_IK_9F5A_1]()   TLV tag: [TAG_9F5A_TERM_TRANS_TYPE](),    XML Tag: [XML_TAG_AD_IK_9F5A_TERM_TRX_TYPE](). 

### variable TerminalOptionStatus_9F5E

```cpp
unsigned char[2] TerminalOptionStatus_9F5E;
```

TempUpdate allowed: YES    Description: Terminal option status (TOS)    Info: VFI reader tag: 9F5E    Availability bit: [INPUT_CTLS_APL_IK_9F5E_1]()   TLV tag: [TAG_9F5E_TERM_OPTION_STATUS](),    XML Tag: [XML_TAG_AD_IK_9F5E_TERM_OPTION_STATUS](). 

### variable ReceiptRequiredLimit_9F5D

```cpp
unsigned char[6] ReceiptRequiredLimit_9F5D;
```

TempUpdate allowed: YES    Description: Interac Terminal CTLS Receipt required limit (numeric)    Availability bit: [INPUT_CTLS_APL_IK_9F5D_1]()   TLV tag: [TAG_9F5D_TERM_CTLS_RECEIPT_REQUIRED_LIMIT](),    XML Tag: [XML_TAG_AD_IK_9F5D_RECEIPT_REQ_LIMIT](). 

### variable TryAgainLimit_DF6D

```cpp
unsigned char TryAgainLimit_DF6D;
```

TempUpdate allowed: YES    Description: allowed number of retries for Interac AID after TRY AGAIN result (n1), defaults to 3, Interac retry limit (allowed number of retries after TRY AGAIN).    Availability bit: [INPUT_CTLS_APL_IK_DF6D_1]()   TLV tag: [TAG_DF6D_TRY_AGAIN_LIMIT]()   XML Tag: [XML_TAG_AD_IK_DF6D_TRY_AGAIN_LIMIT](). 

### variable VersionNumber_9F09

```cpp
unsigned char[2 *EMV_CTLS_MAX_APP_VERS] VersionNumber_9F09;
```

TempUpdate allowed: NO    Description: Application chip version number    mandatory for [EMV_CTLS_SetAppliDataSchemeSpecific]()   Availability bit: [INPUT_CTLS_APL_IK_9F09_1]()   TLV tag: [TAG_9F09_TRM_APP_VERSION_NB](),    XML Tag: [XML_TAG_AD_IK_9F09_VERSION_NUMBER](). 

### variable MerchantCategoryCode_9F15

```cpp
unsigned char[2] MerchantCategoryCode_9F15;
```

TempUpdate allowed: NO    Description: Merchant category code    mandatory for [EMV_CTLS_SetAppliDataSchemeSpecific]()   Availability bit: [INPUT_CTLS_APL_IK_9F15_1]()   TLV tag: [TAG_9F15_MERCH_CATEG_CODE](),    XML Tag: [XML_TAG_AD_IK_9F15_MERCHANT_CATEGORY_CODE](). 

### variable MerchantIdentifier_9F16

```cpp
char[15+1] MerchantIdentifier_9F16;
```

TempUpdate allowed: NO    Description: Merchant Identifier    mandatory for [EMV_CTLS_SetAppliDataSchemeSpecific]()   Availability bit: [INPUT_CTLS_APL_IK_9F16_1]()   TLV tag: [TAG_9F16_MERCHANT_ID](),    XML Tag: [XML_TAG_AD_IK_9F16_MERCHANT_ID](). 

### variable MerchantNameAndLocation_9F4E

```cpp
char[40+1] MerchantNameAndLocation_9F4E;
```

TempUpdate allowed: NO    Description: Indicates the name and location of the merchant.    Availability bit: [INPUT_CTLS_APL_IK_9F4E_1]()   TLV tag: [TAG_9F4E_TAC_MERCHANTLOC](),    XML Tag: [XML_TAG_AD_IK_9F4E_MERCHANT_NAME_LOCATION](). 

### variable AcquirerIdentifier_9F01

```cpp
unsigned char[6] AcquirerIdentifier_9F01;
```

TempUpdate allowed: NO    Description: Uniquely identifies the acquirer within each payment system.    Availability bit: [INPUT_CTLS_APL_IK_9F01_2]()   TLV tag: [TAG_9F01_ACQ_ID]()   XML Tag: [XML_TAG_AD_IK_9F01_ACQUIRER_ID](). 

### variable AppFlowCap_DFAB31

```cpp
unsigned char[5] AppFlowCap_DFAB31;
```

TempUpdate allowed: YES    Description: Configure special application characteristics, see [Application flow capabilities for Interac]()   Availability bit: [INPUT_CTLS_APL_IK_DFAB31_2]()   TLV tag: [TAG_DFAB31_APP_FLOW_CAP](),    XML Tag: [XML_TAG_AD_IK_DFAB31_APP_FLOW_CAP](). 

### variable ContactlessTransactionLimit_DFAB41

```cpp
unsigned char[6] ContactlessTransactionLimit_DFAB41;
```

TempUpdate allowed: NO    Description: Reader Contactless Transaction Limit (n12)    Use '9999999999' to disable.    Availability bit: [INPUT_CTLS_APL_IK_DFAB41_2]()   TLV tag: [TAG_DFAB41_CTLS_TRX_LIMIT](),    XML Tag: [XML_TAG_AD_IK_DFAB41_CTLS_TRX_LIMIT](). 

### variable ContactlessCVMRequiredLimit_DFAB42

```cpp
unsigned char[6] ContactlessCVMRequiredLimit_DFAB42;
```

TempUpdate allowed: NO    Description: Reader Contactless CVM Required Limit (n12)    Use '9999999999' to disable.    Availability bit: [INPUT_CTLS_APL_IK_DFAB42_2]()   TLV tag: [TAG_DFAB42_CTLS_CVM_REQ_LIMIT](),    XML Tag: [XML_TAG_AD_IK_DFAB42_CTLS_CVM_REQ_LIMIT](). 

### variable TACDefault_DFAB43

```cpp
unsigned char[5] TACDefault_DFAB43;
```

TempUpdate allowed: YES    Description: Terminal Action Code - Default    mandatory for [EMV_CTLS_SetAppliDataSchemeSpecific]()   Availability bit: [INPUT_CTLS_APL_IK_DFAB43_2]()   TLV tag: [TAG_DFAB43_TAC_DEFAULT](),    XML Tag: [XML_TAG_AD_IK_DFAB43_TAC_DEFAULT](). 

### variable TACDenial_DFAB44

```cpp
unsigned char[5] TACDenial_DFAB44;
```

TempUpdate allowed: YES    Description: Terminal Action Code - Denial    mandatory for [EMV_CTLS_SetAppliDataSchemeSpecific]()   Availability bit: [INPUT_CTLS_APL_IK_DFAB44_2]()   TLV tag: [TAG_DFAB44_TAC_DENIAL](),    XML Tag: [XML_TAG_AD_IK_DFAB44_TAC_DENIAL](). 

### variable TACOnline_DFAB45

```cpp
unsigned char[5] TACOnline_DFAB45;
```

TempUpdate allowed: YES    Description: Terminal Action Code - Online    mandatory for [EMV_CTLS_SetAppliDataSchemeSpecific]()   Availability bit: [INPUT_CTLS_APL_IK_DFAB45_2]()   TLV tag: [TAG_DFAB45_TAC_ONLINE](),    XML Tag: [XML_TAG_AD_IK_DFAB45_TAC_ONLINE](). 

### variable RiskManagementThreshold_DFAB46

```cpp
unsigned char[6] RiskManagementThreshold_DFAB46;
```

TempUpdate allowed: YES    Description: Threshold Value for Biased Random Online Selection during risk management (n12)    Availability bit: [INPUT_CTLS_APL_IK_DFAB46_2]()   TLV tag: [TAG_DFAB46_RISK_MGMT_THRESHOLD]()   XML Tag: [XML_TAG_AD_IK_DFAB46_RISK_MGMT_THRESHOLD](). 

### variable RiskManagementTargetPercentage_DFAB47

```cpp
unsigned char RiskManagementTargetPercentage_DFAB47;
```

TempUpdate allowed: YES    Description: Target percentage for random online selection during risk management (n2)    Availability bit: [INPUT_CTLS_APL_IK_DFAB47_3]()   TLV tag: [TAG_DFAB47_RISK_MGMT_TRGT_PRCT]()   XML Tag: [XML_TAG_AD_IK_DFAB47_RISK_MGMT_TRGT_PERC](). 

### variable RiskManagementMaximumTargetPercentage_DFAB48

```cpp
unsigned char RiskManagementMaximumTargetPercentage_DFAB48;
```

TempUpdate allowed: YES    Description: Maximum target percentage for random online selection during risk management (n2)    Availability bit: [INPUT_CTLS_APL_IK_DFAB48_3]()   TLV tag: [TAG_DFAB48_RISK_MGMT_MAX_TRGT_PRCT]()   XML Tag: [XML_TAG_AD_IK_DFAB48_RISK_MGMT_MAX_TRGT_PERC](). 

-------------------------------

Updated on 2025-06-17 at 11:52:22 +0100