---
title: tec/export/tec/tec.h

---

# tec/export/tec/tec.h

 [More...](#detailed-description)

## Types

|                | Name           |
| -------------- | -------------- |
| typedef void(*)(void *data) | **[cts_Callback](tec_8h.md#typedef-cts-callback)**  |

## Functions

|                | Name           |
| -------------- | -------------- |
| int | **[cts_SetOptions](tec_8h.md#function-cts-setoptions)**(const unsigned char * options, unsigned char options_len) |
| int | **[cts_StartSelection](tec_8h.md#function-cts-startselection)**(unsigned char supportedTechnologies, unsigned short timeout_sec, [cts_Callback](tec_8h.md#typedef-cts-callback) cbf, void * cb_data, unsigned char * options, unsigned char options_len) |
| int | **[cts_StopSelection](tec_8h.md#function-cts-stopselection)**(void ) |
| int | **[cts_WaitSelection](tec_8h.md#function-cts-waitselection)**(unsigned char * usedTechnology, unsigned char * dataBuffer, unsigned short * dataBufferLength, unsigned short timeout_msec) |
| int | **[cts_RemoveTechnologies](tec_8h.md#function-cts-removetechnologies)**(unsigned char technologies) |
| int | **[cts_AddTechnologies](tec_8h.md#function-cts-addtechnologies)**(unsigned char technologies, unsigned char * options, unsigned char options_len) |
| int | **[cts_WaitCardRemoval](tec_8h.md#function-cts-waitcardremoval)**([cts_Callback](tec_8h.md#typedef-cts-callback) cbf, void * cb_data) |
| int | **[cts_WaitCardRemoval2](tec_8h.md#function-cts-waitcardremoval2)**(unsigned short timeout_sec) |
| void | **[cts_SetNotificationCallback](tec_8h.md#function-cts-setnotificationcallback)**(int type, [cts_Callback](tec_8h.md#typedef-cts-callback) cbf, void * cb_data) |

## Defines

|                | Name           |
| -------------- | -------------- |
|  | **[CTS_NOTIFICATION_CBK_TYPE_UX_CARD_INSERTED](group___t_e_c___n_o_t_i_f_i_c_a_t_i_o_n___c_b_k___t_y_p_e.md#define-cts-notification-cbk-type-ux-card-inserted)**  |

## Detailed Description


**Author**: Thomas Buening, GSS 

Interface definitions for libtec. This file defines the API for the technology selection library. 

## Types Documentation

### typedef cts_Callback

```cpp
typedef void(* cts_Callback) (void *data);
```


**Parameters**: 

  * **data** : Data pointer provided by the application. 


Type of function that is called after technology selection has been finished (see [cts_StartSelection()](tec_8h.md#function-cts-startselection)) or removed (see [cts_WaitCardRemoval()](tec_8h.md#function-cts-waitcardremoval)). 



## Functions Documentation

### function cts_SetOptions

```cpp
int cts_SetOptions(
    const unsigned char * options,
    unsigned char options_len
)
```


**Parameters**: 

  * **options** : data pointer, TLV format, see [TEC option tags](group___t_e_c___o_p_t_i_o_n___t_a_g_s.md)
  * **options_len** : length of options 


**Return**: 

* [CTS_OK](group___t_e_c___r_e_t_u_r_n___c_o_d_e_s.md#define-cts-ok) : No error
* [CTS_API_NOT_ALLOWED](group___t_e_c___r_e_t_u_r_n___c_o_d_e_s.md#define-cts-api-not-allowed) : API not allowed because TEC-callback is still in progress.
* [CTS_PARAM](group___t_e_c___r_e_t_u_r_n___c_o_d_e_s.md#define-cts-param) : options == NULL or options_len == 0 or TLV error
* [CTS_ERROR](group___t_e_c___r_e_t_u_r_n___c_o_d_e_s.md#define-cts-error) : technology selection is currently running. 

Set additional options. This function must not be called while technology selection is running. 


### function cts_StartSelection

```cpp
int cts_StartSelection(
    unsigned char supportedTechnologies,
    unsigned short timeout_sec,
    cts_Callback cbf,
    void * cb_data,
    unsigned char * options,
    unsigned char options_len
)
```


**Parameters**: 

  * **supportedTechnologies** : supported technologies: combination of [TEC technology code](group___t_e_c___t_e_c_h_n_o_l_o_g_i_e_s.md), any additional bits are reserved for future use and are currently ignored. Supplying none of [TEC technology code](group___t_e_c___t_e_c_h_n_o_l_o_g_i_e_s.md) is allowed. In this case [cts_WaitSelection()](tec_8h.md#function-cts-waitselection) will never return [CTS_OK](group___t_e_c___r_e_t_u_r_n___c_o_d_e_s.md#define-cts-ok) or [CTS_NO_CHIP](group___t_e_c___r_e_t_u_r_n___c_o_d_e_s.md#define-cts-no-chip) of course. 
  * **timeout_sec** : main timeout in seconds to wait for card insertion/swipe/tap, min=0 (makes no sense), max=65535s, infinite timeout not possible; if this timeout expires while a timeout defined in options[6..7] or options[8..9] is running, latter timeouts have higher priority, they are not aborted. 
  * **cbf** : callback function that is called when technology selection has been finished, that means a (positive or negative) result != [CTS_IN_PROGRESS](group___t_e_c___r_e_t_u_r_n___c_o_d_e_s.md#define-cts-in-progress) can be obtained with [cts_WaitSelection()](tec_8h.md#function-cts-waitselection), may be NULL. 

 The following APIs are not allowed to be called while the callback function is still in progress: 


* [cts_SetTraceCallback()](tec__common_8h.md#function-cts-settracecallback)
* [cts_SetOptions()](tec_8h.md#function-cts-setoptions)
* [cts_StartSelection()](tec_8h.md#function-cts-startselection)
* [cts_RemoveTechnologies()](tec_8h.md#function-cts-removetechnologies)
* [cts_WaitCardRemoval()](tec_8h.md#function-cts-waitcardremoval)
* [cts_WaitCardRemoval2()](tec_8h.md#function-cts-waitcardremoval2)
* [cts_StopSelection()](tec_8h.md#function-cts-stopselection)
  * **cb_data** : data pointer that is passed on to the callback function, may be NULL. 
  * **options** : data pointer:


* **options[0..1]**: see [TEC start options](group___t_e_c___s_t_a_r_t___o_p_t_i_o_n_s.md)
* **options[2..3]**: reserved.
* **options[4]**: _CT ICC options_

 Passed as `options` to [EMV_CT_SmartDetect()](group___f_u_n_c___i_c_c.md#function-emv-ct-smartdetect) and [EMV_CT_SmartReset()](group___f_u_n_c___i_c_c.md#function-emv-ct-smartreset)
* **options[5]**: _CTLS ICC options_

 Passed as `options` to [EMV_CTLS_SmartReset()](group___f_u_n_c___i_c_c.md#function-emv-ctls-smartreset)
* **options[6..7]**: _MSR after CTLS timeout_

 2-byte binary parameter in big-endian format. min = 0x0000, max = 0xFFFF = 65535ms. 

 Time in milliseconds to wait for MSR-Data after CTLS has been detected. 

 "0x0000" means "do not wait for MSR after CTLS detection". 

 If [CTS_MSR_AFTER_CTLS_FAIL](group___t_e_c___s_t_a_r_t___o_p_t_i_o_n_s.md#define-cts-msr-after-ctls-fail) set: wait for MSR after CTLS transaction only if that failed. 
* **options[8..9]**: _UX30x only: MSR timeout after card insertion_

 2-byte binary parameter in big-endian format. min = 0x0000, max = 0xFFFF = 65535ms.

 For hints about UX hybrid reader handling see [Special behavior on hybrid readers (UX30x)] .

 Two different meanings depending if [CTS_CHIP](group___t_e_c___t_e_c_h_n_o_l_o_g_i_e_s.md#define-cts-chip) is set in [TEC technology code](group___t_e_c___t_e_c_h_n_o_l_o_g_i_e_s.md) :

    * [CTS_CHIP](group___t_e_c___t_e_c_h_n_o_l_o_g_i_e_s.md#define-cts-chip) is set.

 Time in milliseconds to wait for MSR-Data after a card without chip or with broken chip was inserted.

 "0x0000" means "do not wait for MSR-Data after card insertion and report [CTS_NO_CHIP](group___t_e_c___r_e_t_u_r_n___c_o_d_e_s.md#define-cts-no-chip) immediately".
    * [CTS_CHIP](group___t_e_c___t_e_c_h_n_o_l_o_g_i_e_s.md#define-cts-chip) is disabled.

 Time window in milliseconds for reading MSR-Data after card was inserted.

 "0x0000" means wait for MSR-Data after card insertion until technology selection finishes.

 If MSR-Data is not read during this time window:
        * [MSR_Deactivate()](msr_8h.md#function-msr-deactivate) shall be called,
        * technology selection shall be terminated and
        * [cts_WaitSelection()](tec_8h.md#function-cts-waitselection) shall return the value [CTS_UX_MSRDATA_NOT_AVAILABLE_TIMEOUT](group___t_e_c___r_e_t_u_r_n___c_o_d_e_s.md#define-cts-ux-msrdata-not-available-timeout)
* **options[10..11]**: _CTLS timeout after VAS_

 Only relevant if [CTS_VAS_ENABLE](group___t_e_c___s_t_a_r_t___o_p_t_i_o_n_s.md#define-cts-vas-enable) and [CTS_EMV_CTLS_TIMEOUT_AFTER_VAS](group___t_e_c___s_t_a_r_t___o_p_t_i_o_n_s.md#define-cts-emv-ctls-timeout-after-vas) are set.

 Permissible time window in milliseconds to perform an EMV contactless payment after either VAS_DO_PAY or VAS_DO_PAY_DECRYPT_REQ has been detected.

 2-byte binary parameter in big-endian format, min = 0x0000 = default value, max = 0xFFFF = 65535ms

 "0x0000" means "wait for a contactless payment until the main timeout 'timeout_sec' expires".

 If value is non-zero and a contactless-payment-medium is not detected during this time window:
    * technology selection shall be terminated and
    * [cts_WaitSelection()](tec_8h.md#function-cts-waitselection) shall return the value [CTS_CTLS_EMV_NO_CARD](group___t_e_c___r_e_t_u_r_n___c_o_d_e_s.md#define-cts-ctls-emv-no-card).
* **options[12..15]**: _NFC technologies_

 Passed to [NFC_PT_PollingFull()](titusstubs_8cpp.md#function-nfc-pt-pollingfull) parameter [pollReq.tech_bitmap](struct__poll_req.md#variable-tech-bitmap), 4 byte binary, big-endian, only relevant if [CTS_NFC_ENABLE](group___t_e_c___s_t_a_r_t___o_p_t_i_o_n_s.md#define-cts-nfc-enable) is set, may be NULL (default = {0}).
  * **options_len** : length of options. 


**Return**: 

* [CTS_OK](group___t_e_c___r_e_t_u_r_n___c_o_d_e_s.md#define-cts-ok) : Success.
* [CTS_IN_PROGRESS](group___t_e_c___r_e_t_u_r_n___c_o_d_e_s.md#define-cts-in-progress) : Monitoring is already active. Call [cts_WaitSelection()](tec_8h.md#function-cts-waitselection) until it returns != [CTS_IN_PROGRESS](group___t_e_c___r_e_t_u_r_n___c_o_d_e_s.md#define-cts-in-progress) first.
* [CTS_API_NOT_ALLOWED](group___t_e_c___r_e_t_u_r_n___c_o_d_e_s.md#define-cts-api-not-allowed) : API not allowed because TEC-callback is still in progress.
* [CTS_PARAM](group___t_e_c___r_e_t_u_r_n___c_o_d_e_s.md#define-cts-param) : both [CTS_NFC_ENABLE](group___t_e_c___s_t_a_r_t___o_p_t_i_o_n_s.md#define-cts-nfc-enable) and [CTS_VAS_ENABLE](group___t_e_c___s_t_a_r_t___o_p_t_i_o_n_s.md#define-cts-vas-enable) are set.
* [CTS_ERR_LOAD](group___t_e_c___r_e_t_u_r_n___c_o_d_e_s.md#define-cts-err-load) : [CTS_NFC_ENABLE](group___t_e_c___s_t_a_r_t___o_p_t_i_o_n_s.md#define-cts-nfc-enable) or [CTS_VAS_ENABLE](group___t_e_c___s_t_a_r_t___o_p_t_i_o_n_s.md#define-cts-vas-enable) are set but NFC client library could not be loaded.
* [CTS_ERROR](group___t_e_c___r_e_t_u_r_n___c_o_d_e_s.md#define-cts-error) : Failure. 

This function starts an asynchronous card reader monitoring. The monitoring ends if

* magstripe card is swiped or inserted
* or chip card is inserted
* or contactless card is tapped
* or the timeout occurs
* or [cts_StopSelection()](tec_8h.md#function-cts-stopselection) is called
* or error occurred.


### function cts_StopSelection

```cpp
int cts_StopSelection(
    void 
)
```


**Return**: 

* [CTS_OK](group___t_e_c___r_e_t_u_r_n___c_o_d_e_s.md#define-cts-ok) : Stopping technology selection is successfully requested
* [CTS_NOT_STARTED](group___t_e_c___r_e_t_u_r_n___c_o_d_e_s.md#define-cts-not-started) : Technology selection is not running
* [CTS_API_NOT_ALLOWED](group___t_e_c___r_e_t_u_r_n___c_o_d_e_s.md#define-cts-api-not-allowed) : API not allowed because TEC-callback is still in progress. 

This function stops a technology selection started via [cts_StartSelection()](tec_8h.md#function-cts-startselection). It will be called by application if waiting for a card is canceled by user or ECR break. Keep in mind that the technology selection may not be stopped immediately. Call [cts_WaitSelection()](tec_8h.md#function-cts-waitselection) to wait for termination of technology selection. After [cts_WaitSelection()](tec_8h.md#function-cts-waitselection) returns != [CTS_IN_PROGRESS](group___t_e_c___r_e_t_u_r_n___c_o_d_e_s.md#define-cts-in-progress), it is safe to call [cts_StartSelection()](tec_8h.md#function-cts-startselection) again. 


### function cts_WaitSelection

```cpp
int cts_WaitSelection(
    unsigned char * usedTechnology,
    unsigned char * dataBuffer,
    unsigned short * dataBufferLength,
    unsigned short timeout_msec
)
```


**Parameters**: 

  * **usedTechnology** : technology that has been selected, only set if [CTS_OK](group___t_e_c___r_e_t_u_r_n___c_o_d_e_s.md#define-cts-ok) is returned. See [TEC technology code](group___t_e_c___t_e_c_h_n_o_l_o_g_i_e_s.md) . If [CTS_DATA_TLV](tec__common_8h.md#define-cts-data-tlv) is set dataBuffer is in TLV format (this is the case if NFC or VAS was detected). In certain circumstances ('MSR after CTLS timeout' is set; UX MSR enhancements not enabled) it is possible that usedTechnology contains more than one technology at once, see documentation. 
  * **dataBuffer** : reference to buffer for output data, only filled if [CTS_OK](group___t_e_c___r_e_t_u_r_n___c_o_d_e_s.md#define-cts-ok) is returned. 

 Recommended allocation size: 11264 bytes if NFC/VAS is used, else 256 bytes 

 a) [CTS_DATA_TLV](tec__common_8h.md#define-cts-data-tlv) is set in usedTechnology: 

 contains tags, see [TEC result data tags](group___t_e_c___d_a_t_a___t_a_g_s.md). 

 b) [CTS_DATA_TLV](tec__common_8h.md#define-cts-data-tlv) is not set in usedTechnology: 

 If *usedTechnology & [CTS_CHIP](group___t_e_c___t_e_c_h_n_o_l_o_g_i_e_s.md#define-cts-chip) : contains ATR. 

 If *usedTechnology & [CTS_CTLS](group___t_e_c___t_e_c_h_n_o_l_o_g_i_e_s.md#define-cts-ctls) and [CTS_PURE_CARD_DETECTION](group___t_e_c___s_t_a_r_t___o_p_t_i_o_n_s.md#define-cts-pure-card-detection) was set as option to [cts_StartSelection()](tec_8h.md#function-cts-startselection) : contains card info delivered by [EMV_CTLS_SmartReset()](group___f_u_n_c___i_c_c.md#function-emv-ctls-smartreset). 

 If *usedTechnology & [CTS_CTLS](group___t_e_c___t_e_c_h_n_o_l_o_g_i_e_s.md#define-cts-ctls) and [CTS_PURE_CARD_DETECTION](group___t_e_c___s_t_a_r_t___o_p_t_i_o_n_s.md#define-cts-pure-card-detection) was not set : contains return value of [EMV_CTLS_ContinueOffline()](group___f_u_n_c___f_l_o_w.md#function-emv-ctls-continueoffline). 
  * **dataBufferLength** : buffer size for output data, return data length; if the size of dataBuffer is too small to hold the whole output data, no special error code is returned, the return code is as usual, but the output buffer will be empty, dataBufferLength is set to 0. If return value is != [CTS_OK](group___t_e_c___r_e_t_u_r_n___c_o_d_e_s.md#define-cts-ok), dataBufferLength is set to 0 to indicate that there is no data written in dataBuffer. 
  * **timeout_msec** : timeout in milliseconds to wait for technology selection to finish, min=0, max=65535ms. If technology selection is not finished after this timeout has expired, [CTS_IN_PROGRESS](group___t_e_c___r_e_t_u_r_n___c_o_d_e_s.md#define-cts-in-progress) is returned. In this case [cts_WaitSelection()](tec_8h.md#function-cts-waitselection) has to be called again. If a callback function is supplied to [cts_StartSelection()](tec_8h.md#function-cts-startselection), setting a timeout != 0 is not allowed. 


**Return**: 

* [CTS_OK](group___t_e_c___r_e_t_u_r_n___c_o_d_e_s.md#define-cts-ok) : Successful completion, card was detected. Not possible if [CTS_NO_POWERON](group___t_e_c___s_t_a_r_t___o_p_t_i_o_n_s.md#define-cts-no-poweron) is set.
* [CTS_NO_CHIP](group___t_e_c___r_e_t_u_r_n___c_o_d_e_s.md#define-cts-no-chip) : Card without chip or with broken chip is inserted or card is inserted and [CTS_NO_POWERON](group___t_e_c___s_t_a_r_t___o_p_t_i_o_n_s.md#define-cts-no-poweron) is set.
* [CTS_IN_PROGRESS](group___t_e_c___r_e_t_u_r_n___c_o_d_e_s.md#define-cts-in-progress) : Technology selection not completed. Another call of [cts_StartSelection()](tec_8h.md#function-cts-startselection) will return [CTS_IN_PROGRESS](group___t_e_c___r_e_t_u_r_n___c_o_d_e_s.md#define-cts-in-progress) in this case.
* [CTS_TIMEOUT](group___t_e_c___r_e_t_u_r_n___c_o_d_e_s.md#define-cts-timeout) : Timeout occurred, no card detected.
* [CTS_PARAM](group___t_e_c___r_e_t_u_r_n___c_o_d_e_s.md#define-cts-param) : - usedTechnology is NULL pointer; - callback function supplied to [cts_StartSelection()](tec_8h.md#function-cts-startselection) and timeout != 0.
* [CTS_NOT_STARTED](group___t_e_c___r_e_t_u_r_n___c_o_d_e_s.md#define-cts-not-started) : [cts_StartSelection()](tec_8h.md#function-cts-startselection) was not called previously.
* [CTS_STOPPED](group___t_e_c___r_e_t_u_r_n___c_o_d_e_s.md#define-cts-stopped) : Technology selection was aborted by [cts_StopSelection()](tec_8h.md#function-cts-stopselection).
* [CTS_CTLS_INIT](group___t_e_c___r_e_t_u_r_n___c_o_d_e_s.md#define-cts-ctls-init) : Contactless transaction was not set up correctly.
* [CTS_ERROR](group___t_e_c___r_e_t_u_r_n___c_o_d_e_s.md#define-cts-error) : Internal error occurred.
* [CTS_CTLS_NOT_ALLOWED](group___t_e_c___r_e_t_u_r_n___c_o_d_e_s.md#define-cts-ctls-not-allowed) : VFI-Reader has not yet finished previous transaction, e.g. still waiting for ContinueOnline.
* [CTS_CTLS_EMV_NO_CARD](group___t_e_c___r_e_t_u_r_n___c_o_d_e_s.md#define-cts-ctls-emv-no-card) : ADK-EMV has detected no medium to perform a contactless payment.
* [CTS_UX_MSRDATA_NOT_AVAILABLE_TIMEOUT](group___t_e_c___r_e_t_u_r_n___c_o_d_e_s.md#define-cts-ux-msrdata-not-available-timeout) : Technology selection has been terminated because MSR-Data was not read during the time window set in the input parameter options[8..9] of the function [cts_StartSelection()](tec_8h.md#function-cts-startselection). This return code is relevant and possible for UX-Devices only. 

This function waits for technology selection to finish. 


### function cts_RemoveTechnologies

```cpp
int cts_RemoveTechnologies(
    unsigned char technologies
)
```


**Parameters**: 

  * **technologies** : technologies to remove from running technology selection: combination of [TEC technology code](group___t_e_c___t_e_c_h_n_o_l_o_g_i_e_s.md), any additional bits are reserved for future use and are currently ignored. Supplying none of [TEC technology code](group___t_e_c___t_e_c_h_n_o_l_o_g_i_e_s.md) is allowed. In this case this function does actually nothing. 


**Return**: 

* [CTS_OK](group___t_e_c___r_e_t_u_r_n___c_o_d_e_s.md#define-cts-ok) : Removing technologies is successfully requested.
* [CTS_NOT_STARTED](group___t_e_c___r_e_t_u_r_n___c_o_d_e_s.md#define-cts-not-started) : Technology selection is not running.
* [CTS_API_NOT_ALLOWED](group___t_e_c___r_e_t_u_r_n___c_o_d_e_s.md#define-cts-api-not-allowed) : API not allowed because TEC-callback is still in progress. 

This function removes technologies from currently running technology selection. This can be useful to remove contact and magstripe technologies after the application was informed by EMV-ADK that a ctls retap scenario is running. 


### function cts_AddTechnologies

```cpp
int cts_AddTechnologies(
    unsigned char technologies,
    unsigned char * options,
    unsigned char options_len
)
```


**Parameters**: 

  * **technologies** : technologies to add to running technology selection: combination of [TEC technology code](group___t_e_c___t_e_c_h_n_o_l_o_g_i_e_s.md), any additional bits are reserved for future use and are currently ignored. Supplying none of [TEC technology code](group___t_e_c___t_e_c_h_n_o_l_o_g_i_e_s.md) is allowed. In this case this function does actually nothing. 
  * **options** : data pointer for future use 
  * **options_len** : length of options. 


**Return**: 

* [CTS_OK](group___t_e_c___r_e_t_u_r_n___c_o_d_e_s.md#define-cts-ok) : Adding technologies is successfully requested.
* [CTS_NOT_STARTED](group___t_e_c___r_e_t_u_r_n___c_o_d_e_s.md#define-cts-not-started) : Technology selection is not running.
* [CTS_API_NOT_ALLOWED](group___t_e_c___r_e_t_u_r_n___c_o_d_e_s.md#define-cts-api-not-allowed) : API not allowed because TEC-callback is still in progress.
* [CTS_PARAM](group___t_e_c___r_e_t_u_r_n___c_o_d_e_s.md#define-cts-param) : [CTS_CTLS](group___t_e_c___t_e_c_h_n_o_l_o_g_i_e_s.md#define-cts-ctls) requested but not supported option is active 

This function adds technologies to currently running technology selection. 

This can be useful to adapt to an interface with separated "enable" functions for each technology. 

Restrictions: 

* Adding [CTS_CTLS](group___t_e_c___t_e_c_h_n_o_l_o_g_i_e_s.md#define-cts-ctls) is not allowed in case one of these options set: [CTS_PURE_CARD_DETECTION](group___t_e_c___s_t_a_r_t___o_p_t_i_o_n_s.md#define-cts-pure-card-detection), [CTS_NFC_ENABLE](group___t_e_c___s_t_a_r_t___o_p_t_i_o_n_s.md#define-cts-nfc-enable), [CTS_VAS_ENABLE](group___t_e_c___s_t_a_r_t___o_p_t_i_o_n_s.md#define-cts-vas-enable)
* No support for Contact synchronous cards ([CTS_OPTION_TAG_SYNC_CARD_TYPE](group___t_e_c___o_p_t_i_o_n___t_a_g_s.md#define-cts-option-tag-sync-card-type))


### function cts_WaitCardRemoval

```cpp
int cts_WaitCardRemoval(
    cts_Callback cbf,
    void * cb_data
)
```


**Parameters**: 

  * **cbf** : callback function that is called when a card has been removed, must not be NULL. 
  * **cb_data** : data pointer that is passed on to the callback function. 


**Return**: 

* [CTS_OK](group___t_e_c___r_e_t_u_r_n___c_o_d_e_s.md#define-cts-ok) : Success.
* [CTS_IN_PROGRESS](group___t_e_c___r_e_t_u_r_n___c_o_d_e_s.md#define-cts-in-progress) : Waiting for card removal is already active.
* [CTS_API_NOT_ALLOWED](group___t_e_c___r_e_t_u_r_n___c_o_d_e_s.md#define-cts-api-not-allowed) : API not allowed because TEC-callback is still in progress.
* [CTS_PARAM](group___t_e_c___r_e_t_u_r_n___c_o_d_e_s.md#define-cts-param) : Missing parameter.
* [CTS_ERROR](group___t_e_c___r_e_t_u_r_n___c_o_d_e_s.md#define-cts-error) : Internal error. 

This function registers callback for card removal. The function returns immediately with one of the return values stated below. The callback is invoked as soon as the inserted card is removed or immediately if no card is inserted. Keep in mind that the callback is only invoked once. If you want to be informed about the next card removal as well, call this function again, even from within the callback function. Attention: Do not call this function as long as other TEC/EMV functions are running and do not call other TEC/EMV functions until the callback has been invoked! 


### function cts_WaitCardRemoval2

```cpp
int cts_WaitCardRemoval2(
    unsigned short timeout_sec
)
```


**Parameters**: 

  * **timeout_sec** : timeout in seconds to wait for card removal. 


**Return**: 

* [CTS_OK](group___t_e_c___r_e_t_u_r_n___c_o_d_e_s.md#define-cts-ok) : Card has been removed.
* [CTS_TIMEOUT](group___t_e_c___r_e_t_u_r_n___c_o_d_e_s.md#define-cts-timeout) : Timeout occurred.
* [CTS_API_NOT_ALLOWED](group___t_e_c___r_e_t_u_r_n___c_o_d_e_s.md#define-cts-api-not-allowed) : API not allowed because TEC-callback is still in progress.
* [CTS_ERROR](group___t_e_c___r_e_t_u_r_n___c_o_d_e_s.md#define-cts-error) : Internal error. 

This function waits for card removal. The function does not return until card has been removed or timeout has occurred. Attention: Do not call this function as long as other TEC/EMV functions are running and do not call other TEC/EMV functions until the function has returned! 


### function cts_SetNotificationCallback

```cpp
void cts_SetNotificationCallback(
    int type,
    cts_Callback cbf,
    void * cb_data
)
```


**Parameters**: 

  * **type** : one of [Notification callback types](group___t_e_c___n_o_t_i_f_i_c_a_t_i_o_n___c_b_k___t_y_p_e.md)
  * **cbf** : Callback function, may be NULL. 
  * **cb_data** : Data pointer that is passed on to the callback function cbf, may be NULL. 


Set notification callback function




## Macros Documentation

### define CTS_NOTIFICATION_CBK_TYPE_UX_CARD_INSERTED

```cpp
#define CTS_NOTIFICATION_CBK_TYPE_UX_CARD_INSERTED 0x01
```


Ux terminals: A card was inserted. Is invoked in case [CTS_CHIP](group___t_e_c___t_e_c_h_n_o_l_o_g_i_e_s.md#define-cts-chip) is deactivated. 


## Source code

```cpp

#ifndef __TEC_LIB_INTERFACE__
#define __TEC_LIB_INTERFACE__

#ifdef __cplusplus
extern "C" {
#endif

#include "tec/tec_common.h"

#define CTS_NOTIFICATION_CBK_TYPE_UX_CARD_INSERTED  0x01 
typedef void (* cts_Callback) (void *data);

int cts_SetOptions(const unsigned char *options, unsigned char options_len);

int cts_StartSelection(unsigned char supportedTechnologies, unsigned short timeout_sec,
                                    cts_Callback cbf, void *cb_data,
                                    unsigned char *options, unsigned char options_len);

int cts_StopSelection (void);

int cts_WaitSelection(unsigned char *usedTechnology, unsigned char *dataBuffer,
                                   unsigned short *dataBufferLength, unsigned short timeout_msec);

int cts_RemoveTechnologies(unsigned char technologies);

int cts_AddTechnologies(unsigned char technologies, unsigned char *options, unsigned char options_len);

int cts_WaitCardRemoval(cts_Callback cbf, void *cb_data);

int cts_WaitCardRemoval2(unsigned short timeout_sec);

void cts_SetNotificationCallback(int type, cts_Callback cbf, void *cb_data);


#ifdef __cplusplus
}
#endif

#endif
```


-------------------------------

Updated on 2025-06-17 at 11:52:26 +0100
