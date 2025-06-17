---
title: Result flags for outcome of framework initialization
summary: Flags used in EMV_CTLS_Init_Framework. 

---

# Result flags for outcome of framework initialization

**Module:** **[Initialization](group___a_d_k___i_n_i_t_i_a_l_i_z_a_t_i_o_n.md)** **/** **[EMV ADK functions for initialization](group___f_u_n_c___i_n_i_t.md)**

Flags used in [EMV_CTLS_Init_Framework](group___f_u_n_c___i_n_i_t.md#define-emv-ctls-init-framework). 

## Defines

|                | Name           |
| -------------- | -------------- |
|  | **[EMV_CTLS_INIT_RES_CHKSUM_DIFF](group___c_l_i_n_i_t___r_e_s_u_l_t___f_l_a_g_s.md#define-emv-ctls-init-res-chksum-diff)** <br>Checksums of configuration files changed, call of [EMV_CTLS_ApplyConfiguration()]() may be needed    EMV framework does this check only if [EMV_CTLS_INIT_OPT_CALC_CHKSUM](group___c_l_i_n_i_t___o_p_t_i_o_n_s.md#define-emv-ctls-init-opt-calc-chksum) is set. Is only possible on VFI reader.  |
|  | **[EMV_CTLS_INIT_RES_VFI_READER_MISS](group___c_l_i_n_i_t___r_e_s_u_l_t___f_l_a_g_s.md#define-emv-ctls-init-res-vfi-reader-miss)** <br>VFI reader usage desired (via [EMV_CTLS_INIT_OPT_USE_VFI](group___c_l_i_n_i_t___o_p_t_i_o_n_s.md#define-emv-ctls-init-opt-use-vfi)), but VFI reader is not installed.  |
|  | **[EMV_CTLS_INIT_RES_ENTRY_POINT_MISS](group___c_l_i_n_i_t___r_e_s_u_l_t___f_l_a_g_s.md#define-emv-ctls-init-res-entry-point-miss)** <br>Vertex usage desired (via [EMV_CTLS_INIT_OPT_USE_VERTEX](group___c_l_i_n_i_t___o_p_t_i_o_n_s.md#define-emv-ctls-init-opt-use-vertex)), but Entry Point is not installed.  |




## Macros Documentation

### define EMV_CTLS_INIT_RES_CHKSUM_DIFF

```
#define EMV_CTLS_INIT_RES_CHKSUM_DIFF 0x00000001
```

Checksums of configuration files changed, call of [EMV_CTLS_ApplyConfiguration()]() may be needed    EMV framework does this check only if [EMV_CTLS_INIT_OPT_CALC_CHKSUM](group___c_l_i_n_i_t___o_p_t_i_o_n_s.md#define-emv-ctls-init-opt-calc-chksum) is set. Is only possible on VFI reader. 

### define EMV_CTLS_INIT_RES_VFI_READER_MISS

```
#define EMV_CTLS_INIT_RES_VFI_READER_MISS 0x00000002
```

VFI reader usage desired (via [EMV_CTLS_INIT_OPT_USE_VFI](group___c_l_i_n_i_t___o_p_t_i_o_n_s.md#define-emv-ctls-init-opt-use-vfi)), but VFI reader is not installed. 

### define EMV_CTLS_INIT_RES_ENTRY_POINT_MISS

```
#define EMV_CTLS_INIT_RES_ENTRY_POINT_MISS 0x00000004
```

Vertex usage desired (via [EMV_CTLS_INIT_OPT_USE_VERTEX](group___c_l_i_n_i_t___o_p_t_i_o_n_s.md#define-emv-ctls-init-opt-use-vertex)), but Entry Point is not installed. 



-------------------------------

Updated on 2025-06-17 at 11:52:22 +0100