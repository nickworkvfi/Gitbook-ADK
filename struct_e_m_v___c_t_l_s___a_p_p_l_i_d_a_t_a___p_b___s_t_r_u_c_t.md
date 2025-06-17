---
title: EMV_CTLS_APPLIDATA_PB_STRUCT
summary: Structure for configuration of one single application, PagoBancomat specific part. See EMV_CTLS_SetAppliDataSchemeSpecific()

---

# EMV_CTLS_APPLIDATA_PB_STRUCT

**Module:** **[Configuration](group___a_d_k___c_o_n_f_i_g_u_r_a_t_i_o_n.md)** **/** **[Application data](group___d_e_f___c_o_n_f___a_p_p_l_i.md)**



Structure for configuration of one single application, PagoBancomat specific part. See [EMV_CTLS_SetAppliDataSchemeSpecific()]()


`#include <EMV_CTLS_Interface.h>`

## Public Attributes

|                | Name           |
| -------------- | -------------- |
| unsigned char[8] | **[IncludedData](struct_e_m_v___c_t_l_s___a_p_p_l_i_d_a_t_a___p_b___s_t_r_u_c_t.md#variable-includeddata)** <br>Availability bits, see [Appli data scheme specific - PagoBancomat - Availability bits]().  |
| unsigned char[8] | **[TermIdent_9F1C](struct_e_m_v___c_t_l_s___a_p_p_l_i_d_a_t_a___p_b___s_t_r_u_c_t.md#variable-termident-9f1c)**  |
| unsigned char[2] | **[TerminalCountryCode_9F1A](struct_e_m_v___c_t_l_s___a_p_p_l_i_d_a_t_a___p_b___s_t_r_u_c_t.md#variable-terminalcountrycode-9f1a)**  |
| unsigned char | **[TerminalType_9F35](struct_e_m_v___c_t_l_s___a_p_p_l_i_d_a_t_a___p_b___s_t_r_u_c_t.md#variable-terminaltype-9f35)**  |
| unsigned char[4] | **[TerminalTransactionQualifier_9F66](struct_e_m_v___c_t_l_s___a_p_p_l_i_d_a_t_a___p_b___s_t_r_u_c_t.md#variable-terminaltransactionqualifier-9f66)**  |
| unsigned char[2 *EMV_CTLS_MAX_APP_VERS] | **[VersionNumber_9F09](struct_e_m_v___c_t_l_s___a_p_p_l_i_d_a_t_a___p_b___s_t_r_u_c_t.md#variable-versionnumber-9f09)**  |
| char[40+1] | **[MerchantNameAndLocation_9F4E](struct_e_m_v___c_t_l_s___a_p_p_l_i_d_a_t_a___p_b___s_t_r_u_c_t.md#variable-merchantnameandlocation-9f4e)**  |
| unsigned char[5] | **[AppFlowCap_DFAB31](struct_e_m_v___c_t_l_s___a_p_p_l_i_d_a_t_a___p_b___s_t_r_u_c_t.md#variable-appflowcap-dfab31)**  |
| unsigned char[6] | **[ContactlessFloorLimit_DFAB40](struct_e_m_v___c_t_l_s___a_p_p_l_i_d_a_t_a___p_b___s_t_r_u_c_t.md#variable-contactlessfloorlimit-dfab40)**  |
| unsigned char[6] | **[ContactlessTransactionLimit_DFAB41](struct_e_m_v___c_t_l_s___a_p_p_l_i_d_a_t_a___p_b___s_t_r_u_c_t.md#variable-contactlesstransactionlimit-dfab41)**  |
| unsigned char[6] | **[ContactlessCVMRequiredLimit_DFAB42](struct_e_m_v___c_t_l_s___a_p_p_l_i_d_a_t_a___p_b___s_t_r_u_c_t.md#variable-contactlesscvmrequiredlimit-dfab42)**  |
| unsigned char[5] | **[TACDefault_DFAB43](struct_e_m_v___c_t_l_s___a_p_p_l_i_d_a_t_a___p_b___s_t_r_u_c_t.md#variable-tacdefault-dfab43)**  |
| unsigned char[5] | **[TACDenial_DFAB44](struct_e_m_v___c_t_l_s___a_p_p_l_i_d_a_t_a___p_b___s_t_r_u_c_t.md#variable-tacdenial-dfab44)**  |
| unsigned char[5] | **[TACOnline_DFAB45](struct_e_m_v___c_t_l_s___a_p_p_l_i_d_a_t_a___p_b___s_t_r_u_c_t.md#variable-taconline-dfab45)**  |
| unsigned char[6] | **[RiskManagementThreshold_DFAB46](struct_e_m_v___c_t_l_s___a_p_p_l_i_d_a_t_a___p_b___s_t_r_u_c_t.md#variable-riskmanagementthreshold-dfab46)**  |
| unsigned char | **[RiskManagementTargetPercentage_DFAB47](struct_e_m_v___c_t_l_s___a_p_p_l_i_d_a_t_a___p_b___s_t_r_u_c_t.md#variable-riskmanagementtargetpercentage-dfab47)**  |
| unsigned char | **[RiskManagementMaximumTargetPercentage_DFAB48](struct_e_m_v___c_t_l_s___a_p_p_l_i_d_a_t_a___p_b___s_t_r_u_c_t.md#variable-riskmanagementmaximumtargetpercentage-dfab48)**  |
| unsigned char[5] | **[TACSwitchInterface_DFAB55](struct_e_m_v___c_t_l_s___a_p_p_l_i_d_a_t_a___p_b___s_t_r_u_c_t.md#variable-tacswitchinterface-dfab55)**  |
| unsigned char[5] | **[IACSwitchInterface_DFAB56](struct_e_m_v___c_t_l_s___a_p_p_l_i_d_a_t_a___p_b___s_t_r_u_c_t.md#variable-iacswitchinterface-dfab56)**  |

## Public Attributes Documentation

### variable IncludedData

```cpp
unsigned char[8] IncludedData;
```

Availability bits, see [Appli data scheme specific - PagoBancomat - Availability bits](). 

### variable TermIdent_9F1C

```cpp
unsigned char[8] TermIdent_9F1C;
```


TempUpdate allowed: YES 

 Description: Terminal Identification 

 mandatory for [EMV_CTLS_SetAppliDataSchemeSpecific](group___f_u_n_c___c_o_n_f.md#function-emv-ctls-setapplidataschemespecific)

 Availability bit: [INPUT_CTLS_APL_PB_9F1C_0](group___d_e_f___i_n_p_u_t___a_p_p_l_i___p_b.md#define-input-ctls-apl-pb-9f1c-0)

 TLV tag: [TAG_9F1C_TRM_ID](group___e_m_v_c_o___t_a_g_s.md#define-tag-9f1c-trm-id), 

 XML Tag: [XML_TAG_AD_PB_9F1C_TERM_IDENT](group___a_d_k___x_m_l___t_a_g_s.md#define-xml-tag-ad-pb-9f1c-term-ident)


### variable TerminalCountryCode_9F1A

```cpp
unsigned char[2] TerminalCountryCode_9F1A;
```


TempUpdate allowed: YES 

 Description: "Terminal Country Code" (e.g. VISA Germany 0276) 

 Availability bit: [INPUT_CTLS_APL_PB_9F1A_0](group___d_e_f___i_n_p_u_t___a_p_p_l_i___p_b.md#define-input-ctls-apl-pb-9f1a-0)

 TLV tag: [TAG_9F1A_TRM_COUNTRY_CODE](group___e_m_v_c_o___t_a_g_s.md#define-tag-9f1a-trm-country-code), 

 XML Tag: [XML_TAG_AD_PB_9F1A_TERM_COUNTRY_CODE](group___a_d_k___x_m_l___t_a_g_s.md#define-xml-tag-ad-pb-9f1a-term-country-code)


### variable TerminalType_9F35

```cpp
unsigned char TerminalType_9F35;
```


TempUpdate allowed: YES 

 Description: Terminal type, possible values see [Terminaltypes (Tag 9F35)](group___t_e_r_m___t_y_p_e_s.md)) 

 mandatory for first call of [EMV_CTLS_SetTermData()](group___f_u_n_c___c_o_n_f.md#function-emv-ctls-settermdata)

 Availability bit: [INPUT_CTLS_APL_PB_9F35_0](group___d_e_f___i_n_p_u_t___a_p_p_l_i___p_b.md#define-input-ctls-apl-pb-9f35-0)

 TLV tag: [TAG_9F35_TRM_TYPE](group___e_m_v_c_o___t_a_g_s.md#define-tag-9f35-trm-type), 

 XML Tag: [XML_TAG_AD_PB_9F35_TERM_TYPE](group___a_d_k___x_m_l___t_a_g_s.md#define-xml-tag-ad-pb-9f35-term-type)


### variable TerminalTransactionQualifier_9F66

```cpp
unsigned char[4] TerminalTransactionQualifier_9F66;
```


TempUpdate allowed: YES 

 Description: Visa-defined Terminal Transaction Qualifiers 

 Availability bit: [INPUT_CTLS_APL_PB_9F66_0](group___d_e_f___i_n_p_u_t___a_p_p_l_i___p_b.md#define-input-ctls-apl-pb-9f66-0)

 TLV tag: [TAG_9F66_TTQ](group___v_i_s_a___t_a_g_s.md#define-tag-9f66-ttq), 

 XML Tag: [XML_TAG_AD_PB_9F66_TERM_TRX_QUALIFIER](group___a_d_k___x_m_l___t_a_g_s.md#define-xml-tag-ad-pb-9f66-term-trx-qualifier)


### variable VersionNumber_9F09

```cpp
unsigned char[2 *EMV_CTLS_MAX_APP_VERS] VersionNumber_9F09;
```


TempUpdate allowed: NO 

 Description: Application chip version number 

 mandatory for [EMV_CTLS_SetAppliDataSchemeSpecific](group___f_u_n_c___c_o_n_f.md#function-emv-ctls-setapplidataschemespecific)

 Availability bit: [INPUT_CTLS_APL_PB_9F09_0](group___d_e_f___i_n_p_u_t___a_p_p_l_i___p_b.md#define-input-ctls-apl-pb-9f09-0)

 TLV tag: [TAG_9F09_TRM_APP_VERSION_NB](group___e_m_v_c_o___t_a_g_s.md#define-tag-9f09-trm-app-version-nb), 

 XML Tag: [XML_TAG_AD_PB_9F09_VERSION_NUMBER](group___a_d_k___x_m_l___t_a_g_s.md#define-xml-tag-ad-pb-9f09-version-number)


### variable MerchantNameAndLocation_9F4E

```cpp
char[40+1] MerchantNameAndLocation_9F4E;
```


TempUpdate allowed: NO 

 Description: Indicates the name and location of the merchant 

 Availability bit: [INPUT_CTLS_APL_PB_9F4E_0](group___d_e_f___i_n_p_u_t___a_p_p_l_i___p_b.md#define-input-ctls-apl-pb-9f4e-0)

 TLV tag: [TAG_9F4E_TAC_MERCHANTLOC](group___e_m_v_c_o___t_a_g_s.md#define-tag-9f4e-tac-merchantloc), 

 XML Tag: [XML_TAG_AD_PB_9F4E_MERCHANT_NAME_LOCATION](group___a_d_k___x_m_l___t_a_g_s.md#define-xml-tag-ad-pb-9f4e-merchant-name-location)


### variable AppFlowCap_DFAB31

```cpp
unsigned char[5] AppFlowCap_DFAB31;
```


TempUpdate allowed: YES 

 Description: Configure special application characteristics, see [Application flow capabilities for PagoBancomat](group___d_e_f___f_l_o_w___p_b.md)

 Availability bit: [INPUT_CTLS_APL_PB_DFAB31_0](group___d_e_f___i_n_p_u_t___a_p_p_l_i___p_b.md#define-input-ctls-apl-pb-dfab31-0)

 TLV tag: [TAG_DFAB31_APP_FLOW_CAP](group___t_a_g_s___n_e_w___c_f_g___i_n_t_f___p_r_i_m.md#define-tag-dfab31-app-flow-cap), 

 XML Tag: [XML_TAG_AD_PB_DFAB31_APP_FLOW_CAP](group___a_d_k___x_m_l___t_a_g_s.md#define-xml-tag-ad-pb-dfab31-app-flow-cap)


### variable ContactlessFloorLimit_DFAB40

```cpp
unsigned char[6] ContactlessFloorLimit_DFAB40;
```


TempUpdate allowed: NO 

 Description: Reader Contactless Floor Limit (n12) 

 Use '999999999999' to disable 

 Availability bit: [INPUT_CTLS_APL_PB_DFAB40_0](group___d_e_f___i_n_p_u_t___a_p_p_l_i___p_b.md#define-input-ctls-apl-pb-dfab40-0)

 TLV tag: [TAG_DFAB40_CTLS_FLOOR_LIMIT](group___t_a_g_s___n_e_w___c_f_g___i_n_t_f___p_r_i_m.md#define-tag-dfab40-ctls-floor-limit), 

 XML Tag: [XML_TAG_AD_PB_DFAB40_CTLS_FLOOR_LIMIT](group___a_d_k___x_m_l___t_a_g_s.md#define-xml-tag-ad-pb-dfab40-ctls-floor-limit)


### variable ContactlessTransactionLimit_DFAB41

```cpp
unsigned char[6] ContactlessTransactionLimit_DFAB41;
```


TempUpdate allowed: NO 

 Description: Reader Transaction Floor Limit (n12) 

 Use '9999999999' to disable. 

 Availability bit: [INPUT_CTLS_APL_PB_DFAB41_1](group___d_e_f___i_n_p_u_t___a_p_p_l_i___p_b.md#define-input-ctls-apl-pb-dfab41-1)

 TLV tag: [TAG_DFAB41_CTLS_TRX_LIMIT](group___t_a_g_s___n_e_w___c_f_g___i_n_t_f___p_r_i_m.md#define-tag-dfab41-ctls-trx-limit), 

 XML Tag: [XML_TAG_AD_PB_DFAB41_CTLS_TRX_LIMIT](group___a_d_k___x_m_l___t_a_g_s.md#define-xml-tag-ad-pb-dfab41-ctls-trx-limit)


### variable ContactlessCVMRequiredLimit_DFAB42

```cpp
unsigned char[6] ContactlessCVMRequiredLimit_DFAB42;
```


TempUpdate allowed: NO 

 Description: Reader Contactless CVM Required Limit (n12) 

 Use '9999999999' to disable. 

 Availability bit: [INPUT_CTLS_APL_PB_DFAB42_1](group___d_e_f___i_n_p_u_t___a_p_p_l_i___p_b.md#define-input-ctls-apl-pb-dfab42-1)

 TLV tag: [TAG_DFAB42_CTLS_CVM_REQ_LIMIT](group___t_a_g_s___n_e_w___c_f_g___i_n_t_f___p_r_i_m.md#define-tag-dfab42-ctls-cvm-req-limit), 

 XML Tag: [XML_TAG_AD_PB_DFAB42_CTLS_CVM_REQ_LIMIT](group___a_d_k___x_m_l___t_a_g_s.md#define-xml-tag-ad-pb-dfab42-ctls-cvm-req-limit)


### variable TACDefault_DFAB43

```cpp
unsigned char[5] TACDefault_DFAB43;
```


TempUpdate allowed: YES 

 Description: Terminal Action Code - Default 

 mandatory for [EMV_CTLS_SetAppliDataSchemeSpecific](group___f_u_n_c___c_o_n_f.md#function-emv-ctls-setapplidataschemespecific)

 Availability bit: [INPUT_CTLS_APL_PB_DFAB43_1](group___d_e_f___i_n_p_u_t___a_p_p_l_i___p_b.md#define-input-ctls-apl-pb-dfab43-1)

 TLV tag: [TAG_DFAB43_TAC_DEFAULT](group___t_a_g_s___n_e_w___c_f_g___i_n_t_f___p_r_i_m.md#define-tag-dfab43-tac-default), 

 XML Tag: [XML_TAG_AD_PB_DFAB43_TAC_DEFAULT](group___a_d_k___x_m_l___t_a_g_s.md#define-xml-tag-ad-pb-dfab43-tac-default)


### variable TACDenial_DFAB44

```cpp
unsigned char[5] TACDenial_DFAB44;
```


TempUpdate allowed: YES 

 Description: Terminal Action Code - Denial 

 mandatory for [EMV_CTLS_SetAppliDataSchemeSpecific](group___f_u_n_c___c_o_n_f.md#function-emv-ctls-setapplidataschemespecific)

 Availability bit: [INPUT_CTLS_APL_PB_DFAB44_1](group___d_e_f___i_n_p_u_t___a_p_p_l_i___p_b.md#define-input-ctls-apl-pb-dfab44-1)

 TLV tag: [TAG_DFAB44_TAC_DENIAL](group___t_a_g_s___n_e_w___c_f_g___i_n_t_f___p_r_i_m.md#define-tag-dfab44-tac-denial), 

 XML Tag: [XML_TAG_AD_PB_DFAB44_TAC_DENIAL](group___a_d_k___x_m_l___t_a_g_s.md#define-xml-tag-ad-pb-dfab44-tac-denial)


### variable TACOnline_DFAB45

```cpp
unsigned char[5] TACOnline_DFAB45;
```


TempUpdate allowed: YES 

 Description: Terminal Action Code - Online 

 mandatory for [EMV_CTLS_SetAppliDataSchemeSpecific](group___f_u_n_c___c_o_n_f.md#function-emv-ctls-setapplidataschemespecific)

 Availability bit: [INPUT_CTLS_APL_PB_DFAB45_1](group___d_e_f___i_n_p_u_t___a_p_p_l_i___p_b.md#define-input-ctls-apl-pb-dfab45-1)

 TLV tag: [TAG_DFAB45_TAC_ONLINE](group___t_a_g_s___n_e_w___c_f_g___i_n_t_f___p_r_i_m.md#define-tag-dfab45-tac-online), 

 XML Tag: [XML_TAG_AD_PB_DFAB45_TAC_ONLINE](group___a_d_k___x_m_l___t_a_g_s.md#define-xml-tag-ad-pb-dfab45-tac-online)


### variable RiskManagementThreshold_DFAB46

```cpp
unsigned char[6] RiskManagementThreshold_DFAB46;
```


TempUpdate allowed: YES 

 Description: Threshold Value for Biased Random Online Selection during risk management (n12) 

 Availability bit: [INPUT_CTLS_APL_PB_DFAB46_1](group___d_e_f___i_n_p_u_t___a_p_p_l_i___p_b.md#define-input-ctls-apl-pb-dfab46-1)

 TLV tag: [TAG_DFAB46_RISK_MGMT_THRESHOLD](group___t_a_g_s___n_e_w___c_f_g___i_n_t_f___p_r_i_m.md#define-tag-dfab46-risk-mgmt-threshold)

 XML Tag: [XML_TAG_AD_PB_DFAB46_RISK_MGMT_THRESHOLD](group___a_d_k___x_m_l___t_a_g_s.md#define-xml-tag-ad-pb-dfab46-risk-mgmt-threshold)


### variable RiskManagementTargetPercentage_DFAB47

```cpp
unsigned char RiskManagementTargetPercentage_DFAB47;
```


TempUpdate allowed: YES 

 Description: Target percentage for random online selection during risk management (n2) 

 Availability bit: [INPUT_CTLS_APL_PB_DFAB47_1](group___d_e_f___i_n_p_u_t___a_p_p_l_i___p_b.md#define-input-ctls-apl-pb-dfab47-1)

 TLV tag: [TAG_DFAB47_RISK_MGMT_TRGT_PRCT](group___t_a_g_s___n_e_w___c_f_g___i_n_t_f___p_r_i_m.md#define-tag-dfab47-risk-mgmt-trgt-prct)

 XML Tag: [XML_TAG_AD_PB_DFAB47_RISK_MGMT_TRGT_PERC](group___a_d_k___x_m_l___t_a_g_s.md#define-xml-tag-ad-pb-dfab47-risk-mgmt-trgt-perc)


### variable RiskManagementMaximumTargetPercentage_DFAB48

```cpp
unsigned char RiskManagementMaximumTargetPercentage_DFAB48;
```


TempUpdate allowed: YES 

 Description: Maximum target percentage for random online selection during risk management (n2) 

 Availability bit: [INPUT_CTLS_APL_PB_DFAB48_1](group___d_e_f___i_n_p_u_t___a_p_p_l_i___p_b.md#define-input-ctls-apl-pb-dfab48-1)

 TLV tag: [TAG_DFAB48_RISK_MGMT_MAX_TRGT_PRCT](group___t_a_g_s___n_e_w___c_f_g___i_n_t_f___p_r_i_m.md#define-tag-dfab48-risk-mgmt-max-trgt-prct)

 XML Tag: [XML_TAG_AD_PB_DFAB48_RISK_MGMT_MAX_TRGT_PERC](group___a_d_k___x_m_l___t_a_g_s.md#define-xml-tag-ad-pb-dfab48-risk-mgmt-max-trgt-perc)


### variable TACSwitchInterface_DFAB55

```cpp
unsigned char[5] TACSwitchInterface_DFAB55;
```


TempUpdate allowed: YES 

 Description: Terminal Action Code - Switch Interface 

 mandatory for [EMV_CTLS_SetAppliDataSchemeSpecific](group___f_u_n_c___c_o_n_f.md#function-emv-ctls-setapplidataschemespecific)

 Availability bit: [INPUT_CTLS_APL_PB_DFAB55_2](group___d_e_f___i_n_p_u_t___a_p_p_l_i___p_b.md#define-input-ctls-apl-pb-dfab55-2)

 TLV tag: [TAG_DFAB55_TAC_SWITCH_INTERFACE](group___t_a_g_s___n_e_w___c_f_g___i_n_t_f___p_r_i_m.md#define-tag-dfab55-tac-switch-interface), 

 XML Tag: [XML_TAG_AD_PB_DFAB55_TAC_SWITCH_INTERFACE](group___a_d_k___x_m_l___t_a_g_s.md#define-xml-tag-ad-pb-dfab55-tac-switch-interface)


### variable IACSwitchInterface_DFAB56

```cpp
unsigned char[5] IACSwitchInterface_DFAB56;
```


TempUpdate allowed: YES 

 Description: Issuer Action Code - Switch Interface DF73 / Fallback parameter when the Card Issuer Action Code - Switch Interface 9F79 is not available 

 mandatory for [EMV_CTLS_SetAppliDataSchemeSpecific](group___f_u_n_c___c_o_n_f.md#function-emv-ctls-setapplidataschemespecific)

 Availability bit: [INPUT_CTLS_APL_PB_DFAB56_2](group___d_e_f___i_n_p_u_t___a_p_p_l_i___p_b.md#define-input-ctls-apl-pb-dfab56-2)

 TLV tag: [TAG_DFAB56_IAC_SWITCH_INTERFACE](group___t_a_g_s___n_e_w___c_f_g___i_n_t_f___p_r_i_m.md#define-tag-dfab56-iac-switch-interface), 

 XML Tag: [XML_TAG_AD_PB_DFAB56_IAC_SWITCH_INTERFACE](group___a_d_k___x_m_l___t_a_g_s.md#define-xml-tag-ad-pb-dfab56-iac-switch-interface)


-------------------------------

Updated on 2025-06-17 at 11:52:22 +0100