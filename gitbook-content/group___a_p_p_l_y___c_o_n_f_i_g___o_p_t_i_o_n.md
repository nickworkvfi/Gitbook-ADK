---
hidden: true
title: Options how to apply configuration (VFI reader only)Configuration » Application data
---

[Macros](#define-members)

Options for <a href="group___f_u_n_c___c_o_n_f.md#gaa5352e4331b8fd16eaa02b1bbb7027c2">EMV_CTLS_ApplyConfiguration()</a> [More\...](#details)

Collaboration diagram for Options how to apply configuration (VFI reader only):

![](group___a_p_p_l_y___c_o_n_f_i_g___o_p_t_i_o_n.png)

|  |  |
|----|----|
| Macros |  |
| #define  | [CTLS_APPLY_CFG_APPS](#gac78b6f3f7eabec24d2d96a0ddb38e056)   0x00000001 |
|   | Apply data from <a href="group___d_e_f___c_o_n_f___a_p_p_l_i.md#struct_e_m_v___c_t_l_s___a_p_p_l_i_d_a_t_a___s_c_h_e_m_e___s_p_e_c_i_f_i_c___s_t_r_u_c_t">EMV_CTLS_APPLIDATA_SCHEME_SPECIFIC_STRUCT</a> if something changed since last configuration to the reader. [More\...](#gac78b6f3f7eabec24d2d96a0ddb38e056)<br/> |
| #define  | [CTLS_APPLY_CFG_TERM](#gaa79928b6d877ad025e20295b446d6e36)   0x00000002 |
|   | Apply data from <a href="group___d_e_f___c_o_n_f___t_e_r_m.md#struct_e_m_v___c_t_l_s___t_e_r_m_d_a_t_a___s_t_r_u_c_t">EMV_CTLS_TERMDATA_STRUCT</a> if something changed since last configuration to the reader. [More\...](#gaa79928b6d877ad025e20295b446d6e36)<br/> |
| #define  | [CTLS_APPLY_CFG_CAPK](#gafd0ffcbf41e65e0a2c24abb42a8a1246)   0x00000004 |
|   | Apply data from <a href="group___d_e_f___c_a_r_d___c_o_n_f.md#struct_e_m_v___c_t_l_s___c_a_p_k_e_y___s_t_r_u_c_t">EMV_CTLS_CAPKEY_STRUCT</a> if something changed since last configuration to the reader. [More\...](#gafd0ffcbf41e65e0a2c24abb42a8a1246)<br/> |
| #define  | [CTLS_APPLY_CFG_ALL](#ga37fe77e1f609a08848bc7fc16f12654a)   0x00000007 |
|   | Apply all configuration data if something changed since last configuration to the reader. [More\...](#ga37fe77e1f609a08848bc7fc16f12654a)<br/> |
| #define  | [CTLS_APPLY_CFG_FORCE](#gaf034e27ffaf03ce3015b7a33e95be83e)   0x00000008 |
|   | Apply all configuration data even in case nothing changed since last reader configuration. [More\...](#gaf034e27ffaf03ce3015b7a33e95be83e)<br/> |

## DetailedDescription {#detailed-description}

Options for <a href="group___f_u_n_c___c_o_n_f.md#gaa5352e4331b8fd16eaa02b1bbb7027c2">EMV_CTLS_ApplyConfiguration()</a>

## MacroDefinition Documentation {#macro-definition-documentation}

## CTLS_APPLY_CFG_ALL <a href="#ga37fe77e1f609a08848bc7fc16f12654a" id="ga37fe77e1f609a08848bc7fc16f12654a"></a>

<p>#define CTLS_APPLY_CFG_ALL   0x00000007</p>

Apply all configuration data if something changed since last configuration to the reader.

## CTLS_APPLY_CFG_APPS <a href="#gac78b6f3f7eabec24d2d96a0ddb38e056" id="gac78b6f3f7eabec24d2d96a0ddb38e056"></a>

<p>#define CTLS_APPLY_CFG_APPS   0x00000001</p>

Apply data from <a href="group___d_e_f___c_o_n_f___a_p_p_l_i.md#struct_e_m_v___c_t_l_s___a_p_p_l_i_d_a_t_a___s_c_h_e_m_e___s_p_e_c_i_f_i_c___s_t_r_u_c_t">EMV_CTLS_APPLIDATA_SCHEME_SPECIFIC_STRUCT</a> if something changed since last configuration to the reader.

## CTLS_APPLY_CFG_CAPK <a href="#gafd0ffcbf41e65e0a2c24abb42a8a1246" id="gafd0ffcbf41e65e0a2c24abb42a8a1246"></a>

<p>#define CTLS_APPLY_CFG_CAPK   0x00000004</p>

Apply data from <a href="group___d_e_f___c_a_r_d___c_o_n_f.md#struct_e_m_v___c_t_l_s___c_a_p_k_e_y___s_t_r_u_c_t">EMV_CTLS_CAPKEY_STRUCT</a> if something changed since last configuration to the reader.

## CTLS_APPLY_CFG_FORCE <a href="#gaf034e27ffaf03ce3015b7a33e95be83e" id="gaf034e27ffaf03ce3015b7a33e95be83e"></a>

<p>#define CTLS_APPLY_CFG_FORCE   0x00000008</p>

Apply all configuration data even in case nothing changed since last reader configuration.

## CTLS_APPLY_CFG_TERM <a href="#gaa79928b6d877ad025e20295b446d6e36" id="gaa79928b6d877ad025e20295b446d6e36"></a>

<p>#define CTLS_APPLY_CFG_TERM   0x00000002</p>

Apply data from <a href="group___d_e_f___c_o_n_f___t_e_r_m.md#struct_e_m_v___c_t_l_s___t_e_r_m_d_a_t_a___s_t_r_u_c_t">EMV_CTLS_TERMDATA_STRUCT</a> if something changed since last configuration to the reader.
