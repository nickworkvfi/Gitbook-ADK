---
title: Number of DRL entries for Visa and Amex
summary: For VISA and Amex: How many DRL entries are possible. 

---

# Number of DRL entries for Visa and Amex

**Module:** **[Configuration](group___a_d_k___c_o_n_f_i_g_u_r_a_t_i_o_n.md)** **/** **[Application data](group___d_e_f___c_o_n_f___a_p_p_l_i.md)** **/** **[Dynamic reader limits](group___d_y_n_a_m_i_c___r_e_a_d_e_r___l_i_m_i_t_s.md)**

For VISA and Amex: How many DRL entries are possible. 

## Defines

|                | Name           |
| -------------- | -------------- |
|  | **[EMV_ADK_DRL_ENTRIES_VISA](group___d_r_l___m_a_x___e_n_t_r_i_e_s.md#define-emv-adk-drl-entries-visa)** <br>Maximal number of entries in [EMV_CTLS_APPLIDATA_VK_STRUCT::VisaDRLParams_FFAB01](struct_e_m_v___c_t_l_s___a_p_p_l_i_d_a_t_a___v_k___s_t_r_u_c_t.md#variable-visadrlparams-ffab01) supported for VFI-Reader configuration.  |
|  | **[EMV_ADK_DRL_ENTRIES_AMEX](group___d_r_l___m_a_x___e_n_t_r_i_e_s.md#define-emv-adk-drl-entries-amex)** <br>Maximal number of entries in [EMV_CTLS_APPLIDATA_AK_STRUCT::AmexDRLParams_FFAB01](struct_e_m_v___c_t_l_s___a_p_p_l_i_d_a_t_a___a_k___s_t_r_u_c_t.md#variable-amexdrlparams-ffab01).  |




## Macros Documentation

### define EMV_ADK_DRL_ENTRIES_VISA

```
#define EMV_ADK_DRL_ENTRIES_VISA 4
```

Maximal number of entries in [EMV_CTLS_APPLIDATA_VK_STRUCT::VisaDRLParams_FFAB01](struct_e_m_v___c_t_l_s___a_p_p_l_i_d_a_t_a___v_k___s_t_r_u_c_t.md#variable-visadrlparams-ffab01) supported for VFI-Reader configuration. 

### define EMV_ADK_DRL_ENTRIES_AMEX

```
#define EMV_ADK_DRL_ENTRIES_AMEX 16
```

Maximal number of entries in [EMV_CTLS_APPLIDATA_AK_STRUCT::AmexDRLParams_FFAB01](struct_e_m_v___c_t_l_s___a_p_p_l_i_d_a_t_a___a_k___s_t_r_u_c_t.md#variable-amexdrlparams-ffab01). 



-------------------------------

Updated on 2025-06-17 at 11:52:22 +0100