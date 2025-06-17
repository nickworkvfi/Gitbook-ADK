---
title: Options for Exit Framework
summary: Meaning of TAG_DF8F0A_EXIT_OPTIONS, see also EMV_CTLS_Exit_Framework_extended()

---

# Options for Exit Framework

**Module:** **[Initialization](group___a_d_k___i_n_i_t_i_a_l_i_z_a_t_i_o_n.md)** **/** **[EMV ADK functions for initialization](group___f_u_n_c___i_n_i_t.md)**

Meaning of [TAG_DF8F0A_EXIT_OPTIONS](group___v_e_r_i___p_r_i_m___t_a_g_s__3_b_y_t_e.md#define-tag-df8f0a-exit-options), see also [EMV_CTLS_Exit_Framework_extended()](group___f_u_n_c___i_n_i_t.md#function-emv-ctls-exit-framework-extended) [More...](#detailed-description)

## Defines

|                | Name           |
| -------------- | -------------- |
|  | **[EXIT_CTLS_BASE](group___e_x_i_t___f_w___o_p_t_i_o_n_s.md#define-exit-ctls-base)**  |
|  | **[EXIT_CTLS_STOP_LEDS](group___e_x_i_t___f_w___o_p_t_i_o_n_s.md#define-exit-ctls-stop-leds)** <br>additionally stop LED-Blinking-thread when exit  |
|  | **[EXIT_CTLS_COMPLETE](group___e_x_i_t___f_w___o_p_t_i_o_n_s.md#define-exit-ctls-complete)**  |
|  | **[EXIT_CTLS_SEND_CALLBACK](group___e_x_i_t___f_w___o_p_t_i_o_n_s.md#define-exit-ctls-send-callback)**  |
|  | **[EXIT_CT_BASE](group___e_x_i_t___f_w___o_p_t_i_o_n_s.md#define-exit-ct-base)**  |
|  | **[EXIT_CT_COMPLETE](group___e_x_i_t___f_w___o_p_t_i_o_n_s.md#define-exit-ct-complete)** <br>dlclose all modules  |

## Detailed Description

Meaning of [TAG_DF8F0A_EXIT_OPTIONS](group___v_e_r_i___p_r_i_m___t_a_g_s__3_b_y_t_e.md#define-tag-df8f0a-exit-options), see also [EMV_CTLS_Exit_Framework_extended()](group___f_u_n_c___i_n_i_t.md#function-emv-ctls-exit-framework-extended)

Meaning of [TAG_DF8F0A_EXIT_OPTIONS](group___v_e_r_i___p_r_i_m___t_a_g_s__3_b_y_t_e.md#define-tag-df8f0a-exit-options), see also [EMV_CT_Exit_Framework_extended()](group___f_u_n_c___i_n_i_t.md#function-emv-ct-exit-framework-extended)




## Macros Documentation

### define EXIT_CTLS_BASE

```
#define EXIT_CTLS_BASE 0x00
```


set Framework to base-initialised state. Free memory Transactions not possible 


### define EXIT_CTLS_STOP_LEDS

```
#define EXIT_CTLS_STOP_LEDS 0x01
```

additionally stop LED-Blinking-thread when exit 

set Framework to base-initialised state. 


### define EXIT_CTLS_COMPLETE

```
#define EXIT_CTLS_COMPLETE 0x02
```


set Framework to uninitialised state. Led-Blinking No callbacks will be send after this. Send last Callback with TAG_BF0F_EXIT_CALLBACK_THREAD 


### define EXIT_CTLS_SEND_CALLBACK

```
#define EXIT_CTLS_SEND_CALLBACK EXIT_CTLS_COMPLETE
```


**Deprecated**: 

use [EXIT_CTLS_COMPLETE](group___e_x_i_t___f_w___o_p_t_i_o_n_s.md#define-exit-ctls-complete)

### define EXIT_CT_BASE

```
#define EXIT_CT_BASE 0x00
```


set Framework to base-initialised state. Free memory Transactions not possible 


### define EXIT_CT_COMPLETE

```
#define EXIT_CT_COMPLETE 0x01
```

dlclose all modules 

set Framework to uninitialised state. 




-------------------------------

Updated on 2025-06-17 at 11:52:22 +0100