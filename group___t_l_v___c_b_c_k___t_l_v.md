---
title: Tags for callback functions
summary: Used in function EMV_CT_CALLBACK_FnT. 

---

# Tags for callback functions

**Module:** **[General topics](group___a_d_k___g_e_n_e_r_a_l.md)** **/** **[Serialization](group___a_d_k___s_e_r_i_a_l_i_z_a_t_i_o_n.md)** **/** **[BER TLV tags used by EMV ADK](group___e_m_v___t_a_g_s.md)** **/** **[Verifone internal tags](group___v_e_r_i___t_a_g_s.md)** **/** **[Primitive tags](group___v_e_r_i___p_r_i_m___t_a_g_s.md)**

Used in function [EMV_CT_CALLBACK_FnT](). 

## Defines

|                | Name           |
| -------------- | -------------- |
|  | **[TAG_DF6D_CBK_CARDHOLDER_RET](group___t_l_v___c_b_c_k___t_l_v.md#define-tag-df6d-cbk-cardholder-ret)** <br>return value of cardholder information  |
|  | **[TAG_DF6E_CBK_CARDHOLDERINFO](group___t_l_v___c_b_c_k___t_l_v.md#define-tag-df6e-cbk-cardholderinfo)** <br>cardholder information during transaction, e.g. Wrong PIN, see [eCardholderInfo]() |
|  | **[TAG_DF6F_CBK_PIN_ICC_RESP](group___t_l_v___c_b_c_k___t_l_v.md#define-tag-df6f-cbk-pin-icc-resp)**  |
|  | **[TAG_DF70_CBK_MERCHINFO](group___t_l_v___c_b_c_k___t_l_v.md#define-tag-df70-cbk-merchinfo)** <br>MerchantInfo(), see [EMV_ADK_MerchantInfo]().  |
|  | **[TAG_DF71_CBK_AMOUNTCONF](group___t_l_v___c_b_c_k___t_l_v.md#define-tag-df71-cbk-amountconf)** <br>`amount` confirmation result (TRUE/FALSE)  |
|  | **[TAG_DF72_CBK_BLACKLIST](group___t_l_v___c_b_c_k___t_l_v.md#define-tag-df72-cbk-blacklist)** <br>Indicator if used PAN is in blacklist, TRUE/FALSE.  |
|  | **[TAG_DF73_CBK_TRANSLOG](group___t_l_v___c_b_c_k___t_l_v.md#define-tag-df73-cbk-translog)** <br>`stored` amount of the selected PAN  |
|  | **[TAG_DF74_CBK_SELECTOR](group___t_l_v___c_b_c_k___t_l_v.md#define-tag-df74-cbk-selector)** <br>see `ucSelector`, allowed values see [Types of external application selection]() |
|  | **[TAG_DF75_CBK_APP_NO](group___t_l_v___c_b_c_k___t_l_v.md#define-tag-df75-cbk-app-no)** <br>If length == 1: Return value of terminal selection process == chosen candidate, otherwise reduced candidate list.  |
|  | **[TAG_DF6C_CBK_REPEAT](group___t_l_v___c_b_c_k___t_l_v.md#define-tag-df6c-cbk-repeat)** <br>Decide if ADK should repeat the callback call or not    (1 byte, 1=Repeat/0=Do not repeat). If absent: Do not repeat    see [TAG_BF04_CBK_REDUCE_CAND]().  |
|  | **[TAG_DF76_CBK_MANIPUL_TRX](group___t_l_v___c_b_c_k___t_l_v.md#define-tag-df76-cbk-manipul-trx)** <br>Return value to EMV ADK in callback [EMV_CT_CALLBACK_FnT]() ([TAG_BF06_CBK_LOCAL_CHECKS]())    Possible values:  |
|  | **[TAG_DF77_CBK_LANGUAGE](group___t_l_v___c_b_c_k___t_l_v.md#define-tag-df77-cbk-language)**  |
|  | **[TAG_DF78_CBK_SEL_OPT](group___t_l_v___c_b_c_k___t_l_v.md#define-tag-df78-cbk-sel-opt)** <br>`tucOptions` in [EMV_CT_SELECT_STRUCT](struct_e_m_v___c_t___s_e_l_e_c_t___s_t_r_u_c_t.md) |
|  | **[TAG_DF79_CBK_PIN_INFO](group___t_l_v___c_b_c_k___t_l_v.md#define-tag-df79-cbk-pin-info)** <br>EMV ADK to application: PIN type requested ([Input params for PIN entry]())    Application to EMV ADK: PIN entry result (see [Return values]())  |
|  | **[TAG_DF7A_CBK_PIN_KEY_DATA](group___t_l_v___c_b_c_k___t_l_v.md#define-tag-df7a-cbk-pin-key-data)** <br>PIN (ICC) key modulus.  |
|  | **[TAG_DF7B_CBK_PIN_KEY_EXP](group___t_l_v___c_b_c_k___t_l_v.md#define-tag-df7b-cbk-pin-key-exp)** <br>PIN (ICC) key exponent.  |
|  | **[TAG_DF7C_CBK_MERCHINFO_RET](group___t_l_v___c_b_c_k___t_l_v.md#define-tag-df7c-cbk-merchinfo-ret)** <br>transfer return value of merchant information callback (EMV_CT_CALLBACK_FnT with TAG_BF01_CBK_MERCHINFO) to EMV ADK  |
|  | **[TAG_DF7D_CBK_DCC_CHECK](group___t_l_v___c_b_c_k___t_l_v.md#define-tag-df7d-cbk-dcc-check)** <br>DCC mode, see [DCC mode]().  |
|  | **[TAG_DF7E_CBK_DOM_APP_RES](group___t_l_v___c_b_c_k___t_l_v.md#define-tag-df7e-cbk-dom-app-res)** <br>result of domestic app processing: keep in list or remove from list ([Modes of domestic application handling]())  |
|  | **[TAG_DF7F_CBK_COMM_ERR](group___t_l_v___c_b_c_k___t_l_v.md#define-tag-df7f-cbk-comm-err)** <br>During execution of callback function a communication error occured.    Indicator to be set by calling application.    Will result in abort of transaction ([EMV_ADK_INTERNAL](group___a_d_k___r_e_t___c_o_d_e.md#define-emv-adk-internal))  |
|  | **[TAG_DFD001_MANI_CANDLIST](group___t_l_v___c_b_c_k___t_l_v.md#define-tag-dfd001-mani-candlist)** <br>Modified candidate list (only valid in reentrance mode using the candidate list manipulation option [EMV_CT_APPS_SELECT_STRUCT::ModifiedCandidates](struct_e_m_v___c_t___a_p_p_s___s_e_l_e_c_t___s_t_r_u_c_t.md#variable-modifiedcandidates) inside [EMV_CT_SELECT_STRUCT::SEL_Data](struct_e_m_v___c_t___s_e_l_e_c_t___s_t_r_u_c_t.md#variable-sel-data))  |
|  | **[TAG_DFD002_APPNAME_CHOSEN](group___t_l_v___c_b_c_k___t_l_v.md#define-tag-dfd002-appname-chosen)** <br>chosen application name, either 9F12, 50 or default label according EMVCo rules and application configuration, used in callback functions with application label  |
|  | **[TAG_DFD003_STORED_AMOUNT](group___t_l_v___c_b_c_k___t_l_v.md#define-tag-dfd003-stored-amount)** <br>configure transaction log amount via EMV_CT_updateTxnTag for the given card PAN when using re-entrance mode  |
|  | **[TAG_DFD00B_APPNAME_UFT8](group___t_l_v___c_b_c_k___t_l_v.md#define-tag-dfd00b-appname-uft8)** <br>application name [TAG_DFD002_APPNAME_CHOSEN](group___t_l_v___c_b_c_k___t_l_v.md#define-tag-dfd002-appname-chosen) converted to UTF-8, used in callback functions with application label  |




## Macros Documentation

### define TAG_DF6D_CBK_CARDHOLDER_RET

```
#define TAG_DF6D_CBK_CARDHOLDER_RET 0xDF6D
```

return value of cardholder information 

### define TAG_DF6E_CBK_CARDHOLDERINFO

```
#define TAG_DF6E_CBK_CARDHOLDERINFO 0xDF6E
```

cardholder information during transaction, e.g. Wrong PIN, see [eCardholderInfo]()

### define TAG_DF6F_CBK_PIN_ICC_RESP

```
#define TAG_DF6F_CBK_PIN_ICC_RESP 0xDF6F
```


**Deprecated**: 

ICC answer to VERIFY command (2 byte SW1/2), not needed anymore, EMV ADK stores this info internally during [EMV_CT_Send_PIN_Offline()](group___f_u_n_c___f_l_o_w.md#function-emv-ct-send-pin-offline)

### define TAG_DF70_CBK_MERCHINFO

```
#define TAG_DF70_CBK_MERCHINFO 0xDF70
```

MerchantInfo(), see [EMV_ADK_MerchantInfo](). 

### define TAG_DF71_CBK_AMOUNTCONF

```
#define TAG_DF71_CBK_AMOUNTCONF 0xDF71
```

`amount` confirmation result (TRUE/FALSE) 

### define TAG_DF72_CBK_BLACKLIST

```
#define TAG_DF72_CBK_BLACKLIST 0xDF72
```

Indicator if used PAN is in blacklist, TRUE/FALSE. 

### define TAG_DF73_CBK_TRANSLOG

```
#define TAG_DF73_CBK_TRANSLOG 0xDF73
```

`stored` amount of the selected PAN 

### define TAG_DF74_CBK_SELECTOR

```
#define TAG_DF74_CBK_SELECTOR 0xDF74
```

see `ucSelector`, allowed values see [Types of external application selection]()

### define TAG_DF75_CBK_APP_NO

```
#define TAG_DF75_CBK_APP_NO 0xDF75
```

If length == 1: Return value of terminal selection process == chosen candidate, otherwise reduced candidate list. 

### define TAG_DF6C_CBK_REPEAT

```
#define TAG_DF6C_CBK_REPEAT 0xDF6C
```

Decide if ADK should repeat the callback call or not    (1 byte, 1=Repeat/0=Do not repeat). If absent: Do not repeat    see [TAG_BF04_CBK_REDUCE_CAND](). 

### define TAG_DF76_CBK_MANIPUL_TRX

```
#define TAG_DF76_CBK_MANIPUL_TRX 0xDF76
```

Return value to EMV ADK in callback [EMV_CT_CALLBACK_FnT]() ([TAG_BF06_CBK_LOCAL_CHECKS]())    Possible values: 



* [EMV_ADK_ARQC](group___a_d_k___r_e_t___c_o_d_e.md#define-emv-adk-arqc) to let transaction continue but force to go online 
* [EMV_ADK_AAC](group___a_d_k___r_e_t___c_o_d_e.md#define-emv-adk-aac) to let transaction terminate with AAC in GENAC1 
* [EMV_ADK_ABORT](group___a_d_k___r_e_t___c_o_d_e.md#define-emv-adk-abort) and any other value to let transaction abort 


### define TAG_DF77_CBK_LANGUAGE

```
#define TAG_DF77_CBK_LANGUAGE 0xDF77
```


**Deprecated**: 

EMV ADK does not send selected customer language and it ignores this parameter if put in 

### define TAG_DF78_CBK_SEL_OPT

```
#define TAG_DF78_CBK_SEL_OPT 0xDF78
```

`tucOptions` in [EMV_CT_SELECT_STRUCT](struct_e_m_v___c_t___s_e_l_e_c_t___s_t_r_u_c_t.md)

### define TAG_DF79_CBK_PIN_INFO

```
#define TAG_DF79_CBK_PIN_INFO 0xDF79
```

EMV ADK to application: PIN type requested ([Input params for PIN entry]())    Application to EMV ADK: PIN entry result (see [Return values]()) 

### define TAG_DF7A_CBK_PIN_KEY_DATA

```
#define TAG_DF7A_CBK_PIN_KEY_DATA 0xDF7A
```

PIN (ICC) key modulus. 

### define TAG_DF7B_CBK_PIN_KEY_EXP

```
#define TAG_DF7B_CBK_PIN_KEY_EXP 0xDF7B
```

PIN (ICC) key exponent. 

### define TAG_DF7C_CBK_MERCHINFO_RET

```
#define TAG_DF7C_CBK_MERCHINFO_RET 0xDF7C
```

transfer return value of merchant information callback (EMV_CT_CALLBACK_FnT with TAG_BF01_CBK_MERCHINFO) to EMV ADK 

### define TAG_DF7D_CBK_DCC_CHECK

```
#define TAG_DF7D_CBK_DCC_CHECK 0xDF7D
```

DCC mode, see [DCC mode](). 

### define TAG_DF7E_CBK_DOM_APP_RES

```
#define TAG_DF7E_CBK_DOM_APP_RES 0xDF7E
```

result of domestic app processing: keep in list or remove from list ([Modes of domestic application handling]()) 

### define TAG_DF7F_CBK_COMM_ERR

```
#define TAG_DF7F_CBK_COMM_ERR 0xDF7F
```

During execution of callback function a communication error occured.    Indicator to be set by calling application.    Will result in abort of transaction ([EMV_ADK_INTERNAL](group___a_d_k___r_e_t___c_o_d_e.md#define-emv-adk-internal)) 

### define TAG_DFD001_MANI_CANDLIST

```
#define TAG_DFD001_MANI_CANDLIST 0xDFD001
```

Modified candidate list (only valid in reentrance mode using the candidate list manipulation option [EMV_CT_APPS_SELECT_STRUCT::ModifiedCandidates](struct_e_m_v___c_t___a_p_p_s___s_e_l_e_c_t___s_t_r_u_c_t.md#variable-modifiedcandidates) inside [EMV_CT_SELECT_STRUCT::SEL_Data](struct_e_m_v___c_t___s_e_l_e_c_t___s_t_r_u_c_t.md#variable-sel-data)) 

### define TAG_DFD002_APPNAME_CHOSEN

```
#define TAG_DFD002_APPNAME_CHOSEN 0xDFD002
```

chosen application name, either 9F12, 50 or default label according EMVCo rules and application configuration, used in callback functions with application label 

### define TAG_DFD003_STORED_AMOUNT

```
#define TAG_DFD003_STORED_AMOUNT 0xDFD003
```

configure transaction log amount via EMV_CT_updateTxnTag for the given card PAN when using re-entrance mode 

### define TAG_DFD00B_APPNAME_UFT8

```
#define TAG_DFD00B_APPNAME_UFT8 0xDFD00B
```

application name [TAG_DFD002_APPNAME_CHOSEN](group___t_l_v___c_b_c_k___t_l_v.md#define-tag-dfd002-appname-chosen) converted to UTF-8, used in callback functions with application label 



-------------------------------

Updated on 2025-06-17 at 11:52:22 +0100