---
title: Card reader interface

---

# Card reader interface



## Classes

|                | Name           |
| -------------- | -------------- |
| struct | **[vfisdi::SDIClient::TECOptions](structvfisdi_1_1_s_d_i_client_1_1_t_e_c_options.md)**  |
| struct | **[vfisdi::SDIClient::PluginResult](structvfisdi_1_1_s_d_i_client_1_1_plugin_result.md)**  |

## Functions

|                | Name           |
| -------------- | -------------- |
| int | **[crdDetect](group__sdicrd.md#function-crddetect)**(unsigned char tec, const TECOptions & options, bool allow_cancel, unsigned timeout_ms, unsigned char & tec_out, EMVTxn & emv_out, const bytevector & appid =bytevector(), unsigned char syncCard =0, unsigned char manual_mode =0, const std::string & format ="", bytevector * plugin_result =0) |
| int | **[crdDetect](group__sdicrd.md#function-crddetect)**(unsigned char tec, const TECOptions & options, bool allow_cancel, unsigned timeout_ms, unsigned char & tec_out, EMVTxn & emv_out, std::vector< PluginResult > & plugin_result, const bytevector & appid =bytevector(), unsigned char syncCard =0, unsigned char manual_mode =0, const std::string & format ="", int removal_timeout_ms =-1) |
| int | **[crdWaitForRemoval](group__sdicrd.md#function-crdwaitforremoval)**(unsigned short timeout =0) |
| int | **[crdStartDetect](group__sdicrd.md#function-crdstartdetect)**(unsigned char tec, const TECOptions & options, unsigned timeout, bool use_cb =false, const bytevector & appid =bytevector(), unsigned char syncCard =0) |
| int | **[crdStartDetect](group__sdicrd.md#function-crdstartdetect)**(unsigned char tec, const TECOptions & options, unsigned timeout, bool use_cb, const bytevector & appid, unsigned char syncCard, int removal_timeout_ms =-1) |
| int | **[crdPollDetect](group__sdicrd.md#function-crdpolldetect)**(unsigned char & tec_out, EMVTxn & emv_out, bytevector * plugin_result =0) |
| int | **[crdStopDetect](group__sdicrd.md#function-crdstopdetect)**() |
| int | **[crdAddTechnology](group__sdicrd.md#function-crdaddtechnology)**(unsigned char tec, const TECOptions & options, const bytevector & appid =bytevector(), unsigned char syncCard =0) |
| int | **[crdRemoveTechnology](group__sdicrd.md#function-crdremovetechnology)**(unsigned char tec) |
| int | **[crdProvideCallbackResponse](group__sdicrd.md#function-crdprovidecallbackresponse)**(EMVTxn & in) |


## Functions Documentation

### function crdDetect

```
int crdDetect(
    unsigned char tec,
    const TECOptions & options,
    bool allow_cancel,
    unsigned timeout_ms,
    unsigned char & tec_out,
    EMVTxn & emv_out,
    const bytevector & appid =bytevector(),
    unsigned char syncCard =0,
    unsigned char manual_mode =0,
    const std::string & format ="",
    bytevector * plugin_result =0
)
```


**Parameters**: 

  * **tec** bit mask of supported card technology (DFA108):

* 1: CT smart card
* 2: magnetic stripe
* 4: CTLS smart card
* 8: manual card entry 
  * **options** card technology selection options (DFA12A) 
  * **allow_cancel** if true enable cancel button (DFA109) 
  * **timeout_ms** timeout in milliseconds, range 0..1275000ms, granularity varies from 500ms to 5s. 
  * **tec_out** selected card technology (DFA108) 
  * **emv_out** emv data 
  * **appid** optional application ID (DFA133->DFDB40) 
  * **syncCard** synchronous card type, 0 for undefined (DFA133->DFDB41) 
  * **manual_mode** manual card entry mode (only considered if enabled in _tec_) (DFA017):

* 0: enter PAN, expiration date and CVV
* 1: enter PAN and expiration date
* 2: enter only PAN 
  * **format** optional input format string for CVV 
  * **plugin_result** plugin result of the card detect trigger, if not NULL (DFA101) 


**Return**: SDI error code ([Result](namespacevfisdi.md#enum-result)) 

Detect magstripe read, smart card insertion, contactless card or manual card data entry (23-01) 


### function crdDetect

```
int crdDetect(
    unsigned char tec,
    const TECOptions & options,
    bool allow_cancel,
    unsigned timeout_ms,
    unsigned char & tec_out,
    EMVTxn & emv_out,
    std::vector< PluginResult > & plugin_result,
    const bytevector & appid =bytevector(),
    unsigned char syncCard =0,
    unsigned char manual_mode =0,
    const std::string & format ="",
    int removal_timeout_ms =-1
)
```


**Parameters**: 

  * **tec** bit mask of supported card technology (DFA108):

* 1: CT smart card
* 2: magnetic stripe
* 4: CTLS smart card
* 8: manual card entry 
  * **options** card technology selection options (DFA12A) 
  * **allow_cancel** if true enable cancel button (DFA109) 
  * **timeout_ms** timeout in milliseconds, range 0..1275000ms, granularity varies from 500ms to 5s. 
  * **tec_out** selected card technology (DFA108) 
  * **emv_out** emv data 
  * **plugin_result** array containing plugin results (DFA101/FFA107) 
  * **removal_timeout_ms** optional card removal timeout in milliseconds for reading MSR data. Set to -1 if unused. (DFA153) 
  * **appid** optional application ID (DFA133->DFDB40) 
  * **syncCard** synchronous card type, 0 for undefined (DFA133->DFDB41) 
  * **manual_mode** manual card entry mode (only considered if enabled in _tec_) (DFA017):

* 0: enter PAN, expiration date and CVV
* 1: enter PAN and expiration date
* 2: enter only PAN 
  * **format** optional input format string for CVV 


**Return**: SDI error code ([Result](namespacevfisdi.md#enum-result)) 

Detect magstripe read, smart card insertion, contactless card or manual card data entry (23-01) 


### function crdWaitForRemoval

```
int crdWaitForRemoval(
    unsigned short timeout =0
)
```


**Parameters**: 

  * **timeout** timeout in seconds 


**Return**: SDI error code ([Result](namespacevfisdi.md#enum-result)) 

wait until the card is removed (only for contact) (23-02) 


### function crdStartDetect

```
int crdStartDetect(
    unsigned char tec,
    const TECOptions & options,
    unsigned timeout,
    bool use_cb =false,
    const bytevector & appid =bytevector(),
    unsigned char syncCard =0
)
```


**Parameters**: 

  * **tec** bit mask of supported card technology (DFA108):

* 1: CT smart card
* 2: magnetic stripe
* 4: CTLS smart card
* 8: manual card entry 
  * **options** card technology selection options (DFA12A) 
  * **timeout** timeout in seconds 
  * **appid** optional application ID (DFA133) 
  * **syncCard** synchronous card type, 0 for undefined (DFA133) 
  * **use_cb** if true trigger card callback 


**Return**: SDI error code ([Result](namespacevfisdi.md#enum-result)) 

start card detection (23-03) 


### function crdStartDetect

```
int crdStartDetect(
    unsigned char tec,
    const TECOptions & options,
    unsigned timeout,
    bool use_cb,
    const bytevector & appid,
    unsigned char syncCard,
    int removal_timeout_ms =-1
)
```


**Parameters**: 

  * **tec** bit mask of supported card technology (DFA108):

* 1: CT smart card
* 2: magnetic stripe
* 4: CTLS smart card
* 8: manual card entry 
  * **options** card technology selection options (DFA12A) 
  * **timeout** timeout in seconds 
  * **appid** optional application ID (DFA133) 
  * **syncCard** synchronous card type, 0 for undefined (DFA133) 
  * **use_cb** if true trigger card callback 
  * **removal_timeout_ms** optional card removal timeout in milliseconds for reading MSR data. Set to -1 if unused. (DFA153) 


**Return**: SDI error code ([Result](namespacevfisdi.md#enum-result)) 

start card detection (23-03) 


### function crdPollDetect

```
int crdPollDetect(
    unsigned char & tec_out,
    EMVTxn & emv_out,
    bytevector * plugin_result =0
)
```


**Parameters**: 

  * **tec_out** selected card technology, or 0 in case no card has been found, yet (DFA108) 
  * **emv_out** emv data 
  * **plugin_result** plugin result of the card detect trigger, if not NULL (DFA101) 


**Return**: SDI error code ([Result](namespacevfisdi.md#enum-result)) 

poll for detected card (23-04) 


### function crdStopDetect

```
int crdStopDetect()
```


**Return**: SDI error code ([Result](namespacevfisdi.md#enum-result)) 

stop card detection (23-05) It may be required to call crdPollDetect to get the result in case a card was inserted between the last crdPollDetect and crdStopDetect 


### function crdAddTechnology

```
int crdAddTechnology(
    unsigned char tec,
    const TECOptions & options,
    const bytevector & appid =bytevector(),
    unsigned char syncCard =0
)
```


**Parameters**: 

  * **tec** bit mask of supported card technology (DFA108):

* 1: CT smart card
* 2: magnetic stripe
* 4: CTLS smart card
* 8: manual card entry 
  * **options** card technology selection options (DFA12A) 
  * **appid** optional application ID (DFA133) 
  * **syncCard** synchronous card type, 0 for undefined (DFA133) 


**Return**: SDI error code ([Result](namespacevfisdi.md#enum-result)) 

add technology to a running card detection started by crdStartDetect (23-06) 


### function crdRemoveTechnology

```
int crdRemoveTechnology(
    unsigned char tec
)
```


**Parameters**: 

  * **tec** bit mask of supported card technology (DFA108):

* 1: CT smart card
* 2: magnetic stripe
* 4: CTLS smart card
* 8: manual card entry 


**Return**: SDI error code ([Result](namespacevfisdi.md#enum-result)) 

remove technology to a running card detection started by crdStartDetect (23-07) 


### function crdProvideCallbackResponse

```
int crdProvideCallbackResponse(
    EMVTxn & in
)
```


**Parameters**: 

  * **in** callback response data as [EMVTxn](structvfisdi_1_1_e_m_v_txn.md) object 


**Return**: SDI error code ([Result](namespacevfisdi.md#enum-result)) 

provide callback response (23-08) 






-------------------------------

Updated on 2025-06-17 at 11:52:23 +0100