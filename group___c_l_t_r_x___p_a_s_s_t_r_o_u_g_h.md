---
title: CTLS card types for which passtrough mode is set
summary: Defines for EMV_CTLS_START_TYPE::passthroughCardTypes. 

---

# CTLS card types for which passtrough mode is set

**Module:** **[Transaction execution](group___a_d_k___t_r_x___e_x_e_c.md)** **/** **[Input data](group___d_e_f___f_l_o_w___i_n_p_u_t.md)**

Defines for [EMV_CTLS_START_TYPE::passthroughCardTypes](struct_e_m_v___c_t_l_s___s_t_a_r_t___s_t_r_u_c_t.md#variable-passthroughcardtypes). 

## Defines

|                | Name           |
| -------------- | -------------- |
|  | **[CLTRX_PASSTHROUGH_OFF](group___c_l_t_r_x___p_a_s_s_t_r_o_u_g_h.md#define-cltrx-passthrough-off)** <br>no passthrough mode (default)  |
|  | **[CLTRX_PASSTHROUGH_NONISO](group___c_l_t_r_x___p_a_s_s_t_r_o_u_g_h.md#define-cltrx-passthrough-noniso)** <br>goto passtrough mode for non ISO 14443 cards (e.g. Mifare)  |
|  | **[CLTRX_PASSTHROUGH_ALL](group___c_l_t_r_x___p_a_s_s_t_r_o_u_g_h.md#define-cltrx-passthrough-all)** <br>goto passtrough mode for all cards  |




## Macros Documentation

### define CLTRX_PASSTHROUGH_OFF

```
#define CLTRX_PASSTHROUGH_OFF 0x00
```

no passthrough mode (default) 

### define CLTRX_PASSTHROUGH_NONISO

```
#define CLTRX_PASSTHROUGH_NONISO 0x01
```

goto passtrough mode for non ISO 14443 cards (e.g. Mifare) 

### define CLTRX_PASSTHROUGH_ALL

```
#define CLTRX_PASSTHROUGH_ALL 0x02
```

goto passtrough mode for all cards 



-------------------------------

Updated on 2025-06-17 at 11:52:23 +0100