---
title: EMV_CTLS_APPLIDATA_WK_STRUCT
summary: Structure for configuration of one single application, WISE specific part. 

---

# EMV_CTLS_APPLIDATA_WK_STRUCT

**Module:** **[Configuration](group___a_d_k___c_o_n_f_i_g_u_r_a_t_i_o_n.md)** **/** **[Application data](group___d_e_f___c_o_n_f___a_p_p_l_i.md)**



Structure for configuration of one single application, WISE specific part.  [More...](#detailed-description)


`#include <EMV_CTLS_Interface.h>`

## Public Attributes

|                | Name           |
| -------------- | -------------- |
| unsigned char[8] | **[IncludedData](struct_e_m_v___c_t_l_s___a_p_p_l_i_d_a_t_a___w_k___s_t_r_u_c_t.md#variable-includeddata)** <br>Availability bits, see [Appli data scheme specific - Wise - Availability bits]().  |
| unsigned char[6] | **[AcquirerIdentifier_9F01](struct_e_m_v___c_t_l_s___a_p_p_l_i_d_a_t_a___w_k___s_t_r_u_c_t.md#variable-acquireridentifier-9f01)** <br>TempUpdate allowed: NO    Description: Uniquely identifies the acquirer within each payment system.    Availability bit: [INPUT_CTLS_APL_WK_9F01_0]()   TLV tag: [TAG_9F01_ACQ_ID]()   XML Tag: [XML_TAG_AD_9F01_ACQUIRER_ID]().  |
| unsigned char[8] | **[TermIdent_9F1C](struct_e_m_v___c_t_l_s___a_p_p_l_i_d_a_t_a___w_k___s_t_r_u_c_t.md#variable-termident-9f1c)** <br>TempUpdate allowed: YES    Description: Terminal Identification    mandatory for [EMV_CTLS_SetAppliDataSchemeSpecific]()   Availability bit: [INPUT_CTLS_APL_WK_9F1C_0]()   TLV tag: [TAG_9F1C_TRM_ID](),    XML Tag: [XML_TAG_AD_9F1C_TERM_IDENT]().  |
| unsigned char[2] | **[TerminalCountryCode_9F1A](struct_e_m_v___c_t_l_s___a_p_p_l_i_d_a_t_a___w_k___s_t_r_u_c_t.md#variable-terminalcountrycode-9f1a)** <br>TempUpdate allowed: YES    Description: Terminal Country Code ISO 3166-1    Availability bit: [INPUT_CTLS_APL_WK_9F1A_0]()   TLV tag: [TAG_9F1A_TRM_COUNTRY_CODE](),    XML Tag: [XML_TAG_AD_9F1A_TERM_COUNTRY_CODE]().  |
| unsigned char | **[TerminalType_9F35](struct_e_m_v___c_t_l_s___a_p_p_l_i_d_a_t_a___w_k___s_t_r_u_c_t.md#variable-terminaltype-9f35)** <br>TempUpdate allowed: YES    Description: Terminal type, possible values see [Terminaltypes (Tag 9F35)]())    mandatory for first call of [EMV_CTLS_SetTermData()]()   Availability bit: [INPUT_CTLS_APL_WK_9F35_0]()   TLV tag: [TAG_9F35_TRM_TYPE](),    XML Tag: [XML_TAG_AD_9F35_TERM_TYPE]().  |
| unsigned char[3] | **[TerminalCapabilities_9F33](struct_e_m_v___c_t_l_s___a_p_p_l_i_d_a_t_a___w_k___s_t_r_u_c_t.md#variable-terminalcapabilities-9f33)** <br>TempUpdate allowed: YES    Description: Terminal Capabilities, may be required by the ICC in the PDOL    Availability bit: [INPUT_CTLS_APL_WK_9F33_0]()   TLV tag: [TAG_9F33_TRM_CAPABILITIES](),    XML Tag: [XML_TAG_AD_9F33_TERM_CAPS]().  |
| unsigned char[5] | **[AdditionalTerminalCapabilities_9F40](struct_e_m_v___c_t_l_s___a_p_p_l_i_d_a_t_a___w_k___s_t_r_u_c_t.md#variable-additionalterminalcapabilities-9f40)** <br>TempUpdate allowed: YES    Description: Additional Terminal Capabilities, may be required by the ICC in the PDOL    Availability bit: [INPUT_CTLS_APL_WK_9F40_0]()   TLV tag: [TAG_9F40_ADD_TRM_CAP](),    XML Tag: [XML_TAG_AD_9F40_ADD_TERM_CAPS]().  |
| unsigned char[2 *EMV_CTLS_MAX_APP_VERS] | **[VersionNumber_9F09](struct_e_m_v___c_t_l_s___a_p_p_l_i_d_a_t_a___w_k___s_t_r_u_c_t.md#variable-versionnumber-9f09)** <br>TempUpdate allowed: NO    Description: Application version number list    mandatory for [EMV_CTLS_SetAppliDataSchemeSpecific]()   Availability bit: [INPUT_CTLS_APL_WK_9F09_0]()   TLV tag: [TAG_9F09_TRM_APP_VERSION_NB](),    XML Tag: [XML_TAG_AD_9F09_VERSION_NUMBER]().  |
| unsigned char[2] | **[MerchantCategoryCode_9F15](struct_e_m_v___c_t_l_s___a_p_p_l_i_d_a_t_a___w_k___s_t_r_u_c_t.md#variable-merchantcategorycode-9f15)** <br>TempUpdate allowed: NO    Description: Merchant category code    mandatory for [EMV_CTLS_SetAppliDataSchemeSpecific]()   Availability bit: [INPUT_CTLS_APL_WK_9F15_0]()   TLV tag: [TAG_9F15_MERCH_CATEG_CODE](),    XML Tag: [XML_TAG_AD_9F15_MERCHANT_CATEGORY_CODE]().  |
| char[15+1] | **[MerchantIdentifier_9F16](struct_e_m_v___c_t_l_s___a_p_p_l_i_d_a_t_a___w_k___s_t_r_u_c_t.md#variable-merchantidentifier-9f16)** <br>TempUpdate allowed: NO    Description: Merchant Identifier    mandatory for [EMV_CTLS_SetAppliDataSchemeSpecific]()   Availability bit: [INPUT_CTLS_APL_WK_9F16_1]()   TLV tag: [TAG_9F16_MERCHANT_ID](),    XML Tag: [XML_TAG_AD_9F16_MERCHANT_ID]().  |
| char[40+1] | **[MerchantNameAndLocation_9F4E](struct_e_m_v___c_t_l_s___a_p_p_l_i_d_a_t_a___w_k___s_t_r_u_c_t.md#variable-merchantnameandlocation-9f4e)** <br>TempUpdate allowed: NO    Description: Indicates the name and location of the merchant.    Availability bit: [INPUT_CTLS_APL_WK_9F4E_1]()   TLV tag: [TAG_9F4E_TAC_MERCHANTLOC](),    XML Tag: [XML_TAG_AD_9F4E_MERCHANT_NAME_LOCATION]().  |
| unsigned char | **[TecSupport_DFAB30](struct_e_m_v___c_t_l_s___a_p_p_l_i_d_a_t_a___w_k___s_t_r_u_c_t.md#variable-tecsupport-dfab30)** <br>TempUpdate allowed: NO    Description: Specifies supported technologies, for values see [technologies used in TecSupport_DFAB30]().    Availability bit: [INPUT_CTLS_APL_WK_DFAB30_1]()   TLV tag: [TAG_DFAB30_TEC_SUPPORT]()   XML Tag: [XML_TAG_AD_DFAB30_TEC_SUPPORT]().  |
| unsigned char[5] | **[AppFlowCap_DFAB31](struct_e_m_v___c_t_l_s___a_p_p_l_i_d_a_t_a___w_k___s_t_r_u_c_t.md#variable-appflowcap-dfab31)** <br>TempUpdate allowed: YES    Description: Configure special application characteristics, see [Application flow capabilities for WISE]()   Availability bit: [INPUT_CTLS_APL_WK_DFAB31_1]()   TLV tag: [TAG_DFAB31_APP_FLOW_CAP](),    XML Tag: [XML_TAG_AD_DFAB31_APP_FLOW_CAP]().  |
| unsigned char[6] | **[ContactlessFloorLimit_DFAB40](struct_e_m_v___c_t_l_s___a_p_p_l_i_d_a_t_a___w_k___s_t_r_u_c_t.md#variable-contactlessfloorlimit-dfab40)** <br>TempUpdate allowed: NO    Description: Reader Contactless Floor Limit (n12)    Use '999999999999' to disable    Availability bit: [INPUT_CTLS_APL_WK_DFAB40_1]()   TLV tag: [TAG_DFAB40_CTLS_FLOOR_LIMIT](),    XML Tag: [XML_TAG_AD_DFAB40_CTLS_FLOOR_LIMIT]().  |
| unsigned char[6] | **[ContactlessTransactionLimit_DFAB41](struct_e_m_v___c_t_l_s___a_p_p_l_i_d_a_t_a___w_k___s_t_r_u_c_t.md#variable-contactlesstransactionlimit-dfab41)** <br>TempUpdate allowed: NO    Description: Reader Contactless Transaction Limit (n12)    Use '999999999999' to disable    Availability bit: [INPUT_CTLS_APL_WK_DFAB41_1]()   TLV tag: [TAG_DFAB41_CTLS_TRX_LIMIT](),    XML Tag: [XML_TAG_AD_DFAB41_CTLS_TRX_LIMIT]().  |
| unsigned char[6] | **[ContactlessCVMRequiredLimit_DFAB42](struct_e_m_v___c_t_l_s___a_p_p_l_i_d_a_t_a___w_k___s_t_r_u_c_t.md#variable-contactlesscvmrequiredlimit-dfab42)** <br>TempUpdate allowed: NO    Description: Reader Contactless CVM Required Limit (n12)    Use '999999999999' to disable    Availability bit: [INPUT_CTLS_APL_WK_DFAB42_1]()   TLV tag: [TAG_DFAB42_CTLS_CVM_REQ_LIMIT](),    XML Tag: [XML_TAG_AD_DFAB42_CTLS_CVM_REQ_LIMIT]().  |

## Detailed Description

```cpp
struct EMV_CTLS_APPLIDATA_WK_STRUCT;
```

Structure for configuration of one single application, WISE specific part. 

**Note**: : There is no TTQ as per Wise specification it is derived from the Terminal Capabilities 

 TTQ b1b8 Mag CTLS mode given by [EMV_CTLS_APPLIDATA_WK_STRUCT::TecSupport_DFAB30](struct_e_m_v___c_t_l_s___a_p_p_l_i_d_a_t_a___w_k___s_t_r_u_c_t.md#variable-tecsupport-dfab30)

 TTQ b1b6 EMV CTLS mode given by [EMV_CTLS_APPLIDATA_WK_STRUCT::TecSupport_DFAB30](struct_e_m_v___c_t_l_s___a_p_p_l_i_d_a_t_a___w_k___s_t_r_u_c_t.md#variable-tecsupport-dfab30)

 TTQ B1b5 EMV contact derived from 9F33 B1b6 

 TTQ B1b4 Offline-Only reader given by Terminal Type 9F35 

 TTQ B1b3 Online PIN derived from 9F33 B2b7 

 TTQ B1b2 Signature derived from 9F33 B2b6 

 TTQ B1b1 ODA derived from 9F33 B3b4 

 TTQ B2b8 ARQC required controlled by Online Switch, Transaction Type, Entry Point decision according [EMV_CTLS_APPLIDATA_WK_STRUCT::ContactlessFloorLimit_DFAB40](struct_e_m_v___c_t_l_s___a_p_p_l_i_d_a_t_a___w_k___s_t_r_u_c_t.md#variable-contactlessfloorlimit-dfab40)

 TTQ B2b7 CVM required, controlled by [CLTRXOP_CVM_REQUIRED](group___c_l_t_r_x___o_p_t_i_o_n_s.md#define-cltrxop-cvm-required), Entry Point decision according [EMV_CTLS_APPLIDATA_WK_STRUCT::ContactlessCVMRequiredLimit_DFAB42](struct_e_m_v___c_t_l_s___a_p_p_l_i_d_a_t_a___w_k___s_t_r_u_c_t.md#variable-contactlesscvmrequiredlimit-dfab42) as well as zero check and status check 

 TTQ B3b7 CD-CVM supported true unless suppressed by [EMV_CTLS_APPLIDATA_WK_STRUCT::AppFlowCap_DFAB31](struct_e_m_v___c_t_l_s___a_p_p_l_i_d_a_t_a___w_k___s_t_r_u_c_t.md#variable-appflowcap-dfab31), [EMV_CTLS_FLOW_WK_NO_CDCVM](group___d_e_f___f_l_o_w___w_k.md#define-emv-ctls-flow-wk-no-cdcvm)
## Public Attributes Documentation

### variable IncludedData

```cpp
unsigned char[8] IncludedData;
```

Availability bits, see [Appli data scheme specific - Wise - Availability bits](). 

### variable AcquirerIdentifier_9F01

```cpp
unsigned char[6] AcquirerIdentifier_9F01;
```

TempUpdate allowed: NO    Description: Uniquely identifies the acquirer within each payment system.    Availability bit: [INPUT_CTLS_APL_WK_9F01_0]()   TLV tag: [TAG_9F01_ACQ_ID]()   XML Tag: [XML_TAG_AD_9F01_ACQUIRER_ID](). 

### variable TermIdent_9F1C

```cpp
unsigned char[8] TermIdent_9F1C;
```

TempUpdate allowed: YES    Description: Terminal Identification    mandatory for [EMV_CTLS_SetAppliDataSchemeSpecific]()   Availability bit: [INPUT_CTLS_APL_WK_9F1C_0]()   TLV tag: [TAG_9F1C_TRM_ID](),    XML Tag: [XML_TAG_AD_9F1C_TERM_IDENT](). 

### variable TerminalCountryCode_9F1A

```cpp
unsigned char[2] TerminalCountryCode_9F1A;
```

TempUpdate allowed: YES    Description: Terminal Country Code ISO 3166-1    Availability bit: [INPUT_CTLS_APL_WK_9F1A_0]()   TLV tag: [TAG_9F1A_TRM_COUNTRY_CODE](),    XML Tag: [XML_TAG_AD_9F1A_TERM_COUNTRY_CODE](). 

### variable TerminalType_9F35

```cpp
unsigned char TerminalType_9F35;
```

TempUpdate allowed: YES    Description: Terminal type, possible values see [Terminaltypes (Tag 9F35)]())    mandatory for first call of [EMV_CTLS_SetTermData()]()   Availability bit: [INPUT_CTLS_APL_WK_9F35_0]()   TLV tag: [TAG_9F35_TRM_TYPE](),    XML Tag: [XML_TAG_AD_9F35_TERM_TYPE](). 

### variable TerminalCapabilities_9F33

```cpp
unsigned char[3] TerminalCapabilities_9F33;
```

TempUpdate allowed: YES    Description: Terminal Capabilities, may be required by the ICC in the PDOL    Availability bit: [INPUT_CTLS_APL_WK_9F33_0]()   TLV tag: [TAG_9F33_TRM_CAPABILITIES](),    XML Tag: [XML_TAG_AD_9F33_TERM_CAPS](). 

### variable AdditionalTerminalCapabilities_9F40

```cpp
unsigned char[5] AdditionalTerminalCapabilities_9F40;
```

TempUpdate allowed: YES    Description: Additional Terminal Capabilities, may be required by the ICC in the PDOL    Availability bit: [INPUT_CTLS_APL_WK_9F40_0]()   TLV tag: [TAG_9F40_ADD_TRM_CAP](),    XML Tag: [XML_TAG_AD_9F40_ADD_TERM_CAPS](). 

### variable VersionNumber_9F09

```cpp
unsigned char[2 *EMV_CTLS_MAX_APP_VERS] VersionNumber_9F09;
```

TempUpdate allowed: NO    Description: Application version number list    mandatory for [EMV_CTLS_SetAppliDataSchemeSpecific]()   Availability bit: [INPUT_CTLS_APL_WK_9F09_0]()   TLV tag: [TAG_9F09_TRM_APP_VERSION_NB](),    XML Tag: [XML_TAG_AD_9F09_VERSION_NUMBER](). 

### variable MerchantCategoryCode_9F15

```cpp
unsigned char[2] MerchantCategoryCode_9F15;
```

TempUpdate allowed: NO    Description: Merchant category code    mandatory for [EMV_CTLS_SetAppliDataSchemeSpecific]()   Availability bit: [INPUT_CTLS_APL_WK_9F15_0]()   TLV tag: [TAG_9F15_MERCH_CATEG_CODE](),    XML Tag: [XML_TAG_AD_9F15_MERCHANT_CATEGORY_CODE](). 

### variable MerchantIdentifier_9F16

```cpp
char[15+1] MerchantIdentifier_9F16;
```

TempUpdate allowed: NO    Description: Merchant Identifier    mandatory for [EMV_CTLS_SetAppliDataSchemeSpecific]()   Availability bit: [INPUT_CTLS_APL_WK_9F16_1]()   TLV tag: [TAG_9F16_MERCHANT_ID](),    XML Tag: [XML_TAG_AD_9F16_MERCHANT_ID](). 

### variable MerchantNameAndLocation_9F4E

```cpp
char[40+1] MerchantNameAndLocation_9F4E;
```

TempUpdate allowed: NO    Description: Indicates the name and location of the merchant.    Availability bit: [INPUT_CTLS_APL_WK_9F4E_1]()   TLV tag: [TAG_9F4E_TAC_MERCHANTLOC](),    XML Tag: [XML_TAG_AD_9F4E_MERCHANT_NAME_LOCATION](). 

### variable TecSupport_DFAB30

```cpp
unsigned char TecSupport_DFAB30;
```

TempUpdate allowed: NO    Description: Specifies supported technologies, for values see [technologies used in TecSupport_DFAB30]().    Availability bit: [INPUT_CTLS_APL_WK_DFAB30_1]()   TLV tag: [TAG_DFAB30_TEC_SUPPORT]()   XML Tag: [XML_TAG_AD_DFAB30_TEC_SUPPORT](). 

### variable AppFlowCap_DFAB31

```cpp
unsigned char[5] AppFlowCap_DFAB31;
```

TempUpdate allowed: YES    Description: Configure special application characteristics, see [Application flow capabilities for WISE]()   Availability bit: [INPUT_CTLS_APL_WK_DFAB31_1]()   TLV tag: [TAG_DFAB31_APP_FLOW_CAP](),    XML Tag: [XML_TAG_AD_DFAB31_APP_FLOW_CAP](). 

### variable ContactlessFloorLimit_DFAB40

```cpp
unsigned char[6] ContactlessFloorLimit_DFAB40;
```

TempUpdate allowed: NO    Description: Reader Contactless Floor Limit (n12)    Use '999999999999' to disable    Availability bit: [INPUT_CTLS_APL_WK_DFAB40_1]()   TLV tag: [TAG_DFAB40_CTLS_FLOOR_LIMIT](),    XML Tag: [XML_TAG_AD_DFAB40_CTLS_FLOOR_LIMIT](). 

### variable ContactlessTransactionLimit_DFAB41

```cpp
unsigned char[6] ContactlessTransactionLimit_DFAB41;
```

TempUpdate allowed: NO    Description: Reader Contactless Transaction Limit (n12)    Use '999999999999' to disable    Availability bit: [INPUT_CTLS_APL_WK_DFAB41_1]()   TLV tag: [TAG_DFAB41_CTLS_TRX_LIMIT](),    XML Tag: [XML_TAG_AD_DFAB41_CTLS_TRX_LIMIT](). 

### variable ContactlessCVMRequiredLimit_DFAB42

```cpp
unsigned char[6] ContactlessCVMRequiredLimit_DFAB42;
```

TempUpdate allowed: NO    Description: Reader Contactless CVM Required Limit (n12)    Use '999999999999' to disable    Availability bit: [INPUT_CTLS_APL_WK_DFAB42_1]()   TLV tag: [TAG_DFAB42_CTLS_CVM_REQ_LIMIT](),    XML Tag: [XML_TAG_AD_DFAB42_CTLS_CVM_REQ_LIMIT](). 

-------------------------------

Updated on 2025-06-17 at 11:52:22 +0100