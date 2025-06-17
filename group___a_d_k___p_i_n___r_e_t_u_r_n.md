---
title: Return values
summary: Return values used by calling application for PIN input callback function. 

---

# Return values

**Module:** **[Transaction execution](group___a_d_k___t_r_x___e_x_e_c.md)** **/** **[Callback functions](group___t_l_v___c_a_l_l_b_c_k.md)** **/** **[Definitions for PIN Input callback function](group___a_d_k___p_i_n___p_a_r_a_m.md)**

Return values used by calling application for PIN input callback function. 

## Defines

|                | Name           |
| -------------- | -------------- |
|  | **[EMV_CT_PIN_INPUT_OKAY](group___a_d_k___p_i_n___r_e_t_u_r_n.md#define-emv-ct-pin-input-okay)** <br>PIN input was successful.  |
|  | **[EMV_CT_PIN_INPUT_COMM_ERR](group___a_d_k___p_i_n___r_e_t_u_r_n.md#define-emv-ct-pin-input-comm-err)** <br>Communication error.  |
|  | **[EMV_CT_PIN_INPUT_ABORT](group___a_d_k___p_i_n___r_e_t_u_r_n.md#define-emv-ct-pin-input-abort)** <br>Customer canceled.  |
|  | **[EMV_CT_PIN_INPUT_BYPASS](group___a_d_k___p_i_n___r_e_t_u_r_n.md#define-emv-ct-pin-input-bypass)** <br>Customer chose "bypass PIN entry".  |
|  | **[EMV_CT_PIN_INPUT_TIMEOUT](group___a_d_k___p_i_n___r_e_t_u_r_n.md#define-emv-ct-pin-input-timeout)** <br>Timeout.  |
|  | **[EMV_CT_PIN_INPUT_OTHER_ERR](group___a_d_k___p_i_n___r_e_t_u_r_n.md#define-emv-ct-pin-input-other-err)** <br>Other error.  |
|  | **[EMV_CT_PIN_UNCRIT_TIMEOUT](group___a_d_k___p_i_n___r_e_t_u_r_n.md#define-emv-ct-pin-uncrit-timeout)** <br>uncritical timeout (no immediate abort on timeout)  |




## Macros Documentation

### define EMV_CT_PIN_INPUT_OKAY

```
#define EMV_CT_PIN_INPUT_OKAY 0
```

PIN input was successful. 

### define EMV_CT_PIN_INPUT_COMM_ERR

```
#define EMV_CT_PIN_INPUT_COMM_ERR 1
```

Communication error. 

### define EMV_CT_PIN_INPUT_ABORT

```
#define EMV_CT_PIN_INPUT_ABORT 2
```

Customer canceled. 

### define EMV_CT_PIN_INPUT_BYPASS

```
#define EMV_CT_PIN_INPUT_BYPASS 3
```

Customer chose "bypass PIN entry". 

### define EMV_CT_PIN_INPUT_TIMEOUT

```
#define EMV_CT_PIN_INPUT_TIMEOUT 4
```

Timeout. 

### define EMV_CT_PIN_INPUT_OTHER_ERR

```
#define EMV_CT_PIN_INPUT_OTHER_ERR 5
```

Other error. 

### define EMV_CT_PIN_UNCRIT_TIMEOUT

```
#define EMV_CT_PIN_UNCRIT_TIMEOUT 6
```

uncritical timeout (no immediate abort on timeout) 



-------------------------------

Updated on 2025-06-17 at 11:52:23 +0100