---
title: Options for DataExchange mode
summary: Used in EMV_CTLS_CALLBACK_FnT, TAG_BF0E_CBK_DATA_EXCHANGE, TAG_DF8F5A_DE_MODE. 

---

# Options for DataExchange mode

**Module:** **[Transaction execution](group___a_d_k___t_r_x___e_x_e_c.md)** **/** **[Callback functions](group___t_l_v___c_a_l_l_b_c_k.md)**

Used in [EMV_CTLS_CALLBACK_FnT](group___t_l_v___c_a_l_l_b_c_k.md#typedef-emv-ctls-callback-fnt), [TAG_BF0E_CBK_DATA_EXCHANGE](), [TAG_DF8F5A_DE_MODE](group___t_l_v___c_b_c_k.md#define-tag-df8f5a-de-mode). 

## Defines

|                | Name           |
| -------------- | -------------- |
|  | **[EMV_CTLS_DE_MODE_STOP](group___c_b_c_k___d_e___m_o_d_e.md#define-emv-ctls-de-mode-stop)** <br>User wishes transaction to terminate.  |
|  | **[EMV_CTLS_DE_MODE_CONT](group___c_b_c_k___d_e___m_o_d_e.md#define-emv-ctls-de-mode-cont)** <br>User wishes transaction processing to continue from point of interruption.  |
|  | **[EMV_CTLS_DE_MODE_MORE](group___c_b_c_k___d_e___m_o_d_e.md#define-emv-ctls-de-mode-more)** <br>User wishes to supply more data.  |




## Macros Documentation

### define EMV_CTLS_DE_MODE_STOP

```
#define EMV_CTLS_DE_MODE_STOP 0x00
```

User wishes transaction to terminate. 

### define EMV_CTLS_DE_MODE_CONT

```
#define EMV_CTLS_DE_MODE_CONT 0x01
```

User wishes transaction processing to continue from point of interruption. 

### define EMV_CTLS_DE_MODE_MORE

```
#define EMV_CTLS_DE_MODE_MORE 0x02
```

User wishes to supply more data. 



-------------------------------

Updated on 2025-06-17 at 11:52:23 +0100