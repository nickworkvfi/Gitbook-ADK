---
title: EMV_CTLS_AK_DRL_ENTRY_STRUCT
summary: Amex Dynamic Reader Limits, single entry Element of EMV_CTLS_AK_DRL_STRUCT. 

---

# EMV_CTLS_AK_DRL_ENTRY_STRUCT

**Module:** **[Configuration](group___a_d_k___c_o_n_f_i_g_u_r_a_t_i_o_n.md)** **/** **[Application data](group___d_e_f___c_o_n_f___a_p_p_l_i.md)**



Amex Dynamic Reader Limits, single entry Element of [EMV_CTLS_AK_DRL_STRUCT](). 


`#include <EMV_CTLS_Interface.h>`

## Public Attributes

|                | Name           |
| -------------- | -------------- |
| unsigned char[6] | **[ContactlessFloorLimit_DFAB40](struct_e_m_v___c_t_l_s___a_k___d_r_l___e_n_t_r_y___s_t_r_u_c_t.md#variable-contactlessfloorlimit-dfab40)** <br>Dynamic Reader Contactless Floor Limit (n12)    Use '999999999999' to disable.    TLV tag: [TAG_DFAB40_CTLS_FLOOR_LIMIT](),    XML tag: [XML_TAG_APPLIDATA_VISA_DRL_FLOORLIMIT]().  |
| unsigned char[6] | **[ContactlessTransactionLimit_DFAB41](struct_e_m_v___c_t_l_s___a_k___d_r_l___e_n_t_r_y___s_t_r_u_c_t.md#variable-contactlesstransactionlimit-dfab41)** <br>Dynamic Reader Contactless Transaction Limit (n12)    Use '999999999999' to disable.    TLV tag: [TAG_DFAB41_CTLS_TRX_LIMIT]()   XML tag: [XML_TAG_APPLIDATA_VISA_DRL_TXN_LIMIT]().  |
| unsigned char[6] | **[ContactlessCVMRequiredLimit_DFAB42](struct_e_m_v___c_t_l_s___a_k___d_r_l___e_n_t_r_y___s_t_r_u_c_t.md#variable-contactlesscvmrequiredlimit-dfab42)** <br>Dynamic Reader Contactless CVM Required Limit (n12)    Use '999999999999' to disable.    TLV tag: [TAG_DFAB42_CTLS_CVM_REQ_LIMIT]()   XML tag: [XML_TAG_APPLIDATA_VISA_DRL_CVM_LIMIT]().  |
| unsigned char | **[OnOffSwitch_DFAB49](struct_e_m_v___c_t_l_s___a_k___d_r_l___e_n_t_r_y___s_t_r_u_c_t.md#variable-onoffswitch-dfab49)** <br>DRL switch on / off other DRL features (see [DRL feature switching]()) plus DRL id ([0..15]). The first DRL entry will be the default DRL and its DRL id should be 0. If missing a default DRL is generated from the application's limits    TLV tag: [TAG_DFAB49_DRL_SWITCHES]()   XML tag: [XML_TAG_APPLIDATA_VISA_DRL_SWITCH]().  |

## Public Attributes Documentation

### variable ContactlessFloorLimit_DFAB40

```cpp
unsigned char[6] ContactlessFloorLimit_DFAB40;
```

Dynamic Reader Contactless Floor Limit (n12)    Use '999999999999' to disable.    TLV tag: [TAG_DFAB40_CTLS_FLOOR_LIMIT](),    XML tag: [XML_TAG_APPLIDATA_VISA_DRL_FLOORLIMIT](). 

### variable ContactlessTransactionLimit_DFAB41

```cpp
unsigned char[6] ContactlessTransactionLimit_DFAB41;
```

Dynamic Reader Contactless Transaction Limit (n12)    Use '999999999999' to disable.    TLV tag: [TAG_DFAB41_CTLS_TRX_LIMIT]()   XML tag: [XML_TAG_APPLIDATA_VISA_DRL_TXN_LIMIT](). 

### variable ContactlessCVMRequiredLimit_DFAB42

```cpp
unsigned char[6] ContactlessCVMRequiredLimit_DFAB42;
```

Dynamic Reader Contactless CVM Required Limit (n12)    Use '999999999999' to disable.    TLV tag: [TAG_DFAB42_CTLS_CVM_REQ_LIMIT]()   XML tag: [XML_TAG_APPLIDATA_VISA_DRL_CVM_LIMIT](). 

### variable OnOffSwitch_DFAB49

```cpp
unsigned char OnOffSwitch_DFAB49;
```

DRL switch on / off other DRL features (see [DRL feature switching]()) plus DRL id ([0..15]). The first DRL entry will be the default DRL and its DRL id should be 0. If missing a default DRL is generated from the application's limits    TLV tag: [TAG_DFAB49_DRL_SWITCHES]()   XML tag: [XML_TAG_APPLIDATA_VISA_DRL_SWITCH](). 

-------------------------------

Updated on 2025-06-17 at 11:52:22 +0100