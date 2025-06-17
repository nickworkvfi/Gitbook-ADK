---
title: technologies used in TecSupport_DFAB30

---

# technologies used in TecSupport_DFAB30

**Module:** **[Configuration](group___a_d_k___c_o_n_f_i_g_u_r_a_t_i_o_n.md)** **/** **[Application data](group___d_e_f___c_o_n_f___a_p_p_l_i.md)**

 [More...](#detailed-description)

## Defines

|                | Name           |
| -------------- | -------------- |
|  | **[EMV_CTLS_TEC_CHIP](group___d_e_f___t_e_c.md#define-emv-ctls-tec-chip)** <br>Chip Support.  |
|  | **[EMV_CTLS_TEC_MSR](group___d_e_f___t_e_c.md#define-emv-ctls-tec-msr)** <br>MSR Support.  |

## Detailed Description


It's a bitlist, so values can be combined. 

 Used in [EMV_CTLS_APPLIDATA_VK_STRUCT::TecSupport_DFAB30](struct_e_m_v___c_t_l_s___a_p_p_l_i_d_a_t_a___v_k___s_t_r_u_c_t.md#variable-tecsupport-dfab30), [EMV_CTLS_APPLIDATA_DK_STRUCT::TecSupport_DFAB30](struct_e_m_v___c_t_l_s___a_p_p_l_i_d_a_t_a___d_k___s_t_r_u_c_t.md#variable-tecsupport-dfab30), [EMV_CTLS_APPLIDATA_CK_STRUCT::TecSupport_DFAB30](struct_e_m_v___c_t_l_s___a_p_p_l_i_d_a_t_a___c_k___s_t_r_u_c_t.md#variable-tecsupport-dfab30), [EMV_CTLS_APPLIDATA_AK_STRUCT::TecSupport_DFAB30](struct_e_m_v___c_t_l_s___a_p_p_l_i_d_a_t_a___a_k___s_t_r_u_c_t.md#variable-tecsupport-dfab30)

 For Discover this parameter (DFAB30) has a specific meaning in terms of the legacy DISCOVER ZIP: 0x01 = DPAS Chip, 0x02 = DPAS MSR, 0x00 = LEGACY DISCOVER ZIP 




## Macros Documentation

### define EMV_CTLS_TEC_CHIP

```
#define EMV_CTLS_TEC_CHIP 0x01
```

Chip Support. 

### define EMV_CTLS_TEC_MSR

```
#define EMV_CTLS_TEC_MSR 0x02
```

MSR Support. 



-------------------------------

Updated on 2025-06-17 at 11:52:22 +0100