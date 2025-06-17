---
title: Defines for callback function "put merchant information"
summary: In order to show the merchant additional information on a system with two displays, 'information flashes' can be sent to the terminal during payment processing. This allows the merchant to alert the customer to confirming the amount or entering the PIN as required. 
 see EMV_CT_CALLBACK_FnT (TAG_BF01_CBK_MERCHINFO) 

---

# Defines for callback function "put merchant information"

**Module:** **[Transaction execution](group___a_d_k___t_r_x___e_x_e_c.md)** **/** **[Callback functions](group___t_l_v___c_a_l_l_b_c_k.md)**

In order to show the merchant additional information on a system with two displays, 'information flashes' can be sent to the terminal during payment processing. This allows the merchant to alert the customer to confirming the amount or entering the PIN as required.    see [EMV_CT_CALLBACK_FnT]() ([TAG_BF01_CBK_MERCHINFO](group___c_b_c_k___f_c_t___t_a_g_s.md#define-tag-bf01-cbk-merchinfo)) 

## Types

|                | Name           |
| -------------- | -------------- |
| typedef unsigned char | **[EMV_ADK_MerchantInfo](group___m_e_r_c_h___i_n_f_o.md#typedef-emv-adk-merchantinfo)**  |

## Defines

|                | Name           |
| -------------- | -------------- |
|  | **[eEMVMerCustSelApp](group___m_e_r_c_h___i_n_f_o.md#define-eemvmercustselapp)** <br>Customer has to select Application, not used anymore.  |
|  | **[eEMVMerConfAmount](group___m_e_r_c_h___i_n_f_o.md#define-eemvmerconfamount)** <br>Customer has to confirm amount.  |
|  | **[eEMVMerCrdhldVerif](group___m_e_r_c_h___i_n_f_o.md#define-eemvmercrdhldverif)** <br>EMV step "Cardholder Verification" will be started.  |
|  | **[eEMVMerReadAppData](group___m_e_r_c_h___i_n_f_o.md#define-eemvmerreadappdata)** <br>EMV step "Read Application Data" will be started.  |
|  | **[eEMVMerOffAuth](group___m_e_r_c_h___i_n_f_o.md#define-eemvmeroffauth)** <br>EMV step "Offline Data Authentication" will be started.  |
|  | **[eEMVMer1stGAC](group___m_e_r_c_h___i_n_f_o.md#define-eemvmer1stgac)** <br>1st GENERATE AC will be done  |
|  | **[eEMVMer2ndGAC](group___m_e_r_c_h___i_n_f_o.md#define-eemvmer2ndgac)** <br>2nd GENERATE AC will be done  |
|  | **[eEMVMerSelect](group___m_e_r_c_h___i_n_f_o.md#define-eemvmerselect)** <br>"Application Selection" is finished  |
|  | **[eEMVMerPINProgress](group___m_e_r_c_h___i_n_f_o.md#define-eemvmerpinprogress)** <br>Input of PIN in progress, not used anymore.  |
|  | **[eEMVMerCustConf](group___m_e_r_c_h___i_n_f_o.md#define-eemvmercustconf)** <br>Wait for customer confirmation, not used anymore.  |
|  | **[eEMVMerPINInput](group___m_e_r_c_h___i_n_f_o.md#define-eemvmerpininput)** <br>Customer is asked for PIN entry.  |
|  | **[eEMVMerLangSelect](group___m_e_r_c_h___i_n_f_o.md#define-eemvmerlangselect)** <br>Customer has to select language.  |
|  | **[eEMVMerCustLang](group___m_e_r_c_h___i_n_f_o.md#define-eemvmercustlang)** <br>customer language selected = 0x80 + language ID (e.g. EMV_LANG_ITALIAN)  |

## Types Documentation

### typedef EMV_ADK_MerchantInfo

```
typedef unsigned char EMV_ADK_MerchantInfo;
```





## Macros Documentation

### define eEMVMerCustSelApp

```
#define eEMVMerCustSelApp 0
```

Customer has to select Application, not used anymore. 

### define eEMVMerConfAmount

```
#define eEMVMerConfAmount 1
```

Customer has to confirm amount. 

### define eEMVMerCrdhldVerif

```
#define eEMVMerCrdhldVerif 2
```

EMV step "Cardholder Verification" will be started. 

### define eEMVMerReadAppData

```
#define eEMVMerReadAppData 3
```

EMV step "Read Application Data" will be started. 

### define eEMVMerOffAuth

```
#define eEMVMerOffAuth 4
```

EMV step "Offline Data Authentication" will be started. 

### define eEMVMer1stGAC

```
#define eEMVMer1stGAC 5
```

1st GENERATE AC will be done 

### define eEMVMer2ndGAC

```
#define eEMVMer2ndGAC 6
```

2nd GENERATE AC will be done 

### define eEMVMerSelect

```
#define eEMVMerSelect 7
```

"Application Selection" is finished 

### define eEMVMerPINProgress

```
#define eEMVMerPINProgress 8
```

Input of PIN in progress, not used anymore. 

### define eEMVMerCustConf

```
#define eEMVMerCustConf 9
```

Wait for customer confirmation, not used anymore. 

### define eEMVMerPINInput

```
#define eEMVMerPINInput 10
```

Customer is asked for PIN entry. 

### define eEMVMerLangSelect

```
#define eEMVMerLangSelect 11
```

Customer has to select language. 

### define eEMVMerCustLang

```
#define eEMVMerCustLang 0x80
```

customer language selected = 0x80 + language ID (e.g. EMV_LANG_ITALIAN) 



-------------------------------

Updated on 2025-06-17 at 11:52:23 +0100