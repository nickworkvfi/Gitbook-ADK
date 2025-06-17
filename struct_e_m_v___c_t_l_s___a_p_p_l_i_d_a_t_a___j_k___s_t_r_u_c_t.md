---
title: EMV_CTLS_APPLIDATA_JK_STRUCT
summary: Structure for configuration of one single application, JK specific part. See see Book C-5, Kernel 5 Specification at [EMVCo Homepage]. See EMV_CTLS_SetAppliDataSchemeSpecific()

---

# EMV_CTLS_APPLIDATA_JK_STRUCT

**Module:** **[Configuration](group___a_d_k___c_o_n_f_i_g_u_r_a_t_i_o_n.md)** **/** **[Application data](group___d_e_f___c_o_n_f___a_p_p_l_i.md)**



Structure for configuration of one single application, JK specific part. See see Book C-5, Kernel 5 Specification at [[EMVCo Homepage]](http://www.emvco.com/). See [EMV_CTLS_SetAppliDataSchemeSpecific()]()


`#include <EMV_CTLS_Interface.h>`

## Public Attributes

|                | Name           |
| -------------- | -------------- |
| unsigned char[8] | **[IncludedData](struct_e_m_v___c_t_l_s___a_p_p_l_i_d_a_t_a___j_k___s_t_r_u_c_t.md#variable-includeddata)** <br>Availability bits, see [Appli data scheme specific - JCB - Avaiability bits]().  |
| unsigned char[8] | **[TermIdent_9F1C](struct_e_m_v___c_t_l_s___a_p_p_l_i_d_a_t_a___j_k___s_t_r_u_c_t.md#variable-termident-9f1c)** <br>TempUpdate allowed: YES    Description: Terminal Identification    mandatory for [EMV_CTLS_SetAppliDataSchemeSpecific]()   Availability bit: [INPUT_CTLS_APL_JK_9F1C_0]()   TLV tag: [TAG_9F1C_TRM_ID](),    XML Tag: [XML_TAG_AD_JK_9F1C_TERM_IDENT]().  |
| unsigned char[2] | **[TerminalCountryCode_9F1A](struct_e_m_v___c_t_l_s___a_p_p_l_i_d_a_t_a___j_k___s_t_r_u_c_t.md#variable-terminalcountrycode-9f1a)** <br>TempUpdate allowed: YES    Description: "Terminal country code" (e.g. VISA Germany 0276)    Availability bit: [INPUT_CTLS_APL_JK_9F1A_0]()   TLV tag: [TAG_9F1A_TRM_COUNTRY_CODE](),    XML Tag: [XML_TAG_AD_JK_9F1A_TERM_COUNTRY_CODE]().  |
| unsigned char | **[TerminalType_9F35](struct_e_m_v___c_t_l_s___a_p_p_l_i_d_a_t_a___j_k___s_t_r_u_c_t.md#variable-terminaltype-9f35)** <br>TempUpdate allowed: YES    Description: Terminal type, possible values see [Terminaltypes (Tag 9F35)]())    mandatory for first call of [EMV_CTLS_SetTermData()]()   Availability bit: [INPUT_CTLS_APL_JK_9F35_0]()   TLV tag: [TAG_9F35_TRM_TYPE](),    XML Tag: [XML_TAG_AD_JK_9F35_TERM_TYPE]().  |
| unsigned char[3] | **[TerminalInterchangeProfile_9F53](struct_e_m_v___c_t_l_s___a_p_p_l_i_d_a_t_a___j_k___s_t_r_u_c_t.md#variable-terminalinterchangeprofile-9f53)** <br>TempUpdate allowed: YES    Description: Flags for Supported CVM, Contact Chip support and Issuer Update support.    Availability bit: [INPUT_CTLS_APL_JK_9F53_0]()   TLV tag: [TAG_9F53_TRM_INTERCHANGE_PROFILE]()   XML Tag: [XML_TAG_AD_JK_9F53_TERM_INTERCHANGE_PROFILE]().  |
| unsigned char[2] | **[MerchantCategoryCode_9F15](struct_e_m_v___c_t_l_s___a_p_p_l_i_d_a_t_a___j_k___s_t_r_u_c_t.md#variable-merchantcategorycode-9f15)** <br>TempUpdate allowed: NO    Description: Merchant category code    mandatory for [EMV_CTLS_SetAppliDataSchemeSpecific]()   Availability bit: [INPUT_CTLS_APL_JK_9F15_0]()   TLV tag: [TAG_9F15_MERCH_CATEG_CODE](),    XML Tag: [XML_TAG_AD_JK_9F15_MERCHANT_CATEGORY_CODE]().  |
| char[40+1] | **[MerchantNameAndLocation_9F4E](struct_e_m_v___c_t_l_s___a_p_p_l_i_d_a_t_a___j_k___s_t_r_u_c_t.md#variable-merchantnameandlocation-9f4e)** <br>TempUpdate allowed: NO    Description: Indicates the name and location of the merchant.    Availability bit: [INPUT_CTLS_APL_JK_9F4E_0]()   TLV tag: [TAG_9F4E_TAC_MERCHANTLOC](),    XML Tag: [XML_TAG_AD_JK_9F4E_MERCHANT_NAME_LOCATION]().  |
| unsigned char[6] | **[AcquirerIdentifier_9F01](struct_e_m_v___c_t_l_s___a_p_p_l_i_d_a_t_a___j_k___s_t_r_u_c_t.md#variable-acquireridentifier-9f01)** <br>TempUpdate allowed: NO    Description: Uniquely identifies the acquirer within each payment system.    Availability bit: [INPUT_CTLS_APL_JK_9F01_0]()   TLV tag: [TAG_9F01_ACQ_ID]()   XML Tag: [XML_TAG_AD_JK_9F01_ACQUIRER_ID]().  |
| unsigned char[5] | **[AppFlowCap_DFAB31](struct_e_m_v___c_t_l_s___a_p_p_l_i_d_a_t_a___j_k___s_t_r_u_c_t.md#variable-appflowcap-dfab31)** <br>TempUpdate allowed: YES    Description: Configure special application characteristics, see [Application flow capabilities for JCB]()   Availability bit: [INPUT_CTLS_APL_JK_DFAB31_0]()   TLV tag: [TAG_DFAB31_APP_FLOW_CAP](),    XML Tag: [XML_TAG_AD_JK_DFAB31_APP_FLOW_CAP]().  |
| unsigned char[6] | **[ContactlessFloorLimit_DFAB40](struct_e_m_v___c_t_l_s___a_p_p_l_i_d_a_t_a___j_k___s_t_r_u_c_t.md#variable-contactlessfloorlimit-dfab40)** <br>TempUpdate allowed: NO    Description: Reader Contactless Floor Limit (n12)    Use '99999999999' to disable.    Availability bit: [INPUT_CTLS_APL_JK_DFAB40_1]()   TLV tag: [TAG_DFAB40_CTLS_FLOOR_LIMIT](),    XML Tag: [XML_TAG_AD_JK_DFAB40_CTLS_FLOOR_LIMIT]().  |
| unsigned char[6] | **[ContactlessTransactionLimit_DFAB41](struct_e_m_v___c_t_l_s___a_p_p_l_i_d_a_t_a___j_k___s_t_r_u_c_t.md#variable-contactlesstransactionlimit-dfab41)** <br>TempUpdate allowed: NO    Description: Reader Contactless Transaction Limit (n12) in case of no On-Device Card Holder Verification    Use '99999999999' to disable.    Availability bit: [INPUT_CTLS_APL_JK_DFAB41_1]()   TLV tag: [TAG_DFAB41_CTLS_TRX_LIMIT](),    XML Tag: [XML_TAG_AD_JK_DFAB41_CTLS_TRX_LIMIT]().  |
| unsigned char[6] | **[ContactlessCVMRequiredLimit_DFAB42](struct_e_m_v___c_t_l_s___a_p_p_l_i_d_a_t_a___j_k___s_t_r_u_c_t.md#variable-contactlesscvmrequiredlimit-dfab42)** <br>TempUpdate allowed: NO    Description: Reader Contactless CVM Required Limit (n12)    Use '99999999999' to disable.    Availability bit: [INPUT_CTLS_APL_JK_DFAB42_1]()   TLV tag: [TAG_DFAB42_CTLS_CVM_REQ_LIMIT](),    XML Tag: [XML_TAG_AD_JK_DFAB42_CTLS_CVM_REQ_LIMIT]().  |
| unsigned char[5] | **[TACDefault_DFAB43](struct_e_m_v___c_t_l_s___a_p_p_l_i_d_a_t_a___j_k___s_t_r_u_c_t.md#variable-tacdefault-dfab43)** <br>TempUpdate allowed: YES    Description: Terminal Action Code - Default    mandatory for [EMV_CTLS_SetAppliDataSchemeSpecific]()   Availability bit: [INPUT_CTLS_APL_JK_DFAB43_1]()   TLV tag: [TAG_DFAB43_TAC_DEFAULT](),    XML Tag: [XML_TAG_AD_JK_DFAB43_TAC_DEFAULT]().  |
| unsigned char[5] | **[TACDenial_DFAB44](struct_e_m_v___c_t_l_s___a_p_p_l_i_d_a_t_a___j_k___s_t_r_u_c_t.md#variable-tacdenial-dfab44)** <br>TempUpdate allowed: YES    Description: Terminal Action Code - Denial    mandatory for [EMV_CTLS_SetAppliDataSchemeSpecific]()   Availability bit: [INPUT_CTLS_APL_JK_DFAB44_1]()   TLV tag: [TAG_DFAB44_TAC_DENIAL](),    XML Tag: [XML_TAG_AD_JK_DFAB44_TAC_DENIAL]().  |
| unsigned char[5] | **[TACOnline_DFAB45](struct_e_m_v___c_t_l_s___a_p_p_l_i_d_a_t_a___j_k___s_t_r_u_c_t.md#variable-taconline-dfab45)** <br>TempUpdate allowed: YES    Description: Terminal Action Code - Online    mandatory for [EMV_CTLS_SetAppliDataSchemeSpecific]()   Availability bit: [INPUT_CTLS_APL_JK_DFAB45_1]()   TLV tag: [TAG_DFAB45_TAC_ONLINE](),    XML Tag: [XML_TAG_AD_JK_DFAB45_TAC_ONLINE]().  |
| unsigned char[6] | **[RiskManagementThreshold_DFAB46](struct_e_m_v___c_t_l_s___a_p_p_l_i_d_a_t_a___j_k___s_t_r_u_c_t.md#variable-riskmanagementthreshold-dfab46)** <br>TempUpdate allowed: YES    Description: Threshold Value for Biased Random Online Selection during risk management (n12)    Availability bit: [INPUT_CTLS_APL_JK_DFAB46_1]()   TLV tag: [TAG_DFAB46_RISK_MGMT_THRESHOLD]()   XML Tag: [XML_TAG_AD_JK_DFAB46_RISK_MGMT_THRESHOLD]().  |
| unsigned char | **[RiskManagementTargetPercentage_DFAB47](struct_e_m_v___c_t_l_s___a_p_p_l_i_d_a_t_a___j_k___s_t_r_u_c_t.md#variable-riskmanagementtargetpercentage-dfab47)** <br>TempUpdate allowed: YES    Description: Target percentage for random online selection during risk management (n2)    Availability bit: [INPUT_CTLS_APL_JK_DFAB47_1]()   TLV tag: [TAG_DFAB47_RISK_MGMT_TRGT_PRCT]()   XML Tag: [XML_TAG_AD_JK_DFAB47_RISK_MGMT_TRGT_PERC]().  |
| unsigned char | **[RiskManagementMaximumTargetPercentage_DFAB48](struct_e_m_v___c_t_l_s___a_p_p_l_i_d_a_t_a___j_k___s_t_r_u_c_t.md#variable-riskmanagementmaximumtargetpercentage-dfab48)** <br>TempUpdate allowed: YES    Description: Maximum target percentage for random online selection during risk management (n2)    Availability bit: [INPUT_CTLS_APL_JK_DFAB48_2]()   TLV tag: [TAG_DFAB48_RISK_MGMT_MAX_TRGT_PRCT]()   XML Tag: [XML_TAG_AD_JK_DFAB48_RISK_MGMT_MAX_TRGT_PERC]().  |
| unsigned char[2] | **[CombinationOptions_DFAB4B](struct_e_m_v___c_t_l_s___a_p_p_l_i_d_a_t_a___j_k___s_t_r_u_c_t.md#variable-combinationoptions-dfab4b)** <br>TempUpdate allowed: YES    Description: Flags for terminal capabilities (only first byte used):  `0x01` = Legacy mode supported  `0x02` = EMV mode supported  `0x04` = Magstripe mode supported (since JCB 1.4)  `0x08` = Random transaction selection  `0x10` = Exception file check  `0x20` = Offline data authentication supported  `0x40` = Status check supported    Kernel uses b1+b2 to determine 9F52 "Terminal Compatibility Indicator"    Availability bit: [INPUT_CTLS_APL_JK_DFAB4B_2]()   TLV tag: [TAG_DFAB4B_COMBINATION_OPTIONS]()   XML Tag: [XML_TAG_AD_JK_DFAB4B_COMBINATION_OPTIONS]().  |
| unsigned char[2] | **[RemovalTimeout_DFAB4C](struct_e_m_v___c_t_l_s___a_p_p_l_i_d_a_t_a___j_k___s_t_r_u_c_t.md#variable-removaltimeout-dfab4c)** <br>TempUpdate allowed: YES    Description: In case of Online Request with "Present and Hold" outcome, this parameter corresponds to the time after which cardholder is asked to remove the card. Value is given in units of 100ms.    Availability bit: [INPUT_CTLS_APL_JK_DFAB4C_2]()   TLV tag: [TAG_DFAB4C_REMOVAL_TIMEOUT]()   XML Tag: [XML_TAG_AD_JK_DFAB4C_REMOVAL_TIMEOUT]().  |
| unsigned char[6] | **[ContactlessTransactionLimit_ODCVM_DFAB5B](struct_e_m_v___c_t_l_s___a_p_p_l_i_d_a_t_a___j_k___s_t_r_u_c_t.md#variable-contactlesstransactionlimit-odcvm-dfab5b)** <br>TempUpdate allowed: NO    Description: Reader Contactless Transaction Limit (n12) in case of On-Device Card Holder Verification    Use '99999999999' to disable.    Availability bit: [INPUT_CTLS_APL_JK_DFAB5B_2]()   TLV tag: [TAG_DFAB5B_CTLS_TRX_LIMIT_ODCVM](),    XML Tag: [XML_TAG_AD_DFAB5B_CTLS_TRX_LIMIT_ODCVM]().  |

## Public Attributes Documentation

### variable IncludedData

```cpp
unsigned char[8] IncludedData;
```

Availability bits, see [Appli data scheme specific - JCB - Avaiability bits](). 

### variable TermIdent_9F1C

```cpp
unsigned char[8] TermIdent_9F1C;
```

TempUpdate allowed: YES    Description: Terminal Identification    mandatory for [EMV_CTLS_SetAppliDataSchemeSpecific]()   Availability bit: [INPUT_CTLS_APL_JK_9F1C_0]()   TLV tag: [TAG_9F1C_TRM_ID](),    XML Tag: [XML_TAG_AD_JK_9F1C_TERM_IDENT](). 

### variable TerminalCountryCode_9F1A

```cpp
unsigned char[2] TerminalCountryCode_9F1A;
```

TempUpdate allowed: YES    Description: "Terminal country code" (e.g. VISA Germany 0276)    Availability bit: [INPUT_CTLS_APL_JK_9F1A_0]()   TLV tag: [TAG_9F1A_TRM_COUNTRY_CODE](),    XML Tag: [XML_TAG_AD_JK_9F1A_TERM_COUNTRY_CODE](). 

### variable TerminalType_9F35

```cpp
unsigned char TerminalType_9F35;
```

TempUpdate allowed: YES    Description: Terminal type, possible values see [Terminaltypes (Tag 9F35)]())    mandatory for first call of [EMV_CTLS_SetTermData()]()   Availability bit: [INPUT_CTLS_APL_JK_9F35_0]()   TLV tag: [TAG_9F35_TRM_TYPE](),    XML Tag: [XML_TAG_AD_JK_9F35_TERM_TYPE](). 

### variable TerminalInterchangeProfile_9F53

```cpp
unsigned char[3] TerminalInterchangeProfile_9F53;
```

TempUpdate allowed: YES    Description: Flags for Supported CVM, Contact Chip support and Issuer Update support.    Availability bit: [INPUT_CTLS_APL_JK_9F53_0]()   TLV tag: [TAG_9F53_TRM_INTERCHANGE_PROFILE]()   XML Tag: [XML_TAG_AD_JK_9F53_TERM_INTERCHANGE_PROFILE](). 

### variable MerchantCategoryCode_9F15

```cpp
unsigned char[2] MerchantCategoryCode_9F15;
```

TempUpdate allowed: NO    Description: Merchant category code    mandatory for [EMV_CTLS_SetAppliDataSchemeSpecific]()   Availability bit: [INPUT_CTLS_APL_JK_9F15_0]()   TLV tag: [TAG_9F15_MERCH_CATEG_CODE](),    XML Tag: [XML_TAG_AD_JK_9F15_MERCHANT_CATEGORY_CODE](). 

### variable MerchantNameAndLocation_9F4E

```cpp
char[40+1] MerchantNameAndLocation_9F4E;
```

TempUpdate allowed: NO    Description: Indicates the name and location of the merchant.    Availability bit: [INPUT_CTLS_APL_JK_9F4E_0]()   TLV tag: [TAG_9F4E_TAC_MERCHANTLOC](),    XML Tag: [XML_TAG_AD_JK_9F4E_MERCHANT_NAME_LOCATION](). 

### variable AcquirerIdentifier_9F01

```cpp
unsigned char[6] AcquirerIdentifier_9F01;
```

TempUpdate allowed: NO    Description: Uniquely identifies the acquirer within each payment system.    Availability bit: [INPUT_CTLS_APL_JK_9F01_0]()   TLV tag: [TAG_9F01_ACQ_ID]()   XML Tag: [XML_TAG_AD_JK_9F01_ACQUIRER_ID](). 

### variable AppFlowCap_DFAB31

```cpp
unsigned char[5] AppFlowCap_DFAB31;
```

TempUpdate allowed: YES    Description: Configure special application characteristics, see [Application flow capabilities for JCB]()   Availability bit: [INPUT_CTLS_APL_JK_DFAB31_0]()   TLV tag: [TAG_DFAB31_APP_FLOW_CAP](),    XML Tag: [XML_TAG_AD_JK_DFAB31_APP_FLOW_CAP](). 

### variable ContactlessFloorLimit_DFAB40

```cpp
unsigned char[6] ContactlessFloorLimit_DFAB40;
```

TempUpdate allowed: NO    Description: Reader Contactless Floor Limit (n12)    Use '99999999999' to disable.    Availability bit: [INPUT_CTLS_APL_JK_DFAB40_1]()   TLV tag: [TAG_DFAB40_CTLS_FLOOR_LIMIT](),    XML Tag: [XML_TAG_AD_JK_DFAB40_CTLS_FLOOR_LIMIT](). 

### variable ContactlessTransactionLimit_DFAB41

```cpp
unsigned char[6] ContactlessTransactionLimit_DFAB41;
```

TempUpdate allowed: NO    Description: Reader Contactless Transaction Limit (n12) in case of no On-Device Card Holder Verification    Use '99999999999' to disable.    Availability bit: [INPUT_CTLS_APL_JK_DFAB41_1]()   TLV tag: [TAG_DFAB41_CTLS_TRX_LIMIT](),    XML Tag: [XML_TAG_AD_JK_DFAB41_CTLS_TRX_LIMIT](). 

**Note**: For Entry Point configuration and for kernel versions < JK1.2.0 the transactions limits DFAB41/DFAB5B have to be combined. Algorithm is to use the highest limit. 

### variable ContactlessCVMRequiredLimit_DFAB42

```cpp
unsigned char[6] ContactlessCVMRequiredLimit_DFAB42;
```

TempUpdate allowed: NO    Description: Reader Contactless CVM Required Limit (n12)    Use '99999999999' to disable.    Availability bit: [INPUT_CTLS_APL_JK_DFAB42_1]()   TLV tag: [TAG_DFAB42_CTLS_CVM_REQ_LIMIT](),    XML Tag: [XML_TAG_AD_JK_DFAB42_CTLS_CVM_REQ_LIMIT](). 

### variable TACDefault_DFAB43

```cpp
unsigned char[5] TACDefault_DFAB43;
```

TempUpdate allowed: YES    Description: Terminal Action Code - Default    mandatory for [EMV_CTLS_SetAppliDataSchemeSpecific]()   Availability bit: [INPUT_CTLS_APL_JK_DFAB43_1]()   TLV tag: [TAG_DFAB43_TAC_DEFAULT](),    XML Tag: [XML_TAG_AD_JK_DFAB43_TAC_DEFAULT](). 

### variable TACDenial_DFAB44

```cpp
unsigned char[5] TACDenial_DFAB44;
```

TempUpdate allowed: YES    Description: Terminal Action Code - Denial    mandatory for [EMV_CTLS_SetAppliDataSchemeSpecific]()   Availability bit: [INPUT_CTLS_APL_JK_DFAB44_1]()   TLV tag: [TAG_DFAB44_TAC_DENIAL](),    XML Tag: [XML_TAG_AD_JK_DFAB44_TAC_DENIAL](). 

### variable TACOnline_DFAB45

```cpp
unsigned char[5] TACOnline_DFAB45;
```

TempUpdate allowed: YES    Description: Terminal Action Code - Online    mandatory for [EMV_CTLS_SetAppliDataSchemeSpecific]()   Availability bit: [INPUT_CTLS_APL_JK_DFAB45_1]()   TLV tag: [TAG_DFAB45_TAC_ONLINE](),    XML Tag: [XML_TAG_AD_JK_DFAB45_TAC_ONLINE](). 

### variable RiskManagementThreshold_DFAB46

```cpp
unsigned char[6] RiskManagementThreshold_DFAB46;
```

TempUpdate allowed: YES    Description: Threshold Value for Biased Random Online Selection during risk management (n12)    Availability bit: [INPUT_CTLS_APL_JK_DFAB46_1]()   TLV tag: [TAG_DFAB46_RISK_MGMT_THRESHOLD]()   XML Tag: [XML_TAG_AD_JK_DFAB46_RISK_MGMT_THRESHOLD](). 

### variable RiskManagementTargetPercentage_DFAB47

```cpp
unsigned char RiskManagementTargetPercentage_DFAB47;
```

TempUpdate allowed: YES    Description: Target percentage for random online selection during risk management (n2)    Availability bit: [INPUT_CTLS_APL_JK_DFAB47_1]()   TLV tag: [TAG_DFAB47_RISK_MGMT_TRGT_PRCT]()   XML Tag: [XML_TAG_AD_JK_DFAB47_RISK_MGMT_TRGT_PERC](). 

### variable RiskManagementMaximumTargetPercentage_DFAB48

```cpp
unsigned char RiskManagementMaximumTargetPercentage_DFAB48;
```

TempUpdate allowed: YES    Description: Maximum target percentage for random online selection during risk management (n2)    Availability bit: [INPUT_CTLS_APL_JK_DFAB48_2]()   TLV tag: [TAG_DFAB48_RISK_MGMT_MAX_TRGT_PRCT]()   XML Tag: [XML_TAG_AD_JK_DFAB48_RISK_MGMT_MAX_TRGT_PERC](). 

### variable CombinationOptions_DFAB4B

```cpp
unsigned char[2] CombinationOptions_DFAB4B;
```

TempUpdate allowed: YES    Description: Flags for terminal capabilities (only first byte used):  `0x01` = Legacy mode supported  `0x02` = EMV mode supported  `0x04` = Magstripe mode supported (since JCB 1.4)  `0x08` = Random transaction selection  `0x10` = Exception file check  `0x20` = Offline data authentication supported  `0x40` = Status check supported    Kernel uses b1+b2 to determine 9F52 "Terminal Compatibility Indicator"    Availability bit: [INPUT_CTLS_APL_JK_DFAB4B_2]()   TLV tag: [TAG_DFAB4B_COMBINATION_OPTIONS]()   XML Tag: [XML_TAG_AD_JK_DFAB4B_COMBINATION_OPTIONS](). 

### variable RemovalTimeout_DFAB4C

```cpp
unsigned char[2] RemovalTimeout_DFAB4C;
```

TempUpdate allowed: YES    Description: In case of Online Request with "Present and Hold" outcome, this parameter corresponds to the time after which cardholder is asked to remove the card. Value is given in units of 100ms.    Availability bit: [INPUT_CTLS_APL_JK_DFAB4C_2]()   TLV tag: [TAG_DFAB4C_REMOVAL_TIMEOUT]()   XML Tag: [XML_TAG_AD_JK_DFAB4C_REMOVAL_TIMEOUT](). 

### variable ContactlessTransactionLimit_ODCVM_DFAB5B

```cpp
unsigned char[6] ContactlessTransactionLimit_ODCVM_DFAB5B;
```

TempUpdate allowed: NO    Description: Reader Contactless Transaction Limit (n12) in case of On-Device Card Holder Verification    Use '99999999999' to disable.    Availability bit: [INPUT_CTLS_APL_JK_DFAB5B_2]()   TLV tag: [TAG_DFAB5B_CTLS_TRX_LIMIT_ODCVM](),    XML Tag: [XML_TAG_AD_DFAB5B_CTLS_TRX_LIMIT_ODCVM](). 

**Note**: For Entry Point configuration and for kernel versions < JK1.2.0 the transactions limits DFAB41/DFAB5B have to be combined. Algorithm is to use the highest limit. 

-------------------------------

Updated on 2025-06-17 at 11:52:22 +0100