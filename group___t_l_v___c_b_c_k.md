---
title: TLV tags for callback functions
summary: Used in function EMV_CallbackFunction() 

---

# TLV tags for callback functions

**Module:** **[General topics](group___a_d_k___g_e_n_e_r_a_l.md)** **/** **[Serialization](group___a_d_k___s_e_r_i_a_l_i_z_a_t_i_o_n.md)** **/** **[BER TLV tags used by EMV ADK](group___e_m_v___t_a_g_s.md)** **/** **[Verifone internal tags](group___v_e_r_i___t_a_g_s.md)** **/** **[Primitive tags](group___v_e_r_i___p_r_i_m___t_a_g_s.md)**

Used in function EMV_CallbackFunction() 

## Modules

| Name           |
| -------------- |
| **[LED callback: Additional information](group___t_l_v___c_b_c_k___l_e_d___a_d_d___i_n_f_o.md)** <br>Additional information for LED switching, used for [TAG_DF8F60_LED_ADD_INFO](group___t_l_v___c_b_c_k.md#define-tag-df8f60-led-add-info).  |

## Defines

|                | Name           |
| -------------- | -------------- |
|  | **[TAG_DF75_CBK_APP_NO](group___t_l_v___c_b_c_k.md#define-tag-df75-cbk-app-no)** <br>If length == 1: Return value of terminal selection process == chosen candidate, otherwise reduced candidate list    index is 1-based (1=first, 2=second, ...)    also see [TAG_BF12_CBK_MODIFY_CAND]().  |
|  | **[TAG_DF76_CBK_APP_POSTPROC](group___t_l_v___c_b_c_k.md#define-tag-df76-cbk-app-postproc)** <br>Decide if post processing for the candidates applies (longest match, priority application, ...) or not    (1 byte, 1=TRUE/0=FALSE)    not supported for VFI reader    see [TAG_BF12_CBK_MODIFY_CAND]().  |
|  | **[TAG_DF6C_CBK_REPEAT](group___t_l_v___c_b_c_k.md#define-tag-df6c-cbk-repeat)** <br>Decide if ADK should repeat the callback call or not    (1 byte, 1=Repeat/0=Do not repeat). If absent: Do not repeat    see [TAG_BF12_CBK_MODIFY_CAND]().  |
|  | **[TAG_DF7E_KERNEL_TO_USE](group___t_l_v___c_b_c_k.md#define-tag-df7e-kernel-to-use)** <br>Set which Kernel should be used.  |
|  | **[TAG_DF7F_CBK_COMM_ERR](group___t_l_v___c_b_c_k.md#define-tag-df7f-cbk-comm-err)** <br>During execution of callback function a communication error occured.    Indicator to be set by calling application (1 byte TRUE/FALSE value).    Will result in abort of transaction ([EMV_ADK_INTERNAL](group___a_d_k___r_e_t___c_o_d_e.md#define-emv-adk-internal))  |
|  | **[TAG_DF8F58_DE_REQUEST](group___t_l_v___c_b_c_k.md#define-tag-df8f58-de-request)** <br>DataExchange, type of request [Options for DataExchange request](), used in [EMV_CTLS_CALLBACK_FnT](), [TAG_BF0E_CBK_DATA_EXCHANGE]().  |
|  | **[TAG_DF8F59_DE_STATE](group___t_l_v___c_b_c_k.md#define-tag-df8f59-de-state)** <br>DataExchange, kernel state [Options for DataExchange state](), used in [EMV_CTLS_CALLBACK_FnT](), [TAG_BF0E_CBK_DATA_EXCHANGE]().  |
|  | **[TAG_DF8F5A_DE_MODE](group___t_l_v___c_b_c_k.md#define-tag-df8f5a-de-mode)** <br>DataExchange, mode [Options for DataExchange mode](), used in [EMV_CTLS_CALLBACK_FnT](), [TAG_BF0E_CBK_DATA_EXCHANGE]().  |
|  | **[TAG_DF8F50_RUPAY_GPO](group___t_l_v___c_b_c_k.md#define-tag-df8f50-rupay-gpo)** <br>RuPay DataExchange service shortlist before GPO, used in [EMV_CTLS_CALLBACK_FnT](), [TAG_BF16_CBK_SERVICE_SHORTLIST]().  |
|  | **[TAG_DF8F51_RUPAY_GENAC](group___t_l_v___c_b_c_k.md#define-tag-df8f51-rupay-genac)** <br>RuPay DataExchange Rupay additional CDOL Parameters, used in [EMV_CTLS_CALLBACK_FnT](), [TAG_BF17_CBK_SERVICE_FOR_GENAC]().  |
|  | **[TAG_DF8F60_LED_ADD_INFO](group___t_l_v___c_b_c_k.md#define-tag-df8f60-led-add-info)** <br>LED callback [TAG_BF10_CTLS_CBK_LEDS](): Additional information, see [LED callback: Additional information]().  |
|  | **[TAG_DF8010_DE_REQUEST](group___t_l_v___c_b_c_k.md#define-tag-df8010-de-request)**  |
|  | **[TAG_DF8011_DE_STATE](group___t_l_v___c_b_c_k.md#define-tag-df8011-de-state)**  |
|  | **[TAG_DF8012_DE_MODE](group___t_l_v___c_b_c_k.md#define-tag-df8012-de-mode)**  |
|  | **[TAG_DF8020_RUPAY_GPO](group___t_l_v___c_b_c_k.md#define-tag-df8020-rupay-gpo)**  |
|  | **[TAG_DF8021_RUPAY_GENAC](group___t_l_v___c_b_c_k.md#define-tag-df8021-rupay-genac)**  |
|  | **[TAG_DF8030_LED_ADD_INFO](group___t_l_v___c_b_c_k.md#define-tag-df8030-led-add-info)**  |




## Macros Documentation

### define TAG_DF75_CBK_APP_NO

```
#define TAG_DF75_CBK_APP_NO 0xDF75
```

If length == 1: Return value of terminal selection process == chosen candidate, otherwise reduced candidate list    index is 1-based (1=first, 2=second, ...)    also see [TAG_BF12_CBK_MODIFY_CAND](). 

### define TAG_DF76_CBK_APP_POSTPROC

```
#define TAG_DF76_CBK_APP_POSTPROC 0xDF76
```

Decide if post processing for the candidates applies (longest match, priority application, ...) or not    (1 byte, 1=TRUE/0=FALSE)    not supported for VFI reader    see [TAG_BF12_CBK_MODIFY_CAND](). 

### define TAG_DF6C_CBK_REPEAT

```
#define TAG_DF6C_CBK_REPEAT 0xDF6C
```

Decide if ADK should repeat the callback call or not    (1 byte, 1=Repeat/0=Do not repeat). If absent: Do not repeat    see [TAG_BF12_CBK_MODIFY_CAND](). 

### define TAG_DF7E_KERNEL_TO_USE

```
#define TAG_DF7E_KERNEL_TO_USE 0xDF7E
```

Set which Kernel should be used. 

### define TAG_DF7F_CBK_COMM_ERR

```
#define TAG_DF7F_CBK_COMM_ERR 0xDF7F
```

During execution of callback function a communication error occured.    Indicator to be set by calling application (1 byte TRUE/FALSE value).    Will result in abort of transaction ([EMV_ADK_INTERNAL](group___a_d_k___r_e_t___c_o_d_e.md#define-emv-adk-internal)) 

### define TAG_DF8F58_DE_REQUEST

```
#define TAG_DF8F58_DE_REQUEST 0xDF8F58
```

DataExchange, type of request [Options for DataExchange request](), used in [EMV_CTLS_CALLBACK_FnT](), [TAG_BF0E_CBK_DATA_EXCHANGE](). 

### define TAG_DF8F59_DE_STATE

```
#define TAG_DF8F59_DE_STATE 0xDF8F59
```

DataExchange, kernel state [Options for DataExchange state](), used in [EMV_CTLS_CALLBACK_FnT](), [TAG_BF0E_CBK_DATA_EXCHANGE](). 

### define TAG_DF8F5A_DE_MODE

```
#define TAG_DF8F5A_DE_MODE 0xDF8F5A
```

DataExchange, mode [Options for DataExchange mode](), used in [EMV_CTLS_CALLBACK_FnT](), [TAG_BF0E_CBK_DATA_EXCHANGE](). 

### define TAG_DF8F50_RUPAY_GPO

```
#define TAG_DF8F50_RUPAY_GPO 0xDF8F50
```

RuPay DataExchange service shortlist before GPO, used in [EMV_CTLS_CALLBACK_FnT](), [TAG_BF16_CBK_SERVICE_SHORTLIST](). 

### define TAG_DF8F51_RUPAY_GENAC

```
#define TAG_DF8F51_RUPAY_GENAC 0xDF8F51
```

RuPay DataExchange Rupay additional CDOL Parameters, used in [EMV_CTLS_CALLBACK_FnT](), [TAG_BF17_CBK_SERVICE_FOR_GENAC](). 

### define TAG_DF8F60_LED_ADD_INFO

```
#define TAG_DF8F60_LED_ADD_INFO 0xDF8F60
```

LED callback [TAG_BF10_CTLS_CBK_LEDS](): Additional information, see [LED callback: Additional information](). 

### define TAG_DF8010_DE_REQUEST

```
#define TAG_DF8010_DE_REQUEST TAG_DF8F58_DE_REQUEST
```


**Deprecated**: 

use [TAG_DF8F58_DE_REQUEST](group___t_l_v___c_b_c_k.md#define-tag-df8f58-de-request) instead 

### define TAG_DF8011_DE_STATE

```
#define TAG_DF8011_DE_STATE TAG_DF8F59_DE_STATE
```


**Deprecated**: 

use [TAG_DF8F59_DE_STATE](group___t_l_v___c_b_c_k.md#define-tag-df8f59-de-state) instead 

### define TAG_DF8012_DE_MODE

```
#define TAG_DF8012_DE_MODE TAG_DF8F5A_DE_MODE
```


**Deprecated**: 

use [TAG_DF8F5A_DE_MODE](group___t_l_v___c_b_c_k.md#define-tag-df8f5a-de-mode) instead 

### define TAG_DF8020_RUPAY_GPO

```
#define TAG_DF8020_RUPAY_GPO TAG_DF8F50_RUPAY_GPO
```


**Deprecated**: 

use [TAG_DF8F50_RUPAY_GPO](group___t_l_v___c_b_c_k.md#define-tag-df8f50-rupay-gpo) instead 

### define TAG_DF8021_RUPAY_GENAC

```
#define TAG_DF8021_RUPAY_GENAC TAG_DF8F51_RUPAY_GENAC
```


**Deprecated**: 

use [TAG_DF8F51_RUPAY_GENAC](group___t_l_v___c_b_c_k.md#define-tag-df8f51-rupay-genac) instead 

### define TAG_DF8030_LED_ADD_INFO

```
#define TAG_DF8030_LED_ADD_INFO TAG_DF8F60_LED_ADD_INFO
```


**Deprecated**: 

use [TAG_DF8F60_LED_ADD_INFO](group___t_l_v___c_b_c_k.md#define-tag-df8f60-led-add-info) instead 



-------------------------------

Updated on 2025-06-17 at 11:52:22 +0100