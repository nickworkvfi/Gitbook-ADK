---
title: sdiclient/libsdiprotocol/sdiprotocol.h
summary: SDI protocol library interface. 

---

# sdiclient/libsdiprotocol/sdiprotocol.h

SDI protocol library interface. 

## Types

|                | Name           |
| -------------- | -------------- |
| typedef void(*)(void *context) | **[SDI_DATA_AVAILABLE_CALLBACK_TYPE](sdiprotocol_8h.md#typedef-sdi-data-available-callback-type)** <br>callback function type declaration for [SDI_SetDataAvailableCallback()]() |
| typedef void(*)(unsigned char *dataIn, unsigned short sizeIn, unsigned char *dataOut, unsigned short *sizeOut, void *context) | **[SDI_CALLBACK_TYPE](sdiprotocol_8h.md#typedef-sdi-callback-type)** <br>callback function type declaration for [SDI_SetSdiCallback()]() |
| typedef void(*)(unsigned char *dataIn, unsigned short sizeIn, void *context) | **[CARD_DETECTED_CALLBACK_TYPE](sdiprotocol_8h.md#typedef-card-detected-callback-type)** <br>callback function type declaration for [SDI_SetCardDetectedCallback()]() |
| typedef void(*)(void *context) | **[EOF_DETECTED_CALLBACK_TYPE](sdiprotocol_8h.md#typedef-eof-detected-callback-type)** <br>callback function type declaration for [SDI_SetEOFDetectedCallback()]() |

## Functions

|                | Name           |
| -------------- | -------------- |
| int | **[SDI_ProtocolInit](sdiprotocol_8h.md#function-sdi-protocolinit)**(unsigned options, const char * settings)<br>Configure the library, connection setup.  |
| int | **[SDI_Send](sdiprotocol_8h.md#function-sdi-send)**(const unsigned char * data, int dataLength)<br>Send message to SDI server.  |
| int | **[SDI_Receive](sdiprotocol_8h.md#function-sdi-receive)**(unsigned char * responseBuffer, int responseBufferSize)<br>Receive response from SDI server.  |
| int | **[SDI_SendReceive](sdiprotocol_8h.md#function-sdi-sendreceive)**(const unsigned char * data, int dataLength, unsigned char * responseBuffer, int responseBufferSize)<br>Send message to SDI server and receive the response.  |
| int | **[SDI_Disconnect](sdiprotocol_8h.md#function-sdi-disconnect)**(void )<br>Shut down the connection to SDI server.  |
| int | **[SDI_SetDataAvailableCallback](sdiprotocol_8h.md#function-sdi-setdataavailablecallback)**([SDI_DATA_AVAILABLE_CALLBACK_TYPE](sdiprotocol_8h.md#typedef-sdi-data-available-callback-type) cb, void * context)<br>Set a callback to be called if a SDI server response is pending.  |
| int | **[SDI_SetSdiCallback](sdiprotocol_8h.md#function-sdi-setsdicallback)**([SDI_CALLBACK_TYPE](sdiprotocol_8h.md#typedef-sdi-callback-type) cb, void * context)<br>Set a callback function to be called when SDI server sends a callback message.  |
| int | **[SDI_SetCardDetectedCallback](sdiprotocol_8h.md#function-sdi-setcarddetectedcallback)**([CARD_DETECTED_CALLBACK_TYPE](sdiprotocol_8h.md#typedef-card-detected-callback-type) cb, void * context)<br>Set a callback function to be called when SDI server sends the Card Detected callback message.  |
| void | **[SDI_SendSysAbort](sdiprotocol_8h.md#function-sdi-sendsysabort)**(void )<br>Send SYS ABORT command '20 02'.  |
| void | **[SDI_SendExternalButton](sdiprotocol_8h.md#function-sdi-sendexternalbutton)**(void )<br>Send External Button command '20 20' always with P2 = 1 (suppress response)  |
| int | **[SDI_SetEOFDetectedCallback](sdiprotocol_8h.md#function-sdi-seteofdetectedcallback)**([EOF_DETECTED_CALLBACK_TYPE](sdiprotocol_8h.md#typedef-eof-detected-callback-type) cb, void * context)<br>Set a callback function to be called when the connection to SDI server is closed by EOF.  |

## Defines

|                | Name           |
| -------------- | -------------- |
|  | **[SDI_PROTOCOL_ERR_IO](group___s_d_i___p_r_o_t_o_c_o_l___e_r_r_o_r___c_o_d_e_s.md#define-sdi-protocol-err-io)** <br>read, write or protocol error  |
|  | **[SDI_PROTOCOL_ERR_CONCURRENT_USE](group___s_d_i___p_r_o_t_o_c_o_l___e_r_r_o_r___c_o_d_e_s.md#define-sdi-protocol-err-concurrent-use)** <br>SDI protocol library currently used by another thread, maybe try later.  |
|  | **[SDI_PROTOCOL_ERR_CONNECT](group___s_d_i___p_r_o_t_o_c_o_l___e_r_r_o_r___c_o_d_e_s.md#define-sdi-protocol-err-connect)** <br>connection establishment to SDI server failed  |
|  | **[SDI_PROTOCOL_ERR_OVERFLOW](group___s_d_i___p_r_o_t_o_c_o_l___e_r_r_o_r___c_o_d_e_s.md#define-sdi-protocol-err-overflow)** <br>response buffer too small, response has been dropped  |
|  | **[SDI_PROTOCOL_ERR_PARAM](group___s_d_i___p_r_o_t_o_c_o_l___e_r_r_o_r___c_o_d_e_s.md#define-sdi-protocol-err-param)** <br>wrong formal parameter like NULL pointer  |
|  | **[SDI_PROTOCOL_ERR_OTHER](group___s_d_i___p_r_o_t_o_c_o_l___e_r_r_o_r___c_o_d_e_s.md#define-sdi-protocol-err-other)** <br>any other problem like thread creation, memory allocation, etc.  |
|  | **[SDI_PROTOCOL_ERR_NO_RECEIVE](group___s_d_i___p_r_o_t_o_c_o_l___e_r_r_o_r___c_o_d_e_s.md#define-sdi-protocol-err-no-receive)** <br>command is suppressed, therefore, no [SDI_Receive()]() must be called afterwards  |
|  | **[SDI_PROTOCOL_INIT_OPT_TRACE_EMV_CBK](group___s_d_i___p_r_o_t_o_c_o_l___i_n_i_t___o_p_t_i_o_n_s.md#define-sdi-protocol-init-opt-trace-emv-cbk)** <br>trace using the EMV callback  |
|  | **[SDI_PROTOCOL_INIT_OPT_TRACE_SYSLOG](group___s_d_i___p_r_o_t_o_c_o_l___i_n_i_t___o_p_t_i_o_n_s.md#define-sdi-protocol-init-opt-trace-syslog)** <br>use syslog instead of EMV callback for trace  |
|  | **[SDI_PROTOCOL_INIT_OPT_TRACE_ADK_LOG](group___s_d_i___p_r_o_t_o_c_o_l___i_n_i_t___o_p_t_i_o_n_s.md#define-sdi-protocol-init-opt-trace-adk-log)**  |

## Types Documentation

### typedef SDI_DATA_AVAILABLE_CALLBACK_TYPE

```cpp
typedef void(* SDI_DATA_AVAILABLE_CALLBACK_TYPE) (void *context);
```

callback function type declaration for [SDI_SetDataAvailableCallback()]()

### typedef SDI_CALLBACK_TYPE

```cpp
typedef void(* SDI_CALLBACK_TYPE) (unsigned char *dataIn, unsigned short sizeIn, unsigned char *dataOut, unsigned short *sizeOut, void *context);
```

callback function type declaration for [SDI_SetSdiCallback()]()

**Parameters**: 

  * **dataIn** Input data to send to the application: complete SDI Server callback message 
  * **sizeIn** Length of input data 
  * **dataOut** TLV stream of output data (callback response) to send back to the SDI Server. Might be NULL pointer for one-way callbacks 
  * **sizeOut** Input: size of dataOut buffer; Output: size of output data. Must be set to zero for one-way callbacks 
  * **context** Application context data pointer 


### typedef CARD_DETECTED_CALLBACK_TYPE

```cpp
typedef void(* CARD_DETECTED_CALLBACK_TYPE) (unsigned char *dataIn, unsigned short sizeIn, void *context);
```

callback function type declaration for [SDI_SetCardDetectedCallback()]()

**Parameters**: 

  * **dataIn** Input data to send to the application: complete SDI Server callback message 
  * **sizeIn** Length of input data 
  * **context** Application context data pointer 


### typedef EOF_DETECTED_CALLBACK_TYPE

```cpp
typedef void(* EOF_DETECTED_CALLBACK_TYPE) (void *context);
```

callback function type declaration for [SDI_SetEOFDetectedCallback()]()

**Parameters**: 

  * **context** Application context data pointer 



## Functions Documentation

### function SDI_ProtocolInit

```cpp
int SDI_ProtocolInit(
    unsigned options,
    const char * settings
)
```

Configure the library, connection setup. 

**Parameters**: 

  * **options** bit mask for configuration flags [SDI Protocol Initialization Options](group___s_d_i___p_r_o_t_o_c_o_l___i_n_i_t___o_p_t_i_o_n_s.md)
  * **settings** configuration parameters JSON string
  * **settings.server.host** host IP address or host name 
  * **settings.server.port** TCP/IP port 
  * **settings.server.ca** For TLS connections, path to Certification Authority PEM file (concatenated) or list of PEM file paths 
  * **settings.server.socket** path to Unix Domain Socket (will make other parameters ignored) 
  * **settings.server.serial** path to serial device (will make other parameters ignored)


**Return**: 0 for success else SDI protocol error code, see [SDI Protocol Error Codes](group___s_d_i___p_r_o_t_o_c_o_l___e_r_r_o_r___c_o_d_e_s.md)

See Programer's Guide for connection handling


Settings (all optional/conditional): {"server": {"host":<string>, "port":<integer>, "ca":<string|string[]>}} 
Default values: {"server": {"host":"127.0.0.1", "port":12000}}


### function SDI_Send

```cpp
int SDI_Send(
    const unsigned char * data,
    int dataLength
)
```

Send message to SDI server. 

**Parameters**: 

  * **data** data buffer with payload 
  * **dataLength** length of payload data


**Return**: 0 for success else SDI protocol error code, see [SDI Protocol Error Codes](group___s_d_i___p_r_o_t_o_c_o_l___e_r_r_o_r___c_o_d_e_s.md)

Will establish connection if necessary


### function SDI_Receive

```cpp
int SDI_Receive(
    unsigned char * responseBuffer,
    int responseBufferSize
)
```

Receive response from SDI server. 

**Parameters**: 

  * **responseBuffer** buffer to take the payload of SDI server response 
  * **responseBufferSize** length of reponseBuffer


**Return**: length of response in case of success else SDI protocol error code, see [SDI Protocol Error Codes](group___s_d_i___p_r_o_t_o_c_o_l___e_r_r_o_r___c_o_d_e_s.md)

For instance uses infinite timeout


### function SDI_SendReceive

```cpp
int SDI_SendReceive(
    const unsigned char * data,
    int dataLength,
    unsigned char * responseBuffer,
    int responseBufferSize
)
```

Send message to SDI server and receive the response. 

**Parameters**: 

  * **data** data buffer with payload 
  * **dataLength** length of payload data 
  * **responseBuffer** buffer to take the payload of SDI server response 
  * **responseBufferSize** length of reponseBuffer


**Return**: length of response in case of success else SDI protocol error code, see [SDI Protocol Error Codes](group___s_d_i___p_r_o_t_o_c_o_l___e_r_r_o_r___c_o_d_e_s.md)

Combines SDI_Send and SDI_Receive


### function SDI_Disconnect

```cpp
int SDI_Disconnect(
    void 
)
```

Shut down the connection to SDI server. 

**Return**: 0 for success else SDI protocol error code, see [SDI Protocol Error Codes](group___s_d_i___p_r_o_t_o_c_o_l___e_r_r_o_r___c_o_d_e_s.md)

Might be called if the connection shall be provided to another process, for shutdown or in case of unrecoverable communication errors.


### function SDI_SetDataAvailableCallback

```cpp
int SDI_SetDataAvailableCallback(
    SDI_DATA_AVAILABLE_CALLBACK_TYPE cb,
    void * context
)
```

Set a callback to be called if a SDI server response is pending. 

**Return**: 0 for success else SDI protocol error code, see [SDI Protocol Error Codes](group___s_d_i___p_r_o_t_o_c_o_l___e_r_r_o_r___c_o_d_e_s.md)

Set a callback that will be invoked the callback when SDIresponse data is pending after [SDI_Send()](sdiprotocol_8h.md#function-sdi-send).


### function SDI_SetSdiCallback

```cpp
int SDI_SetSdiCallback(
    SDI_CALLBACK_TYPE cb,
    void * context
)
```

Set a callback function to be called when SDI server sends a callback message. 

**Return**: 0 for success else SDI protocol error code, see [SDI Protocol Error Codes](group___s_d_i___p_r_o_t_o_c_o_l___e_r_r_o_r___c_o_d_e_s.md)

The SDI Callback is called in the receiver thread and should not block. 


### function SDI_SetCardDetectedCallback

```cpp
int SDI_SetCardDetectedCallback(
    CARD_DETECTED_CALLBACK_TYPE cb,
    void * context
)
```

Set a callback function to be called when SDI server sends the Card Detected callback message. 

**Return**: 0 for success else SDI protocol error code, see [SDI Protocol Error Codes](group___s_d_i___p_r_o_t_o_c_o_l___e_r_r_o_r___c_o_d_e_s.md)

The callback function is called in the receiver thread and should not block. 


### function SDI_SendSysAbort

```cpp
void SDI_SendSysAbort(
    void 
)
```

Send SYS ABORT command '20 02'. 

This command is available even when SendReceive is in progress. This is useful if a dialog during a callback needs to be aborted. 


### function SDI_SendExternalButton

```cpp
void SDI_SendExternalButton(
    void 
)
```

Send External Button command '20 20' always with P2 = 1 (suppress response) 

This command informs the SDI-Server in Headless Mode that the external button is pressed 


### function SDI_SetEOFDetectedCallback

```cpp
int SDI_SetEOFDetectedCallback(
    EOF_DETECTED_CALLBACK_TYPE cb,
    void * context
)
```

Set a callback function to be called when the connection to SDI server is closed by EOF. 

**Return**: 0 for success else SDI protocol error code, see [SDI Protocol Error Codes](group___s_d_i___p_r_o_t_o_c_o_l___e_r_r_o_r___c_o_d_e_s.md)

**Note**: Do not call any API function from inside callback EOF_DETECTED_CALLBACK_TYPE. 

The callback function is called in the receiver thread before termination and should not block. 




## Macros Documentation

### define SDI_PROTOCOL_ERR_IO

```cpp
#define SDI_PROTOCOL_ERR_IO -1
```

read, write or protocol error 

### define SDI_PROTOCOL_ERR_CONCURRENT_USE

```cpp
#define SDI_PROTOCOL_ERR_CONCURRENT_USE -2
```

SDI protocol library currently used by another thread, maybe try later. 

### define SDI_PROTOCOL_ERR_CONNECT

```cpp
#define SDI_PROTOCOL_ERR_CONNECT -3
```

connection establishment to SDI server failed 

### define SDI_PROTOCOL_ERR_OVERFLOW

```cpp
#define SDI_PROTOCOL_ERR_OVERFLOW -4
```

response buffer too small, response has been dropped 

### define SDI_PROTOCOL_ERR_PARAM

```cpp
#define SDI_PROTOCOL_ERR_PARAM -5
```

wrong formal parameter like NULL pointer 

### define SDI_PROTOCOL_ERR_OTHER

```cpp
#define SDI_PROTOCOL_ERR_OTHER -6
```

any other problem like thread creation, memory allocation, etc. 

### define SDI_PROTOCOL_ERR_NO_RECEIVE

```cpp
#define SDI_PROTOCOL_ERR_NO_RECEIVE -7
```

command is suppressed, therefore, no [SDI_Receive()]() must be called afterwards 

returned by [SDI_Send()](sdiprotocol_8h.md#function-sdi-send): command successfully sent, but response for this 


### define SDI_PROTOCOL_INIT_OPT_TRACE_EMV_CBK

```cpp
#define SDI_PROTOCOL_INIT_OPT_TRACE_EMV_CBK 0x01
```

trace using the EMV callback 

**Deprecated**: 

component always uses ADK LOG channel with label SDIPROT 

### define SDI_PROTOCOL_INIT_OPT_TRACE_SYSLOG

```cpp
#define SDI_PROTOCOL_INIT_OPT_TRACE_SYSLOG 0x02
```

use syslog instead of EMV callback for trace 

**Deprecated**: 

component always uses ADK LOG channel with label SDIPROT 

### define SDI_PROTOCOL_INIT_OPT_TRACE_ADK_LOG

```cpp
#define SDI_PROTOCOL_INIT_OPT_TRACE_ADK_LOG 0x04
```


**Deprecated**: 

Trace via ADK-LOG is controlled by LOG control panel 

component always uses ADK LOG channel with label SDIPROT 

## Source code

```cpp

#ifndef _SDIPROTOCOL_H_
#define _SDIPROTOCOL_H_

#ifdef __cplusplus
extern "C" {
#endif

#define SDI_PROTOCOL_ERR_IO             -1 
#define SDI_PROTOCOL_ERR_CONCURRENT_USE -2 
#define SDI_PROTOCOL_ERR_CONNECT        -3 
#define SDI_PROTOCOL_ERR_OVERFLOW       -4 
#define SDI_PROTOCOL_ERR_PARAM          -5 
#define SDI_PROTOCOL_ERR_OTHER          -6 
#define SDI_PROTOCOL_ERR_NO_RECEIVE     -7 


#define SDI_PROTOCOL_INIT_OPT_TRACE_EMV_CBK           0x01 
#define SDI_PROTOCOL_INIT_OPT_TRACE_SYSLOG            0x02 
#define SDI_PROTOCOL_INIT_OPT_TRACE_ADK_LOG           0x04 


  /*****************************************************************************
  * SDI_ProtocolInit
  *****************************************************************************/
  int SDI_ProtocolInit(unsigned options, const char *settings);

  /*****************************************************************************
  * SDI_Send
  *****************************************************************************/
  int SDI_Send(const unsigned char *data, int dataLength);

  /*****************************************************************************
  * SDI_Receive
  *****************************************************************************/
  int SDI_Receive(unsigned char *responseBuffer, int responseBufferSize);

  /*****************************************************************************
  * SDI_SendReceive
  *****************************************************************************/
  int SDI_SendReceive(const unsigned char *data, int dataLength, unsigned char *responseBuffer, int responseBufferSize);

  /*****************************************************************************
  * SDI_Disconnect
  *****************************************************************************/
  int SDI_Disconnect(void);

  typedef void (*SDI_DATA_AVAILABLE_CALLBACK_TYPE)(void *context);

  /*****************************************************************************
  * SDI_SetDataAvailableCallback
  *****************************************************************************/
  int SDI_SetDataAvailableCallback(SDI_DATA_AVAILABLE_CALLBACK_TYPE cb, void *context);

  typedef void (*SDI_CALLBACK_TYPE)(unsigned char *dataIn, unsigned short sizeIn, unsigned char *dataOut, unsigned short *sizeOut, void *context);

  /***************************************************************************************
  * SDI_SetSdiCallback
  ****************************************************************************************/
  int SDI_SetSdiCallback(SDI_CALLBACK_TYPE cb, void *context);

  typedef void (*CARD_DETECTED_CALLBACK_TYPE)(unsigned char *dataIn, unsigned short sizeIn, void *context);

  /***************************************************************************************
  * SDI_SetCardDetectedCallback
  ****************************************************************************************/
  int SDI_SetCardDetectedCallback(CARD_DETECTED_CALLBACK_TYPE cb, void *context);

  /***************************************************************************************
   * SDI_SendSysAbort
   ****************************************************************************************/
  void SDI_SendSysAbort(void);

  /***************************************************************************************
   * SDI_SendExternalButton
   ****************************************************************************************/
  void SDI_SendExternalButton(void);

  typedef void (*EOF_DETECTED_CALLBACK_TYPE)(void *context);

  /***************************************************************************************
  * SDI_SetEOFDetectedCallback
  ****************************************************************************************/
  int SDI_SetEOFDetectedCallback(EOF_DETECTED_CALLBACK_TYPE cb, void *context);


#ifdef __cplusplus
}
#endif

#endif // _SDIPROTOCOL_H_
```


-------------------------------

Updated on 2025-06-17 at 11:52:26 +0100
