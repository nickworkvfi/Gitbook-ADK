---
title: EMV_CTLS_APPLIDATA_BK_STRUCT
summary: Structure for configuration of one single application, CPACE specific part. 

---

# EMV_CTLS_APPLIDATA_BK_STRUCT

**Module:** **[Configuration](group___a_d_k___c_o_n_f_i_g_u_r_a_t_i_o_n.md)** **/** **[Application data](group___d_e_f___c_o_n_f___a_p_p_l_i.md)**



Structure for configuration of one single application, CPACE specific part. 


`#include <EMV_CTLS_Interface.h>`

## Public Attributes

|                | Name           |
| -------------- | -------------- |
| unsigned char[8] | **[IncludedData](struct_e_m_v___c_t_l_s___a_p_p_l_i_d_a_t_a___b_k___s_t_r_u_c_t.md#variable-includeddata)** <br>Availability bits, see [Appli data scheme specific - Wise - Availability bits]().  |
| unsigned char[8] | **[TermIdent_9F1C](struct_e_m_v___c_t_l_s___a_p_p_l_i_d_a_t_a___b_k___s_t_r_u_c_t.md#variable-termident-9f1c)** <br>TempUpdate allowed: YES    Description: Terminal Identification.    mandatory for [EMV_CTLS_SetAppliDataSchemeSpecific]()   Availability bit: [INPUT_CTLS_APL_BK_9F1C_0]()   TLV tag: [TAG_9F1C_TRM_ID](),    XML Tag: [XML_TAG_AD_9F1C_TERM_IDENT]().  |
| unsigned char[2] | **[TerminalCountryCode_9F1A](struct_e_m_v___c_t_l_s___a_p_p_l_i_d_a_t_a___b_k___s_t_r_u_c_t.md#variable-terminalcountrycode-9f1a)** <br>TempUpdate allowed: YES    Description: Terminal Country Code ISO 3166-1    Availability bit: [INPUT_CTLS_APL_BK_9F1A_0]()   TLV tag: [TAG_9F1A_TRM_COUNTRY_CODE](),    XML Tag: [XML_TAG_AD_9F1A_TERM_COUNTRY_CODE]().  |
| unsigned char | **[TerminalType_9F35](struct_e_m_v___c_t_l_s___a_p_p_l_i_d_a_t_a___b_k___s_t_r_u_c_t.md#variable-terminaltype-9f35)** <br>TempUpdate allowed: YES    Description: Terminal type, possible values see [Terminaltypes (Tag 9F35)]())    Availability bit: [INPUT_CTLS_APL_BK_9F35_0]()   TLV tag: [TAG_9F35_TRM_TYPE](),    XML Tag: [XML_TAG_AD_9F35_TERM_TYPE]().  |
| unsigned char[3] | **[TerminalCapabilities_9F33](struct_e_m_v___c_t_l_s___a_p_p_l_i_d_a_t_a___b_k___s_t_r_u_c_t.md#variable-terminalcapabilities-9f33)** <br>TempUpdate allowed: YES    Description: Terminal Capabilities, may be required by the ICC in the PDOL    Availability bit: [INPUT_CTLS_APL_BK_9F33_0]()   TLV tag: [TAG_9F33_TRM_CAPABILITIES](),    XML Tag: [XML_TAG_AD_9F33_TERM_CAPS]().  |
| unsigned char[5] | **[AdditionalTerminalCapabilities_9F40](struct_e_m_v___c_t_l_s___a_p_p_l_i_d_a_t_a___b_k___s_t_r_u_c_t.md#variable-additionalterminalcapabilities-9f40)** <br>TempUpdate allowed: YES    Description: Additional Terminal Capabilities, may be required by the ICC in the PDOL    Availability bit: [INPUT_CTLS_APL_BK_9F40_0]()   TLV tag: [TAG_9F40_ADD_TRM_CAP](),    XML Tag: [XML_TAG_AD_9F40_ADD_TERM_CAPS]().  |
| unsigned char[2 *EMV_CTLS_MAX_APP_VERS] | **[VersionNumber_9F09](struct_e_m_v___c_t_l_s___a_p_p_l_i_d_a_t_a___b_k___s_t_r_u_c_t.md#variable-versionnumber-9f09)** <br>TempUpdate allowed: NO    Description: Application version number list    Availability bit: [INPUT_CTLS_APL_BK_9F09_0]()   TLV tag: [TAG_9F09_TRM_APP_VERSION_NB](),    XML Tag: [XML_TAG_AD_9F09_VERSION_NUMBER]().  |
| unsigned char[2] | **[MerchantCategoryCode_9F15](struct_e_m_v___c_t_l_s___a_p_p_l_i_d_a_t_a___b_k___s_t_r_u_c_t.md#variable-merchantcategorycode-9f15)** <br>TempUpdate allowed: NO    Description: Merchant category code    Availability bit: [INPUT_CTLS_APL_BK_9F15_0]()   TLV tag: [TAG_9F15_MERCH_CATEG_CODE](),    XML Tag: [XML_TAG_AD_9F15_MERCHANT_CATEGORY_CODE]().  |
| char[15+1] | **[MerchantIdentifier_9F16](struct_e_m_v___c_t_l_s___a_p_p_l_i_d_a_t_a___b_k___s_t_r_u_c_t.md#variable-merchantidentifier-9f16)** <br>TempUpdate allowed: NO    Description: Merchant Identifier    Availability bit: [INPUT_CTLS_APL_BK_9F16_0]()   TLV tag: [TAG_9F16_MERCHANT_ID](),    XML Tag: [XML_TAG_AD_9F16_MERCHANT_ID]().  |
| char[40+1] | **[MerchantNameAndLocation_9F4E](struct_e_m_v___c_t_l_s___a_p_p_l_i_d_a_t_a___b_k___s_t_r_u_c_t.md#variable-merchantnameandlocation-9f4e)** <br>TempUpdate allowed: NO    Description: Indicates the name and location of the merchant.    Availability bit: [INPUT_CTLS_APL_BK_9F4E_1]()   TLV tag: [TAG_9F4E_TAC_MERCHANTLOC](),    XML Tag: [XML_TAG_AD_9F4E_MERCHANT_NAME_LOCATION]().  |
| unsigned char[6] | **[AcquirerIdentifier_9F01](struct_e_m_v___c_t_l_s___a_p_p_l_i_d_a_t_a___b_k___s_t_r_u_c_t.md#variable-acquireridentifier-9f01)** <br>TempUpdate allowed: NO    Description: Uniquely identifies the acquirer within each payment system.    Availability bit: [INPUT_CTLS_APL_BK_9F01_1]()   TLV tag: [TAG_9F01_ACQ_ID]()   XML Tag: [XML_TAG_AD_9F01_ACQUIRER_ID]().  |
| unsigned char[5] | **[AppFlowCap_DFAB31](struct_e_m_v___c_t_l_s___a_p_p_l_i_d_a_t_a___b_k___s_t_r_u_c_t.md#variable-appflowcap-dfab31)** <br>TempUpdate allowed: YES    Description: Configure special application characteristics, see [Application flow capabilities for CPACE]()   Availability bit: [INPUT_CTLS_APL_BK_DFAB31_1]()   TLV tag: [TAG_DFAB31_APP_FLOW_CAP](),    XML Tag: [XML_TAG_AD_DFAB31_APP_FLOW_CAP]().  |
| unsigned char | **[CVM_aboveLimit_DF8118](struct_e_m_v___c_t_l_s___a_p_p_l_i_d_a_t_a___b_k___s_t_r_u_c_t.md#variable-cvm-abovelimit-df8118)** <br>TempUpdate allowed: YES    Description: Separate cardholder verification methods for transactions above the CVM limit (former Byte 2 of 9F33)    Availability bit: [INPUT_CTLS_APL_BK_DF8118_1]()   TLV tag: [TAG_DF8118_CVM_CAPABILITY__CVM_REQUIRED](),    XML Tag: [XML_TAG_AD_DF8118_CVM_ABOVE_LIMIT]().  |
| unsigned char | **[CVM_belowLimit_DF8119](struct_e_m_v___c_t_l_s___a_p_p_l_i_d_a_t_a___b_k___s_t_r_u_c_t.md#variable-cvm-belowlimit-df8119)** <br>TempUpdate allowed: YES    Description: Separate cardholder verification methods for transactions below the CVM limit (former Byte 2 of 9F33)    Availability bit: [INPUT_CTLS_APL_BK_DF8119_1]()   TLV tag: [TAG_DF8119_CVM_CAPABILITY__NO_CVM_REQUIRED](),    XML Tag: [XML_TAG_APPLIDATA_CHIP_CVM_BELOW]().  |
| unsigned char | **[KernelConfiguration_DF811B](struct_e_m_v___c_t_l_s___a_p_p_l_i_d_a_t_a___b_k___s_t_r_u_c_t.md#variable-kernelconfiguration-df811b)** <br>TempUpdate allowed: NO    Description: Indicates the Kernel configuration options.    Availability bit: [INPUT_CTLS_APL_BK_DF811B_1]()   TLV tag: [TAG_DF811B_KERNEL_CONFIGURATION]()   XML Tag: [XML_TAG_AD_MK_DF811B_KERNEL_CONFIG]().  |
| unsigned char[5] | **[TACDefault_DF8120](struct_e_m_v___c_t_l_s___a_p_p_l_i_d_a_t_a___b_k___s_t_r_u_c_t.md#variable-tacdefault-df8120)** <br>TempUpdate allowed: YES    Description: Terminal Action Code - Default    Availability bit: [INPUT_CTLS_APL_BK_DF8120_1]()   TLV tag: [TAG_DF8120_TAC_DEFAULT](),    XML Tag: [XML_TAG_AD_MK_DF8120_TAC_DEFAULT]().  |
| unsigned char[5] | **[TACDenial_DF8121](struct_e_m_v___c_t_l_s___a_p_p_l_i_d_a_t_a___b_k___s_t_r_u_c_t.md#variable-tacdenial-df8121)** <br>TempUpdate allowed: YES    Description: Terminal Action Code - Denial    Availability bit: [INPUT_CTLS_APL_BK_DF8121_1]()   TLV tag: [TAG_DF8121_TAC_DENIAL](),    XML Tag: [XML_TAG_AD_MK_DF8121_TAC_DENIAL]().  |
| unsigned char[5] | **[TACOnline_DF8122](struct_e_m_v___c_t_l_s___a_p_p_l_i_d_a_t_a___b_k___s_t_r_u_c_t.md#variable-taconline-df8122)** <br>TempUpdate allowed: YES    Description: Terminal Action Code - Online    Availability bit: [INPUT_CTLS_APL_BK_DF8122_2]()   TLV tag: [TAG_DF8122_TAC_ONLINE](),    XML Tag: [XML_TAG_AD_MK_DF8122_TAC_ONLINE]().  |
| unsigned char[6] | **[FloorLimit_DF8123](struct_e_m_v___c_t_l_s___a_p_p_l_i_d_a_t_a___b_k___s_t_r_u_c_t.md#variable-floorlimit-df8123)** <br>TempUpdate allowed: YES    Description: Reader Contactless Floor Limit (n12)    Use '999999999999' to disable.    Availability bit: [INPUT_CTLS_APL_BK_DF8123_2]()   TLV tag: [TAG_DF8123_FLOOR_LIMIT](),    XML Tag: [XML_TAG_AD_MK_DF8123_FLOOR_LIMIT]().  |
| unsigned char[6] | **[TransactionLimitNoCDCVM_DF8124](struct_e_m_v___c_t_l_s___a_p_p_l_i_d_a_t_a___b_k___s_t_r_u_c_t.md#variable-transactionlimitnocdcvm-df8124)** <br>TempUpdate allowed: YES    Description: Contactless Transaction Limit - CDCVM not supported (n12)    Availability bit: [INPUT_CTLS_APL_BK_DF8124_2]()   TLV tag [TAG_DF8124_READER_CTLS_TRX_LIMIT__NO_ON_DEV_CVM](),    XML Tag: [XML_TAG_AD_DF8124_TRX_LIMIT_NO_CDCVM]().  |
| unsigned char[6] | **[TransactionLimitCDCVM_DF8125](struct_e_m_v___c_t_l_s___a_p_p_l_i_d_a_t_a___b_k___s_t_r_u_c_t.md#variable-transactionlimitcdcvm-df8125)** <br>TempUpdate allowed: YES    Description: Contactless Transaction Limit - CDCVM supported (n12)    Availability bit: [INPUT_CTLS_APL_BK_DF8125_2]()   TLV tag [TAG_DF8125_READER_CTLS_TRX_LIMIT__ON_DEVICE_CVM](),    XML Tag: [XML_TAG_AD_DF8125_TRX_LIMIT_CDCVM]().  |
| unsigned char[6] | **[CVMRequiredLimit_DF8126](struct_e_m_v___c_t_l_s___a_p_p_l_i_d_a_t_a___b_k___s_t_r_u_c_t.md#variable-cvmrequiredlimit-df8126)** <br>TempUpdate allowed: YES    Description: Reader CVM Required Limit (n12)    Availability bit: [INPUT_CTLS_APL_BK_DF8126_2]()   TLV tag: [TAG_DF8126_CVM_REQUIRED_LIMIT](),    XML Tag: [XML_TAG_AD_MK_DF8126_CVM_REQUIRED_LIMIT]().  |
| unsigned char[3] | **[MessageHoldTime_DF812D](struct_e_m_v___c_t_l_s___a_p_p_l_i_d_a_t_a___b_k___s_t_r_u_c_t.md#variable-messageholdtime-df812d)** <br>TempUpdate allowed: NO    Description: Indicates the default delay for the processing of the next MSG Signal. The Message Hold Time is an integer in units of 100ms.    Availability bit: [INPUT_CTLS_APL_BK_DF812D_2]()   TLV tag: [TAG_DF812D_MESSAGE_HOLD_TIME]()   XML Tag: [XML_TAG_AD_MK_DF812D_MESSAGE_HOLD_TIME]().  |
| [EMV_CTLS_DATA_TYPE](_e_m_v___c_t_l_s___interface_8h.md#typedef-emv-ctls-data-type) | **[CHV_CS_MessageTable_DF8131](struct_e_m_v___c_t_l_s___a_p_p_l_i_d_a_t_a___b_k___s_t_r_u_c_t.md#variable-chv-cs-messagetable-df8131)** <br>TempUpdate allowed: NO    Description: CPACE Cardholder Verification and Confirmation Status Message Table, up to 20 entries of each 5 byte: Mask[3], UI Status, UI Message    Availability bit: [INPUT_CTLS_APL_BK_DF8131_2]()   TLV tag [TAG_DF8131_PHONE_MSG_TABLE](),    XML Tag: [XML_TAG_AD_MK_DF8131_PHONE_MSG_TABLE]().  |
| unsigned char[2] | **[RR_TimeToleranceMin_DF8132](struct_e_m_v___c_t_l_s___a_p_p_l_i_d_a_t_a___b_k___s_t_r_u_c_t.md#variable-rr-timetolerancemin-df8132)** <br>TempUpdate allowed: YES    Description: Minimal Time Relay Resistance Tolerance [1/10 ms]    TLV tag [TAG_DF8132_RR_MIN_GRACE_PERIOD]()   Availability bit: [INPUT_CTLS_APL_BK_DF8132_2](),    XML Tag: [XML_TAG_AD_MK_DF8132_RR_MIN_GRACE_PERIOD]().  |
| unsigned char[2] | **[RR_TimeToleranceMax_DF8133](struct_e_m_v___c_t_l_s___a_p_p_l_i_d_a_t_a___b_k___s_t_r_u_c_t.md#variable-rr-timetolerancemax-df8133)** <br>TempUpdate allowed: YES    Description: Maximal Time Relay Resistance Tolerance [1/10 ms]    TLV tag [TAG_DF8133_RR_MAX_GRACE_PERIOD]()   Availability bit: [INPUT_CTLS_APL_BK_DF8133_3](),    XML Tag: [XML_TAG_AD_MK_DF8133_RR_MAX_GRACE_PREIOD]().  |
| unsigned char[2] | **[RR_TransmissionTime_CAPDU_DF8134](struct_e_m_v___c_t_l_s___a_p_p_l_i_d_a_t_a___b_k___s_t_r_u_c_t.md#variable-rr-transmissiontime-capdu-df8134)** <br>TempUpdate allowed: YES    Description: Terminal Transmission Time For Relay Resistance Command [1/10 ms]    TLV tag [TAG_DF8134_RR_TERM_EXPECTED_TRANS_TIME_CAPDU]()   Availability bit: [INPUT_CTLS_APL_BK_DF8134_3](),    XML Tag: [XML_TAG_AD_MK_DF8134_RR_EXP_TRANS_TIME_CAPDU]().  |
| unsigned char[2] | **[RR_TransmissionTime_RAPDU_DF8135](struct_e_m_v___c_t_l_s___a_p_p_l_i_d_a_t_a___b_k___s_t_r_u_c_t.md#variable-rr-transmissiontime-rapdu-df8135)** <br>TempUpdate allowed: YES    Description: Terminal Transmission Time For Relay Resistance Response [1/10 ms]    TLV tag [TAG_DF8135_RR_TERM_EXPECTED_TRANS_TIME_RAPDU]()   Availability bit: [INPUT_CTLS_APL_BK_DF8135_3](),    XML Tag: [XML_TAG_AD_MK_DF8135_RR_EXP_TRANS_TIME_RAPDU]().  |
| unsigned char[2] | **[RR_MinTimeDifferenceLimit_DF8136](struct_e_m_v___c_t_l_s___a_p_p_l_i_d_a_t_a___b_k___s_t_r_u_c_t.md#variable-rr-mintimedifferencelimit-df8136)** <br>TempUpdate allowed: YES    Description: Relay Resistance Minimal Time Difference Limit [1/10 ms]    TLV tag [TAG_DF8136_RR_ACCURACY_THRESHOLD]()   Availability bit: [INPUT_CTLS_APL_BK_DF8136_3](),    XML Tag: [XML_TAG_AD_MK_DF8136_RR_ACCURACY_THRESHOLD]().  |
| unsigned char | **[RR_TransTimeMismatchLimit_DF8137](struct_e_m_v___c_t_l_s___a_p_p_l_i_d_a_t_a___b_k___s_t_r_u_c_t.md#variable-rr-transtimemismatchlimit-df8137)** <br>TempUpdate allowed: YES    Description: Relay Resistance Transmission Time Mismatch Limit [%]    TLV tag [TAG_DF8137_RR_TRANS_TIME_MISMATCH_THRESHOLD]()   Availability bit: [INPUT_CTLS_APL_BK_DF8137_3](),    XML Tag: [XML_TAG_AD_MK_DF8137_RR_TT_MISMATCH_THRESHOLD]().  |

## Public Attributes Documentation

### variable IncludedData

```cpp
unsigned char[8] IncludedData;
```

Availability bits, see [Appli data scheme specific - Wise - Availability bits](). 

### variable TermIdent_9F1C

```cpp
unsigned char[8] TermIdent_9F1C;
```

TempUpdate allowed: YES    Description: Terminal Identification.    mandatory for [EMV_CTLS_SetAppliDataSchemeSpecific]()   Availability bit: [INPUT_CTLS_APL_BK_9F1C_0]()   TLV tag: [TAG_9F1C_TRM_ID](),    XML Tag: [XML_TAG_AD_9F1C_TERM_IDENT](). 

### variable TerminalCountryCode_9F1A

```cpp
unsigned char[2] TerminalCountryCode_9F1A;
```

TempUpdate allowed: YES    Description: Terminal Country Code ISO 3166-1    Availability bit: [INPUT_CTLS_APL_BK_9F1A_0]()   TLV tag: [TAG_9F1A_TRM_COUNTRY_CODE](),    XML Tag: [XML_TAG_AD_9F1A_TERM_COUNTRY_CODE](). 

### variable TerminalType_9F35

```cpp
unsigned char TerminalType_9F35;
```

TempUpdate allowed: YES    Description: Terminal type, possible values see [Terminaltypes (Tag 9F35)]())    Availability bit: [INPUT_CTLS_APL_BK_9F35_0]()   TLV tag: [TAG_9F35_TRM_TYPE](),    XML Tag: [XML_TAG_AD_9F35_TERM_TYPE](). 

### variable TerminalCapabilities_9F33

```cpp
unsigned char[3] TerminalCapabilities_9F33;
```

TempUpdate allowed: YES    Description: Terminal Capabilities, may be required by the ICC in the PDOL    Availability bit: [INPUT_CTLS_APL_BK_9F33_0]()   TLV tag: [TAG_9F33_TRM_CAPABILITIES](),    XML Tag: [XML_TAG_AD_9F33_TERM_CAPS](). 

### variable AdditionalTerminalCapabilities_9F40

```cpp
unsigned char[5] AdditionalTerminalCapabilities_9F40;
```

TempUpdate allowed: YES    Description: Additional Terminal Capabilities, may be required by the ICC in the PDOL    Availability bit: [INPUT_CTLS_APL_BK_9F40_0]()   TLV tag: [TAG_9F40_ADD_TRM_CAP](),    XML Tag: [XML_TAG_AD_9F40_ADD_TERM_CAPS](). 

### variable VersionNumber_9F09

```cpp
unsigned char[2 *EMV_CTLS_MAX_APP_VERS] VersionNumber_9F09;
```

TempUpdate allowed: NO    Description: Application version number list    Availability bit: [INPUT_CTLS_APL_BK_9F09_0]()   TLV tag: [TAG_9F09_TRM_APP_VERSION_NB](),    XML Tag: [XML_TAG_AD_9F09_VERSION_NUMBER](). 

### variable MerchantCategoryCode_9F15

```cpp
unsigned char[2] MerchantCategoryCode_9F15;
```

TempUpdate allowed: NO    Description: Merchant category code    Availability bit: [INPUT_CTLS_APL_BK_9F15_0]()   TLV tag: [TAG_9F15_MERCH_CATEG_CODE](),    XML Tag: [XML_TAG_AD_9F15_MERCHANT_CATEGORY_CODE](). 

### variable MerchantIdentifier_9F16

```cpp
char[15+1] MerchantIdentifier_9F16;
```

TempUpdate allowed: NO    Description: Merchant Identifier    Availability bit: [INPUT_CTLS_APL_BK_9F16_0]()   TLV tag: [TAG_9F16_MERCHANT_ID](),    XML Tag: [XML_TAG_AD_9F16_MERCHANT_ID](). 

### variable MerchantNameAndLocation_9F4E

```cpp
char[40+1] MerchantNameAndLocation_9F4E;
```

TempUpdate allowed: NO    Description: Indicates the name and location of the merchant.    Availability bit: [INPUT_CTLS_APL_BK_9F4E_1]()   TLV tag: [TAG_9F4E_TAC_MERCHANTLOC](),    XML Tag: [XML_TAG_AD_9F4E_MERCHANT_NAME_LOCATION](). 

### variable AcquirerIdentifier_9F01

```cpp
unsigned char[6] AcquirerIdentifier_9F01;
```

TempUpdate allowed: NO    Description: Uniquely identifies the acquirer within each payment system.    Availability bit: [INPUT_CTLS_APL_BK_9F01_1]()   TLV tag: [TAG_9F01_ACQ_ID]()   XML Tag: [XML_TAG_AD_9F01_ACQUIRER_ID](). 

### variable AppFlowCap_DFAB31

```cpp
unsigned char[5] AppFlowCap_DFAB31;
```

TempUpdate allowed: YES    Description: Configure special application characteristics, see [Application flow capabilities for CPACE]()   Availability bit: [INPUT_CTLS_APL_BK_DFAB31_1]()   TLV tag: [TAG_DFAB31_APP_FLOW_CAP](),    XML Tag: [XML_TAG_AD_DFAB31_APP_FLOW_CAP](). 

### variable CVM_aboveLimit_DF8118

```cpp
unsigned char CVM_aboveLimit_DF8118;
```

TempUpdate allowed: YES    Description: Separate cardholder verification methods for transactions above the CVM limit (former Byte 2 of 9F33)    Availability bit: [INPUT_CTLS_APL_BK_DF8118_1]()   TLV tag: [TAG_DF8118_CVM_CAPABILITY__CVM_REQUIRED](),    XML Tag: [XML_TAG_AD_DF8118_CVM_ABOVE_LIMIT](). 

### variable CVM_belowLimit_DF8119

```cpp
unsigned char CVM_belowLimit_DF8119;
```

TempUpdate allowed: YES    Description: Separate cardholder verification methods for transactions below the CVM limit (former Byte 2 of 9F33)    Availability bit: [INPUT_CTLS_APL_BK_DF8119_1]()   TLV tag: [TAG_DF8119_CVM_CAPABILITY__NO_CVM_REQUIRED](),    XML Tag: [XML_TAG_APPLIDATA_CHIP_CVM_BELOW](). 

### variable KernelConfiguration_DF811B

```cpp
unsigned char KernelConfiguration_DF811B;
```

TempUpdate allowed: NO    Description: Indicates the Kernel configuration options.    Availability bit: [INPUT_CTLS_APL_BK_DF811B_1]()   TLV tag: [TAG_DF811B_KERNEL_CONFIGURATION]()   XML Tag: [XML_TAG_AD_MK_DF811B_KERNEL_CONFIG](). 

### variable TACDefault_DF8120

```cpp
unsigned char[5] TACDefault_DF8120;
```

TempUpdate allowed: YES    Description: Terminal Action Code - Default    Availability bit: [INPUT_CTLS_APL_BK_DF8120_1]()   TLV tag: [TAG_DF8120_TAC_DEFAULT](),    XML Tag: [XML_TAG_AD_MK_DF8120_TAC_DEFAULT](). 

### variable TACDenial_DF8121

```cpp
unsigned char[5] TACDenial_DF8121;
```

TempUpdate allowed: YES    Description: Terminal Action Code - Denial    Availability bit: [INPUT_CTLS_APL_BK_DF8121_1]()   TLV tag: [TAG_DF8121_TAC_DENIAL](),    XML Tag: [XML_TAG_AD_MK_DF8121_TAC_DENIAL](). 

### variable TACOnline_DF8122

```cpp
unsigned char[5] TACOnline_DF8122;
```

TempUpdate allowed: YES    Description: Terminal Action Code - Online    Availability bit: [INPUT_CTLS_APL_BK_DF8122_2]()   TLV tag: [TAG_DF8122_TAC_ONLINE](),    XML Tag: [XML_TAG_AD_MK_DF8122_TAC_ONLINE](). 

### variable FloorLimit_DF8123

```cpp
unsigned char[6] FloorLimit_DF8123;
```

TempUpdate allowed: YES    Description: Reader Contactless Floor Limit (n12)    Use '999999999999' to disable.    Availability bit: [INPUT_CTLS_APL_BK_DF8123_2]()   TLV tag: [TAG_DF8123_FLOOR_LIMIT](),    XML Tag: [XML_TAG_AD_MK_DF8123_FLOOR_LIMIT](). 

### variable TransactionLimitNoCDCVM_DF8124

```cpp
unsigned char[6] TransactionLimitNoCDCVM_DF8124;
```

TempUpdate allowed: YES    Description: Contactless Transaction Limit - CDCVM not supported (n12)    Availability bit: [INPUT_CTLS_APL_BK_DF8124_2]()   TLV tag [TAG_DF8124_READER_CTLS_TRX_LIMIT__NO_ON_DEV_CVM](),    XML Tag: [XML_TAG_AD_DF8124_TRX_LIMIT_NO_CDCVM](). 

### variable TransactionLimitCDCVM_DF8125

```cpp
unsigned char[6] TransactionLimitCDCVM_DF8125;
```

TempUpdate allowed: YES    Description: Contactless Transaction Limit - CDCVM supported (n12)    Availability bit: [INPUT_CTLS_APL_BK_DF8125_2]()   TLV tag [TAG_DF8125_READER_CTLS_TRX_LIMIT__ON_DEVICE_CVM](),    XML Tag: [XML_TAG_AD_DF8125_TRX_LIMIT_CDCVM](). 

### variable CVMRequiredLimit_DF8126

```cpp
unsigned char[6] CVMRequiredLimit_DF8126;
```

TempUpdate allowed: YES    Description: Reader CVM Required Limit (n12)    Availability bit: [INPUT_CTLS_APL_BK_DF8126_2]()   TLV tag: [TAG_DF8126_CVM_REQUIRED_LIMIT](),    XML Tag: [XML_TAG_AD_MK_DF8126_CVM_REQUIRED_LIMIT](). 

### variable MessageHoldTime_DF812D

```cpp
unsigned char[3] MessageHoldTime_DF812D;
```

TempUpdate allowed: NO    Description: Indicates the default delay for the processing of the next MSG Signal. The Message Hold Time is an integer in units of 100ms.    Availability bit: [INPUT_CTLS_APL_BK_DF812D_2]()   TLV tag: [TAG_DF812D_MESSAGE_HOLD_TIME]()   XML Tag: [XML_TAG_AD_MK_DF812D_MESSAGE_HOLD_TIME](). 

### variable CHV_CS_MessageTable_DF8131

```cpp
EMV_CTLS_DATA_TYPE CHV_CS_MessageTable_DF8131;
```

TempUpdate allowed: NO    Description: CPACE Cardholder Verification and Confirmation Status Message Table, up to 20 entries of each 5 byte: Mask[3], UI Status, UI Message    Availability bit: [INPUT_CTLS_APL_BK_DF8131_2]()   TLV tag [TAG_DF8131_PHONE_MSG_TABLE](),    XML Tag: [XML_TAG_AD_MK_DF8131_PHONE_MSG_TABLE](). 

### variable RR_TimeToleranceMin_DF8132

```cpp
unsigned char[2] RR_TimeToleranceMin_DF8132;
```

TempUpdate allowed: YES    Description: Minimal Time Relay Resistance Tolerance [1/10 ms]    TLV tag [TAG_DF8132_RR_MIN_GRACE_PERIOD]()   Availability bit: [INPUT_CTLS_APL_BK_DF8132_2](),    XML Tag: [XML_TAG_AD_MK_DF8132_RR_MIN_GRACE_PERIOD](). 

### variable RR_TimeToleranceMax_DF8133

```cpp
unsigned char[2] RR_TimeToleranceMax_DF8133;
```

TempUpdate allowed: YES    Description: Maximal Time Relay Resistance Tolerance [1/10 ms]    TLV tag [TAG_DF8133_RR_MAX_GRACE_PERIOD]()   Availability bit: [INPUT_CTLS_APL_BK_DF8133_3](),    XML Tag: [XML_TAG_AD_MK_DF8133_RR_MAX_GRACE_PREIOD](). 

### variable RR_TransmissionTime_CAPDU_DF8134

```cpp
unsigned char[2] RR_TransmissionTime_CAPDU_DF8134;
```

TempUpdate allowed: YES    Description: Terminal Transmission Time For Relay Resistance Command [1/10 ms]    TLV tag [TAG_DF8134_RR_TERM_EXPECTED_TRANS_TIME_CAPDU]()   Availability bit: [INPUT_CTLS_APL_BK_DF8134_3](),    XML Tag: [XML_TAG_AD_MK_DF8134_RR_EXP_TRANS_TIME_CAPDU](). 

### variable RR_TransmissionTime_RAPDU_DF8135

```cpp
unsigned char[2] RR_TransmissionTime_RAPDU_DF8135;
```

TempUpdate allowed: YES    Description: Terminal Transmission Time For Relay Resistance Response [1/10 ms]    TLV tag [TAG_DF8135_RR_TERM_EXPECTED_TRANS_TIME_RAPDU]()   Availability bit: [INPUT_CTLS_APL_BK_DF8135_3](),    XML Tag: [XML_TAG_AD_MK_DF8135_RR_EXP_TRANS_TIME_RAPDU](). 

### variable RR_MinTimeDifferenceLimit_DF8136

```cpp
unsigned char[2] RR_MinTimeDifferenceLimit_DF8136;
```

TempUpdate allowed: YES    Description: Relay Resistance Minimal Time Difference Limit [1/10 ms]    TLV tag [TAG_DF8136_RR_ACCURACY_THRESHOLD]()   Availability bit: [INPUT_CTLS_APL_BK_DF8136_3](),    XML Tag: [XML_TAG_AD_MK_DF8136_RR_ACCURACY_THRESHOLD](). 

### variable RR_TransTimeMismatchLimit_DF8137

```cpp
unsigned char RR_TransTimeMismatchLimit_DF8137;
```

TempUpdate allowed: YES    Description: Relay Resistance Transmission Time Mismatch Limit [%]    TLV tag [TAG_DF8137_RR_TRANS_TIME_MISMATCH_THRESHOLD]()   Availability bit: [INPUT_CTLS_APL_BK_DF8137_3](),    XML Tag: [XML_TAG_AD_MK_DF8137_RR_TT_MISMATCH_THRESHOLD](). 

-------------------------------

Updated on 2025-06-17 at 11:52:22 +0100