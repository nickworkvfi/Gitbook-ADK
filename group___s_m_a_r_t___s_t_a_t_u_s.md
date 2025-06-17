---
title: Smart status
summary: Return values for functions of group Functions for transparent ICC access. 

---

# Smart status

**Module:** **[ICC Interface](group___a_d_k___i_c_c___i_f.md)**

Return values for functions of group [Functions for transparent ICC access](). 

## Defines

|                | Name           |
| -------------- | -------------- |
|  | **[EMV_ADK_SMART_STATUS_OK](group___s_m_a_r_t___s_t_a_t_u_s.md#define-emv-adk-smart-status-ok)** <br>okay (== comms ok == card in == card activated ... )  |
|  | **[EMV_ADK_SMART_STATUS_REMOVED](group___s_m_a_r_t___s_t_a_t_u_s.md#define-emv-adk-smart-status-removed)** <br>card removed = error caused by cardholder  |
|  | **[EMV_ADK_SMART_STATUS_OVERFLOW](group___s_m_a_r_t___s_t_a_t_u_s.md#define-emv-adk-smart-status-overflow)** <br>error caused by terminal - response buffer too small  |
|  | **[EMV_ADK_SMART_STATUS_EXCHG_ERR](group___s_m_a_r_t___s_t_a_t_u_s.md#define-emv-adk-smart-status-exchg-err)** <br>error caused by ICC  |
|  | **[EMV_ADK_SMART_TWO_CARDS](group___s_m_a_r_t___s_t_a_t_u_s.md#define-emv-adk-smart-two-cards)** <br>Contactless: Two cards in the field.  |
|  | **[EMV_ADK_SMART_ERR_INIT](group___s_m_a_r_t___s_t_a_t_u_s.md#define-emv-adk-smart-err-init)** <br>error caused for initialization  |
|  | **[EMV_ADK_SMART_INV_PARAM](group___s_m_a_r_t___s_t_a_t_u_s.md#define-emv-adk-smart-inv-param)** <br>error caused passing invalid parameters  |
|  | **[EMV_ADK_SMART_WRONG_ATR](group___s_m_a_r_t___s_t_a_t_u_s.md#define-emv-adk-smart-wrong-atr)** <br>customer slot only: ATR is not EMV conform, in contrast to missing ATR, detection to be enabled by EMV_CT_DETECT_WRONG_ATR  |




## Macros Documentation

### define EMV_ADK_SMART_STATUS_OK

```
#define EMV_ADK_SMART_STATUS_OK 0
```

okay (== comms ok == card in == card activated ... ) 

### define EMV_ADK_SMART_STATUS_REMOVED

```
#define EMV_ADK_SMART_STATUS_REMOVED 1
```

card removed = error caused by cardholder 

### define EMV_ADK_SMART_STATUS_OVERFLOW

```
#define EMV_ADK_SMART_STATUS_OVERFLOW 2
```

error caused by terminal - response buffer too small 

### define EMV_ADK_SMART_STATUS_EXCHG_ERR

```
#define EMV_ADK_SMART_STATUS_EXCHG_ERR 3
```

error caused by ICC 

### define EMV_ADK_SMART_TWO_CARDS

```
#define EMV_ADK_SMART_TWO_CARDS 4
```

Contactless: Two cards in the field. 

### define EMV_ADK_SMART_ERR_INIT

```
#define EMV_ADK_SMART_ERR_INIT 5
```

error caused for initialization 

### define EMV_ADK_SMART_INV_PARAM

```
#define EMV_ADK_SMART_INV_PARAM 6
```

error caused passing invalid parameters 

### define EMV_ADK_SMART_WRONG_ATR

```
#define EMV_ADK_SMART_WRONG_ATR 7
```

customer slot only: ATR is not EMV conform, in contrast to missing ATR, detection to be enabled by EMV_CT_DETECT_WRONG_ATR 



-------------------------------

Updated on 2025-06-17 at 11:52:23 +0100