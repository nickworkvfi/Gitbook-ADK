---
title: EMV_CTLS_VK_DRL_ENTRY_STRUCT
summary: Visa Dynamic Reader Limits, single entry Element of EMV_CTLS_VK_DRL_STRUCT. 

---

# EMV_CTLS_VK_DRL_ENTRY_STRUCT

**Module:** **[Configuration](group___a_d_k___c_o_n_f_i_g_u_r_a_t_i_o_n.md)** **/** **[Application data](group___d_e_f___c_o_n_f___a_p_p_l_i.md)**



Visa Dynamic Reader Limits, single entry Element of [EMV_CTLS_VK_DRL_STRUCT](). 


`#include <EMV_CTLS_Interface.h>`

## Public Attributes

|                | Name           |
| -------------- | -------------- |
| unsigned char[16] | **[AppProgramId_9F5A](struct_e_m_v___c_t_l_s___v_k___d_r_l___e_n_t_r_y___s_t_r_u_c_t.md#variable-appprogramid-9f5a)** <br>DRL Application programm ID    TLV tag [TAG_9F5A_APP_PROGRAM_ID]()   XML Tag: [XML_TAG_APPLIDATA_VISA_DRL_APP_PRG_ID]().  |
| unsigned char | **[AppProgramIdLen](struct_e_m_v___c_t_l_s___v_k___d_r_l___e_n_t_r_y___s_t_r_u_c_t.md#variable-appprogramidlen)** <br>DRL Application programm ID length    TLV tag [TAG_9F5A_APP_PROGRAM_ID]()   XML Tag: [XML_TAG_APPLIDATA_VISA_DRL_PRG_ID_LEN]().  |
| unsigned char[6] | **[ContactlessFloorLimit_DFAB40](struct_e_m_v___c_t_l_s___v_k___d_r_l___e_n_t_r_y___s_t_r_u_c_t.md#variable-contactlessfloorlimit-dfab40)** <br>Dynamic Reader Contactless Floor Limit (n12)    Use '999999999999' to disable    TLV tag [TAG_DFAB40_CTLS_FLOOR_LIMIT]()   XML Tag: [XML_TAG_APPLIDATA_VISA_DRL_FLOORLIMIT]().  |
| unsigned char[6] | **[ContactlessTransactionLimit_DFAB41](struct_e_m_v___c_t_l_s___v_k___d_r_l___e_n_t_r_y___s_t_r_u_c_t.md#variable-contactlesstransactionlimit-dfab41)** <br>Dynamic Reader Contactless Transaction Limit (n12)    Use '999999999999' to disable    TLV tag [TAG_DFAB41_CTLS_TRX_LIMIT]()   XML Tag: [XML_TAG_APPLIDATA_VISA_DRL_TXN_LIMIT]().  |
| unsigned char[6] | **[ContactlessCVMRequiredLimit_DFAB42](struct_e_m_v___c_t_l_s___v_k___d_r_l___e_n_t_r_y___s_t_r_u_c_t.md#variable-contactlesscvmrequiredlimit-dfab42)** <br>Dynamic Reader CVM Required Limit (n12)    Use '999999999999' to disable    TLV tag [TAG_DFAB42_CTLS_CVM_REQ_LIMIT]()   XML Tag: [XML_TAG_APPLIDATA_VISA_DRL_CVM_LIMIT]().  |
| unsigned char | **[OnOffSwitch_DFAB49](struct_e_m_v___c_t_l_s___v_k___d_r_l___e_n_t_r_y___s_t_r_u_c_t.md#variable-onoffswitch-dfab49)** <br>DRL switch on / off DRL features see [DRL feature switching]()   TLV tag [TAG_DFAB49_DRL_SWITCHES]()   XML Tag: [XML_TAG_APPLIDATA_VISA_DRL_SWITCH]().  |

## Public Attributes Documentation

### variable AppProgramId_9F5A

```cpp
unsigned char[16] AppProgramId_9F5A;
```

DRL Application programm ID    TLV tag [TAG_9F5A_APP_PROGRAM_ID]()   XML Tag: [XML_TAG_APPLIDATA_VISA_DRL_APP_PRG_ID](). 

### variable AppProgramIdLen

```cpp
unsigned char AppProgramIdLen;
```

DRL Application programm ID length    TLV tag [TAG_9F5A_APP_PROGRAM_ID]()   XML Tag: [XML_TAG_APPLIDATA_VISA_DRL_PRG_ID_LEN](). 

### variable ContactlessFloorLimit_DFAB40

```cpp
unsigned char[6] ContactlessFloorLimit_DFAB40;
```

Dynamic Reader Contactless Floor Limit (n12)    Use '999999999999' to disable    TLV tag [TAG_DFAB40_CTLS_FLOOR_LIMIT]()   XML Tag: [XML_TAG_APPLIDATA_VISA_DRL_FLOORLIMIT](). 

### variable ContactlessTransactionLimit_DFAB41

```cpp
unsigned char[6] ContactlessTransactionLimit_DFAB41;
```

Dynamic Reader Contactless Transaction Limit (n12)    Use '999999999999' to disable    TLV tag [TAG_DFAB41_CTLS_TRX_LIMIT]()   XML Tag: [XML_TAG_APPLIDATA_VISA_DRL_TXN_LIMIT](). 

### variable ContactlessCVMRequiredLimit_DFAB42

```cpp
unsigned char[6] ContactlessCVMRequiredLimit_DFAB42;
```

Dynamic Reader CVM Required Limit (n12)    Use '999999999999' to disable    TLV tag [TAG_DFAB42_CTLS_CVM_REQ_LIMIT]()   XML Tag: [XML_TAG_APPLIDATA_VISA_DRL_CVM_LIMIT](). 

### variable OnOffSwitch_DFAB49

```cpp
unsigned char OnOffSwitch_DFAB49;
```

DRL switch on / off DRL features see [DRL feature switching]()   TLV tag [TAG_DFAB49_DRL_SWITCHES]()   XML Tag: [XML_TAG_APPLIDATA_VISA_DRL_SWITCH](). 

-------------------------------

Updated on 2025-06-17 at 11:52:22 +0100