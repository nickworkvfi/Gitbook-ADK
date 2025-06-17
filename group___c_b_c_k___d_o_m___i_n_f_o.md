---
title: Domestic callback information
summary: Information flags for TAG_DF5C_DOM_INFO in EMV_CT_CALLBACK_FnT (TAG_BF06_CBK_LOCAL_CHECKS) 

---

# Domestic callback information

**Module:** **[Transaction execution](group___a_d_k___t_r_x___e_x_e_c.md)** **/** **[Callback functions](group___t_l_v___c_a_l_l_b_c_k.md)**

Information flags for [TAG_DF5C_DOM_INFO](group___v_e_r_i___p_r_i_m___t_a_g_s.md#define-tag-df5c-dom-info) in [EMV_CT_CALLBACK_FnT]() ([TAG_BF06_CBK_LOCAL_CHECKS](group___c_b_c_k___f_c_t___t_a_g_s.md#define-tag-bf06-cbk-local-checks)) 

## Defines

|                | Name           |
| -------------- | -------------- |
|  | **[DOM_INFO_LEN](group___c_b_c_k___d_o_m___i_n_f_o.md#define-dom-info-len)** <br>Length of `pucDomInfo` in bytes.  |
|  | **[DOM_INFO_ICC_REQ_AMOUNT](group___c_b_c_k___d_o_m___i_n_f_o.md#define-dom-info-icc-req-amount)** <br>ICC already requested transaction amount (e.g. in PDOL). Amount change for running transaction is forbidden.  |
|  | **[DOM_INFO_ICC_REQ_TRANSTYPE](group___c_b_c_k___d_o_m___i_n_f_o.md#define-dom-info-icc-req-transtype)** <br>ICC already requested transaction type (e.g. in PDOL). Transaction type change for running transaction is forbidden.  |




## Macros Documentation

### define DOM_INFO_LEN

```
#define DOM_INFO_LEN 3
```

Length of `pucDomInfo` in bytes. 

### define DOM_INFO_ICC_REQ_AMOUNT

```
#define DOM_INFO_ICC_REQ_AMOUNT 0x01
```

ICC already requested transaction amount (e.g. in PDOL). Amount change for running transaction is forbidden. 

### define DOM_INFO_ICC_REQ_TRANSTYPE

```
#define DOM_INFO_ICC_REQ_TRANSTYPE 0x02
```

ICC already requested transaction type (e.g. in PDOL). Transaction type change for running transaction is forbidden. 



-------------------------------

Updated on 2025-06-17 at 11:52:23 +0100