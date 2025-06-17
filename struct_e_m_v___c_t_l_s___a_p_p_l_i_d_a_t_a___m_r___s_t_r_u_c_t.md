---
title: EMV_CTLS_APPLIDATA_MR_STRUCT
summary: Structure for configuration of one single application, MIR specific part. See EMV_CTLS_SetAppliDataSchemeSpecific()

---

# EMV_CTLS_APPLIDATA_MR_STRUCT

**Module:** **[Configuration](group___a_d_k___c_o_n_f_i_g_u_r_a_t_i_o_n.md)** **/** **[Application data](group___d_e_f___c_o_n_f___a_p_p_l_i.md)**



Structure for configuration of one single application, MIR specific part. See [EMV_CTLS_SetAppliDataSchemeSpecific()]()


`#include <EMV_CTLS_Interface.h>`

## Public Attributes

|                | Name           |
| -------------- | -------------- |
| unsigned char[8] | **[IncludedData](struct_e_m_v___c_t_l_s___a_p_p_l_i_d_a_t_a___m_r___s_t_r_u_c_t.md#variable-includeddata)** <br>Availability bits, see [Appli data scheme specific - MIR - Availability bits]().  |
| unsigned char[8] | **[TermIdent_9F1C](struct_e_m_v___c_t_l_s___a_p_p_l_i_d_a_t_a___m_r___s_t_r_u_c_t.md#variable-termident-9f1c)** <br>TempUpdate allowed: YES    Description: Terminal Identification.    mandatory for [EMV_CTLS_SetAppliDataSchemeSpecific]()   Availability bit: [INPUT_CTLS_APL_MR_9F1C_0]()   TLV tag: [TAG_9F1C_TRM_ID](),    XML Tag: [XML_TAG_AD_MR_9F1C_TERM_IDENT]().  |
| unsigned char[2] | **[TerminalCountryCode_9F1A](struct_e_m_v___c_t_l_s___a_p_p_l_i_d_a_t_a___m_r___s_t_r_u_c_t.md#variable-terminalcountrycode-9f1a)** <br>TempUpdate allowed: YES    Description: Terminal Country Code.    Availability bit: [INPUT_CTLS_APL_MR_9F1A_0]()   TLV tag: [TAG_9F1A_TRM_COUNTRY_CODE](),    XML Tag: [XML_TAG_AD_MR_9F1A_TERM_COUNTRY_CODE]().  |
| unsigned char | **[TerminalType_9F35](struct_e_m_v___c_t_l_s___a_p_p_l_i_d_a_t_a___m_r___s_t_r_u_c_t.md#variable-terminaltype-9f35)** <br>TempUpdate allowed: YES    Description: Terminal type, possible values see [Terminaltypes (Tag 9F35)]().    mandatory for first call of [EMV_CTLS_SetTermData()]()   Availability bit: [INPUT_CTLS_APL_MR_9F35_0]()   TLV tag: [TAG_9F35_TRM_TYPE](),    XML Tag: [XML_TAG_AD_MR_9F35_TERM_TYPE]().  |
| unsigned char[2 *EMV_CTLS_MAX_APP_VERS] | **[VersionNumber_9F09](struct_e_m_v___c_t_l_s___a_p_p_l_i_d_a_t_a___m_r___s_t_r_u_c_t.md#variable-versionnumber-9f09)** <br>TempUpdate allowed: NO    Description: Application chip version number.    mandatory for [EMV_CTLS_SetAppliDataSchemeSpecific]()   Availability bit: [INPUT_CTLS_APL_MR_9F09_0]()   TLV tag: [TAG_9F09_TRM_APP_VERSION_NB](),    XML Tag: [XML_TAG_AD_MR_9F09_VERSION_NUMBER]().  |
| unsigned char[2] | **[MerchantCategoryCode_9F15](struct_e_m_v___c_t_l_s___a_p_p_l_i_d_a_t_a___m_r___s_t_r_u_c_t.md#variable-merchantcategorycode-9f15)** <br>TempUpdate allowed: NO    Description: Merchant category code.    mandatory for [EMV_CTLS_SetAppliDataSchemeSpecific]()   Availability bit: [INPUT_CTLS_APL_MR_9F15_0]()   TLV tag: [TAG_9F15_MERCH_CATEG_CODE](),    XML Tag: [XML_TAG_AD_MR_9F15_MERCHANT_CATEGORY_CODE]().  |
| char[40+1] | **[MerchantNameAndLocation_9F4E](struct_e_m_v___c_t_l_s___a_p_p_l_i_d_a_t_a___m_r___s_t_r_u_c_t.md#variable-merchantnameandlocation-9f4e)** <br>TempUpdate allowed: NO    Description: Indicates the name and location of the merchant.    Availability bit: [INPUT_CTLS_APL_MR_9F4E_0]()   TLV tag: [TAG_9F4E_TAC_MERCHANTLOC](),    XML Tag: [XML_TAG_AD_MR_9F4E_MERCHANT_NAME_LOCATION]().  |
| unsigned char[6] | **[AcquirerIdentifier_9F01](struct_e_m_v___c_t_l_s___a_p_p_l_i_d_a_t_a___m_r___s_t_r_u_c_t.md#variable-acquireridentifier-9f01)** <br>TempUpdate allowed: NO    Description: Uniquely identifies the acquirer within each payment system.    Availability bit: [INPUT_CTLS_APL_MR_9F01_0]()   TLV tag: [TAG_9F01_ACQ_ID]()   XML Tag: [XML_TAG_AD_MR_9F01_ACQUIRER_ID]().  |
| unsigned char[6] | **[TerminalFloorLimit_DF51](struct_e_m_v___c_t_l_s___a_p_p_l_i_d_a_t_a___m_r___s_t_r_u_c_t.md#variable-terminalfloorlimit-df51)** <br>TempUpdate allowed: NO    Description: Terminal floor limit (BCD encoded): the maximum amount allowing the offline operation processing mode.    Availability bit: [INPUT_CTLS_APL_MR_DF51_0]()   TLV tag: [TAG_DF51_TRM_FLOOR_LIMIT](),    XML Tag: [XML_TAG_AD_MR_DF51_TRM_FLOOR_LIMIT]().  |
| unsigned char[6] | **[TerminalNoCVMLimit_DF52](struct_e_m_v___c_t_l_s___a_p_p_l_i_d_a_t_a___m_r___s_t_r_u_c_t.md#variable-terminalnocvmlimit-df52)** <br>TempUpdate allowed: NO    Description: Terminal No CVM Limit (BCD encoded): the maximum amount of the transaction performed without Cardholder verification.    Availability bit: [INPUT_CTLS_APL_MR_DF52_1]()   TLV tag: [TAG_DF52_TRM_NOCVM_LIMIT](),    XML Tag: [XML_TAG_AD_MR_DF52_TRM_NOCVM_LIMIT]().  |
| unsigned char[6] | **[TerminalContactlessLimitNonCDCVM_DF53](struct_e_m_v___c_t_l_s___a_p_p_l_i_d_a_t_a___m_r___s_t_r_u_c_t.md#variable-terminalcontactlesslimitnoncdcvm-df53)** <br>TempUpdate allowed: NO    Description: Terminal Contactless Limit (BCD encoded) for Non CD-CVM: the maximum transaction amount using the contactless interface for Non CD-CVM.    Availability bit: [INPUT_CTLS_APL_MR_DF53_1]()   TLV tag [TAG_DF53_TRM_CTLS_LIMIT_NON_CDCVM](),    XML Tag: [XML_TAG_AD_MR_DF53_TRM_CTLS_LIMIT_NON_CDCVM]().  |
| unsigned char[6] | **[TerminalContactlessLimitCDCVM_DF54](struct_e_m_v___c_t_l_s___a_p_p_l_i_d_a_t_a___m_r___s_t_r_u_c_t.md#variable-terminalcontactlesslimitcdcvm-df54)** <br>TempUpdate allowed: NO    Description: Terminal Contactless Limit (BCD encoded) for CD-CVM: the maximum transaction amount using the contactless interface for CD-CVM.    Availability bit: [INPUT_CTLS_APL_MR_DF54_1]()   TLV tag [TAG_DF54_TRM_CTLS_LIMIT_CDCVM](),    XML Tag: [XML_TAG_AD_MR_DF54_TRM_CTLS_LIMIT_CDCVM]().  |
| unsigned char[2] | **[TerminalTPMCapabilities_DF55](struct_e_m_v___c_t_l_s___a_p_p_l_i_d_a_t_a___m_r___s_t_r_u_c_t.md#variable-terminaltpmcapabilities-df55)** <br>TempUpdate allowed: NO    Description: MIR Terminal TPM Capabilities.    Availability bit: [INPUT_CTLS_APL_MR_DF55_1]()   TLV tag: [TAG_DF55_TRM_TPM_CAPABILITIES](),    XML Tag: [XML_TAG_AD_MR_DF55_TRM_TPM_CAPABILITIES]().  |
| unsigned char | **[TransactionRecoveryLimit_DF56](struct_e_m_v___c_t_l_s___a_p_p_l_i_d_a_t_a___m_r___s_t_r_u_c_t.md#variable-transactionrecoverylimit-df56)** <br>TempUpdate allowed: NO    Description: MIR Transaction Recovery Limit.    Availability bit: [INPUT_CTLS_APL_MR_DF56_1]()   TLV tag: [TAG_DF56_TRANSACTION_RECOVERY_LIMIT](),    XML Tag: [XML_TAG_AD_MR_DF56_TRANSACTION_RECOVERY_LIMIT]().  |
| unsigned char[5] | **[AppFlowCap_DFAB31](struct_e_m_v___c_t_l_s___a_p_p_l_i_d_a_t_a___m_r___s_t_r_u_c_t.md#variable-appflowcap-dfab31)** <br>TempUpdate allowed: YES    Description: Configure special application characteristics, see [Application flow capabilities for MIR]()   Availability bit: [INPUT_CTLS_APL_MR_DFAB31_1]()   TLV tag: [TAG_DFAB31_APP_FLOW_CAP](),    XML Tag: [XML_TAG_AD_MR_DFAB31_APP_FLOW_CAP]().  |
| unsigned char[5] | **[TACDefault_DFAB43](struct_e_m_v___c_t_l_s___a_p_p_l_i_d_a_t_a___m_r___s_t_r_u_c_t.md#variable-tacdefault-dfab43)** <br>TempUpdate allowed: YES    Description: Terminal Action Code - Default    mandatory for [EMV_CTLS_SetAppliDataSchemeSpecific]() ///<    Availability bit: [INPUT_CTLS_APL_MR_DFAB43_1]()   TLV tag: [TAG_DFAB43_TAC_DEFAULT](),    XML Tag: [XML_TAG_AD_MR_DFAB43_TAC_DEFAULT]().  |
| unsigned char[5] | **[TACDenial_DFAB44](struct_e_m_v___c_t_l_s___a_p_p_l_i_d_a_t_a___m_r___s_t_r_u_c_t.md#variable-tacdenial-dfab44)** <br>TempUpdate allowed: YES    Description: Terminal Action Code - Denial    mandatory for [EMV_CTLS_SetAppliDataSchemeSpecific]()   Availability bit: [INPUT_CTLS_APL_MR_DFAB44_1]()   TLV tag: [TAG_DFAB44_TAC_DENIAL](),    XML Tag: [XML_TAG_AD_MR_DFAB44_TAC_DENIAL]().  |
| unsigned char[5] | **[TACOnline_DFAB45](struct_e_m_v___c_t_l_s___a_p_p_l_i_d_a_t_a___m_r___s_t_r_u_c_t.md#variable-taconline-dfab45)** <br>TempUpdate allowed: YES    Description: Terminal Action Code - Online    mandatory for [EMV_CTLS_SetAppliDataSchemeSpecific]()   Availability bit: [INPUT_CTLS_APL_MR_DFAB45_2]()   TLV tag: [TAG_DFAB45_TAC_ONLINE](),    XML Tag: [XML_TAG_AD_MR_DFAB45_TAC_ONLINE]().  |
| [EMV_CTLS_DATA_TYPE](_e_m_v___c_t_l_s___interface_8h.md#typedef-emv-ctls-data-type) | **[DataExchangeTagList_DFAB57](struct_e_m_v___c_t_l_s___a_p_p_l_i_d_a_t_a___m_r___s_t_r_u_c_t.md#variable-dataexchangetaglist-dfab57)** <br>TempUpdate allowed: NO    Description: Data Exchange Tag List: a set of tags which the terminal expects to receive from the kernel during data exchange    Availability bit: [INPUT_CTLS_APL_MR_DFAB57_2]()   TLV tag: [TAG_DFAB57_MIR_DATA_EXCHANGE_TAGS]()   XML Tag: [XML_TAG_AD_MR_DFAB57_MIR_DATA_EXCHANGE_TAGS]().  |

## Public Attributes Documentation

### variable IncludedData

```cpp
unsigned char[8] IncludedData;
```

Availability bits, see [Appli data scheme specific - MIR - Availability bits](). 

### variable TermIdent_9F1C

```cpp
unsigned char[8] TermIdent_9F1C;
```

TempUpdate allowed: YES    Description: Terminal Identification.    mandatory for [EMV_CTLS_SetAppliDataSchemeSpecific]()   Availability bit: [INPUT_CTLS_APL_MR_9F1C_0]()   TLV tag: [TAG_9F1C_TRM_ID](),    XML Tag: [XML_TAG_AD_MR_9F1C_TERM_IDENT](). 

### variable TerminalCountryCode_9F1A

```cpp
unsigned char[2] TerminalCountryCode_9F1A;
```

TempUpdate allowed: YES    Description: Terminal Country Code.    Availability bit: [INPUT_CTLS_APL_MR_9F1A_0]()   TLV tag: [TAG_9F1A_TRM_COUNTRY_CODE](),    XML Tag: [XML_TAG_AD_MR_9F1A_TERM_COUNTRY_CODE](). 

### variable TerminalType_9F35

```cpp
unsigned char TerminalType_9F35;
```

TempUpdate allowed: YES    Description: Terminal type, possible values see [Terminaltypes (Tag 9F35)]().    mandatory for first call of [EMV_CTLS_SetTermData()]()   Availability bit: [INPUT_CTLS_APL_MR_9F35_0]()   TLV tag: [TAG_9F35_TRM_TYPE](),    XML Tag: [XML_TAG_AD_MR_9F35_TERM_TYPE](). 

### variable VersionNumber_9F09

```cpp
unsigned char[2 *EMV_CTLS_MAX_APP_VERS] VersionNumber_9F09;
```

TempUpdate allowed: NO    Description: Application chip version number.    mandatory for [EMV_CTLS_SetAppliDataSchemeSpecific]()   Availability bit: [INPUT_CTLS_APL_MR_9F09_0]()   TLV tag: [TAG_9F09_TRM_APP_VERSION_NB](),    XML Tag: [XML_TAG_AD_MR_9F09_VERSION_NUMBER](). 

### variable MerchantCategoryCode_9F15

```cpp
unsigned char[2] MerchantCategoryCode_9F15;
```

TempUpdate allowed: NO    Description: Merchant category code.    mandatory for [EMV_CTLS_SetAppliDataSchemeSpecific]()   Availability bit: [INPUT_CTLS_APL_MR_9F15_0]()   TLV tag: [TAG_9F15_MERCH_CATEG_CODE](),    XML Tag: [XML_TAG_AD_MR_9F15_MERCHANT_CATEGORY_CODE](). 

### variable MerchantNameAndLocation_9F4E

```cpp
char[40+1] MerchantNameAndLocation_9F4E;
```

TempUpdate allowed: NO    Description: Indicates the name and location of the merchant.    Availability bit: [INPUT_CTLS_APL_MR_9F4E_0]()   TLV tag: [TAG_9F4E_TAC_MERCHANTLOC](),    XML Tag: [XML_TAG_AD_MR_9F4E_MERCHANT_NAME_LOCATION](). 

### variable AcquirerIdentifier_9F01

```cpp
unsigned char[6] AcquirerIdentifier_9F01;
```

TempUpdate allowed: NO    Description: Uniquely identifies the acquirer within each payment system.    Availability bit: [INPUT_CTLS_APL_MR_9F01_0]()   TLV tag: [TAG_9F01_ACQ_ID]()   XML Tag: [XML_TAG_AD_MR_9F01_ACQUIRER_ID](). 

### variable TerminalFloorLimit_DF51

```cpp
unsigned char[6] TerminalFloorLimit_DF51;
```

TempUpdate allowed: NO    Description: Terminal floor limit (BCD encoded): the maximum amount allowing the offline operation processing mode.    Availability bit: [INPUT_CTLS_APL_MR_DF51_0]()   TLV tag: [TAG_DF51_TRM_FLOOR_LIMIT](),    XML Tag: [XML_TAG_AD_MR_DF51_TRM_FLOOR_LIMIT](). 

### variable TerminalNoCVMLimit_DF52

```cpp
unsigned char[6] TerminalNoCVMLimit_DF52;
```

TempUpdate allowed: NO    Description: Terminal No CVM Limit (BCD encoded): the maximum amount of the transaction performed without Cardholder verification.    Availability bit: [INPUT_CTLS_APL_MR_DF52_1]()   TLV tag: [TAG_DF52_TRM_NOCVM_LIMIT](),    XML Tag: [XML_TAG_AD_MR_DF52_TRM_NOCVM_LIMIT](). 

### variable TerminalContactlessLimitNonCDCVM_DF53

```cpp
unsigned char[6] TerminalContactlessLimitNonCDCVM_DF53;
```

TempUpdate allowed: NO    Description: Terminal Contactless Limit (BCD encoded) for Non CD-CVM: the maximum transaction amount using the contactless interface for Non CD-CVM.    Availability bit: [INPUT_CTLS_APL_MR_DF53_1]()   TLV tag [TAG_DF53_TRM_CTLS_LIMIT_NON_CDCVM](),    XML Tag: [XML_TAG_AD_MR_DF53_TRM_CTLS_LIMIT_NON_CDCVM](). 

### variable TerminalContactlessLimitCDCVM_DF54

```cpp
unsigned char[6] TerminalContactlessLimitCDCVM_DF54;
```

TempUpdate allowed: NO    Description: Terminal Contactless Limit (BCD encoded) for CD-CVM: the maximum transaction amount using the contactless interface for CD-CVM.    Availability bit: [INPUT_CTLS_APL_MR_DF54_1]()   TLV tag [TAG_DF54_TRM_CTLS_LIMIT_CDCVM](),    XML Tag: [XML_TAG_AD_MR_DF54_TRM_CTLS_LIMIT_CDCVM](). 

### variable TerminalTPMCapabilities_DF55

```cpp
unsigned char[2] TerminalTPMCapabilities_DF55;
```

TempUpdate allowed: NO    Description: MIR Terminal TPM Capabilities.    Availability bit: [INPUT_CTLS_APL_MR_DF55_1]()   TLV tag: [TAG_DF55_TRM_TPM_CAPABILITIES](),    XML Tag: [XML_TAG_AD_MR_DF55_TRM_TPM_CAPABILITIES](). 

### variable TransactionRecoveryLimit_DF56

```cpp
unsigned char TransactionRecoveryLimit_DF56;
```

TempUpdate allowed: NO    Description: MIR Transaction Recovery Limit.    Availability bit: [INPUT_CTLS_APL_MR_DF56_1]()   TLV tag: [TAG_DF56_TRANSACTION_RECOVERY_LIMIT](),    XML Tag: [XML_TAG_AD_MR_DF56_TRANSACTION_RECOVERY_LIMIT](). 

### variable AppFlowCap_DFAB31

```cpp
unsigned char[5] AppFlowCap_DFAB31;
```

TempUpdate allowed: YES    Description: Configure special application characteristics, see [Application flow capabilities for MIR]()   Availability bit: [INPUT_CTLS_APL_MR_DFAB31_1]()   TLV tag: [TAG_DFAB31_APP_FLOW_CAP](),    XML Tag: [XML_TAG_AD_MR_DFAB31_APP_FLOW_CAP](). 

### variable TACDefault_DFAB43

```cpp
unsigned char[5] TACDefault_DFAB43;
```

TempUpdate allowed: YES    Description: Terminal Action Code - Default    mandatory for [EMV_CTLS_SetAppliDataSchemeSpecific]() ///<    Availability bit: [INPUT_CTLS_APL_MR_DFAB43_1]()   TLV tag: [TAG_DFAB43_TAC_DEFAULT](),    XML Tag: [XML_TAG_AD_MR_DFAB43_TAC_DEFAULT](). 

### variable TACDenial_DFAB44

```cpp
unsigned char[5] TACDenial_DFAB44;
```

TempUpdate allowed: YES    Description: Terminal Action Code - Denial    mandatory for [EMV_CTLS_SetAppliDataSchemeSpecific]()   Availability bit: [INPUT_CTLS_APL_MR_DFAB44_1]()   TLV tag: [TAG_DFAB44_TAC_DENIAL](),    XML Tag: [XML_TAG_AD_MR_DFAB44_TAC_DENIAL](). 

### variable TACOnline_DFAB45

```cpp
unsigned char[5] TACOnline_DFAB45;
```

TempUpdate allowed: YES    Description: Terminal Action Code - Online    mandatory for [EMV_CTLS_SetAppliDataSchemeSpecific]()   Availability bit: [INPUT_CTLS_APL_MR_DFAB45_2]()   TLV tag: [TAG_DFAB45_TAC_ONLINE](),    XML Tag: [XML_TAG_AD_MR_DFAB45_TAC_ONLINE](). 

### variable DataExchangeTagList_DFAB57

```cpp
EMV_CTLS_DATA_TYPE DataExchangeTagList_DFAB57;
```

TempUpdate allowed: NO    Description: Data Exchange Tag List: a set of tags which the terminal expects to receive from the kernel during data exchange    Availability bit: [INPUT_CTLS_APL_MR_DFAB57_2]()   TLV tag: [TAG_DFAB57_MIR_DATA_EXCHANGE_TAGS]()   XML Tag: [XML_TAG_AD_MR_DFAB57_MIR_DATA_EXCHANGE_TAGS](). 

-------------------------------

Updated on 2025-06-17 at 11:52:22 +0100