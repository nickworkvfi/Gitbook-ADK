---
title: DCC callback information
summary: Information flags for calling application. 

---

# DCC callback information

**Module:** **[Transaction execution](group___a_d_k___t_r_x___e_x_e_c.md)** **/** **[Callback functions](group___t_l_v___c_a_l_l_b_c_k.md)**

Information flags for calling application.  [More...](#detailed-description)

## Defines

|                | Name           |
| -------------- | -------------- |
|  | **[DCC_CBCK_INFO_LEN](group___c_b_c_k___d_c_c___i_n_f_o.md#define-dcc-cbck-info-len)** <br>Length of `pucDomOption` in bytes.  |
|  | **[DCC_CBCK_INFO_PDOL_FORBIT](group___c_b_c_k___d_c_c___i_n_f_o.md#define-dcc-cbck-info-pdol-forbit)** <br>B1b1: Currency change not allowed for this transaction. Reason is PDOL containing amount or currency.  |

## Detailed Description

Information flags for calling application. 

Defines for `pucDccInfo` in Dynamic Currency Change handling 




## Macros Documentation

### define DCC_CBCK_INFO_LEN

```
#define DCC_CBCK_INFO_LEN 3
```

Length of `pucDomOption` in bytes. 

### define DCC_CBCK_INFO_PDOL_FORBIT

```
#define DCC_CBCK_INFO_PDOL_FORBIT 0x01
```

B1b1: Currency change not allowed for this transaction. Reason is PDOL containing amount or currency. 



-------------------------------

Updated on 2025-06-17 at 11:52:23 +0100