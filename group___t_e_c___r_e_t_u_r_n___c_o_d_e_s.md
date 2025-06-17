---
title: TEC return codes
summary: These return codes are returned by the various libtec functions. 

---

# TEC return codes

These return codes are returned by the various libtec functions. 

## Defines

|                | Name           |
| -------------- | -------------- |
|  | **[CTS_OK](group___t_e_c___r_e_t_u_r_n___c_o_d_e_s.md#define-cts-ok)**  |
|  | **[CTS_NO_CHIP](group___t_e_c___r_e_t_u_r_n___c_o_d_e_s.md#define-cts-no-chip)**  |
|  | **[CTS_IN_PROGRESS](group___t_e_c___r_e_t_u_r_n___c_o_d_e_s.md#define-cts-in-progress)**  |
|  | **[CTS_TIMEOUT](group___t_e_c___r_e_t_u_r_n___c_o_d_e_s.md#define-cts-timeout)**  |
|  | **[CTS_PARAM](group___t_e_c___r_e_t_u_r_n___c_o_d_e_s.md#define-cts-param)**  |
|  | **[CTS_NOT_STARTED](group___t_e_c___r_e_t_u_r_n___c_o_d_e_s.md#define-cts-not-started)**  |
|  | **[CTS_STOPPED](group___t_e_c___r_e_t_u_r_n___c_o_d_e_s.md#define-cts-stopped)**  |
|  | **[CTS_CTLS_INIT](group___t_e_c___r_e_t_u_r_n___c_o_d_e_s.md#define-cts-ctls-init)**  |
|  | **[CTS_ERROR](group___t_e_c___r_e_t_u_r_n___c_o_d_e_s.md#define-cts-error)**  |
|  | **[CTS_CTLS_NOT_ALLOWED](group___t_e_c___r_e_t_u_r_n___c_o_d_e_s.md#define-cts-ctls-not-allowed)**  |
|  | **[CTS_CTLS_EMV_NO_CARD](group___t_e_c___r_e_t_u_r_n___c_o_d_e_s.md#define-cts-ctls-emv-no-card)**  |
|  | **[CTS_ERR_LOAD](group___t_e_c___r_e_t_u_r_n___c_o_d_e_s.md#define-cts-err-load)**  |
|  | **[CTS_VAS_DECRYPTION_NOT_REQUIRED](group___t_e_c___r_e_t_u_r_n___c_o_d_e_s.md#define-cts-vas-decryption-not-required)**  |
|  | **[CTS_VAS_DATA_DECRYPTED_OK](group___t_e_c___r_e_t_u_r_n___c_o_d_e_s.md#define-cts-vas-data-decrypted-ok)**  |
|  | **[CTS_VAS_DATA_DECRYPTED_FAILED](group___t_e_c___r_e_t_u_r_n___c_o_d_e_s.md#define-cts-vas-data-decrypted-failed)**  |
|  | **[CTS_UX_MSRDATA_NOT_AVAILABLE_TIMEOUT](group___t_e_c___r_e_t_u_r_n___c_o_d_e_s.md#define-cts-ux-msrdata-not-available-timeout)**  |
|  | **[CTS_NFC_INIT](group___t_e_c___r_e_t_u_r_n___c_o_d_e_s.md#define-cts-nfc-init)**  |
|  | **[CTS_CHIP_WITH_WRONG_ATR](group___t_e_c___r_e_t_u_r_n___c_o_d_e_s.md#define-cts-chip-with-wrong-atr)**  |
|  | **[CTS_API_NOT_ALLOWED](group___t_e_c___r_e_t_u_r_n___c_o_d_e_s.md#define-cts-api-not-allowed)**  |
|  | **[CTS_VAS_DATA_ENCRYPTED_OK](group___t_e_c___r_e_t_u_r_n___c_o_d_e_s.md#define-cts-vas-data-encrypted-ok)**  |
|  | **[CTS_UX_NO_MSR_DATA_AFTER_CARD_REMOVL](group___t_e_c___r_e_t_u_r_n___c_o_d_e_s.md#define-cts-ux-no-msr-data-after-card-removl)**  |
|  | **[CTS_MSR_ONLY_REQUEST_BUT_NO_DEVICE](group___t_e_c___r_e_t_u_r_n___c_o_d_e_s.md#define-cts-msr-only-request-but-no-device)**  |




## Macros Documentation

### define CTS_OK

```
#define CTS_OK 0
```


No error, function executed successfully. 


### define CTS_NO_CHIP

```
#define CTS_NO_CHIP 1
```


Card without chip or with broken chip is inserted or card is inserted and [CTS_NO_POWERON](group___t_e_c___s_t_a_r_t___o_p_t_i_o_n_s.md#define-cts-no-poweron) is set (returned by [cts_WaitSelection()](tec_8h.md#function-cts-waitselection)). 


### define CTS_IN_PROGRESS

```
#define CTS_IN_PROGRESS 2
```


Operation in progress (returned by [cts_StartSelection()](tec_8h.md#function-cts-startselection), [cts_WaitSelection()](tec_8h.md#function-cts-waitselection), [cts_WaitCardRemoval()](tec_8h.md#function-cts-waitcardremoval)). 


### define CTS_TIMEOUT

```
#define CTS_TIMEOUT 3
```


Timeout occurred (returned by [cts_WaitSelection()](tec_8h.md#function-cts-waitselection), [cts_WaitCardRemoval2()](tec_8h.md#function-cts-waitcardremoval2)). 


### define CTS_PARAM

```
#define CTS_PARAM 4
```


Parameter error (returned by [cts_SetOptions()](tec_8h.md#function-cts-setoptions), [cts_WaitSelection()](tec_8h.md#function-cts-waitselection), [cts_WaitCardRemoval()](tec_8h.md#function-cts-waitcardremoval), [cts_AddTechnologies()](tec_8h.md#function-cts-addtechnologies)). 


### define CTS_NOT_STARTED

```
#define CTS_NOT_STARTED 5
```


Technology selection is not running (returned by [cts_WaitSelection()](tec_8h.md#function-cts-waitselection), [cts_StopSelection()](tec_8h.md#function-cts-stopselection), [cts_RemoveTechnologies()](tec_8h.md#function-cts-removetechnologies)). 


### define CTS_STOPPED

```
#define CTS_STOPPED 6
```


Technology selection was aborted by [cts_StopSelection()](tec_8h.md#function-cts-stopselection) or [cts_RemoveTechnologies()](tec_8h.md#function-cts-removetechnologies) (returned by [cts_WaitSelection()](tec_8h.md#function-cts-waitselection)). 


### define CTS_CTLS_INIT

```
#define CTS_CTLS_INIT 7
```


Contactless transaction was not set up correctly (returned by [cts_WaitSelection()](tec_8h.md#function-cts-waitselection)). 


### define CTS_ERROR

```
#define CTS_ERROR 8
```


Internal error. 


### define CTS_CTLS_NOT_ALLOWED

```
#define CTS_CTLS_NOT_ALLOWED 9
```


VFI-Reader has not yet finished previous transaction (returned by [cts_WaitSelection()](tec_8h.md#function-cts-waitselection)). 


### define CTS_CTLS_EMV_NO_CARD

```
#define CTS_CTLS_EMV_NO_CARD 10
```


ADK-EMV has detected no medium to perform a contactless payment (returned by [cts_WaitSelection()](tec_8h.md#function-cts-waitselection)). 


### define CTS_ERR_LOAD

```
#define CTS_ERR_LOAD 11
```


Error loading dynamic library (NFC_Client.so/NFC_Client.vsl). 


### define CTS_VAS_DECRYPTION_NOT_REQUIRED

```
#define CTS_VAS_DECRYPTION_NOT_REQUIRED 12
```


VAS output data is not encrypted (returned by TEC if [NFC_VAS_Activate()](titusstubs_8cpp.md#function-nfc-vas-activate) reports data-not-encrypted). 

 TLV tag [CTS_DATA_TAG_VAS_DECRYPT_DATA_RESULT](group___t_e_c___d_a_t_a___t_a_g_s.md#define-cts-data-tag-vas-decrypt-data-result)


### define CTS_VAS_DATA_DECRYPTED_OK

```
#define CTS_VAS_DATA_DECRYPTED_OK 13
```


VAS output data decrypted successfully (returned by TEC if NFC_VAS_Data_Decrypt() == VAS_OK). 

 TLV tag [CTS_DATA_TAG_VAS_DECRYPT_DATA_RESULT](group___t_e_c___d_a_t_a___t_a_g_s.md#define-cts-data-tag-vas-decrypt-data-result)


### define CTS_VAS_DATA_DECRYPTED_FAILED

```
#define CTS_VAS_DATA_DECRYPTED_FAILED 14
```


VAS output data decryption failed (returned by TEC if NFC_VAS_Data_Decrypt() == VAS_FAIL). 

 TLV tag [CTS_DATA_TAG_VAS_DECRYPT_DATA_RESULT](group___t_e_c___d_a_t_a___t_a_g_s.md#define-cts-data-tag-vas-decrypt-data-result)


### define CTS_UX_MSRDATA_NOT_AVAILABLE_TIMEOUT

```
#define CTS_UX_MSRDATA_NOT_AVAILABLE_TIMEOUT 15
```


Technology selection has been terminated because MSR-Data was not read during the time window set in the input parameter options[8..9] of the function [cts_StartSelection()](tec_8h.md#function-cts-startselection). This return code, which is returned by [cts_WaitSelection()](tec_8h.md#function-cts-waitselection), is relevant and possible for UX-Devices only. It can be interpreted by the application as "card inserted incorrectly" or "magstripe reader malfunction". 


### define CTS_NFC_INIT

```
#define CTS_NFC_INIT 16
```


NFC not initialized (returned by [cts_WaitSelection()](tec_8h.md#function-cts-waitselection)). Application has to call NFC_Client_Init before. 


### define CTS_CHIP_WITH_WRONG_ATR

```
#define CTS_CHIP_WITH_WRONG_ATR 17
```


Chip-Card is inserted but its ATR is not EMV conform. This value may be returned by [cts_WaitSelection()](tec_8h.md#function-cts-waitselection) only if EMV_CT_DETECT_WRONG_ATR is set in the input parameter options[4] of the function [cts_StartSelection()](tec_8h.md#function-cts-startselection). 


### define CTS_API_NOT_ALLOWED

```
#define CTS_API_NOT_ALLOWED 18
```


API not allowed because TEC-callback is still in progress. 


### define CTS_VAS_DATA_ENCRYPTED_OK

```
#define CTS_VAS_DATA_ENCRYPTED_OK 19
```


Encrypted VAS output data was NOT decrypted. Reason: [CTS_VAS_DONT_DECRYPT](group___t_e_c___s_t_a_r_t___o_p_t_i_o_n_s.md#define-cts-vas-dont-decrypt) was put in by application. 

 TLV tag [CTS_DATA_TAG_VAS_DECRYPT_DATA_RESULT](group___t_e_c___d_a_t_a___t_a_g_s.md#define-cts-data-tag-vas-decrypt-data-result)


### define CTS_UX_NO_MSR_DATA_AFTER_CARD_REMOVL

```
#define CTS_UX_NO_MSR_DATA_AFTER_CARD_REMOVL 20
```


Ux30x only, card was removed but no MSR data could be read. 


### define CTS_MSR_ONLY_REQUEST_BUT_NO_DEVICE

```
#define CTS_MSR_ONLY_REQUEST_BUT_NO_DEVICE 21
```


"MSR only" requested but the device does not have a magstripe reader ([cts_StartSelection()](tec_8h.md#function-cts-startselection)). 




-------------------------------

Updated on 2025-06-17 at 11:52:23 +0100