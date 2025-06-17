---
title: TEC start options
summary: These options configure the behavior of technology selection, set by cts_StartSelection(). A combination is possible using | operator. 

---

# TEC start options

These options configure the behavior of technology selection, set by [cts_StartSelection()](). A combination is possible using | operator. 

## Defines

|                | Name           |
| -------------- | -------------- |
|  | **[CTS_PURE_CARD_DETECTION](group___t_e_c___s_t_a_r_t___o_p_t_i_o_n_s.md#define-cts-pure-card-detection)**  |
|  | **[CTS_NO_POWERON](group___t_e_c___s_t_a_r_t___o_p_t_i_o_n_s.md#define-cts-no-poweron)**  |
|  | **[CTS_POWERON_AFTER_CTLS_MSR_DEACTIVATION](group___t_e_c___s_t_a_r_t___o_p_t_i_o_n_s.md#define-cts-poweron-after-ctls-msr-deactivation)**  |
|  | **[CTS_NFC_ENABLE](group___t_e_c___s_t_a_r_t___o_p_t_i_o_n_s.md#define-cts-nfc-enable)**  |
|  | **[CTS_VAS_ENABLE](group___t_e_c___s_t_a_r_t___o_p_t_i_o_n_s.md#define-cts-vas-enable)**  |
|  | **[CTS_EMV_AFTER_NFC_ISO](group___t_e_c___s_t_a_r_t___o_p_t_i_o_n_s.md#define-cts-emv-after-nfc-iso)**  |
|  | **[CTS_VAS_HANDLE_LED_BUZZ](group___t_e_c___s_t_a_r_t___o_p_t_i_o_n_s.md#define-cts-vas-handle-led-buzz)**  |
|  | **[CTS_EMV_CTLS_TIMEOUT_AFTER_VAS](group___t_e_c___s_t_a_r_t___o_p_t_i_o_n_s.md#define-cts-emv-ctls-timeout-after-vas)**  |
|  | **[CTS_VAS_DONT_DECRYPT](group___t_e_c___s_t_a_r_t___o_p_t_i_o_n_s.md#define-cts-vas-dont-decrypt)**  |
|  | **[CTS_MSR_AFTER_CTLS_FAIL](group___t_e_c___s_t_a_r_t___o_p_t_i_o_n_s.md#define-cts-msr-after-ctls-fail)**  |
|  | **[CTS_NFC_DUTY_CYCLE_OFF](group___t_e_c___s_t_a_r_t___o_p_t_i_o_n_s.md#define-cts-nfc-duty-cycle-off)**  |




## Macros Documentation

### define CTS_PURE_CARD_DETECTION

```
#define CTS_PURE_CARD_DETECTION 0x01
```


options[0], Relevant for CTLS only: 

 only detect card, do not perform transaction, 

 see also [Some notes regarding the different technologies]


### define CTS_NO_POWERON

```
#define CTS_NO_POWERON 0x02
```


options[0], Relevant for CT only 

 (must not be set in conjunction with [CTS_POWERON_AFTER_CTLS_MSR_DEACTIVATION](group___t_e_c___s_t_a_r_t___o_p_t_i_o_n_s.md#define-cts-poweron-after-ctls-msr-deactivation)): 

 do not power on inserted card. 


### define CTS_POWERON_AFTER_CTLS_MSR_DEACTIVATION

```
#define CTS_POWERON_AFTER_CTLS_MSR_DEACTIVATION 0x04
```


options[0], Relevant for CT only (must not be set in conjunction with [CTS_NO_POWERON](group___t_e_c___s_t_a_r_t___o_p_t_i_o_n_s.md#define-cts-no-poweron)): 

 deactivate CTLS and MSR once chip-card is detected and then power on the chip-card. 


### define CTS_NFC_ENABLE

```
#define CTS_NFC_ENABLE 0x01
```


options[1], CTLS, only allowed if [CTS_VAS_ENABLE](group___t_e_c___s_t_a_r_t___o_p_t_i_o_n_s.md#define-cts-vas-enable) is NOT set: 

 ADK-NFC is used for detection of contactless cards, options[12..15] determine which NFC technology is enabled. 


### define CTS_VAS_ENABLE

```
#define CTS_VAS_ENABLE 0x02
```


options[1], CTLS, only allowed if [CTS_NFC_ENABLE](group___t_e_c___s_t_a_r_t___o_p_t_i_o_n_s.md#define-cts-nfc-enable) is NOT set: 

 ADK-NFC is used for Wallet processing. 


### define CTS_EMV_AFTER_NFC_ISO

```
#define CTS_EMV_AFTER_NFC_ISO 0x04
```


options[1], Relevant only if [CTS_NFC_ENABLE](group___t_e_c___s_t_a_r_t___o_p_t_i_o_n_s.md#define-cts-nfc-enable) is set. 

 Perform an EMV transaction if NFC has detected one of the following cards: I_ISO14443A, I_ISO14443B 


### define CTS_VAS_HANDLE_LED_BUZZ

```
#define CTS_VAS_HANDLE_LED_BUZZ 0x08
```


options[1], Relevant only if [CTS_VAS_ENABLE](group___t_e_c___s_t_a_r_t___o_p_t_i_o_n_s.md#define-cts-vas-enable) is set: 

 Handle LEDs and buzzer if VAS processing failed or VAS only (no subsequent EMV transaction). 


### define CTS_EMV_CTLS_TIMEOUT_AFTER_VAS

```
#define CTS_EMV_CTLS_TIMEOUT_AFTER_VAS 0x10
```


options[1], Relevant only if [CTS_VAS_ENABLE](group___t_e_c___s_t_a_r_t___o_p_t_i_o_n_s.md#define-cts-vas-enable) is set: 

 Use of a permissible time window to perform a contactless payment after either VAS_DO_PAY or VAS_DO_PAY_DECRYPT_REQ has been detected. 

 The dimension of this time window is configured with the input parameter options[10..11] of the function [cts_StartSelection()](tec_8h.md#function-cts-startselection). 


### define CTS_VAS_DONT_DECRYPT

```
#define CTS_VAS_DONT_DECRYPT 0x20
```


options[1], Relevant only if [CTS_VAS_ENABLE](group___t_e_c___s_t_a_r_t___o_p_t_i_o_n_s.md#define-cts-vas-enable) is set: 

 TEC will NOT decrypt the resulting VAS data. 


### define CTS_MSR_AFTER_CTLS_FAIL

```
#define CTS_MSR_AFTER_CTLS_FAIL 0x40
```


options[1], Relevant only if options[6..7] is set: 

 Wait for MSR read after CTLS transaction only if that failed. 


### define CTS_NFC_DUTY_CYCLE_OFF

```
#define CTS_NFC_DUTY_CYCLE_OFF 0x80
```


options[1], Relevant only if [CTS_NFC_ENABLE](group___t_e_c___s_t_a_r_t___o_p_t_i_o_n_s.md#define-cts-nfc-enable) is set. 

 Ux700 overheat protection (duty cycle) is turned on by default. Can be switched off by this bit. 




-------------------------------

Updated on 2025-06-17 at 11:52:23 +0100