---
title: Byte defines for CVM not supported / CVM not required
summary: see AIP_CVM_not_supported and EMV_CT_APPLIDATA_STRUCT::CVM_not_required 

---

# Byte defines for CVM not supported / CVM not required

**Module:** **[Configuration](group___a_d_k___c_o_n_f_i_g_u_r_a_t_i_o_n.md)** **/** **[Application data](group___d_e_f___c_o_n_f___a_p_p_l_i.md)**

see `AIP_CVM_not_supported` and EMV_CT_APPLIDATA_STRUCT::CVM_not_required 

## Defines

|                | Name           |
| -------------- | -------------- |
|  | **[CVM_CONTINUE](group___c_v_m___n_o_t___s_u_p_p.md#define-cvm-continue)** <br>continue transaction  |
|  | **[CVM_DEFAULT_SIGN](group___c_v_m___n_o_t___s_u_p_p.md#define-cvm-default-sign)** <br>execute CVM signature  |
|  | **[CVM_DEFAULT_ONLINE_PIN](group___c_v_m___n_o_t___s_u_p_p.md#define-cvm-default-online-pin)** <br>execute CVM online PIN  |
|  | **[CVM_ABORT](group___c_v_m___n_o_t___s_u_p_p.md#define-cvm-abort)** <br>abort transaction (only for `AIP_CVM_not_supported`)  |




## Macros Documentation

### define CVM_CONTINUE

```
#define CVM_CONTINUE 0x00
```

continue transaction 

### define CVM_DEFAULT_SIGN

```
#define CVM_DEFAULT_SIGN 0x01
```

execute CVM signature 

### define CVM_DEFAULT_ONLINE_PIN

```
#define CVM_DEFAULT_ONLINE_PIN 0x02
```

execute CVM online PIN 

### define CVM_ABORT

```
#define CVM_ABORT 0x03
```

abort transaction (only for `AIP_CVM_not_supported`) 



-------------------------------

Updated on 2025-06-17 at 11:52:22 +0100