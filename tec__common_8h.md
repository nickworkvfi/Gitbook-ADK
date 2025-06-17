---
title: tec/export/tec/tec_common.h

---

# tec/export/tec/tec_common.h

 [More...](#detailed-description)

## Types

|                | Name           |
| -------------- | -------------- |
| typedef void(*)(const char *str, void *data) | **[cts_TraceCallback](tec__common_8h.md#typedef-cts-tracecallback)**  |

## Functions

|                | Name           |
| -------------- | -------------- |
| void | **[cts_Version](tec__common_8h.md#function-cts-version)**(char * version, unsigned char len) |
| void | **[cts_SetTraceCallback](tec__common_8h.md#function-cts-settracecallback)**([cts_TraceCallback](tec__common_8h.md#typedef-cts-tracecallback) cbf, void * cb_data) |

## Defines

|                | Name           |
| -------------- | -------------- |
|  | **[CTS_CHIP](group___t_e_c___t_e_c_h_n_o_l_o_g_i_e_s.md#define-cts-chip)**  |
|  | **[CTS_MSR](group___t_e_c___t_e_c_h_n_o_l_o_g_i_e_s.md#define-cts-msr)**  |
|  | **[CTS_CTLS](group___t_e_c___t_e_c_h_n_o_l_o_g_i_e_s.md#define-cts-ctls)**  |
|  | **[CTS_SYNC](group___t_e_c___t_e_c_h_n_o_l_o_g_i_e_s.md#define-cts-sync)**  |
|  | **[CTS_DATA_TLV](tec__common_8h.md#define-cts-data-tlv)**  |
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
|  | **[CTS_DATA_TAG_NFC_RESULT](group___t_e_c___d_a_t_a___t_a_g_s.md#define-cts-data-tag-nfc-result)**  |
|  | **[CTS_DATA_TAG_CARD](group___t_e_c___d_a_t_a___t_a_g_s.md#define-cts-data-tag-card)**  |
|  | **[CTS_DATA_TAG_CARD_TYPE](group___t_e_c___d_a_t_a___t_a_g_s.md#define-cts-data-tag-card-type)**  |
|  | **[CTS_DATA_TAG_CARD_INFO](group___t_e_c___d_a_t_a___t_a_g_s.md#define-cts-data-tag-card-info)**  |
|  | **[CTS_DATA_TAG_VAS_RESULT](group___t_e_c___d_a_t_a___t_a_g_s.md#define-cts-data-tag-vas-result)**  |
|  | **[CTS_DATA_TAG_VAS_DATA](group___t_e_c___d_a_t_a___t_a_g_s.md#define-cts-data-tag-vas-data)**  |
|  | **[CTS_DATA_TAG_EMV_RESULT](group___t_e_c___d_a_t_a___t_a_g_s.md#define-cts-data-tag-emv-result)**  |
|  | **[CTS_DATA_TAG_VAS_DECRYPT_DATA_RESULT](group___t_e_c___d_a_t_a___t_a_g_s.md#define-cts-data-tag-vas-decrypt-data-result)**  |
|  | **[CTS_DATA_TAG_CARD_TYPE_FULL](group___t_e_c___d_a_t_a___t_a_g_s.md#define-cts-data-tag-card-type-full)**  |
|  | **[CTS_DATA_TAG_CARDS_TOTAL_COUNT](group___t_e_c___d_a_t_a___t_a_g_s.md#define-cts-data-tag-cards-total-count)**  |
|  | **[CTS_DATA_TAG_CARDS_A](group___t_e_c___d_a_t_a___t_a_g_s.md#define-cts-data-tag-cards-a)**  |
|  | **[CTS_DATA_TAG_CARDS_B](group___t_e_c___d_a_t_a___t_a_g_s.md#define-cts-data-tag-cards-b)**  |
|  | **[CTS_DATA_TAG_CARDS_F](group___t_e_c___d_a_t_a___t_a_g_s.md#define-cts-data-tag-cards-f)**  |
|  | **[CTS_DATA_TAG_CUSTOM_POLL_RESULT](group___t_e_c___d_a_t_a___t_a_g_s.md#define-cts-data-tag-custom-poll-result)**  |
|  | **[CTS_DATA_TAG_CARD_SAK](group___t_e_c___d_a_t_a___t_a_g_s.md#define-cts-data-tag-card-sak)**  |
|  | **[CTS_DATA_TAG_CARD_ATQ](group___t_e_c___d_a_t_a___t_a_g_s.md#define-cts-data-tag-card-atq)**  |
|  | **[CTS_DATA_TAG_CARD_RFU](group___t_e_c___d_a_t_a___t_a_g_s.md#define-cts-data-tag-card-rfu)**  |
|  | **[CTS_OPTION_TAG_APP_ID](group___t_e_c___o_p_t_i_o_n___t_a_g_s.md#define-cts-option-tag-app-id)**  |
|  | **[CTS_OPTION_TAG_SYNC_CARD_TYPE](group___t_e_c___o_p_t_i_o_n___t_a_g_s.md#define-cts-option-tag-sync-card-type)**  |
|  | **[CTS_OPTION_TAG_UX_MSR_TIMEOUT](group___t_e_c___o_p_t_i_o_n___t_a_g_s.md#define-cts-option-tag-ux-msr-timeout)**  |

## Detailed Description


**Author**: Dirk Germann, GSS 

Interface definitions for libtec, common part for [tec.h](tec_8h.md#file-tec.h). This file defines the API for the technology selection library. 

## Types Documentation

### typedef cts_TraceCallback

```cpp
typedef void(* cts_TraceCallback) (const char *str, void *data);
```


**Parameters**: 

  * **str** : Trace message. 
  * **data** : Data pointer provided by the application. 


Type of function that is called for traces, see [cts_SetTraceCallback()](tec__common_8h.md#function-cts-settracecallback); 



## Functions Documentation

### function cts_Version

```cpp
void cts_Version(
    char * version,
    unsigned char len
)
```


**Parameters**: 

  * **version** : Buffer to store null-terminated version string. 
  * **len** : Size of buffer version. 


Get version of libtec. 


### function cts_SetTraceCallback

```cpp
void cts_SetTraceCallback(
    cts_TraceCallback cbf,
    void * cb_data
)
```


**Parameters**: 

  * **cbf** : Callback function for trace messages, may be NULL. 
  * **cb_data** : Data pointer that is passed on to the callback function cbf, may be NULL. 


Set callback function for trace output. 




## Macros Documentation

### define CTS_CHIP

```cpp
#define CTS_CHIP 1
```


Contact Chip (asynchronous card). 


### define CTS_MSR

```cpp
#define CTS_MSR 2
```


Magstripe. 


### define CTS_CTLS

```cpp
#define CTS_CTLS 4
```


Contactless (EMV, NFC, and/or VAS). 


### define CTS_SYNC

```cpp
#define CTS_SYNC 8
```


Contact Chip, synchronous card. Output only, synchronous card detection is activated by [CTS_CHIP](group___t_e_c___t_e_c_h_n_o_l_o_g_i_e_s.md#define-cts-chip) plus [CTS_OPTION_TAG_SYNC_CARD_TYPE](group___t_e_c___o_p_t_i_o_n___t_a_g_s.md#define-cts-option-tag-sync-card-type)


### define CTS_DATA_TLV

```cpp
#define CTS_DATA_TLV 0x80
```


if set in usedTechnology parameter of [cts_WaitSelection()](tec_8h.md#function-cts-waitselection), dataBuffer is in TLV format (this is only the case if NFC or VAS are used) 


### define CTS_OK

```cpp
#define CTS_OK 0
```


No error, function executed successfully. 


### define CTS_NO_CHIP

```cpp
#define CTS_NO_CHIP 1
```


Card without chip or with broken chip is inserted or card is inserted and [CTS_NO_POWERON](group___t_e_c___s_t_a_r_t___o_p_t_i_o_n_s.md#define-cts-no-poweron) is set (returned by [cts_WaitSelection()](tec_8h.md#function-cts-waitselection)). 


### define CTS_IN_PROGRESS

```cpp
#define CTS_IN_PROGRESS 2
```


Operation in progress (returned by [cts_StartSelection()](tec_8h.md#function-cts-startselection), [cts_WaitSelection()](tec_8h.md#function-cts-waitselection), [cts_WaitCardRemoval()](tec_8h.md#function-cts-waitcardremoval)). 


### define CTS_TIMEOUT

```cpp
#define CTS_TIMEOUT 3
```


Timeout occurred (returned by [cts_WaitSelection()](tec_8h.md#function-cts-waitselection), [cts_WaitCardRemoval2()](tec_8h.md#function-cts-waitcardremoval2)). 


### define CTS_PARAM

```cpp
#define CTS_PARAM 4
```


Parameter error (returned by [cts_SetOptions()](tec_8h.md#function-cts-setoptions), [cts_WaitSelection()](tec_8h.md#function-cts-waitselection), [cts_WaitCardRemoval()](tec_8h.md#function-cts-waitcardremoval), [cts_AddTechnologies()](tec_8h.md#function-cts-addtechnologies)). 


### define CTS_NOT_STARTED

```cpp
#define CTS_NOT_STARTED 5
```


Technology selection is not running (returned by [cts_WaitSelection()](tec_8h.md#function-cts-waitselection), [cts_StopSelection()](tec_8h.md#function-cts-stopselection), [cts_RemoveTechnologies()](tec_8h.md#function-cts-removetechnologies)). 


### define CTS_STOPPED

```cpp
#define CTS_STOPPED 6
```


Technology selection was aborted by [cts_StopSelection()](tec_8h.md#function-cts-stopselection) or [cts_RemoveTechnologies()](tec_8h.md#function-cts-removetechnologies) (returned by [cts_WaitSelection()](tec_8h.md#function-cts-waitselection)). 


### define CTS_CTLS_INIT

```cpp
#define CTS_CTLS_INIT 7
```


Contactless transaction was not set up correctly (returned by [cts_WaitSelection()](tec_8h.md#function-cts-waitselection)). 


### define CTS_ERROR

```cpp
#define CTS_ERROR 8
```


Internal error. 


### define CTS_CTLS_NOT_ALLOWED

```cpp
#define CTS_CTLS_NOT_ALLOWED 9
```


VFI-Reader has not yet finished previous transaction (returned by [cts_WaitSelection()](tec_8h.md#function-cts-waitselection)). 


### define CTS_CTLS_EMV_NO_CARD

```cpp
#define CTS_CTLS_EMV_NO_CARD 10
```


ADK-EMV has detected no medium to perform a contactless payment (returned by [cts_WaitSelection()](tec_8h.md#function-cts-waitselection)). 


### define CTS_ERR_LOAD

```cpp
#define CTS_ERR_LOAD 11
```


Error loading dynamic library (NFC_Client.so/NFC_Client.vsl). 


### define CTS_VAS_DECRYPTION_NOT_REQUIRED

```cpp
#define CTS_VAS_DECRYPTION_NOT_REQUIRED 12
```


VAS output data is not encrypted (returned by TEC if [NFC_VAS_Activate()](titusstubs_8cpp.md#function-nfc-vas-activate) reports data-not-encrypted). 

 TLV tag [CTS_DATA_TAG_VAS_DECRYPT_DATA_RESULT](group___t_e_c___d_a_t_a___t_a_g_s.md#define-cts-data-tag-vas-decrypt-data-result)


### define CTS_VAS_DATA_DECRYPTED_OK

```cpp
#define CTS_VAS_DATA_DECRYPTED_OK 13
```


VAS output data decrypted successfully (returned by TEC if NFC_VAS_Data_Decrypt() == VAS_OK). 

 TLV tag [CTS_DATA_TAG_VAS_DECRYPT_DATA_RESULT](group___t_e_c___d_a_t_a___t_a_g_s.md#define-cts-data-tag-vas-decrypt-data-result)


### define CTS_VAS_DATA_DECRYPTED_FAILED

```cpp
#define CTS_VAS_DATA_DECRYPTED_FAILED 14
```


VAS output data decryption failed (returned by TEC if NFC_VAS_Data_Decrypt() == VAS_FAIL). 

 TLV tag [CTS_DATA_TAG_VAS_DECRYPT_DATA_RESULT](group___t_e_c___d_a_t_a___t_a_g_s.md#define-cts-data-tag-vas-decrypt-data-result)


### define CTS_UX_MSRDATA_NOT_AVAILABLE_TIMEOUT

```cpp
#define CTS_UX_MSRDATA_NOT_AVAILABLE_TIMEOUT 15
```


Technology selection has been terminated because MSR-Data was not read during the time window set in the input parameter options[8..9] of the function [cts_StartSelection()](tec_8h.md#function-cts-startselection). This return code, which is returned by [cts_WaitSelection()](tec_8h.md#function-cts-waitselection), is relevant and possible for UX-Devices only. It can be interpreted by the application as "card inserted incorrectly" or "magstripe reader malfunction". 


### define CTS_NFC_INIT

```cpp
#define CTS_NFC_INIT 16
```


NFC not initialized (returned by [cts_WaitSelection()](tec_8h.md#function-cts-waitselection)). Application has to call NFC_Client_Init before. 


### define CTS_CHIP_WITH_WRONG_ATR

```cpp
#define CTS_CHIP_WITH_WRONG_ATR 17
```


Chip-Card is inserted but its ATR is not EMV conform. This value may be returned by [cts_WaitSelection()](tec_8h.md#function-cts-waitselection) only if EMV_CT_DETECT_WRONG_ATR is set in the input parameter options[4] of the function [cts_StartSelection()](tec_8h.md#function-cts-startselection). 


### define CTS_API_NOT_ALLOWED

```cpp
#define CTS_API_NOT_ALLOWED 18
```


API not allowed because TEC-callback is still in progress. 


### define CTS_VAS_DATA_ENCRYPTED_OK

```cpp
#define CTS_VAS_DATA_ENCRYPTED_OK 19
```


Encrypted VAS output data was NOT decrypted. Reason: [CTS_VAS_DONT_DECRYPT](group___t_e_c___s_t_a_r_t___o_p_t_i_o_n_s.md#define-cts-vas-dont-decrypt) was put in by application. 

 TLV tag [CTS_DATA_TAG_VAS_DECRYPT_DATA_RESULT](group___t_e_c___d_a_t_a___t_a_g_s.md#define-cts-data-tag-vas-decrypt-data-result)


### define CTS_UX_NO_MSR_DATA_AFTER_CARD_REMOVL

```cpp
#define CTS_UX_NO_MSR_DATA_AFTER_CARD_REMOVL 20
```


Ux30x only, card was removed but no MSR data could be read. 


### define CTS_MSR_ONLY_REQUEST_BUT_NO_DEVICE

```cpp
#define CTS_MSR_ONLY_REQUEST_BUT_NO_DEVICE 21
```


"MSR only" requested but the device does not have a magstripe reader ([cts_StartSelection()](tec_8h.md#function-cts-startselection)). 


### define CTS_PURE_CARD_DETECTION

```cpp
#define CTS_PURE_CARD_DETECTION 0x01
```


options[0], Relevant for CTLS only: 

 only detect card, do not perform transaction, 

 see also [Some notes regarding the different technologies]


### define CTS_NO_POWERON

```cpp
#define CTS_NO_POWERON 0x02
```


options[0], Relevant for CT only 

 (must not be set in conjunction with [CTS_POWERON_AFTER_CTLS_MSR_DEACTIVATION](group___t_e_c___s_t_a_r_t___o_p_t_i_o_n_s.md#define-cts-poweron-after-ctls-msr-deactivation)): 

 do not power on inserted card. 


### define CTS_POWERON_AFTER_CTLS_MSR_DEACTIVATION

```cpp
#define CTS_POWERON_AFTER_CTLS_MSR_DEACTIVATION 0x04
```


options[0], Relevant for CT only (must not be set in conjunction with [CTS_NO_POWERON](group___t_e_c___s_t_a_r_t___o_p_t_i_o_n_s.md#define-cts-no-poweron)): 

 deactivate CTLS and MSR once chip-card is detected and then power on the chip-card. 


### define CTS_NFC_ENABLE

```cpp
#define CTS_NFC_ENABLE 0x01
```


options[1], CTLS, only allowed if [CTS_VAS_ENABLE](group___t_e_c___s_t_a_r_t___o_p_t_i_o_n_s.md#define-cts-vas-enable) is NOT set: 

 ADK-NFC is used for detection of contactless cards, options[12..15] determine which NFC technology is enabled. 


### define CTS_VAS_ENABLE

```cpp
#define CTS_VAS_ENABLE 0x02
```


options[1], CTLS, only allowed if [CTS_NFC_ENABLE](group___t_e_c___s_t_a_r_t___o_p_t_i_o_n_s.md#define-cts-nfc-enable) is NOT set: 

 ADK-NFC is used for Wallet processing. 


### define CTS_EMV_AFTER_NFC_ISO

```cpp
#define CTS_EMV_AFTER_NFC_ISO 0x04
```


options[1], Relevant only if [CTS_NFC_ENABLE](group___t_e_c___s_t_a_r_t___o_p_t_i_o_n_s.md#define-cts-nfc-enable) is set. 

 Perform an EMV transaction if NFC has detected one of the following cards: I_ISO14443A, I_ISO14443B 


### define CTS_VAS_HANDLE_LED_BUZZ

```cpp
#define CTS_VAS_HANDLE_LED_BUZZ 0x08
```


options[1], Relevant only if [CTS_VAS_ENABLE](group___t_e_c___s_t_a_r_t___o_p_t_i_o_n_s.md#define-cts-vas-enable) is set: 

 Handle LEDs and buzzer if VAS processing failed or VAS only (no subsequent EMV transaction). 


### define CTS_EMV_CTLS_TIMEOUT_AFTER_VAS

```cpp
#define CTS_EMV_CTLS_TIMEOUT_AFTER_VAS 0x10
```


options[1], Relevant only if [CTS_VAS_ENABLE](group___t_e_c___s_t_a_r_t___o_p_t_i_o_n_s.md#define-cts-vas-enable) is set: 

 Use of a permissible time window to perform a contactless payment after either VAS_DO_PAY or VAS_DO_PAY_DECRYPT_REQ has been detected. 

 The dimension of this time window is configured with the input parameter options[10..11] of the function [cts_StartSelection()](tec_8h.md#function-cts-startselection). 


### define CTS_VAS_DONT_DECRYPT

```cpp
#define CTS_VAS_DONT_DECRYPT 0x20
```


options[1], Relevant only if [CTS_VAS_ENABLE](group___t_e_c___s_t_a_r_t___o_p_t_i_o_n_s.md#define-cts-vas-enable) is set: 

 TEC will NOT decrypt the resulting VAS data. 


### define CTS_MSR_AFTER_CTLS_FAIL

```cpp
#define CTS_MSR_AFTER_CTLS_FAIL 0x40
```


options[1], Relevant only if options[6..7] is set: 

 Wait for MSR read after CTLS transaction only if that failed. 


### define CTS_NFC_DUTY_CYCLE_OFF

```cpp
#define CTS_NFC_DUTY_CYCLE_OFF 0x80
```


options[1], Relevant only if [CTS_NFC_ENABLE](group___t_e_c___s_t_a_r_t___o_p_t_i_o_n_s.md#define-cts-nfc-enable) is set. 

 Ux700 overheat protection (duty cycle) is turned on by default. Can be switched off by this bit. 


### define CTS_DATA_TAG_NFC_RESULT

```cpp
#define CTS_DATA_TAG_NFC_RESULT 0xDFDB20
```


return code of either [NFC_PT_Polling()](titusstubs_8cpp.md#function-nfc-pt-polling) or [NFC_PT_PollingFull()](titusstubs_8cpp.md#function-nfc-pt-pollingfull). 


### define CTS_DATA_TAG_CARD

```cpp
#define CTS_DATA_TAG_CARD 0xFFDB20
```


card detected by either [NFC_PT_Polling()](titusstubs_8cpp.md#function-nfc-pt-polling) or [NFC_PT_PollingFull()](titusstubs_8cpp.md#function-nfc-pt-pollingfull), may occur several times. 


### define CTS_DATA_TAG_CARD_TYPE

```cpp
#define CTS_DATA_TAG_CARD_TYPE 0xDFDB21
```


card type, included in [CTS_DATA_TAG_CARD](group___t_e_c___d_a_t_a___t_a_g_s.md#define-cts-data-tag-card). 


### define CTS_DATA_TAG_CARD_INFO

```cpp
#define CTS_DATA_TAG_CARD_INFO 0xDFDB22
```


card info, included in [CTS_DATA_TAG_CARD](group___t_e_c___d_a_t_a___t_a_g_s.md#define-cts-data-tag-card). 


### define CTS_DATA_TAG_VAS_RESULT

```cpp
#define CTS_DATA_TAG_VAS_RESULT 0xDFDB23
```


return code of [NFC_VAS_Activate()](titusstubs_8cpp.md#function-nfc-vas-activate). 


### define CTS_DATA_TAG_VAS_DATA

```cpp
#define CTS_DATA_TAG_VAS_DATA 0xDFDB24
```


output data of [NFC_VAS_Activate()](titusstubs_8cpp.md#function-nfc-vas-activate). 


### define CTS_DATA_TAG_EMV_RESULT

```cpp
#define CTS_DATA_TAG_EMV_RESULT 0xDFDB25
```


return code of [EMV_CTLS_ContinueOffline()](group___f_u_n_c___f_l_o_w.md#function-emv-ctls-continueoffline) / [EMV_CTLS_SmartReset()](group___f_u_n_c___i_c_c.md#function-emv-ctls-smartreset). 


### define CTS_DATA_TAG_VAS_DECRYPT_DATA_RESULT

```cpp
#define CTS_DATA_TAG_VAS_DECRYPT_DATA_RESULT 0xDFDB26
```


return code of TEC ([CTS_VAS_DECRYPTION_NOT_REQUIRED](group___t_e_c___r_e_t_u_r_n___c_o_d_e_s.md#define-cts-vas-decryption-not-required), [CTS_VAS_DATA_DECRYPTED_OK](group___t_e_c___r_e_t_u_r_n___c_o_d_e_s.md#define-cts-vas-data-decrypted-ok), [CTS_VAS_DATA_DECRYPTED_FAILED](group___t_e_c___r_e_t_u_r_n___c_o_d_e_s.md#define-cts-vas-data-decrypted-failed), or [CTS_VAS_DATA_ENCRYPTED_OK](group___t_e_c___r_e_t_u_r_n___c_o_d_e_s.md#define-cts-vas-data-encrypted-ok)) based on the return responses of [NFC_VAS_Activate()](titusstubs_8cpp.md#function-nfc-vas-activate) and NFC_VAS_Data_Decrypt(). 


### define CTS_DATA_TAG_CARD_TYPE_FULL

```cpp
#define CTS_DATA_TAG_CARD_TYPE_FULL 0xDFDB27
```


nfc-card-type-full, 4-byte binary array in big-endian format, included in [CTS_DATA_TAG_CARD](group___t_e_c___d_a_t_a___t_a_g_s.md#define-cts-data-tag-card). 


### define CTS_DATA_TAG_CARDS_TOTAL_COUNT

```cpp
#define CTS_DATA_TAG_CARDS_TOTAL_COUNT 0xDFDB28
```


total number of cards found by nfc, 1 byte binary. 


### define CTS_DATA_TAG_CARDS_A

```cpp
#define CTS_DATA_TAG_CARDS_A 0xDFDB29
```


total number of cards of type A found by nfc, 1 binary byte. 


### define CTS_DATA_TAG_CARDS_B

```cpp
#define CTS_DATA_TAG_CARDS_B 0xDFDB2A
```


total number of cards of type B found by nfc, 1 binary byte. 


### define CTS_DATA_TAG_CARDS_F

```cpp
#define CTS_DATA_TAG_CARDS_F 0xDFDB2B
```


total number of cards of type F found by nfc, 1 binary byte. 


### define CTS_DATA_TAG_CUSTOM_POLL_RESULT

```cpp
#define CTS_DATA_TAG_CUSTOM_POLL_RESULT 0xDFDB2C
```


custom-poll-result of either [NFC_PT_Polling()](titusstubs_8cpp.md#function-nfc-pt-polling) or [NFC_PT_PollingFull()](titusstubs_8cpp.md#function-nfc-pt-pollingfull), n-byte binary array. 


### define CTS_DATA_TAG_CARD_SAK

```cpp
#define CTS_DATA_TAG_CARD_SAK 0xDFDB2D
```


SAK of the card found by nfc, 1 binary byte, included in [CTS_DATA_TAG_CARD](group___t_e_c___d_a_t_a___t_a_g_s.md#define-cts-data-tag-card). 


### define CTS_DATA_TAG_CARD_ATQ

```cpp
#define CTS_DATA_TAG_CARD_ATQ 0xDFDB2E
```


ATQ of the card found by nfc, 2-byte binary array, included in [CTS_DATA_TAG_CARD](group___t_e_c___d_a_t_a___t_a_g_s.md#define-cts-data-tag-card). 


### define CTS_DATA_TAG_CARD_RFU

```cpp
#define CTS_DATA_TAG_CARD_RFU 0xDFDB2F
```


RFU of the card found by nfc, n-byte binary array, included in [CTS_DATA_TAG_CARD](group___t_e_c___d_a_t_a___t_a_g_s.md#define-cts-data-tag-card). 


### define CTS_OPTION_TAG_APP_ID

```cpp
#define CTS_OPTION_TAG_APP_ID 0xDFDB40
```


application ID, passed on to [NFC_VAS_Activate()](titusstubs_8cpp.md#function-nfc-vas-activate). 


### define CTS_OPTION_TAG_SYNC_CARD_TYPE

```cpp
#define CTS_OPTION_TAG_SYNC_CARD_TYPE 0xDFDB41
```


Card Type for synchroneous (contact) Chip, passed on to [crdSync_PowerUp()](crdsync_8h.md#function-crdsync-powerup). 1-byte value. Not supported for trinity/android. 


### define CTS_OPTION_TAG_UX_MSR_TIMEOUT

```cpp
#define CTS_OPTION_TAG_UX_MSR_TIMEOUT 0xDFDB42
```


Ux30x only: How long to wait for MSR data after card removal.

 Precondition: Callback [CTS_NOTIFICATION_CBK_TYPE_UX_CARD_INSERTED](group___t_e_c___n_o_t_i_f_i_c_a_t_i_o_n___c_b_k___t_y_p_e.md#define-cts-notification-cbk-type-ux-card-inserted) is registered.

 Format b2 (binary coded, little endian). min = 0x0001, max = 0xFFFF = 65535 ms.

 "0x0000" means "wait until main timeout of [cts_StartSelection()](tec_8h.md#function-cts-startselection) expires" 


## Source code

```cpp

#ifndef __TEC_COMMON_INTERFACE__
#define __TEC_COMMON_INTERFACE__


#define CTS_CHIP 1  
#define CTS_MSR  2  
#define CTS_CTLS 4  
#define CTS_SYNC 8  
#define CTS_DATA_TLV 0x80 
#define CTS_OK                0  
#define CTS_NO_CHIP           1  
#define CTS_IN_PROGRESS       2  
#define CTS_TIMEOUT           3  
#define CTS_PARAM             4  
#define CTS_NOT_STARTED       5  
#define CTS_STOPPED           6  
#define CTS_CTLS_INIT         7  
#define CTS_ERROR             8  
#define CTS_CTLS_NOT_ALLOWED  9  
#define CTS_CTLS_EMV_NO_CARD 10  
#define CTS_ERR_LOAD         11  
#define CTS_VAS_DECRYPTION_NOT_REQUIRED      12  
#define CTS_VAS_DATA_DECRYPTED_OK            13  
#define CTS_VAS_DATA_DECRYPTED_FAILED        14  
#define CTS_UX_MSRDATA_NOT_AVAILABLE_TIMEOUT 15  
#define CTS_NFC_INIT                         16  
#define CTS_CHIP_WITH_WRONG_ATR              17  
#define CTS_API_NOT_ALLOWED                  18  
#define CTS_VAS_DATA_ENCRYPTED_OK            19  
#define CTS_UX_NO_MSR_DATA_AFTER_CARD_REMOVL 20  
#define CTS_MSR_ONLY_REQUEST_BUT_NO_DEVICE   21  
#define CTS_PURE_CARD_DETECTION                 0x01 
#define CTS_NO_POWERON                          0x02 
#define CTS_POWERON_AFTER_CTLS_MSR_DEACTIVATION 0x04 
#define CTS_NFC_ENABLE                  0x01 
#define CTS_VAS_ENABLE                  0x02 
#define CTS_EMV_AFTER_NFC_ISO           0x04 
#define CTS_VAS_HANDLE_LED_BUZZ         0x08 
#define CTS_EMV_CTLS_TIMEOUT_AFTER_VAS  0x10 
#define CTS_VAS_DONT_DECRYPT            0x20 
#define CTS_MSR_AFTER_CTLS_FAIL         0x40 
#define CTS_NFC_DUTY_CYCLE_OFF          0x80 
#define CTS_DATA_TAG_NFC_RESULT               0xDFDB20 
#define CTS_DATA_TAG_CARD                     0xFFDB20 
#define CTS_DATA_TAG_CARD_TYPE                0xDFDB21 
#define CTS_DATA_TAG_CARD_INFO                0xDFDB22 
#define CTS_DATA_TAG_VAS_RESULT               0xDFDB23 
#define CTS_DATA_TAG_VAS_DATA                 0xDFDB24 
#define CTS_DATA_TAG_EMV_RESULT               0xDFDB25 
#define CTS_DATA_TAG_VAS_DECRYPT_DATA_RESULT  0xDFDB26 
#define CTS_DATA_TAG_CARD_TYPE_FULL           0xDFDB27 
#define CTS_DATA_TAG_CARDS_TOTAL_COUNT        0xDFDB28 
#define CTS_DATA_TAG_CARDS_A                  0xDFDB29 
#define CTS_DATA_TAG_CARDS_B                  0xDFDB2A 
#define CTS_DATA_TAG_CARDS_F                  0xDFDB2B 
#define CTS_DATA_TAG_CUSTOM_POLL_RESULT       0xDFDB2C 
#define CTS_DATA_TAG_CARD_SAK                 0xDFDB2D 
#define CTS_DATA_TAG_CARD_ATQ                 0xDFDB2E 
#define CTS_DATA_TAG_CARD_RFU                 0xDFDB2F 
#define CTS_OPTION_TAG_APP_ID           0xDFDB40 
#define CTS_OPTION_TAG_SYNC_CARD_TYPE   0xDFDB41 
#define CTS_OPTION_TAG_UX_MSR_TIMEOUT   0xDFDB42 
typedef void (* cts_TraceCallback) (const char *str, void *data);

 void cts_Version(char *version, unsigned char len);

 void cts_SetTraceCallback(cts_TraceCallback cbf, void *cb_data);


#endif  // avoid double include
```


-------------------------------

Updated on 2025-06-17 at 11:52:26 +0100
