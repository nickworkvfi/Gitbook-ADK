---
title: Options for DataExchange state
summary: Used in EMV_CTLS_CALLBACK_FnT, TAG_BF0E_CBK_DATA_EXCHANGE, TAG_DF8F59_DE_STATE. 

---

# Options for DataExchange state

**Module:** **[Transaction execution](group___a_d_k___t_r_x___e_x_e_c.md)** **/** **[Callback functions](group___t_l_v___c_a_l_l_b_c_k.md)**

Used in [EMV_CTLS_CALLBACK_FnT](group___t_l_v___c_a_l_l_b_c_k.md#typedef-emv-ctls-callback-fnt), [TAG_BF0E_CBK_DATA_EXCHANGE](), [TAG_DF8F59_DE_STATE](group___t_l_v___c_b_c_k.md#define-tag-df8f59-de-state). 

## Defines

|                | Name           |
| -------------- | -------------- |
|  | **[EMV_CTLS_DE_STATE_0](group___c_b_c_k___d_e___s_t_a_t_e.md#define-emv-ctls-de-state-0)** <br>DataExchange Inactive.  |
|  | **[EMV_CTLS_DE_STATE_1](group___c_b_c_k___d_e___s_t_a_t_e.md#define-emv-ctls-de-state-1)** <br>MSD/Chip - Waiting for PDOL Data.  |
|  | **[EMV_CTLS_DE_STATE_2](group___c_b_c_k___d_e___s_t_a_t_e.md#define-emv-ctls-de-state-2)** <br>MSD - Data update prior to RR.  |
|  | **[EMV_CTLS_DE_STATE_3](group___c_b_c_k___d_e___s_t_a_t_e.md#define-emv-ctls-de-state-3)** <br>MSD - Waiting for proceed to first write flag.  |
|  | **[EMV_CTLS_DE_STATE_4](group___c_b_c_k___d_e___s_t_a_t_e.md#define-emv-ctls-de-state-4)** <br>MSD - Final data to send.  |
|  | **[EMV_CTLS_DE_STATE_5](group___c_b_c_k___d_e___s_t_a_t_e.md#define-emv-ctls-de-state-5)** <br>Chip - Update befre/during RR/GD.  |
|  | **[EMV_CTLS_DE_STATE_6](group___c_b_c_k___d_e___s_t_a_t_e.md#define-emv-ctls-de-state-6)** <br>Chip - Data update after RR.  |
|  | **[EMV_CTLS_DE_STATE_7](group___c_b_c_k___d_e___s_t_a_t_e.md#define-emv-ctls-de-state-7)** <br>Chip - Waiting for proceed to first write flag.  |
|  | **[EMV_CTLS_DE_STATE_8](group___c_b_c_k___d_e___s_t_a_t_e.md#define-emv-ctls-de-state-8)** <br>Chip - Final data to send.  |




## Macros Documentation

### define EMV_CTLS_DE_STATE_0

```
#define EMV_CTLS_DE_STATE_0 0x00
```

DataExchange Inactive. 

### define EMV_CTLS_DE_STATE_1

```
#define EMV_CTLS_DE_STATE_1 0x01
```

MSD/Chip - Waiting for PDOL Data. 

### define EMV_CTLS_DE_STATE_2

```
#define EMV_CTLS_DE_STATE_2 0x02
```

MSD - Data update prior to RR. 

### define EMV_CTLS_DE_STATE_3

```
#define EMV_CTLS_DE_STATE_3 0x03
```

MSD - Waiting for proceed to first write flag. 

### define EMV_CTLS_DE_STATE_4

```
#define EMV_CTLS_DE_STATE_4 0x04
```

MSD - Final data to send. 

### define EMV_CTLS_DE_STATE_5

```
#define EMV_CTLS_DE_STATE_5 0x05
```

Chip - Update befre/during RR/GD. 

### define EMV_CTLS_DE_STATE_6

```
#define EMV_CTLS_DE_STATE_6 0x06
```

Chip - Data update after RR. 

### define EMV_CTLS_DE_STATE_7

```
#define EMV_CTLS_DE_STATE_7 0x07
```

Chip - Waiting for proceed to first write flag. 

### define EMV_CTLS_DE_STATE_8

```
#define EMV_CTLS_DE_STATE_8 0x08
```

Chip - Final data to send. 



-------------------------------

Updated on 2025-06-17 at 11:52:23 +0100