---
title: Bitstring with information about the outcome of EMV_CTLS_SetupTransaction()
summary: Contents of EMV_CTLS_STARTRES_STRUCT::TxnInformation, EMV_CTLS_SetupTransaction()

---

# Bitstring with information about the outcome of EMV_CTLS_SetupTransaction()

**Module:** **[Transaction execution](group___a_d_k___t_r_x___e_x_e_c.md)** **/** **[Output data](group___d_e_f___f_l_o_w___o_u_t_p_u_t.md)**

Contents of [EMV_CTLS_STARTRES_STRUCT::TxnInformation](struct_e_m_v___c_t_l_s___s_t_a_r_t_r_e_s___s_t_r_u_c_t.md#variable-txninformation), [EMV_CTLS_SetupTransaction()](group___f_u_n_c___f_l_o_w.md#function-emv-ctls-setuptransaction)

## Defines

|                | Name           |
| -------------- | -------------- |
|  | **[EMV_CTLS_SETUPTRX_RES_CHKSUM_DIFF](group___d_e_f___s_e_l_e_c_t_r_e_s___t_r_x_i_n_f_o.md#define-emv-ctls-setuptrx-res-chksum-diff)** <br>B1b1: Checksum of configuration files changed, call of [EMV_CTLS_ApplyConfiguration()](group___f_u_n_c___c_o_n_f.md#function-emv-ctls-applyconfiguration) may be needed.  |




## Macros Documentation

### define EMV_CTLS_SETUPTRX_RES_CHKSUM_DIFF

```
#define EMV_CTLS_SETUPTRX_RES_CHKSUM_DIFF 0x01
```

B1b1: Checksum of configuration files changed, call of [EMV_CTLS_ApplyConfiguration()](group___f_u_n_c___c_o_n_f.md#function-emv-ctls-applyconfiguration) may be needed. 



-------------------------------

Updated on 2025-06-17 at 11:52:23 +0100