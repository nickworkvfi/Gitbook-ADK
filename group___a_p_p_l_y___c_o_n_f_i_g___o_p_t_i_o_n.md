---
title: Options how to apply configuration (VFI reader only)
summary: Options for EMV_CTLS_ApplyConfiguration()

---

# Options how to apply configuration (VFI reader only)

**Module:** **[Configuration](group___a_d_k___c_o_n_f_i_g_u_r_a_t_i_o_n.md)** **/** **[Application data](group___d_e_f___c_o_n_f___a_p_p_l_i.md)**

Options for [EMV_CTLS_ApplyConfiguration()](group___f_u_n_c___c_o_n_f.md#function-emv-ctls-applyconfiguration)

## Defines

|                | Name           |
| -------------- | -------------- |
|  | **[CTLS_APPLY_CFG_APPS](group___a_p_p_l_y___c_o_n_f_i_g___o_p_t_i_o_n.md#define-ctls-apply-cfg-apps)** <br>Apply data from [EMV_CTLS_APPLIDATA_SCHEME_SPECIFIC_STRUCT](struct_e_m_v___c_t_l_s___a_p_p_l_i_d_a_t_a___s_c_h_e_m_e___s_p_e_c_i_f_i_c___s_t_r_u_c_t.md) if something changed since last configuration to the reader.  |
|  | **[CTLS_APPLY_CFG_TERM](group___a_p_p_l_y___c_o_n_f_i_g___o_p_t_i_o_n.md#define-ctls-apply-cfg-term)** <br>Apply data from [EMV_CTLS_TERMDATA_STRUCT](struct_e_m_v___c_t_l_s___t_e_r_m_d_a_t_a___s_t_r_u_c_t.md) if something changed since last configuration to the reader.  |
|  | **[CTLS_APPLY_CFG_CAPK](group___a_p_p_l_y___c_o_n_f_i_g___o_p_t_i_o_n.md#define-ctls-apply-cfg-capk)** <br>Apply data from [EMV_CTLS_CAPKEY_STRUCT](struct_e_m_v___c_t_l_s___c_a_p_k_e_y___s_t_r_u_c_t.md) if something changed since last configuration to the reader.  |
|  | **[CTLS_APPLY_CFG_ALL](group___a_p_p_l_y___c_o_n_f_i_g___o_p_t_i_o_n.md#define-ctls-apply-cfg-all)** <br>Apply all configuration data if something changed since last configuration to the reader.  |
|  | **[CTLS_APPLY_CFG_FORCE](group___a_p_p_l_y___c_o_n_f_i_g___o_p_t_i_o_n.md#define-ctls-apply-cfg-force)** <br>Apply all configuration data even in case nothing changed since last reader configuration.  |




## Macros Documentation

### define CTLS_APPLY_CFG_APPS

```
#define CTLS_APPLY_CFG_APPS 0x00000001
```

Apply data from [EMV_CTLS_APPLIDATA_SCHEME_SPECIFIC_STRUCT](struct_e_m_v___c_t_l_s___a_p_p_l_i_d_a_t_a___s_c_h_e_m_e___s_p_e_c_i_f_i_c___s_t_r_u_c_t.md) if something changed since last configuration to the reader. 

### define CTLS_APPLY_CFG_TERM

```
#define CTLS_APPLY_CFG_TERM 0x00000002
```

Apply data from [EMV_CTLS_TERMDATA_STRUCT](struct_e_m_v___c_t_l_s___t_e_r_m_d_a_t_a___s_t_r_u_c_t.md) if something changed since last configuration to the reader. 

### define CTLS_APPLY_CFG_CAPK

```
#define CTLS_APPLY_CFG_CAPK 0x00000004
```

Apply data from [EMV_CTLS_CAPKEY_STRUCT](struct_e_m_v___c_t_l_s___c_a_p_k_e_y___s_t_r_u_c_t.md) if something changed since last configuration to the reader. 

### define CTLS_APPLY_CFG_ALL

```
#define CTLS_APPLY_CFG_ALL 0x00000007
```

Apply all configuration data if something changed since last configuration to the reader. 

### define CTLS_APPLY_CFG_FORCE

```
#define CTLS_APPLY_CFG_FORCE 0x00000008
```

Apply all configuration data even in case nothing changed since last reader configuration. 



-------------------------------

Updated on 2025-06-17 at 11:52:22 +0100