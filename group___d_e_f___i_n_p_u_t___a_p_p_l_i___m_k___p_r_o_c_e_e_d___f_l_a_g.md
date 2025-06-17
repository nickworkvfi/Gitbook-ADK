---
title: PayPass ProceedToFirstWriteFlag_DF8110 values
summary: Well-known values for PayPass flag ProceedToFirstWriteFlag('DF1810') in EMV_CTLS_APPLIDATA_MK_STRUCT::Scheme.MK.ProceedToFirstWriteFlag_DF8110. 

---

# PayPass ProceedToFirstWriteFlag_DF8110 values

**Module:** **[Configuration](group___a_d_k___c_o_n_f_i_g_u_r_a_t_i_o_n.md)** **/** **[Application data](group___d_e_f___c_o_n_f___a_p_p_l_i.md)**

Well-known values for PayPass flag ProceedToFirstWriteFlag('DF1810') in EMV_CTLS_APPLIDATA_MK_STRUCT::Scheme.MK.ProceedToFirstWriteFlag_DF8110. 

## Defines

|                | Name           |
| -------------- | -------------- |
|  | **[INPUT_CTLS_MK_PROCEED_TO_FIRST_WRITE_NO](group___d_e_f___i_n_p_u_t___a_p_p_l_i___m_k___p_r_o_c_e_e_d___f_l_a_g.md#define-input-ctls-mk-proceed-to-first-write-no)** <br>Kernel shall wait for DET signal, specification says that no DEK shall be sent.  |
|  | **[INPUT_CTLS_MK_PROCEED_TO_FIRST_WRITE_YES](group___d_e_f___i_n_p_u_t___a_p_p_l_i___m_k___p_r_o_c_e_e_d___f_l_a_g.md#define-input-ctls-mk-proceed-to-first-write-yes)** <br>Kernel shall proceed without sending DEK signal.  |
|  | **[INPUT_CTLS_MK_PROCEED_TO_FIRST_WRITE_EMPTY](group___d_e_f___i_n_p_u_t___a_p_p_l_i___m_k___p_r_o_c_e_e_d___f_l_a_g.md#define-input-ctls-mk-proceed-to-first-write-empty)** <br>Kernel shall send DEK signal before first write.  |
|  | **[INPUT_CTLS_MK_PROCEED_TO_FIRST_WRITE_ABSENT](group___d_e_f___i_n_p_u_t___a_p_p_l_i___m_k___p_r_o_c_e_e_d___f_l_a_g.md#define-input-ctls-mk-proceed-to-first-write-absent)** <br>Any other value makes the flag absent. Kernel shall act like [INPUT_CTLS_MK_PROCEED_TO_FIRST_WRITE_YES](group___d_e_f___i_n_p_u_t___a_p_p_l_i___m_k___p_r_o_c_e_e_d___f_l_a_g.md#define-input-ctls-mk-proceed-to-first-write-yes).  |




## Macros Documentation

### define INPUT_CTLS_MK_PROCEED_TO_FIRST_WRITE_NO

```
#define INPUT_CTLS_MK_PROCEED_TO_FIRST_WRITE_NO 0x00
```

Kernel shall wait for DET signal, specification says that no DEK shall be sent. 

### define INPUT_CTLS_MK_PROCEED_TO_FIRST_WRITE_YES

```
#define INPUT_CTLS_MK_PROCEED_TO_FIRST_WRITE_YES 0x01
```

Kernel shall proceed without sending DEK signal. 

### define INPUT_CTLS_MK_PROCEED_TO_FIRST_WRITE_EMPTY

```
#define INPUT_CTLS_MK_PROCEED_TO_FIRST_WRITE_EMPTY 0xFF
```

Kernel shall send DEK signal before first write. 

### define INPUT_CTLS_MK_PROCEED_TO_FIRST_WRITE_ABSENT

```
#define INPUT_CTLS_MK_PROCEED_TO_FIRST_WRITE_ABSENT 0xFE
```

Any other value makes the flag absent. Kernel shall act like [INPUT_CTLS_MK_PROCEED_TO_FIRST_WRITE_YES](group___d_e_f___i_n_p_u_t___a_p_p_l_i___m_k___p_r_o_c_e_e_d___f_l_a_g.md#define-input-ctls-mk-proceed-to-first-write-yes). 



-------------------------------

Updated on 2025-06-17 at 11:52:22 +0100