---
title: Application text IDs
summary: Also see EMV_ADK_TXT_TYPE. 

---

# Application text IDs

**Module:** **[Configuration](group___a_d_k___c_o_n_f_i_g_u_r_a_t_i_o_n.md)** **/** **[Text data](group___d_e_f___c_o_n_f___t_e_x_t.md)**

Also see [EMV_ADK_TXT_TYPE](struct_e_m_v___a_d_k___t_x_t___t_y_p_e.md). 

## Defines

|                | Name           |
| -------------- | -------------- |
|  | **[EMV_ADK_TXT_NO_TXT](group___a_p_p_l_i___t_e_x_t_s.md#define-emv-adk-txt-no-txt)** <br>no text (internal use)  |
|  | **[EMV_ADK_TXT_REFUND_CONF_AMOUNT](group___a_p_p_l_i___t_e_x_t_s.md#define-emv-adk-txt-refund-conf-amount)** <br>Refund    EUR XXXXXX,XX    Please confirm    Needed in case [EMV_ADK_TRAN_TYPE_REFUND]()`AND`[REFUND_CONFIRM_AMOUNT]().  |
|  | **[EMV_ADK_TXT_AMOUNT](group___a_p_p_l_i___t_e_x_t_s.md#define-emv-adk-txt-amount)** <br>AMOUNT    EUR XXXXXX,XX    PLEASE CONFIRM.  |
|  | **[EMV_ADK_TXT_3AMO_TIP](group___a_p_p_l_i___t_e_x_t_s.md#define-emv-adk-txt-3amo-tip)** <br>second part for 3 amounts for payment with tip input  |
|  | **[EMV_ADK_TXT_3AMO_CASHBACK](group___a_p_p_l_i___t_e_x_t_s.md#define-emv-adk-txt-3amo-cashback)** <br>second part for 3 amounts for payment with cash back  |
|  | **[EMV_ADK_TXT_APPROVED](group___a_p_p_l_i___t_e_x_t_s.md#define-emv-adk-txt-approved)** <br>APPROVED.  |
|  | **[EMV_ADK_TXT_AUTH_APPROVED](group___a_p_p_l_i___t_e_x_t_s.md#define-emv-adk-txt-auth-approved)** <br>like [EMV_ADK_TXT_APPROVED](group___a_p_p_l_i___t_e_x_t_s.md#define-emv-adk-txt-approved), but for reservation  |
|  | **[EMV_ADK_TXT_DECLINED](group___a_p_p_l_i___t_e_x_t_s.md#define-emv-adk-txt-declined)** <br>DECLINED.  |
|  | **[EMV_ADK_TXT_AUTH_DECLINED](group___a_p_p_l_i___t_e_x_t_s.md#define-emv-adk-txt-auth-declined)** <br>like [EMV_ADK_TXT_DECLINED](group___a_p_p_l_i___t_e_x_t_s.md#define-emv-adk-txt-declined), but for reservation  |
|  | **[EMV_ADK_TXT_NOT_ACCEPTED](group___a_p_p_l_i___t_e_x_t_s.md#define-emv-adk-txt-not-accepted)** <br>NOT ACCEPTED.  |
|  | **[EMV_ADK_TXT_CARD_ERROR](group___a_p_p_l_i___t_e_x_t_s.md#define-emv-adk-txt-card-error)** <br>CARD ERROR.  |
|  | **[EMV_ADK_TXT_PROCESSING_ERROR](group___a_p_p_l_i___t_e_x_t_s.md#define-emv-adk-txt-processing-error)** <br>PROCESSING ERROR.  |
|  | **[EMV_ADK_TXT_CARD_READ_OK](group___a_p_p_l_i___t_e_x_t_s.md#define-emv-adk-txt-card-read-ok)** <br>card read ok  |
|  | **[EMV_ADK_TXT_AUTHORIZING](group___a_p_p_l_i___t_e_x_t_s.md#define-emv-adk-txt-authorizing)** <br>authorizing  |
|  | **[EMV_ADK_TXT_REMOVE_CARD](group___a_p_p_l_i___t_e_x_t_s.md#define-emv-adk-txt-remove-card)** <br>REMOVE CARD.  |
|  | **[EMV_ADK_TXT_USE_CHIP_READER](group___a_p_p_l_i___t_e_x_t_s.md#define-emv-adk-txt-use-chip-reader)**  |
|  | **[EMV_ADK_TXT_USE_MAG_STRIPE](group___a_p_p_l_i___t_e_x_t_s.md#define-emv-adk-txt-use-mag-stripe)**  |
|  | **[EMV_ADK_TXT_VOICEAUT](group___a_p_p_l_i___t_e_x_t_s.md#define-emv-adk-txt-voiceaut)** <br>Voice authorization in case of communication problem.  |
|  | **[EMV_ADK_TXT_SEE_PHONE](group___a_p_p_l_i___t_e_x_t_s.md#define-emv-adk-txt-see-phone)** <br>CTLS only: "See phone for instructions".  |
|  | **[EMV_ADK_TXT_RETAP_SAME](group___a_p_p_l_i___t_e_x_t_s.md#define-emv-adk-txt-retap-same)** <br>CTLS only: "Retap (same) card", probable reason: torn transaction.  |
|  | **[EMV_ADK_TXT_RETAP_SAME_L1](group___a_p_p_l_i___t_e_x_t_s.md#define-emv-adk-txt-retap-same-l1)** <br>CTLS only: "Retap (same) card", reason: L1 error    Only sent in case [CLTRXOP_L1_ERROR_CALLBACK()]() is activated    Dependency to [INPUT_CTLS_TRM_FLOWOPT_UI_SCHEME_DEFAULT()](group___t_e_r_m___f_l_o_w___o_p_t_i_o_n_s.md#define-input-ctls-trm-flowopt-ui-scheme-default) |
|  | **[EMV_ADK_TXT_2_CARDS_IN_FIELD](group___a_p_p_l_i___t_e_x_t_s.md#define-emv-adk-txt-2-cards-in-field)** <br>CTLS only: 2 card detected in the field    Only sent in case [CLTRXOP_L1_ERROR_CALLBACK()]() is activated.  |
|  | **[EMV_ADK_TXT_CARD_READ_COMPLETE](group___a_p_p_l_i___t_e_x_t_s.md#define-emv-adk-txt-card-read-complete)** <br>CTLS only: waiting for Card Removal in the ADK , App should display Card Read Complete, Remove Card    Only sent in case CTLS_WAIT_CARD_REMOVAL_END() in application flow capabilties is activated.  |




## Macros Documentation

### define EMV_ADK_TXT_NO_TXT

```
#define EMV_ADK_TXT_NO_TXT 0x00
```

no text (internal use) 

### define EMV_ADK_TXT_REFUND_CONF_AMOUNT

```
#define EMV_ADK_TXT_REFUND_CONF_AMOUNT 0x01
```

Refund    EUR XXXXXX,XX    Please confirm    Needed in case [EMV_ADK_TRAN_TYPE_REFUND]()`AND`[REFUND_CONFIRM_AMOUNT](). 

### define EMV_ADK_TXT_AMOUNT

```
#define EMV_ADK_TXT_AMOUNT 0x02
```

AMOUNT    EUR XXXXXX,XX    PLEASE CONFIRM. 

### define EMV_ADK_TXT_3AMO_TIP

```
#define EMV_ADK_TXT_3AMO_TIP 0xA1
```

second part for 3 amounts for payment with tip input 

### define EMV_ADK_TXT_3AMO_CASHBACK

```
#define EMV_ADK_TXT_3AMO_CASHBACK 0xA2
```

second part for 3 amounts for payment with cash back 

### define EMV_ADK_TXT_APPROVED

```
#define EMV_ADK_TXT_APPROVED 0x03
```

APPROVED. 

### define EMV_ADK_TXT_AUTH_APPROVED

```
#define EMV_ADK_TXT_AUTH_APPROVED 0xA3
```

like [EMV_ADK_TXT_APPROVED](group___a_p_p_l_i___t_e_x_t_s.md#define-emv-adk-txt-approved), but for reservation 

### define EMV_ADK_TXT_DECLINED

```
#define EMV_ADK_TXT_DECLINED 0x04
```

DECLINED. 

### define EMV_ADK_TXT_AUTH_DECLINED

```
#define EMV_ADK_TXT_AUTH_DECLINED 0xA4
```

like [EMV_ADK_TXT_DECLINED](group___a_p_p_l_i___t_e_x_t_s.md#define-emv-adk-txt-declined), but for reservation 

### define EMV_ADK_TXT_NOT_ACCEPTED

```
#define EMV_ADK_TXT_NOT_ACCEPTED 0x05
```

NOT ACCEPTED. 

### define EMV_ADK_TXT_CARD_ERROR

```
#define EMV_ADK_TXT_CARD_ERROR 0x06
```

CARD ERROR. 

### define EMV_ADK_TXT_PROCESSING_ERROR

```
#define EMV_ADK_TXT_PROCESSING_ERROR 0x07
```

PROCESSING ERROR. 

### define EMV_ADK_TXT_CARD_READ_OK

```
#define EMV_ADK_TXT_CARD_READ_OK 0x08
```

card read ok 

### define EMV_ADK_TXT_AUTHORIZING

```
#define EMV_ADK_TXT_AUTHORIZING 0x09
```

authorizing 

### define EMV_ADK_TXT_REMOVE_CARD

```
#define EMV_ADK_TXT_REMOVE_CARD 0x10
```

REMOVE CARD. 

### define EMV_ADK_TXT_USE_CHIP_READER

```
#define EMV_ADK_TXT_USE_CHIP_READER 0x11
```


### define EMV_ADK_TXT_USE_MAG_STRIPE

```
#define EMV_ADK_TXT_USE_MAG_STRIPE 0x12
```


### define EMV_ADK_TXT_VOICEAUT

```
#define EMV_ADK_TXT_VOICEAUT 0x13
```

Voice authorization in case of communication problem. 

### define EMV_ADK_TXT_SEE_PHONE

```
#define EMV_ADK_TXT_SEE_PHONE 0x14
```

CTLS only: "See phone for instructions". 

### define EMV_ADK_TXT_RETAP_SAME

```
#define EMV_ADK_TXT_RETAP_SAME 0x15
```

CTLS only: "Retap (same) card", probable reason: torn transaction. 

### define EMV_ADK_TXT_RETAP_SAME_L1

```
#define EMV_ADK_TXT_RETAP_SAME_L1 0x16
```

CTLS only: "Retap (same) card", reason: L1 error    Only sent in case [CLTRXOP_L1_ERROR_CALLBACK()]() is activated    Dependency to [INPUT_CTLS_TRM_FLOWOPT_UI_SCHEME_DEFAULT()](group___t_e_r_m___f_l_o_w___o_p_t_i_o_n_s.md#define-input-ctls-trm-flowopt-ui-scheme-default)

### define EMV_ADK_TXT_2_CARDS_IN_FIELD

```
#define EMV_ADK_TXT_2_CARDS_IN_FIELD 0x17
```

CTLS only: 2 card detected in the field    Only sent in case [CLTRXOP_L1_ERROR_CALLBACK()]() is activated. 

### define EMV_ADK_TXT_CARD_READ_COMPLETE

```
#define EMV_ADK_TXT_CARD_READ_COMPLETE 0x18
```

CTLS only: waiting for Card Removal in the ADK , App should display Card Read Complete, Remove Card    Only sent in case CTLS_WAIT_CARD_REMOVAL_END() in application flow capabilties is activated. 



-------------------------------

Updated on 2025-06-17 at 11:52:22 +0100