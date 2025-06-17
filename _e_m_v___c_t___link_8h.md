---
title: emv/EMV_CT_Common/export/emv/EMV_CT_Link.h

---

# emv/EMV_CT_Common/export/emv/EMV_CT_Link.h



## Types

|                | Name           |
| -------------- | -------------- |
| typedef void(*)(unsigned char *pucSend, unsigned short sSendSize, unsigned char *pucReceive, unsigned short *psReceiveSize, void *externalData) | **[EMV_CT_CALLBACK_FnT](group___t_l_v___c_a_l_l_b_c_k.md#typedef-emv-ct-callback-fnt)** <br>Common callback function: send/receive TLV stream to/from calling application.  |

## Functions

|                | Name           |
| -------------- | -------------- |
| [EMV_ADK_INFO](group___a_d_k___r_e_t___c_o_d_e.md#typedef-emv-adk-info) | **[EMV_CT_Interface](_e_m_v___c_t___link_8h.md#function-emv-ct-interface)**(const unsigned char * dataIn, unsigned short dataInLen, unsigned char * dataOut, unsigned short * dataOutLen)<br>Serial interface to EMV functions.  |
| [EMV_ADK_INFO](group___a_d_k___r_e_t___c_o_d_e.md#typedef-emv-adk-info) | **[EMV_CT_IF_Header](_e_m_v___c_t___link_8h.md#function-emv-ct-if-header)**(const unsigned char * header, const unsigned char * dataIn, unsigned short dataInLen, unsigned char * response, unsigned short * responseLen)<br>Serial interface to EMV functions.  |
| [EMV_ADK_INFO](group___a_d_k___r_e_t___c_o_d_e.md#typedef-emv-adk-info) | **[EMV_CT_IF_BERTLV](_e_m_v___c_t___link_8h.md#function-emv-ct-if-bertlv)**(const unsigned char * header, const struct [BTLVNode](struct_b_t_l_v_node.md) * dataIn, struct [BTLVNode](struct_b_t_l_v_node.md) * dataOut)<br>Serial interface to EMV functions.  |
| void | **[EMV_CT_Disconnect](group___f_u_n_c___f_l_o_w.md#function-emv-ct-disconnect)**(void )<br>Disconnect from EMV server.  |
| void | **[EMV_CT_SetClientMode](group___f_u_n_c___f_l_o_w.md#function-emv-ct-setclientmode)**(enum [EMV_CLIENT_MODE](_e_m_v___common___interface_8h.md#enum-emv-client-mode) mode)<br>Switch to Client-Server mode.  |
| enum [EMV_CLIENT_MODE](_e_m_v___common___interface_8h.md#enum-emv-client-mode) | **[EMV_CT_GetClientMode](group___f_u_n_c___f_l_o_w.md#function-emv-ct-getclientmode)**()<br>Query the client mode.  |
| void | **[EMV_CT_SetCallback](group___f_u_n_c___f_l_o_w.md#function-emv-ct-setcallback)**([EMV_CT_CALLBACK_FnT](adk__emv__contactless__programmers__guide_8dox.md#typedef-emv-ct-callback-fnt) EMV_Callback, void * context)<br>Set Callback Function and activate Callback [Thread](class_thread.md).  |
| unsigned long | **[EMV_CT_GetInitOptions](group___f_u_n_c___f_l_o_w.md#function-emv-ct-getinitoptions)**(void )<br>Getter to Init Options from EMV_CT_Init_Framework.  |
| unsigned | **[EMV_CT_GetSdiSW12](group___f_u_n_c___f_l_o_w.md#function-emv-ct-getsdisw12)**()<br>Access SDI status word.  |

## Defines

|                | Name           |
| -------------- | -------------- |
|  | **[DLL_CTL](_e_m_v___c_t___link_8h.md#define-dll-ctl)**  |

## Types Documentation

### typedef EMV_CT_CALLBACK_FnT

```cpp
typedef void(* EMV_CT_CALLBACK_FnT) (unsigned char *pucSend, unsigned short sSendSize, unsigned char *pucReceive, unsigned short *psReceiveSize, void *externalData);
```

Common callback function: send/receive TLV stream to/from calling application. 

**Parameters**: 

  * **pucSend** ... TLV stream to send to calling application 
  * **sSendSize** ... length of TLV stream to send to calling application 
  * **pucReceive** ... TLV stream received from calling application 
  * **psReceiveSize** ... input: size of buffer pucReceive points to; output: size of TLV stream received from calling application 
  * **externalData** application data pointer, which was put in [EMV_CT_Init_Framework()](group___f_u_n_c___i_n_i_t.md#define-emv-ct-init-framework)


**Author**: GSS R&D Germany

Explanation in programmers guide: [Transaction Callbacks]



 Tags for transport layer: 

* Callback function request: ` 91 01 ` ([EMV_CT_CLA_CBCK_REQ](group___a_d_k___t_r_a_n_s_p_o_r_t___t_a_g_s.md#define-emv-ct-cla-cbck-req), [INS_CBCK_FCT](group___a_d_k___t_r_a_n_s_p_o_r_t___t_a_g_s.md#define-ins-cbck-fct)) 
* Data for card reader: ` 91 02 ` ([EMV_CT_CLA_CBCK_REQ](group___a_d_k___t_r_a_n_s_p_o_r_t___t_a_g_s.md#define-emv-ct-cla-cbck-req), [INS_CBCK_CRD](group___a_d_k___t_r_a_n_s_p_o_r_t___t_a_g_s.md#define-ins-cbck-crd)) 
* Trace output: ` 91 FF ` ([EMV_CT_CLA_CBCK_REQ](group___a_d_k___t_r_a_n_s_p_o_r_t___t_a_g_s.md#define-emv-ct-cla-cbck-req), [INS_CBCK_TRACE](group___a_d_k___t_r_a_n_s_p_o_r_t___t_a_g_s.md#define-ins-cbck-trace)) 
* Response: ` 92 ` ([EMV_CT_CLA_CBCK_RESP](group___a_d_k___t_r_a_n_s_p_o_r_t___t_a_g_s.md#define-emv-ct-cla-cbck-resp))



 Tags found in `pucSend` determine which callback function is meant, see [Constructed tags for callback functions](group___c_b_c_k___f_c_t___t_a_g_s.md)



## Functions Documentation

### function EMV_CT_Interface

```cpp
EMV_ADK_INFO EMV_CT_Interface(
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


**Return**: EMV_ADK_OK, EMV_ADK_INTERNAL, EMV_ADK_PARAM 

**Author**: GSS R&D Germany

### function EMV_CT_IF_Header

```cpp
EMV_ADK_INFO EMV_CT_IF_Header(
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


**Return**: EMV_ADK_OK, EMV_ADK_INTERNAL, EMV_ADK_PARAM 

**Author**: GSS R&D Germany

### function EMV_CT_IF_BERTLV

```cpp
EMV_ADK_INFO EMV_CT_IF_BERTLV(
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


**Return**: EMV_ADK_OK, EMV_ADK_INTERNAL, EMV_ADK_PARAM 

**Author**: GSS R&D Germany

### function EMV_CT_Disconnect

```cpp
void EMV_CT_Disconnect(
    void 
)
```

Disconnect from EMV server. 

**Author**: GSS R&D Germany 

Since the EMV server handles only one client this function needs to be called if the EMV control shall be handed over to different client process. Note: This function has no effect, if not yet connected or not using the client/server libaray.


### function EMV_CT_SetClientMode

```cpp
void EMV_CT_SetClientMode(
    enum EMV_CLIENT_MODE mode
)
```

Switch to Client-Server mode. 

**Author**: GSS R&D Germany 

There is only one static client library that uses the EMV framework library by default. Alternatively it can connect via IPC to an EMV server. A thrird mode - the gateway mode - can be used if there shall be only one channel for both, contact and contactless.


### function EMV_CT_GetClientMode

```cpp
enum EMV_CLIENT_MODE EMV_CT_GetClientMode()
```

Query the client mode. 

**Return**: EMV_CLIENT_MODE_SDI or other enum value

**Author**: GSS R&D Germany 

The static client library needs to know if SDI client processing is to be done


### function EMV_CT_SetCallback

```cpp
void EMV_CT_SetCallback(
    EMV_CT_CALLBACK_FnT EMV_Callback,
    void * context
)
```

Set Callback Function and activate Callback [Thread](class_thread.md). 

**Parameters**: 

  * **EMV_Callback** call back function pointer, may by NULL 
  * **context** context data pointer which will be passed back with the call back


**Author**: GSS R&D Germany 

### function EMV_CT_GetInitOptions

```cpp
unsigned long EMV_CT_GetInitOptions(
    void 
)
```

Getter to Init Options from EMV_CT_Init_Framework. 

**Return**: [in] options, in case of IPC with Two Piece Solution this is device specific

**Author**: GSS R&D Germany 

### function EMV_CT_GetSdiSW12

```cpp
unsigned EMV_CT_GetSdiSW12()
```

Access SDI status word. 

**Return**: last SDI status word, 0 if not applicable 

This getter is intended for the case that an SDI error code is mapped to an EMV ADK return value but SDI status word is of interest.




## Macros Documentation

### define DLL_CTL

```cpp
#define DLL_CTL 
```


## Source code

```cpp
/****************************************************************************
*  Product:     ADK Cards Service - EMV Contact (CT)
*  Company:     Verifone
*  Author:      GSS R&D Germany
*  Content:     Client interface - transport layer
****************************************************************************/

#ifndef _EMV_CT_LINK_H_
#define _EMV_CT_LINK_H_

#include "emv/btlv.h"
#include "emv/EMV_Common_Interface.h"

#define DLL_CTL // NOTE: Do not set visibility("default") because export.map is used

#ifdef __cplusplus
extern "C" {
#endif

/*****************************************************************************
*  EMV_CT_CALLBACK_FnT
*****************************************************************************/
typedef void (* EMV_CT_CALLBACK_FnT) (unsigned char *pucSend, unsigned short sSendSize, unsigned char *pucReceive, unsigned short *psReceiveSize, void* externalData);

/*****************************************************************************
*  EMV_CT_Interface
*****************************************************************************/
EMV_ADK_INFO EMV_CT_Interface(const unsigned char *dataIn, unsigned short dataInLen, unsigned char *dataOut, unsigned short *dataOutLen);

/*****************************************************************************
*  EMV_CT_IF_Header
*****************************************************************************/
EMV_ADK_INFO EMV_CT_IF_Header(const unsigned char* header, const unsigned char *dataIn, unsigned short dataInLen, unsigned char *response, unsigned short *responseLen);

/*****************************************************************************
*  EMV_CT_IF_BERTLV
*****************************************************************************/
EMV_ADK_INFO EMV_CT_IF_BERTLV(const unsigned char* header, const struct BTLVNode* dataIn,  struct BTLVNode* dataOut);

/*****************************************************************************
* EMV_CT_Disconnect
*****************************************************************************/
void EMV_CT_Disconnect(void);

/*****************************************************************************
* EMV_CT_SetClientMode
*****************************************************************************/
void EMV_CT_SetClientMode(enum EMV_CLIENT_MODE mode);

/*****************************************************************************
* EMV_CT_GetClientMode
*****************************************************************************/
enum EMV_CLIENT_MODE EMV_CT_GetClientMode();

/*****************************************************************************
* EMV_CT_SetCallback
*****************************************************************************/
void EMV_CT_SetCallback(EMV_CT_CALLBACK_FnT EMV_Callback, void* context);

/*****************************************************************************
* EMV_CT_GetInitOptions
*****************************************************************************/
unsigned long EMV_CT_GetInitOptions(void);

/*****************************************************************************
* EMV_CT_getSdiSW12
*****************************************************************************/
unsigned EMV_CT_GetSdiSW12();

#ifdef __cplusplus
}     // extern "C"
#endif

#endif // _EMV_CT_LINK_H_
```


-------------------------------

Updated on 2025-06-17 at 11:52:24 +0100
