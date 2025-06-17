---
title: emv/EMV_CTLS_Common/export/emv/EMV_CTLS_Link.h

---

# emv/EMV_CTLS_Common/export/emv/EMV_CTLS_Link.h



## Types

|                | Name           |
| -------------- | -------------- |
| typedef void()(unsigned char *pucSend, unsigned short sSendSize, unsigned char *pucReceive, unsigned short *psReceiveSize, void *externalData) | **[EMV_CTLS_CALLBACK_Func](group___t_l_v___c_a_l_l_b_c_k.md#typedef-emv-ctls-callback-func)** <br>Common callback function: send/receive TLV stream to/from calling application.  |
| typedef [EMV_CTLS_CALLBACK_Func](group___t_l_v___c_a_l_l_b_c_k.md#typedef-emv-ctls-callback-func) * | **[EMV_CTLS_CALLBACK_FnT](group___t_l_v___c_a_l_l_b_c_k.md#typedef-emv-ctls-callback-fnt)** <br>pointer to [EMV_CTLS_CALLBACK_Func](group___t_l_v___c_a_l_l_b_c_k.md#typedef-emv-ctls-callback-func) |

## Functions

|                | Name           |
| -------------- | -------------- |
| [EMV_ADK_INFO](group___a_d_k___r_e_t___c_o_d_e.md#typedef-emv-adk-info) | **[EMV_CTLS_Interface](_e_m_v___c_t_l_s___link_8h.md#function-emv-ctls-interface)**(const unsigned char * dataIn, unsigned short dataInLen, unsigned char * dataOut, unsigned short * dataOutLen)<br>Serial interface to EMV functions.  |
| [EMV_ADK_INFO](group___a_d_k___r_e_t___c_o_d_e.md#typedef-emv-adk-info) | **[EMV_CTLS_IF_Header](_e_m_v___c_t_l_s___link_8h.md#function-emv-ctls-if-header)**(const unsigned char * header, const unsigned char * dataIn, unsigned short dataInLen, unsigned char * response, unsigned short * responseLen)<br>Serial interface to EMV functions.  |
| [EMV_ADK_INFO](group___a_d_k___r_e_t___c_o_d_e.md#typedef-emv-adk-info) | **[EMV_CTLS_IF_BERTLV](_e_m_v___c_t_l_s___link_8h.md#function-emv-ctls-if-bertlv)**(const unsigned char * header, const struct [BTLVNode](struct_b_t_l_v_node.md) * dataIn, struct [BTLVNode](struct_b_t_l_v_node.md) * dataOut)<br>Serial interface to EMV functions.  |
| void | **[EMV_CTLS_Disconnect](group___f_u_n_c___f_l_o_w.md#function-emv-ctls-disconnect)**(unsigned char options)<br>Disconnect from EMV server.  |
| void | **[EMV_CTLS_SetClientMode](group___f_u_n_c___f_l_o_w.md#function-emv-ctls-setclientmode)**(enum [EMV_CLIENT_MODE](_e_m_v___common___interface_8h.md#enum-emv-client-mode) mode)<br>Switch to client mode.  |
| enum [EMV_CLIENT_MODE](_e_m_v___common___interface_8h.md#enum-emv-client-mode) | **[EMV_CTLS_GetClientMode](group___f_u_n_c___f_l_o_w.md#function-emv-ctls-getclientmode)**()<br>Query the client mode.  |
| void | **[EMV_CTLS_SetCallback](group___f_u_n_c___f_l_o_w.md#function-emv-ctls-setcallback)**([EMV_CTLS_CALLBACK_FnT](group___t_l_v___c_a_l_l_b_c_k.md#typedef-emv-ctls-callback-fnt) EMV_Callback, void * context)<br>Set Callback Function and activate Callback [Thread](class_thread.md).  |
| unsigned long | **[EMV_CTLS_GetInitOptions](group___f_u_n_c___f_l_o_w.md#function-emv-ctls-getinitoptions)**(void )<br>Getter to Init Options from EMV_CTLS_Init_Framework.  |
| unsigned | **[EMV_CTLS_GetSdiSW12](group___f_u_n_c___f_l_o_w.md#function-emv-ctls-getsdisw12)**()<br>Access SDI status word.  |

## Defines

|                | Name           |
| -------------- | -------------- |
|  | **[DLL_CLL](_e_m_v___c_t_l_s___link_8h.md#define-dll-cll)**  |
|  | **[EMV_CTLS_CALLBACK_STACK_SIZE](group___t_l_v___c_a_l_l_b_c_k.md#define-emv-ctls-callback-stack-size)**  |
|  | **[FS_CALLBACK_CTLS_DATA_RECORD](_e_m_v___c_t_l_s___link_8h.md#define-fs-callback-ctls-data-record)**  |

## Types Documentation

### typedef EMV_CTLS_CALLBACK_Func

```cpp
typedef void() EMV_CTLS_CALLBACK_Func(unsigned char *pucSend, unsigned short sSendSize, unsigned char *pucReceive, unsigned short *psReceiveSize, void *externalData);
```

Common callback function: send/receive TLV stream to/from calling application. 

**Parameters**: 

  * **pucSend** TLV stream to send to calling application 
  * **sSendSize** Length of TLV stream to send to calling application 
  * **pucReceive** TLV stream received from calling application 
  * **psReceiveSize** Input: size of buffer pucReceive points to; output: size of TLV stream received from calling application 
  * **externalData** Application data pointer, which was put in [EMV_CTLS_Init_Framework()](group___f_u_n_c___i_n_i_t.md#define-emv-ctls-init-framework)


Tags found in `pucSend` determine which callback function is meant: [Constructed tags for callback functions](group___c_b_c_k___f_c_t___t_a_g_s.md)

Explanation in programmers guide: [Transaction Callbacks]

Tags for transport layer: 

* Callback function request: ` 91 01 ` ([EMV_CTLS_CLA_CBCK_REQ](group___a_d_k___t_r_a_n_s_p_o_r_t___t_a_g_s.md#define-emv-ctls-cla-cbck-req), [INS_CBCK_FCT](group___a_d_k___t_r_a_n_s_p_o_r_t___t_a_g_s.md#define-ins-cbck-fct)) 
* Trace output: ` 91 FF ` ([EMV_CTLS_CLA_CBCK_REQ](group___a_d_k___t_r_a_n_s_p_o_r_t___t_a_g_s.md#define-emv-ctls-cla-cbck-req), [INS_CBCK_TRACE](group___a_d_k___t_r_a_n_s_p_o_r_t___t_a_g_s.md#define-ins-cbck-trace)) 
* Response: ` 92 ` ([EMV_CTLS_CLA_CBCK_RESP](group___a_d_k___t_r_a_n_s_p_o_r_t___t_a_g_s.md#define-emv-ctls-cla-cbck-resp))


### typedef EMV_CTLS_CALLBACK_FnT

```cpp
typedef EMV_CTLS_CALLBACK_Func* EMV_CTLS_CALLBACK_FnT;
```

pointer to [EMV_CTLS_CALLBACK_Func](group___t_l_v___c_a_l_l_b_c_k.md#typedef-emv-ctls-callback-func)


## Functions Documentation

### function EMV_CTLS_Interface

```cpp
EMV_ADK_INFO EMV_CTLS_Interface(
    const unsigned char * dataIn,
    unsigned short dataInLen,
    unsigned char * dataOut,
    unsigned short * dataOutLen
)
```

Serial interface to EMV functions. 

**Parameters**: 

  * **dataIn** input TLV buffer 
  * **dataInLen** length of dataIn 
  * **dataOut** output TLV buffer 
  * **dataOutLen** length of dataOut 


**Return**: [EMV_ADK_INTERNAL](group___a_d_k___r_e_t___c_o_d_e.md#define-emv-adk-internal), [EMV_ADK_PARAM](group___a_d_k___r_e_t___c_o_d_e.md#define-emv-adk-param), or return code of EMV function given in `dataIn`

**Author**: GSS R&D Germany

### function EMV_CTLS_IF_Header

```cpp
EMV_ADK_INFO EMV_CTLS_IF_Header(
    const unsigned char * header,
    const unsigned char * dataIn,
    unsigned short dataInLen,
    unsigned char * response,
    unsigned short * responseLen
)
```

Serial interface to EMV functions. 

**Parameters**: 

  * **header** for serial interface, 4 byte: CLA, INS, P1, P2 
  * **dataIn** input TLV buffer (may be NULL) 
  * **dataInLen** length of dataIn 
  * **response** output TLV buffer (may be NULL) 
  * **responseLen** length of dataOut 


**Return**: [EMV_ADK_INTERNAL](group___a_d_k___r_e_t___c_o_d_e.md#define-emv-adk-internal), [EMV_ADK_PARAM](group___a_d_k___r_e_t___c_o_d_e.md#define-emv-adk-param), or return code of EMV function given in `header`

**Author**: GSS R&D Germany

### function EMV_CTLS_IF_BERTLV

```cpp
EMV_ADK_INFO EMV_CTLS_IF_BERTLV(
    const unsigned char * header,
    const struct BTLVNode * dataIn,
    struct BTLVNode * dataOut
)
```

Serial interface to EMV functions. 

**Parameters**: 

  * **header** for serial interface, 4 byte: CLA, INS, P1, P2. If CLA=CLA_EMV and INS=INS_CBCK_TRACE, the function is used to trace data encapsulated in "F0/DF02" tag contained in dataIn field 
  * **dataIn** input TLV Node (may be NULL) 
  * **dataOut** output TLV (may be NULL and may be same as input) 


**Return**: [EMV_ADK_INTERNAL](group___a_d_k___r_e_t___c_o_d_e.md#define-emv-adk-internal), [EMV_ADK_TLV_BUILD_ERR](group___a_d_k___r_e_t___c_o_d_e.md#define-emv-adk-tlv-build-err), or return code of EMV function given in `header`

**Author**: GSS R&D Germany

### function EMV_CTLS_Disconnect

```cpp
void EMV_CTLS_Disconnect(
    unsigned char options
)
```

Disconnect from EMV server. 

**Parameters**: 

  * **options** RFU


**Author**: GSS R&D Germany 

Since the EMV server handles only one client this function needs to be called if the EMV control shall be handed over to different client process. Note: This function has no effect, if not yet connected or not using the client/server library. 


### function EMV_CTLS_SetClientMode

```cpp
void EMV_CTLS_SetClientMode(
    enum EMV_CLIENT_MODE mode
)
```

Switch to client mode. 

**Parameters**: 

  * **mode** see [EMV_CLIENT_MODE](_e_m_v___common___interface_8h.md#enum-emv-client-mode)


**Author**: GSS R&D Germany 

There is only one static client library that uses the EMV framework library by default. Alternatively it can connect via IPC to an EMV server. A third mode - the gateway mode - can be used if there shall be only one channel for both, contact and contactless.


### function EMV_CTLS_GetClientMode

```cpp
enum EMV_CLIENT_MODE EMV_CTLS_GetClientMode()
```

Query the client mode. 

**Return**: EMV_CLIENT_MODE_SDI or other enum value

**Author**: GSS R&D Germany 

The static client library needs to know if SDI client processing is to be done


### function EMV_CTLS_SetCallback

```cpp
void EMV_CTLS_SetCallback(
    EMV_CTLS_CALLBACK_FnT EMV_Callback,
    void * context
)
```

Set Callback Function and activate Callback [Thread](class_thread.md). 

**Parameters**: 

  * **EMV_Callback** callback function pointer, may be NULL 
  * **context** context data pointer which will be passed back with the callback


**Author**: GSS R&D Germany 

### function EMV_CTLS_GetInitOptions

```cpp
unsigned long EMV_CTLS_GetInitOptions(
    void 
)
```

Getter to Init Options from EMV_CTLS_Init_Framework. 

**Return**: Options which were set by [EMV_CTLS_Init_Framework()](group___f_u_n_c___i_n_i_t.md#define-emv-ctls-init-framework)

**Author**: GSS R&D Germany

### function EMV_CTLS_GetSdiSW12

```cpp
unsigned EMV_CTLS_GetSdiSW12()
```

Access SDI status word. 

**Return**: last SDI status word, 0 if not applicable 

This getter is intended for the case that an SDI error code is mapped to an EMV ADK return value but SDI status word is of interest.




## Macros Documentation

### define DLL_CLL

```cpp
#define DLL_CLL 
```


### define EMV_CTLS_CALLBACK_STACK_SIZE

```cpp
#define EMV_CTLS_CALLBACK_STACK_SIZE 0xC000
```


**Deprecated**: 

avaiable stack-size in [EMV_CTLS_CALLBACK_Func](group___t_l_v___c_a_l_l_b_c_k.md#typedef-emv-ctls-callback-func) (verix-only) 

### define FS_CALLBACK_CTLS_DATA_RECORD

```cpp
#define FS_CALLBACK_CTLS_DATA_RECORD 0xFF
```


## Source code

```cpp
#ifndef _EMV_CTLS_LINK_H_
#define _EMV_CTLS_LINK_H_

#include "emv/btlv.h"
#include "emv/EMV_Common_Interface.h"

#define DLL_CLL // NOTE: Do not set visibility("default") because export.map is used

#ifdef __cplusplus
extern "C" {
#endif

/*****************************************************************************
*  EMV_CTLS_CallbackFunction
*****************************************************************************/
typedef void (EMV_CTLS_CALLBACK_Func) (unsigned char *pucSend, unsigned short sSendSize, unsigned char *pucReceive, unsigned short *psReceiveSize, void *externalData);

typedef EMV_CTLS_CALLBACK_Func* EMV_CTLS_CALLBACK_FnT;

#define EMV_CTLS_CALLBACK_STACK_SIZE 0xC000

#define FS_CALLBACK_CTLS_DATA_RECORD 0xFF  // currently max. 201 bytes (5 candidates in cbk_reduceCandidateList())


/*****************************************************************************
*  EMV_CTLS_Interface
*****************************************************************************/
EMV_ADK_INFO EMV_CTLS_Interface(const unsigned char *dataIn, unsigned short dataInLen, unsigned char *dataOut, unsigned short *dataOutLen);

/*****************************************************************************
*  EMV_CTLS_IF_Header
*****************************************************************************/
EMV_ADK_INFO EMV_CTLS_IF_Header(const unsigned char* header, const unsigned char *dataIn, unsigned short dataInLen, unsigned char *response, unsigned short *responseLen);

/*****************************************************************************
*  EMV_CTLS_IF_BERTLV
*****************************************************************************/
EMV_ADK_INFO EMV_CTLS_IF_BERTLV(const unsigned char* header, const struct BTLVNode* dataIn,  struct BTLVNode* dataOut);

/*****************************************************************************
* EMV_CTLS_Disconnect
*****************************************************************************/
void EMV_CTLS_Disconnect(unsigned char options);

/*****************************************************************************
* EMV_CTLS_SetClientMode
*****************************************************************************/
void EMV_CTLS_SetClientMode(enum EMV_CLIENT_MODE mode);

/*****************************************************************************
* EMV_CTLS_GetClientMode
*****************************************************************************/
enum EMV_CLIENT_MODE EMV_CTLS_GetClientMode();

/*****************************************************************************
* EMV_CTLS_SetCallback
*****************************************************************************/
void EMV_CTLS_SetCallback(EMV_CTLS_CALLBACK_FnT EMV_Callback, void* context);

/*****************************************************************************
* EMV_CTLS_SetCallback
*****************************************************************************/
unsigned long EMV_CTLS_GetInitOptions(void);

/*****************************************************************************
* EMV_CTLS_getSdiSW12
*****************************************************************************/
unsigned EMV_CTLS_GetSdiSW12();

#ifdef __cplusplus
}     // extern "C"
#endif

#endif // _EMV_CTLS_LINK_H_
```


-------------------------------

Updated on 2025-06-17 at 11:52:25 +0100
