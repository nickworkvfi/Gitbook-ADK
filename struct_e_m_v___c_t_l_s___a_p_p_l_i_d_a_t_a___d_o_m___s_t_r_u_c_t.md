---
title: EMV_CTLS_APPLIDATA_DOM_STRUCT
summary: Structure for configuration of one single domestic application See EMV_CTLS_SetAppliDataSchemeSpecific()

---

# EMV_CTLS_APPLIDATA_DOM_STRUCT

**Module:** **[Configuration](group___a_d_k___c_o_n_f_i_g_u_r_a_t_i_o_n.md)** **/** **[Application data](group___d_e_f___c_o_n_f___a_p_p_l_i.md)**



Structure for configuration of one single domestic application See [EMV_CTLS_SetAppliDataSchemeSpecific()]()


`#include <EMV_CTLS_Interface.h>`

## Public Attributes

|                | Name           |
| -------------- | -------------- |
| unsigned char[8] | **[IncludedData](struct_e_m_v___c_t_l_s___a_p_p_l_i_d_a_t_a___d_o_m___s_t_r_u_c_t.md#variable-includeddata)** <br>Availability bits, see [Appli data scheme specific - domestic kernel - Availability bits]().  |
| unsigned char[5] | **[AppFlowCap_DFAB31](struct_e_m_v___c_t_l_s___a_p_p_l_i_d_a_t_a___d_o_m___s_t_r_u_c_t.md#variable-appflowcap-dfab31)** <br>TempUpdate allowed: YES    Description: Configure special application characteristics, see [Application flow capabilities for Visa Asia/Pacific]()   Availability bit: [INPUT_CTLS_APL_DOM_DFAB31_0]()   TLV tag: [TAG_DFAB31_APP_FLOW_CAP](),    XML Tag: [XML_TAG_AD_DOM_DFAB31_APP_FLOW_CAP]().  |
| unsigned char[6] | **[ContactlessTransactionLimit_DFAB41](struct_e_m_v___c_t_l_s___a_p_p_l_i_d_a_t_a___d_o_m___s_t_r_u_c_t.md#variable-contactlesstransactionlimit-dfab41)** <br>TempUpdate allowed: NO    Description: BCD encoded. No contactless txns above this limit (as defined by PayPass)    PayPass spec naming: "Reader Contactless Transaction Limit"    Visa spec naming: "Reader Contactless Transaction Limit (RCTL)"    Visa spec strongly recommends to disable this limit.    Use FF FF FF FF to disable    Availability bit: [INPUT_CTLS_APL_DOM_DFAB41_0]()   TLV tag: [TAG_DFAB41_CTLS_TRX_LIMIT]()   XML Tag: [XML_TAG_AD_DOM_DFAB41_CTLS_TRX_LIMIT]().  |

## Public Attributes Documentation

### variable IncludedData

```cpp
unsigned char[8] IncludedData;
```

Availability bits, see [Appli data scheme specific - domestic kernel - Availability bits](). 

### variable AppFlowCap_DFAB31

```cpp
unsigned char[5] AppFlowCap_DFAB31;
```

TempUpdate allowed: YES    Description: Configure special application characteristics, see [Application flow capabilities for Visa Asia/Pacific]()   Availability bit: [INPUT_CTLS_APL_DOM_DFAB31_0]()   TLV tag: [TAG_DFAB31_APP_FLOW_CAP](),    XML Tag: [XML_TAG_AD_DOM_DFAB31_APP_FLOW_CAP](). 

### variable ContactlessTransactionLimit_DFAB41

```cpp
unsigned char[6] ContactlessTransactionLimit_DFAB41;
```

TempUpdate allowed: NO    Description: BCD encoded. No contactless txns above this limit (as defined by PayPass)    PayPass spec naming: "Reader Contactless Transaction Limit"    Visa spec naming: "Reader Contactless Transaction Limit (RCTL)"    Visa spec strongly recommends to disable this limit.    Use FF FF FF FF to disable    Availability bit: [INPUT_CTLS_APL_DOM_DFAB41_0]()   TLV tag: [TAG_DFAB41_CTLS_TRX_LIMIT]()   XML Tag: [XML_TAG_AD_DOM_DFAB41_CTLS_TRX_LIMIT](). 

-------------------------------

Updated on 2025-06-17 at 11:52:22 +0100