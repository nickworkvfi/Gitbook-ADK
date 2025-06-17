---
title: Propriertary tags used by Visa
summary: see [Visa_Card], page A-63 

---

# Propriertary tags used by Visa

**Module:** **[General topics](group___a_d_k___g_e_n_e_r_a_l.md)** **/** **[Serialization](group___a_d_k___s_e_r_i_a_l_i_z_a_t_i_o_n.md)** **/** **[BER TLV tags used by EMV ADK](group___e_m_v___t_a_g_s.md)**

see [Visa_Card], page A-63 

## Defines

|                | Name           |
| -------------- | -------------- |
|  | **[TAG_9F51_APP_CURRENCY_CODE](group___v_i_s_a___t_a_g_s.md#define-tag-9f51-app-currency-code)** <br>Application Currency Code.  |
|  | **[TAG_9F52_DEFAULT_ACTION](group___v_i_s_a___t_a_g_s.md#define-tag-9f52-default-action)** <br>Application Default Action (ADA)  |
|  | **[TAG_9F53_CONSECUTIVE_LIM_TRANS_INT](group___v_i_s_a___t_a_g_s.md#define-tag-9f53-consecutive-lim-trans-int)** <br>Consecutive Transaction Limit (International)  |
|  | **[TAG_9F54_CUMULATIVE_TRANS_LIMET](group___v_i_s_a___t_a_g_s.md#define-tag-9f54-cumulative-trans-limet)** <br>Cumulative Total Transaction Amount Limit.  |
|  | **[TAG_9F56_ISS_AUTH_INCATOR](group___v_i_s_a___t_a_g_s.md#define-tag-9f56-iss-auth-incator)** <br>Issuer Authentication Indicator.  |
|  | **[TAG_9F5A_APP_PROGRAM_ID](group___v_i_s_a___t_a_g_s.md#define-tag-9f5a-app-program-id)** <br>Application Program Identifier.  |
|  | **[TAG_9F5D_VISA_AOSA](group___v_i_s_a___t_a_g_s.md#define-tag-9f5d-visa-aosa)** <br>Contactless: Available Offline Spending Amount (AOSA)    used as [EMV_CTLS_TRANSRES_STRUCT::T_9F5D_CL_VISA_AOSA](struct_e_m_v___c_t_l_s___t_r_a_n_s_r_e_s___s_t_r_u_c_t.md#variable-t-9f5d-cl-visa-aosa).  |
|  | **[TAG_9F66_TTQ](group___v_i_s_a___t_a_g_s.md#define-tag-9f66-ttq)** <br>VISA TTQ (Contactless only)  |
|  | **[TAG_9F6C_VISA_CTQ](group___v_i_s_a___t_a_g_s.md#define-tag-9f6c-visa-ctq)** <br>VISA CTQ (Contactless only)    used as [EMV_CTLS_TRANSRES_STRUCT::T_9F6C_CL_VISA_CTQ](struct_e_m_v___c_t_l_s___t_r_a_n_s_r_e_s___s_t_r_u_c_t.md#variable-t-9f6c-cl-visa-ctq).  |
|  | **[TAG_9F6D_TRM_APP_VERSION_NB](group___v_i_s_a___t_a_g_s.md#define-tag-9f6d-trm-app-version-nb)** <br>Terminal application version number.  |
|  | **[TAG_DF04_PK_CVM_REQUIREMENTS](group___v_i_s_a___t_a_g_s.md#define-tag-df04-pk-cvm-requirements)** <br>Visa Asia/Pacific: CVM requirements, see [EMV_CTLS_APPLIDATA_PK_STRUCT::CvmRequirements_DF04](struct_e_m_v___c_t_l_s___a_p_p_l_i_d_a_t_a___p_k___s_t_r_u_c_t.md#variable-cvmrequirements-df04).  |
|  | **[TAG_DF02_PK_FLOOR_LIMIT](group___v_i_s_a___t_a_g_s.md#define-tag-df02-pk-floor-limit)** <br>Visa Asia/Pacific: Floor limit, see [EMV_CTLS_APPLIDATA_PK_STRUCT::ContactlessFloorLimit_DF02](struct_e_m_v___c_t_l_s___a_p_p_l_i_d_a_t_a___p_k___s_t_r_u_c_t.md#variable-contactlessfloorlimit-df02).  |
|  | **[TAG_DF01_PK_CVM_REQ_LIMIT](group___v_i_s_a___t_a_g_s.md#define-tag-df01-pk-cvm-req-limit)** <br>Visa Asia/Pacific: CVM required limit, see [EMV_CTLS_APPLIDATA_PK_STRUCT::ContactlessCVMRequiredLimit_DF01](struct_e_m_v___c_t_l_s___a_p_p_l_i_d_a_t_a___p_k___s_t_r_u_c_t.md#variable-contactlesscvmrequiredlimit-df01).  |




## Macros Documentation

### define TAG_9F51_APP_CURRENCY_CODE

```
#define TAG_9F51_APP_CURRENCY_CODE 0x9F51
```

Application Currency Code. 

### define TAG_9F52_DEFAULT_ACTION

```
#define TAG_9F52_DEFAULT_ACTION 0x9F52
```

Application Default Action (ADA) 

### define TAG_9F53_CONSECUTIVE_LIM_TRANS_INT

```
#define TAG_9F53_CONSECUTIVE_LIM_TRANS_INT 0x9F53
```

Consecutive Transaction Limit (International) 

### define TAG_9F54_CUMULATIVE_TRANS_LIMET

```
#define TAG_9F54_CUMULATIVE_TRANS_LIMET 0x9F54
```

Cumulative Total Transaction Amount Limit. 

### define TAG_9F56_ISS_AUTH_INCATOR

```
#define TAG_9F56_ISS_AUTH_INCATOR 0x9F56
```

Issuer Authentication Indicator. 

### define TAG_9F5A_APP_PROGRAM_ID

```
#define TAG_9F5A_APP_PROGRAM_ID 0x9F5A
```

Application Program Identifier. 

### define TAG_9F5D_VISA_AOSA

```
#define TAG_9F5D_VISA_AOSA 0x9F5D
```

Contactless: Available Offline Spending Amount (AOSA)    used as [EMV_CTLS_TRANSRES_STRUCT::T_9F5D_CL_VISA_AOSA](struct_e_m_v___c_t_l_s___t_r_a_n_s_r_e_s___s_t_r_u_c_t.md#variable-t-9f5d-cl-visa-aosa). 

### define TAG_9F66_TTQ

```
#define TAG_9F66_TTQ 0x9F66
```

VISA TTQ (Contactless only) 

used as [EMV_CTLS_APPLIDATA_VK_STRUCT::TerminalTransactionQualifier_9F66](struct_e_m_v___c_t_l_s___a_p_p_l_i_d_a_t_a___v_k___s_t_r_u_c_t.md#variable-terminaltransactionqualifier-9f66), [EMV_CTLS_APPLIDATA_DK_STRUCT::TerminalTransactionQualifier_9F66](struct_e_m_v___c_t_l_s___a_p_p_l_i_d_a_t_a___d_k___s_t_r_u_c_t.md#variable-terminaltransactionqualifier-9f66), [EMV_CTLS_APPLIDATA_EK_STRUCT::TerminalTransactionQualifier_9F66](struct_e_m_v___c_t_l_s___a_p_p_l_i_d_a_t_a___e_k___s_t_r_u_c_t.md#variable-terminaltransactionqualifier-9f66), [EMV_CTLS_APPLIDATA_CK_STRUCT::TerminalTransactionQualifier_9F66](struct_e_m_v___c_t_l_s___a_p_p_l_i_d_a_t_a___c_k___s_t_r_u_c_t.md#variable-terminaltransactionqualifier-9f66), [EMV_CTLS_APPLIDATA_PB_STRUCT::TerminalTransactionQualifier_9F66](struct_e_m_v___c_t_l_s___a_p_p_l_i_d_a_t_a___p_b___s_t_r_u_c_t.md#variable-terminaltransactionqualifier-9f66)


### define TAG_9F6C_VISA_CTQ

```
#define TAG_9F6C_VISA_CTQ 0x9F6C
```

VISA CTQ (Contactless only)    used as [EMV_CTLS_TRANSRES_STRUCT::T_9F6C_CL_VISA_CTQ](struct_e_m_v___c_t_l_s___t_r_a_n_s_r_e_s___s_t_r_u_c_t.md#variable-t-9f6c-cl-visa-ctq). 

### define TAG_9F6D_TRM_APP_VERSION_NB

```
#define TAG_9F6D_TRM_APP_VERSION_NB 0x9F6D
```

Terminal application version number. 

### define TAG_DF04_PK_CVM_REQUIREMENTS

```
#define TAG_DF04_PK_CVM_REQUIREMENTS 0xDF04
```

Visa Asia/Pacific: CVM requirements, see [EMV_CTLS_APPLIDATA_PK_STRUCT::CvmRequirements_DF04](struct_e_m_v___c_t_l_s___a_p_p_l_i_d_a_t_a___p_k___s_t_r_u_c_t.md#variable-cvmrequirements-df04). 

### define TAG_DF02_PK_FLOOR_LIMIT

```
#define TAG_DF02_PK_FLOOR_LIMIT 0xDF02
```

Visa Asia/Pacific: Floor limit, see [EMV_CTLS_APPLIDATA_PK_STRUCT::ContactlessFloorLimit_DF02](struct_e_m_v___c_t_l_s___a_p_p_l_i_d_a_t_a___p_k___s_t_r_u_c_t.md#variable-contactlessfloorlimit-df02). 

### define TAG_DF01_PK_CVM_REQ_LIMIT

```
#define TAG_DF01_PK_CVM_REQ_LIMIT 0xDF01
```

Visa Asia/Pacific: CVM required limit, see [EMV_CTLS_APPLIDATA_PK_STRUCT::ContactlessCVMRequiredLimit_DF01](struct_e_m_v___c_t_l_s___a_p_p_l_i_d_a_t_a___p_k___s_t_r_u_c_t.md#variable-contactlesscvmrequiredlimit-df01). 



-------------------------------

Updated on 2025-06-17 at 11:52:22 +0100