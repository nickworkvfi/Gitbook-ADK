---
title: Terminal Data
summary: Definitions used for functions EMV_CT_SetTermData(), EMV_CT_GetTermData()

---

# Terminal Data

**Module:** **[Configuration](group___a_d_k___c_o_n_f_i_g_u_r_a_t_i_o_n.md)**

Definitions used for functions [EMV_CT_SetTermData()](group___f_u_n_c___c_o_n_f.md#function-emv-ct-settermdata), [EMV_CT_GetTermData()](group___f_u_n_c___c_o_n_f.md#function-emv-ct-gettermdata) [More...](#detailed-description)

## Modules

| Name           |
| -------------- |
| **[Terminal data: Which data is valid](group___d_e_f___i_n_p_u_t___t_e_r_m.md)** <br>Contents of the [EMV_CTLS_TERMDATA_STRUCT::Info_Included_Data](struct_e_m_v___c_t_l_s___t_e_r_m_d_a_t_a___s_t_r_u_c_t.md#variable-info-included-data).  |
| **[Supported Contactless modes](group___c_l___m_o_d_e_s.md)** <br>Defines for [EMV_CTLS_TRANSRES_STRUCT::CL_Mode](struct_e_m_v___c_t_l_s___t_r_a_n_s_r_e_s___s_t_r_u_c_t.md#variable-cl-mode).  |
| **[Terminal configuration: Collection of flow options](group___t_e_r_m___f_l_o_w___o_p_t_i_o_n_s.md)** <br>Contents of the [EMV_CTLS_TERMDATA_STRUCT::FlowOptions](struct_e_m_v___c_t_l_s___t_e_r_m_d_a_t_a___s_t_r_u_c_t.md#variable-flowoptions).  |
| **[Terminaltypes (Tag 9F35)](group___t_e_r_m___t_y_p_e_s.md)** <br>see also [EMV B4], page 113  |

## Classes

|                | Name           |
| -------------- | -------------- |
| struct | **[EMV_CTLS_TERMDATA_STRUCT](struct_e_m_v___c_t_l_s___t_e_r_m_d_a_t_a___s_t_r_u_c_t.md)** <br>struct for interface to [EMV_CTLS_SetTermData()]() and [EMV_CTLS_GetTermData()]() |
| struct | **[EMV_CT_TERMDATA_STRUCT](struct_e_m_v___c_t___t_e_r_m_d_a_t_a___s_t_r_u_c_t.md)** <br>struct for interface to [EMV_CT_SetTermData()]() and [EMV_CT_GetTermData()]() |

## Types

|                | Name           |
| -------------- | -------------- |
| typedef struct [EMV_CTLS_TERMDATA_STRUCT](struct_e_m_v___c_t_l_s___t_e_r_m_d_a_t_a___s_t_r_u_c_t.md) | **[EMV_CTLS_TERMDATA_TYPE](group___d_e_f___c_o_n_f___t_e_r_m.md#typedef-emv-ctls-termdata-type)** <br>struct for interface to [EMV_CTLS_SetTermData()](group___f_u_n_c___c_o_n_f.md#function-emv-ctls-settermdata) and [EMV_CTLS_GetTermData()](group___f_u_n_c___c_o_n_f.md#function-emv-ctls-gettermdata) |
| typedef struct [EMV_CT_TERMDATA_STRUCT](struct_e_m_v___c_t___t_e_r_m_d_a_t_a___s_t_r_u_c_t.md) | **[EMV_CT_TERMDATA_TYPE](group___d_e_f___c_o_n_f___t_e_r_m.md#typedef-emv-ct-termdata-type)** <br>struct for interface to [EMV_CT_SetTermData()](group___f_u_n_c___c_o_n_f.md#function-emv-ct-settermdata) and [EMV_CT_GetTermData()](group___f_u_n_c___c_o_n_f.md#function-emv-ct-gettermdata) |

## Defines

|                | Name           |
| -------------- | -------------- |
|  | **[EMV_CTLS_KERNEL_VERSION_SIZE](group___d_e_f___c_o_n_f___t_e_r_m.md#define-emv-ctls-kernel-version-size)** <br>Length of Contactless kernel version information.  |

## Detailed Description

Definitions used for functions [EMV_CT_SetTermData()](group___f_u_n_c___c_o_n_f.md#function-emv-ct-settermdata), [EMV_CT_GetTermData()](group___f_u_n_c___c_o_n_f.md#function-emv-ct-gettermdata)

Definitions used for functions [EMV_CTLS_SetTermData()](group___f_u_n_c___c_o_n_f.md#function-emv-ctls-settermdata), [EMV_CTLS_GetTermData()](group___f_u_n_c___c_o_n_f.md#function-emv-ctls-gettermdata)

## Types Documentation

### typedef EMV_CTLS_TERMDATA_TYPE

```
typedef struct EMV_CTLS_TERMDATA_STRUCT EMV_CTLS_TERMDATA_TYPE;
```

struct for interface to [EMV_CTLS_SetTermData()](group___f_u_n_c___c_o_n_f.md#function-emv-ctls-settermdata) and [EMV_CTLS_GetTermData()](group___f_u_n_c___c_o_n_f.md#function-emv-ctls-gettermdata)

typedef for [EMV_CTLS_TERMDATA_STRUCT](struct_e_m_v___c_t_l_s___t_e_r_m_d_a_t_a___s_t_r_u_c_t.md)


### typedef EMV_CT_TERMDATA_TYPE

```
typedef struct EMV_CT_TERMDATA_STRUCT EMV_CT_TERMDATA_TYPE;
```

struct for interface to [EMV_CT_SetTermData()](group___f_u_n_c___c_o_n_f.md#function-emv-ct-settermdata) and [EMV_CT_GetTermData()](group___f_u_n_c___c_o_n_f.md#function-emv-ct-gettermdata)

typedef for [EMV_CT_TERMDATA_STRUCT](struct_e_m_v___c_t___t_e_r_m_d_a_t_a___s_t_r_u_c_t.md)





## Macros Documentation

### define EMV_CTLS_KERNEL_VERSION_SIZE

```
#define EMV_CTLS_KERNEL_VERSION_SIZE 255
```

Length of Contactless kernel version information. 

Max. length of [EMV_CTLS_TERMDATA_STRUCT::KernelVersion](struct_e_m_v___c_t_l_s___t_e_r_m_d_a_t_a___s_t_r_u_c_t.md#variable-kernelversion)




-------------------------------

Updated on 2025-06-17 at 11:52:22 +0100