---
title: TEC result data tags
summary: These tags are used in dataBuffer of cts_WaitSelection() if CTS_DATA_TLV is set in usedTechnology. 

---

# TEC result data tags

These tags are used in dataBuffer of [cts_WaitSelection()]() if [CTS_DATA_TLV]() is set in usedTechnology. 

## Defines

|                | Name           |
| -------------- | -------------- |
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




## Macros Documentation

### define CTS_DATA_TAG_NFC_RESULT

```
#define CTS_DATA_TAG_NFC_RESULT 0xDFDB20
```


return code of either [NFC_PT_Polling()](titusstubs_8cpp.md#function-nfc-pt-polling) or [NFC_PT_PollingFull()](titusstubs_8cpp.md#function-nfc-pt-pollingfull). 


### define CTS_DATA_TAG_CARD

```
#define CTS_DATA_TAG_CARD 0xFFDB20
```


card detected by either [NFC_PT_Polling()](titusstubs_8cpp.md#function-nfc-pt-polling) or [NFC_PT_PollingFull()](titusstubs_8cpp.md#function-nfc-pt-pollingfull), may occur several times. 


### define CTS_DATA_TAG_CARD_TYPE

```
#define CTS_DATA_TAG_CARD_TYPE 0xDFDB21
```


card type, included in [CTS_DATA_TAG_CARD](group___t_e_c___d_a_t_a___t_a_g_s.md#define-cts-data-tag-card). 


### define CTS_DATA_TAG_CARD_INFO

```
#define CTS_DATA_TAG_CARD_INFO 0xDFDB22
```


card info, included in [CTS_DATA_TAG_CARD](group___t_e_c___d_a_t_a___t_a_g_s.md#define-cts-data-tag-card). 


### define CTS_DATA_TAG_VAS_RESULT

```
#define CTS_DATA_TAG_VAS_RESULT 0xDFDB23
```


return code of [NFC_VAS_Activate()](titusstubs_8cpp.md#function-nfc-vas-activate). 


### define CTS_DATA_TAG_VAS_DATA

```
#define CTS_DATA_TAG_VAS_DATA 0xDFDB24
```


output data of [NFC_VAS_Activate()](titusstubs_8cpp.md#function-nfc-vas-activate). 


### define CTS_DATA_TAG_EMV_RESULT

```
#define CTS_DATA_TAG_EMV_RESULT 0xDFDB25
```


return code of [EMV_CTLS_ContinueOffline()](group___f_u_n_c___f_l_o_w.md#function-emv-ctls-continueoffline) / [EMV_CTLS_SmartReset()](group___f_u_n_c___i_c_c.md#function-emv-ctls-smartreset). 


### define CTS_DATA_TAG_VAS_DECRYPT_DATA_RESULT

```
#define CTS_DATA_TAG_VAS_DECRYPT_DATA_RESULT 0xDFDB26
```


return code of TEC ([CTS_VAS_DECRYPTION_NOT_REQUIRED](group___t_e_c___r_e_t_u_r_n___c_o_d_e_s.md#define-cts-vas-decryption-not-required), [CTS_VAS_DATA_DECRYPTED_OK](group___t_e_c___r_e_t_u_r_n___c_o_d_e_s.md#define-cts-vas-data-decrypted-ok), [CTS_VAS_DATA_DECRYPTED_FAILED](group___t_e_c___r_e_t_u_r_n___c_o_d_e_s.md#define-cts-vas-data-decrypted-failed), or [CTS_VAS_DATA_ENCRYPTED_OK](group___t_e_c___r_e_t_u_r_n___c_o_d_e_s.md#define-cts-vas-data-encrypted-ok)) based on the return responses of [NFC_VAS_Activate()](titusstubs_8cpp.md#function-nfc-vas-activate) and NFC_VAS_Data_Decrypt(). 


### define CTS_DATA_TAG_CARD_TYPE_FULL

```
#define CTS_DATA_TAG_CARD_TYPE_FULL 0xDFDB27
```


nfc-card-type-full, 4-byte binary array in big-endian format, included in [CTS_DATA_TAG_CARD](group___t_e_c___d_a_t_a___t_a_g_s.md#define-cts-data-tag-card). 


### define CTS_DATA_TAG_CARDS_TOTAL_COUNT

```
#define CTS_DATA_TAG_CARDS_TOTAL_COUNT 0xDFDB28
```


total number of cards found by nfc, 1 byte binary. 


### define CTS_DATA_TAG_CARDS_A

```
#define CTS_DATA_TAG_CARDS_A 0xDFDB29
```


total number of cards of type A found by nfc, 1 binary byte. 


### define CTS_DATA_TAG_CARDS_B

```
#define CTS_DATA_TAG_CARDS_B 0xDFDB2A
```


total number of cards of type B found by nfc, 1 binary byte. 


### define CTS_DATA_TAG_CARDS_F

```
#define CTS_DATA_TAG_CARDS_F 0xDFDB2B
```


total number of cards of type F found by nfc, 1 binary byte. 


### define CTS_DATA_TAG_CUSTOM_POLL_RESULT

```
#define CTS_DATA_TAG_CUSTOM_POLL_RESULT 0xDFDB2C
```


custom-poll-result of either [NFC_PT_Polling()](titusstubs_8cpp.md#function-nfc-pt-polling) or [NFC_PT_PollingFull()](titusstubs_8cpp.md#function-nfc-pt-pollingfull), n-byte binary array. 


### define CTS_DATA_TAG_CARD_SAK

```
#define CTS_DATA_TAG_CARD_SAK 0xDFDB2D
```


SAK of the card found by nfc, 1 binary byte, included in [CTS_DATA_TAG_CARD](group___t_e_c___d_a_t_a___t_a_g_s.md#define-cts-data-tag-card). 


### define CTS_DATA_TAG_CARD_ATQ

```
#define CTS_DATA_TAG_CARD_ATQ 0xDFDB2E
```


ATQ of the card found by nfc, 2-byte binary array, included in [CTS_DATA_TAG_CARD](group___t_e_c___d_a_t_a___t_a_g_s.md#define-cts-data-tag-card). 


### define CTS_DATA_TAG_CARD_RFU

```
#define CTS_DATA_TAG_CARD_RFU 0xDFDB2F
```


RFU of the card found by nfc, n-byte binary array, included in [CTS_DATA_TAG_CARD](group___t_e_c___d_a_t_a___t_a_g_s.md#define-cts-data-tag-card). 




-------------------------------

Updated on 2025-06-17 at 11:52:23 +0100