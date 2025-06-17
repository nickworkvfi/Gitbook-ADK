---
title: Domestic callback options
summary: Calling application may set some options for further transaction processing. 

---

# Domestic callback options

**Module:** **[Transaction execution](group___a_d_k___t_r_x___e_x_e_c.md)** **/** **[Callback functions](group___t_l_v___c_a_l_l_b_c_k.md)**

Calling application may set some options for further transaction processing.  [More...](#detailed-description)

## Defines

|                | Name           |
| -------------- | -------------- |
|  | **[DOM_OPTION_LEN](group___c_b_c_k___d_o_m___o_p_t_i_o_n.md#define-dom-option-len)** <br>Length of `pucDomOption` in bytes.  |
|  | **[DOM_OPTION_AUSTRIAN_NGV](group___c_b_c_k___d_o_m___o_p_t_i_o_n.md#define-dom-option-austrian-ngv)** <br>B1b1: Continue transaction as Austrian Non Guaranteed Payment.  |
|  | **[DOM_OPTION_TRX_INTERCEPT](group___c_b_c_k___d_o_m___o_p_t_i_o_n.md#define-dom-option-trx-intercept)** <br>B1b2: Intercept transaction. Context will remain. Repetition trx must be started with [EMV_ADK_TRAN_TYPE_REPEAT_TRX_INTERCEPT]().  |
|  | **[DOM_OPTION_ABORT_NO_TEXT](group___c_b_c_k___d_o_m___o_p_t_i_o_n.md#define-dom-option-abort-no-text)** <br>B1b3: if [EMV_CT_CALLBACK_FnT]() ([TAG_BF06_CBK_LOCAL_CHECKS](group___c_b_c_k___f_c_t___t_a_g_s.md#define-tag-bf06-cbk-local-checks)) returns [EMV_ADK_ABORT](group___a_d_k___r_e_t___c_o_d_e.md#define-emv-adk-abort) in [TAG_DF76_CBK_MANIPUL_TRX](group___t_l_v___c_b_c_k___t_l_v.md#define-tag-df76-cbk-manipul-trx): Don't display texts [EMV_ADK_TXT_PROCESSING_ERROR](group___a_p_p_l_i___t_e_x_t_s.md#define-emv-adk-txt-processing-error) and [EMV_ADK_TXT_REMOVE_CARD](group___a_p_p_l_i___t_e_x_t_s.md#define-emv-adk-txt-remove-card).  |
|  | **[DOM_OPTION_TIP_OFF](group___c_b_c_k___d_o_m___o_p_t_i_o_n.md#define-dom-option-tip-off)** <br>B1b4: convert a tip capable transaction back to sale transaction (used for countries where tip with signature is done outside the scope of EMV and returns the txn to a normal sale transaction)  |

## Detailed Description

Calling application may set some options for further transaction processing. 

Defines for [TAG_DF5D_DOM_OPTION](group___v_e_r_i___p_r_i_m___t_a_g_s.md#define-tag-df5d-dom-option) in [EMV_CT_CALLBACK_FnT](adk__emv__contactless__programmers__guide_8dox.md#typedef-emv-ct-callback-fnt) ([TAG_BF06_CBK_LOCAL_CHECKS](group___c_b_c_k___f_c_t___t_a_g_s.md#define-tag-bf06-cbk-local-checks)) 




## Macros Documentation

### define DOM_OPTION_LEN

```
#define DOM_OPTION_LEN 3
```

Length of `pucDomOption` in bytes. 

### define DOM_OPTION_AUSTRIAN_NGV

```
#define DOM_OPTION_AUSTRIAN_NGV 0x01
```

B1b1: Continue transaction as Austrian Non Guaranteed Payment. 

### define DOM_OPTION_TRX_INTERCEPT

```
#define DOM_OPTION_TRX_INTERCEPT 0x02
```

B1b2: Intercept transaction. Context will remain. Repetition trx must be started with [EMV_ADK_TRAN_TYPE_REPEAT_TRX_INTERCEPT](). 

### define DOM_OPTION_ABORT_NO_TEXT

```
#define DOM_OPTION_ABORT_NO_TEXT 0x04
```

B1b3: if [EMV_CT_CALLBACK_FnT]() ([TAG_BF06_CBK_LOCAL_CHECKS](group___c_b_c_k___f_c_t___t_a_g_s.md#define-tag-bf06-cbk-local-checks)) returns [EMV_ADK_ABORT](group___a_d_k___r_e_t___c_o_d_e.md#define-emv-adk-abort) in [TAG_DF76_CBK_MANIPUL_TRX](group___t_l_v___c_b_c_k___t_l_v.md#define-tag-df76-cbk-manipul-trx): Don't display texts [EMV_ADK_TXT_PROCESSING_ERROR](group___a_p_p_l_i___t_e_x_t_s.md#define-emv-adk-txt-processing-error) and [EMV_ADK_TXT_REMOVE_CARD](group___a_p_p_l_i___t_e_x_t_s.md#define-emv-adk-txt-remove-card). 

### define DOM_OPTION_TIP_OFF

```
#define DOM_OPTION_TIP_OFF 0x08
```

B1b4: convert a tip capable transaction back to sale transaction (used for countries where tip with signature is done outside the scope of EMV and returns the txn to a normal sale transaction) 



-------------------------------

Updated on 2025-06-17 at 11:52:23 +0100