---
title: SDI and EMV callbacks

---

# SDI and EMV callbacks



## Functions

|                | Name           |
| -------------- | -------------- |
| void | **[setCallbackData](group__sdicallback.md#function-setcallbackdata)**(void * d) |
| void | **[setStatusCallback](group__sdicallback.md#function-setstatuscallback)**(void(*)(void *data, int digits, std::string &display) cb) |
| void | **[setControlCallback](group__sdicallback.md#function-setcontrolcallback)**(int(*)(void *data, TLV &t) cb) |
| void | **[setNotifyCallback](group__sdicallback.md#function-setnotifycallback)**(void(*)(void *data, TLV &t) cb) |
| void | **[setNavigatorCallback](group__sdicallback.md#function-setnavigatorcallback)**(void(*)(void *data, int status) cb) |
| void | **[setCardDetectCallback](group__sdicallback.md#function-setcarddetectcallback)**(void(*)(void *data, int retcode, unsigned char tec_out, EMVTxn &emv_out, bytevector &plugin_result) cb) |
| void | **[setEMVCallback](group__sdicallback.md#function-setemvcallback)**(void(*)(void *data, unsigned type, EMVTxn &in, EMVTxn &out) cb) |
| void | **[setAsyncCardDetectEmvCallback](group__sdicallback.md#function-setasynccarddetectemvcallback)**(void(*)(void *data, unsigned type, EMVTxn &in) cb) |
| void | **[setCardRemovalCallback](group__sdicallback.md#function-setcardremovalcallback)**(void(*)(void *data) cb) |
| void | **[setDisconnectCallback](group__sdicallback.md#function-setdisconnectcallback)**(void(*)(void *data) cb) |


## Functions Documentation

### function setCallbackData

```
void setCallbackData(
    void * d
)
```


**Parameters**: 

  * **d** callback data pointer 


set callback data passed on as data pointer to the callback functions. The data pointer is shared between all callback functions. 


### function setStatusCallback

```
void setStatusCallback(
    void(*)(void *data, int digits, std::string &display) cb
)
```


**Parameters**: 

  * **cb** pointer to callback function, NULL to disable callback 
  * **data** data pointer as set by [setCallbackData()](group__sdicallback.md#function-setcallbackdata)
  * **digits** number of digits entered so far 
  * **display** string for display 


**Note**: Important: The callback function must not invoke any method of the same [SDIClient](classvfisdi_1_1_s_d_i_client.md) object or a deadlock may occur. 

**Par**: 

The callback gets the following parameters: 

set status callback 


### function setControlCallback

```
void setControlCallback(
    int(*)(void *data, TLV &t) cb
)
```


**Parameters**: 

  * **cb** pointer to callback function, NULL to disable callback 
  * **data** data pointer as set by [setCallbackData()](group__sdicallback.md#function-setcallbackdata)
  * **t** [TLV](classvfisdi_1_1_t_l_v.md) data received from SDI server 


**Return**: 

* 1: continue (perform next step)
* 2: reenter last value (input field is cleared)
* 3: abort 

**Note**: 

  * ALT_INPUT_FORMAT_STRING and CONTINUATION_MODE can be set by updating _t_. 
  * Important: The callback function must not invoke any method of the same [SDIClient](classvfisdi_1_1_s_d_i_client.md) object or a deadlock may occur. 
  * It is safe if the callback modifies _t_. 


**Par**: 

  * 

The callback gets the following parameters: 
  * 
  * 


set control callback 


### function setNotifyCallback

```
void setNotifyCallback(
    void(*)(void *data, TLV &t) cb
)
```


**Parameters**: 

  * **cb** pointer to callback function, NULL to disable callback 
  * **data** data pointer as set by [setCallbackData()](group__sdicallback.md#function-setcallbackdata)
  * **t** [TLV](classvfisdi_1_1_t_l_v.md) data received from SDI server 


**Note**: 

  * Important: The callback function must not invoke any method of the same [SDIClient](classvfisdi_1_1_s_d_i_client.md) object or a deadlock may occur. 
  * It is safe it the callback modifies _t_, modifications are ignored. 


**Par**: 

  * 

The callback gets the following parameters: 
  * 


set notifycallback 


### function setNavigatorCallback

```
void setNavigatorCallback(
    void(*)(void *data, int status) cb
)
```


**Parameters**: 

  * **cb** pointer to callback function, NULL to disable callback 
  * **data** data pointer as set by [setCallbackData()](group__sdicallback.md#function-setcallbackdata)
  * **status** navigator status:

* 00 Digit selected
* 01 OK selected
* 02 Cancel selected
* 03 Backspace/Clear selected
* 04 Multiple touches detected
* 05 Pin digit underflow
* 06 Pin digit overflow
* 10 Selection confirmed 


**Note**: Important: The callback function must not invoke any method of the same [SDIClient](classvfisdi_1_1_s_d_i_client.md) object or a deadlock may occur. 

**Par**: 

The callback gets the following parameters: 

set navigator callback 


### function setCardDetectCallback

```
void setCardDetectCallback(
    void(*)(void *data, int retcode, unsigned char tec_out, EMVTxn &emv_out, bytevector &plugin_result) cb
)
```


**Parameters**: 

  * **cb** pointer to callback function, NULL to disable callback 
  * **data** data pointer as set by [setCallbackData()](group__sdicallback.md#function-setcallbackdata)
  * **retcode** return code that would have been returned in crdPollDetect 
  * **tec_out** selected card technology (DFA108) 
  * **emv_out** emv data 
  * **plugin_result** plugin result of the card detect trigger (DFA101) 


**Note**: Important: The callback function must not invoke any method of the same [SDIClient](classvfisdi_1_1_s_d_i_client.md) object or a deadlock may occur. 

**Par**: 

The callback gets the following parameters: 

set card detect callback 


### function setEMVCallback

```
void setEMVCallback(
    void(*)(void *data, unsigned type, EMVTxn &in, EMVTxn &out) cb
)
```


**Parameters**: 

  * **cb** pointer to callback function, NULL to disable callback 
  * **data** data pointer as set by [setCallbackData()](group__sdicallback.md#function-setcallbackdata)
  * **type** callback type (see [EMVCallbackType](namespacevfisdi.md#enum-emvcallbacktype)) 
  * **in** [TLV](classvfisdi_1_1_t_l_v.md) data received from SDI server 
  * **out** [TLV](classvfisdi_1_1_t_l_v.md) data to be sent to SDI server 


**Note**: It is safe it the callback modifies _in_, modifications are ignored. 

**Par**: 

  * 

The callback gets the following parameters: 
  * 


set EMV callback 


### function setAsyncCardDetectEmvCallback

```
void setAsyncCardDetectEmvCallback(
    void(*)(void *data, unsigned type, EMVTxn &in) cb
)
```


**Parameters**: 

  * **cb** pointer to callback function, NULL to disable callback 
  * **data** data pointer as set by [setCallbackData()](group__sdicallback.md#function-setcallbackdata)
  * **type** callback type (see [EMVCallbackType](namespacevfisdi.md#enum-emvcallbacktype)) 
  * **in** [TLV](classvfisdi_1_1_t_l_v.md) data received from SDI server 


**Note**: It is safe it the callback modifies _in_, modifications are ignored. 

**Par**: 

  * 

The callback gets the following parameters: 
  * 


set async card detect callback 


### function setCardRemovalCallback

```
void setCardRemovalCallback(
    void(*)(void *data) cb
)
```


**Parameters**: 

  * **cb** pointer to callback function, NULL to disable callback 
  * **data** data pointer as set by [setCallbackData()](group__sdicallback.md#function-setcallbackdata)


**Par**: 

The callback gets the following parameters: 

set card removal callback 


### function setDisconnectCallback

```
void setDisconnectCallback(
    void(*)(void *data) cb
)
```


**Parameters**: 

  * **data** data pointer as set by [setCallbackData()](group__sdicallback.md#function-setcallbackdata)


**Par**: 

The callback gets the following parameters: 

set callback, that gets invoked when the connection to SDI server has been closed by SDI server 






-------------------------------

Updated on 2025-06-17 at 11:52:24 +0100