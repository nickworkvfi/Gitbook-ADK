---
title: emv/EMV_CTLS_Common/export/emv/EMV_CTLS_SerInterface.h
summary: Interface of CTLS-Framework. 

---

# emv/EMV_CTLS_Common/export/emv/EMV_CTLS_SerInterface.h

Interface of CTLS-Framework. 

## Functions

|                | Name           |
| -------------- | -------------- |
| [DLL_CLF](_e_m_v___c_t_l_s___ser_interface_8h.md#define-dll-clf)[EMV_ADK_INFO](group___a_d_k___r_e_t___c_o_d_e.md#typedef-emv-adk-info) | **[EMV_CTLS_HandleCallback](_e_m_v___c_t_l_s___ser_interface_8h.md#function-emv-ctls-handlecallback)**(unsigned char * data, unsigned short * dataLen) |
| [DLL_CLF](_e_m_v___c_t_l_s___ser_interface_8h.md#define-dll-clf)[EMV_ADK_INFO](group___a_d_k___r_e_t___c_o_d_e.md#typedef-emv-adk-info) | **[EMV_CTLS_SerInterface](_e_m_v___c_t_l_s___ser_interface_8h.md#function-emv-ctls-serinterface)**(const unsigned char * dataIn, unsigned short dataInLen, unsigned char * dataOut, unsigned short * dataOutLen)<br>Serial interface to EMV functions.  |

## Defines

|                | Name           |
| -------------- | -------------- |
|  | **[DLL_CLF](_e_m_v___c_t_l_s___ser_interface_8h.md#define-dll-clf)**  |


## Functions Documentation

### function EMV_CTLS_HandleCallback

```cpp
DLL_CLFEMV_ADK_INFO EMV_CTLS_HandleCallback(
    unsigned char * data,
    unsigned short * dataLen
)
```


### function EMV_CTLS_SerInterface

```cpp
DLL_CLFEMV_ADK_INFO EMV_CTLS_SerInterface(
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



## Macros Documentation

### define DLL_CLF

```cpp
#define DLL_CLF 
```


## Source code

```cpp
/****************************************************************************
*  Product:     InFusion
*  Company:     VeriFone
*  Author:      GSS R&D Germany
*  Content:     Interface definitions and functions
****************************************************************************/


#ifndef _EMV_CTLS_SER_INTERFACE_H_   /* avoid double interface-includes */
#define _EMV_CTLS_SER_INTERFACE_H_

#ifdef __cplusplus
extern "C" {
#endif


#define DLL_CLF // NOTE: Do not set visibility("default") because export.map is used

#include "emv/EMV_Common_Interface.h"



DLL_CLF EMV_ADK_INFO EMV_CTLS_HandleCallback(unsigned char *data, unsigned short *dataLen);


/*****************************************************************************
*  EMV_CTLS_SerInterface
*****************************************************************************/
DLL_CLF EMV_ADK_INFO EMV_CTLS_SerInterface(const unsigned char *dataIn, unsigned short dataInLen, unsigned char *dataOut, unsigned short *dataOutLen);


#ifdef __cplusplus
}     // extern "C"
#endif

#endif  // #ifndef _EMV_CTLS_SER_INTERFACE_H_
```


-------------------------------

Updated on 2025-06-17 at 11:52:25 +0100
