---
title: Defines for callback function "cardholder information"
summary: In order to show the cardholder additional information, e.g. wrong PIN, last PIN try, another app is selected, ... 
 see EMV_CT_CALLBACK_FnT (TAG_BF09_CBK_CARDHOLDERINFO) 

---

# Defines for callback function "cardholder information"

**Module:** **[Transaction execution](group___a_d_k___t_r_x___e_x_e_c.md)** **/** **[Callback functions](group___t_l_v___c_a_l_l_b_c_k.md)**

In order to show the cardholder additional information, e.g. wrong PIN, last PIN try, another app is selected, ...    see [EMV_CT_CALLBACK_FnT]() ([TAG_BF09_CBK_CARDHOLDERINFO](group___c_b_c_k___f_c_t___t_a_g_s.md#define-tag-bf09-cbk-cardholderinfo)) 

## Types

|                | Name           |
| -------------- | -------------- |
| typedef unsigned char | **[eCardholderInfo](group___c_a_r_d_h_o_l_d_e_r___i_n_f_o.md#typedef-ecardholderinfo)**  |

## Defines

|                | Name           |
| -------------- | -------------- |
|  | **[eEMVCrdWrongPIN](group___c_a_r_d_h_o_l_d_e_r___i_n_f_o.md#define-eemvcrdwrongpin)** <br>Customer info: wrong PIN.  |
|  | **[eEMVCrdCorrectPIN](group___c_a_r_d_h_o_l_d_e_r___i_n_f_o.md#define-eemvcrdcorrectpin)** <br>Customer info: correct PIN.  |
|  | **[eEMVCrdAppChange](group___c_a_r_d_h_o_l_d_e_r___i_n_f_o.md#define-eemvcrdappchange)** <br>Customer info: explicit selected application is changed.  |
|  | **[eEMVCrdLastTryPIN](group___c_a_r_d_h_o_l_d_e_r___i_n_f_o.md#define-eemvcrdlasttrypin)** <br>Customer info: last PIN try.  |

## Types Documentation

### typedef eCardholderInfo

```
typedef unsigned char eCardholderInfo;
```





## Macros Documentation

### define eEMVCrdWrongPIN

```
#define eEMVCrdWrongPIN 0
```

Customer info: wrong PIN. 

### define eEMVCrdCorrectPIN

```
#define eEMVCrdCorrectPIN 1
```

Customer info: correct PIN. 

### define eEMVCrdAppChange

```
#define eEMVCrdAppChange 2
```

Customer info: explicit selected application is changed. 

### define eEMVCrdLastTryPIN

```
#define eEMVCrdLastTryPIN 3
```

Customer info: last PIN try. 



-------------------------------

Updated on 2025-06-17 at 11:52:23 +0100