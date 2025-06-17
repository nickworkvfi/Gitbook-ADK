---
title: DCC mode
summary: Used to carry decision given back by EMV_CT_CALLBACK_FnT (TAG_BF07_CBK_DCC) 
 TLV tag TAG_DF7D_CBK_DCC_CHECK. 

---

# DCC mode

**Module:** **[Transaction execution](group___a_d_k___t_r_x___e_x_e_c.md)** **/** **[Callback functions](group___t_l_v___c_a_l_l_b_c_k.md)**

Used to carry decision given back by [EMV_CT_CALLBACK_FnT]() ([TAG_BF07_CBK_DCC](group___c_b_c_k___f_c_t___t_a_g_s.md#define-tag-bf07-cbk-dcc))    TLV tag [TAG_DF7D_CBK_DCC_CHECK](group___t_l_v___c_b_c_k___t_l_v.md#define-tag-df7d-cbk-dcc-check). 

## Defines

|                | Name           |
| -------------- | -------------- |
|  | **[MODE_DCC_NO_TRX_CONTINUE](group___d_c_c___m_o_d_e.md#define-mode-dcc-no-trx-continue)** <br>No DCC: Continue transaction with original amount, floor limit, ...  |
|  | **[MODE_DCC_YES_TRX_CONTINUE](group___d_c_c___m_o_d_e.md#define-mode-dcc-yes-trx-continue)** <br>DCC requested: Continue transaction with returned amount, floor limit, ...  |
|  | **[MODE_DCC_NO_TRX_ABORT](group___d_c_c___m_o_d_e.md#define-mode-dcc-no-trx-abort)** <br>Cashier requested abort: Transaction abort, display [EMV_ADK_TXT_PROCESSING_ERROR](group___a_p_p_l_i___t_e_x_t_s.md#define-emv-adk-txt-processing-error) and [EMV_ADK_TXT_REMOVE_CARD](group___a_p_p_l_i___t_e_x_t_s.md#define-emv-adk-txt-remove-card).  |
|  | **[MODE_DCC_YES_TRX_ABORT](group___d_c_c___m_o_d_e.md#define-mode-dcc-yes-trx-abort)** <br>DCC requested, but transaction must be restarted: Transaction abort, no text display.  |




## Macros Documentation

### define MODE_DCC_NO_TRX_CONTINUE

```
#define MODE_DCC_NO_TRX_CONTINUE 0
```

No DCC: Continue transaction with original amount, floor limit, ... 

### define MODE_DCC_YES_TRX_CONTINUE

```
#define MODE_DCC_YES_TRX_CONTINUE 1
```

DCC requested: Continue transaction with returned amount, floor limit, ... 

### define MODE_DCC_NO_TRX_ABORT

```
#define MODE_DCC_NO_TRX_ABORT 2
```

Cashier requested abort: Transaction abort, display [EMV_ADK_TXT_PROCESSING_ERROR](group___a_p_p_l_i___t_e_x_t_s.md#define-emv-adk-txt-processing-error) and [EMV_ADK_TXT_REMOVE_CARD](group___a_p_p_l_i___t_e_x_t_s.md#define-emv-adk-txt-remove-card). 

### define MODE_DCC_YES_TRX_ABORT

```
#define MODE_DCC_YES_TRX_ABORT 3
```

DCC requested, but transaction must be restarted: Transaction abort, no text display. 



-------------------------------

Updated on 2025-06-17 at 11:52:23 +0100