---
title: Modes of domestic application handling
summary: Used as return TAG_DF7E_CBK_DOM_APP_RES for EMV_CT_CALLBACK_FnTTAG_BF05_CBK_DOM_APPS. 

---

# Modes of domestic application handling

**Module:** **[Transaction execution](group___a_d_k___t_r_x___e_x_e_c.md)** **/** **[Callback functions](group___t_l_v___c_a_l_l_b_c_k.md)**

Used as return [TAG_DF7E_CBK_DOM_APP_RES](group___t_l_v___c_b_c_k___t_l_v.md#define-tag-df7e-cbk-dom-app-res) for [EMV_CT_CALLBACK_FnT]()[TAG_BF05_CBK_DOM_APPS](group___c_b_c_k___f_c_t___t_a_g_s.md#define-tag-bf05-cbk-dom-apps). 

## Defines

|                | Name           |
| -------------- | -------------- |
|  | **[CBK_DOMAPP_REMAIN](group___d_e_f___c_b_k___d_o_m_a_p_p.md#define-cbk-domapp-remain)** <br>Don't remove from candidate list.  |
|  | **[CBK_DOMAPP_REMOVE](group___d_e_f___c_b_k___d_o_m_a_p_p.md#define-cbk-domapp-remove)** <br>Remove from candidate list.  |
|  | **[CBK_DOMAPP_REMAIN2](group___d_e_f___c_b_k___d_o_m_a_p_p.md#define-cbk-domapp-remain2)** <br>Don't remove from candidate list. Additionally suppress final SELECT. Needed e.g. for German ec card. Transaction processing is done outside EMV kernel.  |
|  | **[CBK_DOMAPP_REMAIN3](group___d_e_f___c_b_k___d_o_m_a_p_p.md#define-cbk-domapp-remain3)** <br>Don't remove from candidate list. Additionally suppress all following SELECTs. Used for enhancing performance in case it's clear that transaction will be done outside EMV kernel.  |




## Macros Documentation

### define CBK_DOMAPP_REMAIN

```
#define CBK_DOMAPP_REMAIN 0
```

Don't remove from candidate list. 

### define CBK_DOMAPP_REMOVE

```
#define CBK_DOMAPP_REMOVE 1
```

Remove from candidate list. 

### define CBK_DOMAPP_REMAIN2

```
#define CBK_DOMAPP_REMAIN2 2
```

Don't remove from candidate list. Additionally suppress final SELECT. Needed e.g. for German ec card. Transaction processing is done outside EMV kernel. 

### define CBK_DOMAPP_REMAIN3

```
#define CBK_DOMAPP_REMAIN3 3
```

Don't remove from candidate list. Additionally suppress all following SELECTs. Used for enhancing performance in case it's clear that transaction will be done outside EMV kernel. 



-------------------------------

Updated on 2025-06-17 at 11:52:23 +0100