---
title: EMV_CTLS_APPLIDATA_DK_STRUCT
summary: Structure for configuration of one single application, DK specific part. See see Book C-6, Kernel 6 Specification at [EMVCo Homepage]. See EMV_CTLS_SetAppliDataSchemeSpecific()

---

# EMV_CTLS_APPLIDATA_DK_STRUCT

**Module:** **[Configuration](group___a_d_k___c_o_n_f_i_g_u_r_a_t_i_o_n.md)** **/** **[Application data](group___d_e_f___c_o_n_f___a_p_p_l_i.md)**



Structure for configuration of one single application, DK specific part. See see Book C-6, Kernel 6 Specification at [[EMVCo Homepage]](http://www.emvco.com/). See [EMV_CTLS_SetAppliDataSchemeSpecific()]()


`#include <EMV_CTLS_Interface.h>`

## Public Attributes

|                | Name           |
| -------------- | -------------- |
| unsigned char[8] | **[IncludedData](struct_e_m_v___c_t_l_s___a_p_p_l_i_d_a_t_a___d_k___s_t_r_u_c_t.md#variable-includeddata)** <br>Availability bits, see [Appli data scheme specific - Discover - Availability bits]().  |
| unsigned char[8] | **[TermIdent_9F1C](struct_e_m_v___c_t_l_s___a_p_p_l_i_d_a_t_a___d_k___s_t_r_u_c_t.md#variable-termident-9f1c)** <br>TempUpdate allowed: YES    Description: Terminal Identification    mandatory for [EMV_CTLS_SetAppliDataSchemeSpecific]()   Availability bit: [INPUT_CTLS_APL_DK_9F1C_0]()   TLV tag: [TAG_9F1C_TRM_ID](),    XML Tag: [XML_TAG_AD_DK_9F1C_TERM_IDENT]().  |
| unsigned char[2] | **[TerminalCountryCode_9F1A](struct_e_m_v___c_t_l_s___a_p_p_l_i_d_a_t_a___d_k___s_t_r_u_c_t.md#variable-terminalcountrycode-9f1a)** <br>TempUpdate allowed: YES    Description: "Terminal country code" (e.g. VISA Germany 0276)    Availability bit: [INPUT_CTLS_APL_DK_9F1A_0]()   TLV tag: [TAG_9F1A_TRM_COUNTRY_CODE](),    XML Tag: [XML_TAG_AD_DK_9F1A_TERM_COUNTRY_CODE]().  |
| unsigned char | **[TerminalType_9F35](struct_e_m_v___c_t_l_s___a_p_p_l_i_d_a_t_a___d_k___s_t_r_u_c_t.md#variable-terminaltype-9f35)** <br>TempUpdate allowed: YES    Description: Terminal type, possible values see [Terminaltypes (Tag 9F35)]())    mandatory for first call of [EMV_CTLS_SetTermData()]()   Availability bit: [INPUT_CTLS_APL_DK_9F35_0]()   TLV tag: [TAG_9F35_TRM_TYPE](),    XML Tag: [XML_TAG_AD_DK_9F35_TERM_TYPE]().  |
| unsigned char[4] | **[TerminalTransactionQualifier_9F66](struct_e_m_v___c_t_l_s___a_p_p_l_i_d_a_t_a___d_k___s_t_r_u_c_t.md#variable-terminaltransactionqualifier-9f66)** <br>TempUpdate allowed: YES    Description: Visa-defined Terminal Transaction Qualifiers    Availability bit: [INPUT_CTLS_APL_DK_9F66_0]()   TLV tag: [TAG_9F66_TTQ](),    XML Tag: [XML_TAG_AD_DK_9F66_TERM_TRX_QUALIFIER]().  |
| unsigned char[3] | **[TerminalCapabilities_9F33](struct_e_m_v___c_t_l_s___a_p_p_l_i_d_a_t_a___d_k___s_t_r_u_c_t.md#variable-terminalcapabilities-9f33)** <br>TempUpdate allowed: YES    Description: "terminal capabilities" for this application, for PayPass 3 the tags DF81xx, DF81yy, DF81zz are filled with these 3 byte, for VISA this is used for host compliancy only, for Amex in accordance with tag 9F6E,    Availability bit: [INPUT_CTLS_APL_DK_9F33_0]()   TLV tag: [TAG_9F33_TRM_CAPABILITIES](),    XML Tag: [XML_TAG_AD_DK_9F33_TERM_CAPS]().  |
| unsigned char[5] | **[AdditionalTerminalCapabilities_9F40](struct_e_m_v___c_t_l_s___a_p_p_l_i_d_a_t_a___d_k___s_t_r_u_c_t.md#variable-additionalterminalcapabilities-9f40)** <br>TempUpdate allowed: YES    Description: "additional terminal capabilities" for this application, only 1st byte is effective    Availability bit: [INPUT_CTLS_APL_DK_9F40_0]()   TLV tag: [TAG_9F40_ADD_TRM_CAP](),    XML Tag: [XML_TAG_AD_DK_9F40_ADD_TERM_CAPS]().  |
| unsigned char[2 *EMV_CTLS_MAX_APP_VERS] | **[VersionNumber_9F09](struct_e_m_v___c_t_l_s___a_p_p_l_i_d_a_t_a___d_k___s_t_r_u_c_t.md#variable-versionnumber-9f09)** <br>TempUpdate allowed: NO    Description: Application chip version number    mandatory for [EMV_CTLS_SetAppliDataSchemeSpecific]()   Availability bit: [INPUT_CTLS_APL_DK_9F09_0]()   TLV tag: [TAG_9F09_TRM_APP_VERSION_NB](),    XML Tag: [XML_TAG_AD_DK_9F09_VERSION_NUMBER]().  |
| unsigned char[2] | **[MerchantCategoryCode_9F15](struct_e_m_v___c_t_l_s___a_p_p_l_i_d_a_t_a___d_k___s_t_r_u_c_t.md#variable-merchantcategorycode-9f15)** <br>TempUpdate allowed: NO    Description: Merchant category code    mandatory for [EMV_CTLS_SetAppliDataSchemeSpecific]()   Availability bit: [INPUT_CTLS_APL_DK_9F15_0]()   TLV tag: [TAG_9F15_MERCH_CATEG_CODE](),    XML Tag: [XML_TAG_AD_DK_9F15_MERCHANT_CATEGORY_CODE]().  |
| unsigned char | **[TecSupport_DFAB30](struct_e_m_v___c_t_l_s___a_p_p_l_i_d_a_t_a___d_k___s_t_r_u_c_t.md#variable-tecsupport-dfab30)** <br>TempUpdate allowed: NO    Description: Specifies supported technologies.    See [technologies used in TecSupport_DFAB30]()   Availability bit: [INPUT_CTLS_APL_DK_DFAB30_1]()   TLV tag: [TAG_DFAB30_TEC_SUPPORT]()   XML Tag: [XML_TAG_AD_DK_DFAB30_TEC_SUPPORT]()   For Discover this parameter (DFAB30) has a specific meaning in terms of the legacy DISCOVER ZIP: 0x01 = DPAS Chip, 0x02 = DPAS MSR, 0x00 = LEGACY DISCOVER ZIP.  |
| unsigned char[5] | **[AppFlowCap_DFAB31](struct_e_m_v___c_t_l_s___a_p_p_l_i_d_a_t_a___d_k___s_t_r_u_c_t.md#variable-appflowcap-dfab31)** <br>TempUpdate allowed: YES    Description: Configure special application characteristics, see [Application flow capabilities for Discover/Diners]()   Availability bit: [INPUT_CTLS_APL_DK_DFAB31_1]()   TLV tag: [TAG_DFAB31_APP_FLOW_CAP](),    XML Tag: [XML_TAG_AD_DK_DFAB31_APP_FLOW_CAP]().  |
| unsigned char[6] | **[ContactlessFloorLimit_DFAB40](struct_e_m_v___c_t_l_s___a_p_p_l_i_d_a_t_a___d_k___s_t_r_u_c_t.md#variable-contactlessfloorlimit-dfab40)** <br>TempUpdate allowed: NO    Description: Reader Contactless Floor Limit (n12)    Use '9999999999' to disable.    Availability bit: [INPUT_CTLS_APL_DK_DFAB40_1]()   TLV tag: [TAG_DFAB40_CTLS_FLOOR_LIMIT](),    XML Tag: [XML_TAG_AD_DK_DFAB40_CTLS_FLOOR_LIMIT]().  |
| unsigned char[6] | **[ContactlessTransactionLimit_DFAB41](struct_e_m_v___c_t_l_s___a_p_p_l_i_d_a_t_a___d_k___s_t_r_u_c_t.md#variable-contactlesstransactionlimit-dfab41)** <br>TempUpdate allowed: NO    Description: Reader Contactless Transaction Limit (n12)    Use '9999999999' to disable.    Availability bit: [INPUT_CTLS_APL_DK_DFAB41_1]()   TLV tag: [TAG_DFAB41_CTLS_TRX_LIMIT](),    XML Tag: [XML_TAG_AD_DK_DFAB41_CTLS_TRX_LIMIT]().  |
| unsigned char[6] | **[ContactlessCVMRequiredLimit_DFAB42](struct_e_m_v___c_t_l_s___a_p_p_l_i_d_a_t_a___d_k___s_t_r_u_c_t.md#variable-contactlesscvmrequiredlimit-dfab42)** <br>TempUpdate allowed: NO    Description: Reader Contactless CVM Required Limit (n12)    Use '9999999999' to disable.    Availability bit: [INPUT_CTLS_APL_DK_DFAB42_1]()   TLV tag: [TAG_DFAB42_CTLS_CVM_REQ_LIMIT](),    XML Tag: [XML_TAG_AD_DK_DFAB42_CTLS_CVM_REQ_LIMIT]().  |
| [EMV_CTLS_DATA_TYPE](_e_m_v___c_t_l_s___interface_8h.md#typedef-emv-ctls-data-type) | **[DataContainerReadIds_DFAB58](struct_e_m_v___c_t_l_s___a_p_p_l_i_d_a_t_a___d_k___s_t_r_u_c_t.md#variable-datacontainerreadids-dfab58)** <br>TempUpdate allowed: NO    Description: Data Container Read List for DPAS-2 Data Storage feature. This is a list of container IDs each 4 byte. Can be used in combination with [DataContainerReadRanges_DFAB59]().    Availability bit: [INPUT_CTLS_APL_DK_DFAB58_1]()   TLV tag: [TAG_DFAB58_ID_LIST](),    XML Tag: [XML_TAG_AD_DK_DFAB58_CONTAINER_IDS]().  |
| [EMV_CTLS_DATA_TYPE](_e_m_v___c_t_l_s___interface_8h.md#typedef-emv-ctls-data-type) | **[DataContainerReadRanges_DFAB59](struct_e_m_v___c_t_l_s___a_p_p_l_i_d_a_t_a___d_k___s_t_r_u_c_t.md#variable-datacontainerreadranges-dfab59)** <br>TempUpdate allowed: NO    Description: Data Container Read List for DPAS-2 Data Storage feature. This is a list of container ID ranges consisting of each 8 byte, 4 byte start container ID and 4 byte stop container ID. Can be used in combination with [DataContainerReadIds_DFAB58](struct_e_m_v___c_t_l_s___a_p_p_l_i_d_a_t_a___d_k___s_t_r_u_c_t.md#variable-datacontainerreadids-dfab58).    Availability bit: [INPUT_CTLS_APL_DK_DFAB59_1]()   TLV tag: [TAG_DFAB59_RANGE_LIST](),    XML Tag: [XML_TAG_AD_DK_DFAB59_CONTAINER_RANGES]().  |

## Public Attributes Documentation

### variable IncludedData

```cpp
unsigned char[8] IncludedData;
```

Availability bits, see [Appli data scheme specific - Discover - Availability bits](). 

### variable TermIdent_9F1C

```cpp
unsigned char[8] TermIdent_9F1C;
```

TempUpdate allowed: YES    Description: Terminal Identification    mandatory for [EMV_CTLS_SetAppliDataSchemeSpecific]()   Availability bit: [INPUT_CTLS_APL_DK_9F1C_0]()   TLV tag: [TAG_9F1C_TRM_ID](),    XML Tag: [XML_TAG_AD_DK_9F1C_TERM_IDENT](). 

### variable TerminalCountryCode_9F1A

```cpp
unsigned char[2] TerminalCountryCode_9F1A;
```

TempUpdate allowed: YES    Description: "Terminal country code" (e.g. VISA Germany 0276)    Availability bit: [INPUT_CTLS_APL_DK_9F1A_0]()   TLV tag: [TAG_9F1A_TRM_COUNTRY_CODE](),    XML Tag: [XML_TAG_AD_DK_9F1A_TERM_COUNTRY_CODE](). 

### variable TerminalType_9F35

```cpp
unsigned char TerminalType_9F35;
```

TempUpdate allowed: YES    Description: Terminal type, possible values see [Terminaltypes (Tag 9F35)]())    mandatory for first call of [EMV_CTLS_SetTermData()]()   Availability bit: [INPUT_CTLS_APL_DK_9F35_0]()   TLV tag: [TAG_9F35_TRM_TYPE](),    XML Tag: [XML_TAG_AD_DK_9F35_TERM_TYPE](). 

### variable TerminalTransactionQualifier_9F66

```cpp
unsigned char[4] TerminalTransactionQualifier_9F66;
```

TempUpdate allowed: YES    Description: Visa-defined Terminal Transaction Qualifiers    Availability bit: [INPUT_CTLS_APL_DK_9F66_0]()   TLV tag: [TAG_9F66_TTQ](),    XML Tag: [XML_TAG_AD_DK_9F66_TERM_TRX_QUALIFIER](). 

### variable TerminalCapabilities_9F33

```cpp
unsigned char[3] TerminalCapabilities_9F33;
```

TempUpdate allowed: YES    Description: "terminal capabilities" for this application, for PayPass 3 the tags DF81xx, DF81yy, DF81zz are filled with these 3 byte, for VISA this is used for host compliancy only, for Amex in accordance with tag 9F6E,    Availability bit: [INPUT_CTLS_APL_DK_9F33_0]()   TLV tag: [TAG_9F33_TRM_CAPABILITIES](),    XML Tag: [XML_TAG_AD_DK_9F33_TERM_CAPS](). 

### variable AdditionalTerminalCapabilities_9F40

```cpp
unsigned char[5] AdditionalTerminalCapabilities_9F40;
```

TempUpdate allowed: YES    Description: "additional terminal capabilities" for this application, only 1st byte is effective    Availability bit: [INPUT_CTLS_APL_DK_9F40_0]()   TLV tag: [TAG_9F40_ADD_TRM_CAP](),    XML Tag: [XML_TAG_AD_DK_9F40_ADD_TERM_CAPS](). 

### variable VersionNumber_9F09

```cpp
unsigned char[2 *EMV_CTLS_MAX_APP_VERS] VersionNumber_9F09;
```

TempUpdate allowed: NO    Description: Application chip version number    mandatory for [EMV_CTLS_SetAppliDataSchemeSpecific]()   Availability bit: [INPUT_CTLS_APL_DK_9F09_0]()   TLV tag: [TAG_9F09_TRM_APP_VERSION_NB](),    XML Tag: [XML_TAG_AD_DK_9F09_VERSION_NUMBER](). 

### variable MerchantCategoryCode_9F15

```cpp
unsigned char[2] MerchantCategoryCode_9F15;
```

TempUpdate allowed: NO    Description: Merchant category code    mandatory for [EMV_CTLS_SetAppliDataSchemeSpecific]()   Availability bit: [INPUT_CTLS_APL_DK_9F15_0]()   TLV tag: [TAG_9F15_MERCH_CATEG_CODE](),    XML Tag: [XML_TAG_AD_DK_9F15_MERCHANT_CATEGORY_CODE](). 

### variable TecSupport_DFAB30

```cpp
unsigned char TecSupport_DFAB30;
```

TempUpdate allowed: NO    Description: Specifies supported technologies.    See [technologies used in TecSupport_DFAB30]()   Availability bit: [INPUT_CTLS_APL_DK_DFAB30_1]()   TLV tag: [TAG_DFAB30_TEC_SUPPORT]()   XML Tag: [XML_TAG_AD_DK_DFAB30_TEC_SUPPORT]()   For Discover this parameter (DFAB30) has a specific meaning in terms of the legacy DISCOVER ZIP: 0x01 = DPAS Chip, 0x02 = DPAS MSR, 0x00 = LEGACY DISCOVER ZIP. 

### variable AppFlowCap_DFAB31

```cpp
unsigned char[5] AppFlowCap_DFAB31;
```

TempUpdate allowed: YES    Description: Configure special application characteristics, see [Application flow capabilities for Discover/Diners]()   Availability bit: [INPUT_CTLS_APL_DK_DFAB31_1]()   TLV tag: [TAG_DFAB31_APP_FLOW_CAP](),    XML Tag: [XML_TAG_AD_DK_DFAB31_APP_FLOW_CAP](). 

### variable ContactlessFloorLimit_DFAB40

```cpp
unsigned char[6] ContactlessFloorLimit_DFAB40;
```

TempUpdate allowed: NO    Description: Reader Contactless Floor Limit (n12)    Use '9999999999' to disable.    Availability bit: [INPUT_CTLS_APL_DK_DFAB40_1]()   TLV tag: [TAG_DFAB40_CTLS_FLOOR_LIMIT](),    XML Tag: [XML_TAG_AD_DK_DFAB40_CTLS_FLOOR_LIMIT](). 

### variable ContactlessTransactionLimit_DFAB41

```cpp
unsigned char[6] ContactlessTransactionLimit_DFAB41;
```

TempUpdate allowed: NO    Description: Reader Contactless Transaction Limit (n12)    Use '9999999999' to disable.    Availability bit: [INPUT_CTLS_APL_DK_DFAB41_1]()   TLV tag: [TAG_DFAB41_CTLS_TRX_LIMIT](),    XML Tag: [XML_TAG_AD_DK_DFAB41_CTLS_TRX_LIMIT](). 

### variable ContactlessCVMRequiredLimit_DFAB42

```cpp
unsigned char[6] ContactlessCVMRequiredLimit_DFAB42;
```

TempUpdate allowed: NO    Description: Reader Contactless CVM Required Limit (n12)    Use '9999999999' to disable.    Availability bit: [INPUT_CTLS_APL_DK_DFAB42_1]()   TLV tag: [TAG_DFAB42_CTLS_CVM_REQ_LIMIT](),    XML Tag: [XML_TAG_AD_DK_DFAB42_CTLS_CVM_REQ_LIMIT](). 

### variable DataContainerReadIds_DFAB58

```cpp
EMV_CTLS_DATA_TYPE DataContainerReadIds_DFAB58;
```

TempUpdate allowed: NO    Description: Data Container Read List for DPAS-2 Data Storage feature. This is a list of container IDs each 4 byte. Can be used in combination with [DataContainerReadRanges_DFAB59]().    Availability bit: [INPUT_CTLS_APL_DK_DFAB58_1]()   TLV tag: [TAG_DFAB58_ID_LIST](),    XML Tag: [XML_TAG_AD_DK_DFAB58_CONTAINER_IDS](). 

### variable DataContainerReadRanges_DFAB59

```cpp
EMV_CTLS_DATA_TYPE DataContainerReadRanges_DFAB59;
```

TempUpdate allowed: NO    Description: Data Container Read List for DPAS-2 Data Storage feature. This is a list of container ID ranges consisting of each 8 byte, 4 byte start container ID and 4 byte stop container ID. Can be used in combination with [DataContainerReadIds_DFAB58](struct_e_m_v___c_t_l_s___a_p_p_l_i_d_a_t_a___d_k___s_t_r_u_c_t.md#variable-datacontainerreadids-dfab58).    Availability bit: [INPUT_CTLS_APL_DK_DFAB59_1]()   TLV tag: [TAG_DFAB59_RANGE_LIST](),    XML Tag: [XML_TAG_AD_DK_DFAB59_CONTAINER_RANGES](). 

-------------------------------

Updated on 2025-06-17 at 11:52:22 +0100