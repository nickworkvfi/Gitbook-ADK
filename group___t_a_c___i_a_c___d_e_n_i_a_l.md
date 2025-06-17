---
title: TAC/IAC DENIAL processing in case of Offline Only terminals
summary: DF15, ICS feature, for ucAC_before_after in EMV_CT_TERMDATA_STRUCT. 

---

# TAC/IAC DENIAL processing in case of Offline Only terminals

**Module:** **[Configuration](group___a_d_k___c_o_n_f_i_g_u_r_a_t_i_o_n.md)** **/** **[Application data](group___d_e_f___c_o_n_f___a_p_p_l_i.md)**

DF15, ICS feature, for `ucAC_before_after` in [EMV_CT_TERMDATA_STRUCT](struct_e_m_v___c_t___t_e_r_m_d_a_t_a___s_t_r_u_c_t.md). 

## Defines

|                | Name           |
| -------------- | -------------- |
|  | **[EMV_CT_PROCESS_TACIAC_DEFAULT_BEFORE](group___t_a_c___i_a_c___d_e_n_i_a_l.md#define-emv-ct-process-taciac-default-before)** <br>process default action codes prior to 1st GENERATE AC  |
|  | **[EMV_CT_PROCESS_TACIAC_DEFAULT_AFTER](group___t_a_c___i_a_c___d_e_n_i_a_l.md#define-emv-ct-process-taciac-default-after)** <br>process default action codes after 1st GENERATE AC  |




## Macros Documentation

### define EMV_CT_PROCESS_TACIAC_DEFAULT_BEFORE

```
#define EMV_CT_PROCESS_TACIAC_DEFAULT_BEFORE 0x00
```

process default action codes prior to 1st GENERATE AC 

### define EMV_CT_PROCESS_TACIAC_DEFAULT_AFTER

```
#define EMV_CT_PROCESS_TACIAC_DEFAULT_AFTER 0x01
```

process default action codes after 1st GENERATE AC 



-------------------------------

Updated on 2025-06-17 at 11:52:22 +0100