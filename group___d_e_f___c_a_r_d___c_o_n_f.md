---
title: Support of cardholder confirmation
summary: DF4D, see ucCardholderConfirmation in EMV_CT_SELECT_TYPE. 

---

# Support of cardholder confirmation

**Module:** **[Transaction execution](group___a_d_k___t_r_x___e_x_e_c.md)** **/** **[Input data](group___d_e_f___f_l_o_w___i_n_p_u_t.md)**

DF4D, see `ucCardholderConfirmation` in [EMV_CT_SELECT_TYPE](group___a_d_k___t_r_x___e_x_e_c.md#typedef-emv-ct-select-type). 

## Classes

|                | Name           |
| -------------- | -------------- |
| struct | **[EMV_CTLS_CAPKEY_STRUCT](struct_e_m_v___c_t_l_s___c_a_p_k_e_y___s_t_r_u_c_t.md)** <br>Data structure CAP keys.  |
| struct | **[EMV_CTLS_CAPREAD_STRUCT](struct_e_m_v___c_t_l_s___c_a_p_r_e_a_d___s_t_r_u_c_t.md)** <br>Data structure CAP keys.  |
| struct | **[EMV_CT_CAPKEY_STRUCT](struct_e_m_v___c_t___c_a_p_k_e_y___s_t_r_u_c_t.md)** <br>Data structure CAP keys.  |
| struct | **[EMV_CT_CAPREAD_STRUCT](struct_e_m_v___c_t___c_a_p_r_e_a_d___s_t_r_u_c_t.md)** <br>Data structure CAP keys.  |

## Types

|                | Name           |
| -------------- | -------------- |
| typedef struct [EMV_CTLS_CAPKEY_STRUCT](struct_e_m_v___c_t_l_s___c_a_p_k_e_y___s_t_r_u_c_t.md) | **[EMV_CTLS_CAPKEY_TYPE](group___d_e_f___c_a_r_d___c_o_n_f.md#typedef-emv-ctls-capkey-type)** <br>Data structure CAP keys.  |
| typedef struct [EMV_CTLS_CAPREAD_STRUCT](struct_e_m_v___c_t_l_s___c_a_p_r_e_a_d___s_t_r_u_c_t.md) | **[EMV_CTLS_CAPREAD_TYPE](group___d_e_f___c_a_r_d___c_o_n_f.md#typedef-emv-ctls-capread-type)** <br>Data structure CAP keys.  |
| typedef struct [EMV_CT_CAPKEY_STRUCT](struct_e_m_v___c_t___c_a_p_k_e_y___s_t_r_u_c_t.md) | **[EMV_CT_CAPKEY_TYPE](group___d_e_f___c_a_r_d___c_o_n_f.md#typedef-emv-ct-capkey-type)** <br>Data structure CAP keys.  |
| typedef struct [EMV_CT_CAPREAD_STRUCT](struct_e_m_v___c_t___c_a_p_r_e_a_d___s_t_r_u_c_t.md) | **[EMV_CT_CAPREAD_TYPE](group___d_e_f___c_a_r_d___c_o_n_f.md#typedef-emv-ct-capread-type)** <br>Data structure CAP keys.  |

## Defines

|                | Name           |
| -------------- | -------------- |
|  | **[CARD_CONF_YES](group___d_e_f___c_a_r_d___c_o_n_f.md#define-card-conf-yes)** <br>**default**   support of cardholder confirmation  |
|  | **[CARD_CONF_NO](group___d_e_f___c_a_r_d___c_o_n_f.md#define-card-conf-no)** <br>no cardholder confirmation, e.g. no cardholder display  |

## Types Documentation

### typedef EMV_CTLS_CAPKEY_TYPE

```
typedef struct EMV_CTLS_CAPKEY_STRUCT EMV_CTLS_CAPKEY_TYPE;
```

Data structure CAP keys. 

Max. no.: [MAX_CTLS_CONF_KEYS](_e_m_v___c_t_l_s___interface_8h.md#define-max-ctls-conf-keys)


### typedef EMV_CTLS_CAPREAD_TYPE

```
typedef struct EMV_CTLS_CAPREAD_STRUCT EMV_CTLS_CAPREAD_TYPE;
```

Data structure CAP keys. 

### typedef EMV_CT_CAPKEY_TYPE

```
typedef struct EMV_CT_CAPKEY_STRUCT EMV_CT_CAPKEY_TYPE;
```

Data structure CAP keys. 

### typedef EMV_CT_CAPREAD_TYPE

```
typedef struct EMV_CT_CAPREAD_STRUCT EMV_CT_CAPREAD_TYPE;
```

Data structure CAP keys. 




## Macros Documentation

### define CARD_CONF_YES

```
#define CARD_CONF_YES 0x00
```

**default**   support of cardholder confirmation 

### define CARD_CONF_NO

```
#define CARD_CONF_NO 0x01
```

no cardholder confirmation, e.g. no cardholder display 



-------------------------------

Updated on 2025-06-17 at 11:52:23 +0100