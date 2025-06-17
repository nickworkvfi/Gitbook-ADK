---
title: DRL feature switching
summary: Values for VISA and Amex DRL features which can be switched on and off. 

---

# DRL feature switching

**Module:** **[Configuration](group___a_d_k___c_o_n_f_i_g_u_r_a_t_i_o_n.md)** **/** **[Application data](group___d_e_f___c_o_n_f___a_p_p_l_i.md)** **/** **[Dynamic reader limits](group___d_y_n_a_m_i_c___r_e_a_d_e_r___l_i_m_i_t_s.md)**

Values for VISA and Amex DRL features which can be switched on and off. 

## Defines

|                | Name           |
| -------------- | -------------- |
|  | **[VISA_DRL_DISABLE_ZERO_AMOUNT_CHECK](group___d_r_l___f_e_a_t_u_r_e___s_w_i_t_c_h_s.md#define-visa-drl-disable-zero-amount-check)** <br>b1: bit set: VISA: Disable the Zero Amount Check for this DRL entry (Visa default is on)  |
|  | **[VISA_DRL_ENABLE_STATUS_CHECK](group___d_r_l___f_e_a_t_u_r_e___s_w_i_t_c_h_s.md#define-visa-drl-enable-status-check)** <br>b2: bit set: VISA: Enable the Status Check for this DRL entry (Visa default is off)  |
|  | **[VISA_AMEX_DRL_DISABLE_FLOOR_LIMIT_CHECK](group___d_r_l___f_e_a_t_u_r_e___s_w_i_t_c_h_s.md#define-visa-amex-drl-disable-floor-limit-check)** <br>b6: bit set: AMEX and VISA: Disable the floor limit Check for this DRL entry (Default is on)  |
|  | **[VISA_AMEX_DRL_DISABLE_TRANS_LIMIT_CHECK](group___d_r_l___f_e_a_t_u_r_e___s_w_i_t_c_h_s.md#define-visa-amex-drl-disable-trans-limit-check)** <br>b7: bit set: AMEX and VISA: Disable the transaction limit Check for this DRL entry (Default is on)  |
|  | **[VISA_AMEX_DRL_DISABLE_CV_LIMIT_CHECK](group___d_r_l___f_e_a_t_u_r_e___s_w_i_t_c_h_s.md#define-visa-amex-drl-disable-cv-limit-check)** <br>b8: bit set: AMEX and VISA: Disable the cardholder verification limit Check for this DRL entry (Default is on)  |




## Macros Documentation

### define VISA_DRL_DISABLE_ZERO_AMOUNT_CHECK

```
#define VISA_DRL_DISABLE_ZERO_AMOUNT_CHECK 0x01
```

b1: bit set: VISA: Disable the Zero Amount Check for this DRL entry (Visa default is on) 

### define VISA_DRL_ENABLE_STATUS_CHECK

```
#define VISA_DRL_ENABLE_STATUS_CHECK 0x02
```

b2: bit set: VISA: Enable the Status Check for this DRL entry (Visa default is off) 

### define VISA_AMEX_DRL_DISABLE_FLOOR_LIMIT_CHECK

```
#define VISA_AMEX_DRL_DISABLE_FLOOR_LIMIT_CHECK 0x20
```

b6: bit set: AMEX and VISA: Disable the floor limit Check for this DRL entry (Default is on) 

### define VISA_AMEX_DRL_DISABLE_TRANS_LIMIT_CHECK

```
#define VISA_AMEX_DRL_DISABLE_TRANS_LIMIT_CHECK 0x40
```

b7: bit set: AMEX and VISA: Disable the transaction limit Check for this DRL entry (Default is on) 

### define VISA_AMEX_DRL_DISABLE_CV_LIMIT_CHECK

```
#define VISA_AMEX_DRL_DISABLE_CV_LIMIT_CHECK 0x80
```

b8: bit set: AMEX and VISA: Disable the cardholder verification limit Check for this DRL entry (Default is on) 



-------------------------------

Updated on 2025-06-17 at 11:52:22 +0100