---
title: Options for contactless transaction processing at EMV_CTLS_ContinueOfflineExt()
summary: Defines for EMV_CTLS_CONT_OFFL_STRUCT::options. 

---

# Options for contactless transaction processing at EMV_CTLS_ContinueOfflineExt()

**Module:** **[Transaction execution](group___a_d_k___t_r_x___e_x_e_c.md)** **/** **[Input data](group___d_e_f___f_l_o_w___i_n_p_u_t.md)**

Defines for [EMV_CTLS_CONT_OFFL_STRUCT::options](struct_e_m_v___c_t_l_s___c_o_n_t___o_f_f_l___s_t_r_u_c_t.md#variable-options). 

## Defines

|                | Name           |
| -------------- | -------------- |
|  | **[INPUT_CTLS_CONT_OFFL_OPT_PIN](group___c_l___c_o_n_t___o_f_f_l___o_p_t_i_o_n_s.md#define-input-ctls-cont-offl-opt-pin)** <br>B1b1: Restart for Offline PIN verification (for girocard)  |
|  | **[INPUT_CTLS_CONT_OFFL_OPT_PIN_CANCELLED](group___c_l___c_o_n_t___o_f_f_l___o_p_t_i_o_n_s.md#define-input-ctls-cont-offl-opt-pin-cancelled)** <br>B1b2-3 = 1: PIN input cancelled (for Epal Post TAA after Online PIN)  |
|  | **[INPUT_CTLS_CONT_OFFL_OPT_PIN_BYPASSED](group___c_l___c_o_n_t___o_f_f_l___o_p_t_i_o_n_s.md#define-input-ctls-cont-offl-opt-pin-bypassed)** <br>B1b2-3 = 2: PIN bypassed (for Epal Post TAA after Online PIN)  |
|  | **[INPUT_CTLS_CONT_OFFL_OPT_PIN_ERROR](group___c_l___c_o_n_t___o_f_f_l___o_p_t_i_o_n_s.md#define-input-ctls-cont-offl-opt-pin-error)** <br>B1b2-3 = 3: PIN pad not present or not working (for Epal Post TAA after Online PIN)  |




## Macros Documentation

### define INPUT_CTLS_CONT_OFFL_OPT_PIN

```
#define INPUT_CTLS_CONT_OFFL_OPT_PIN 0x01
```

B1b1: Restart for Offline PIN verification (for girocard) 

### define INPUT_CTLS_CONT_OFFL_OPT_PIN_CANCELLED

```
#define INPUT_CTLS_CONT_OFFL_OPT_PIN_CANCELLED 0x02
```

B1b2-3 = 1: PIN input cancelled (for Epal Post TAA after Online PIN) 

### define INPUT_CTLS_CONT_OFFL_OPT_PIN_BYPASSED

```
#define INPUT_CTLS_CONT_OFFL_OPT_PIN_BYPASSED 0x04
```

B1b2-3 = 2: PIN bypassed (for Epal Post TAA after Online PIN) 

### define INPUT_CTLS_CONT_OFFL_OPT_PIN_ERROR

```
#define INPUT_CTLS_CONT_OFFL_OPT_PIN_ERROR 0x06
```

B1b2-3 = 3: PIN pad not present or not working (for Epal Post TAA after Online PIN) 



-------------------------------

Updated on 2025-06-17 at 11:52:23 +0100