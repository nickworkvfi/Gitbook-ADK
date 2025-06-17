---
title: emv/EMV_CT_Common/export/emv/EMV_CT_SerInterface.h
summary: Interface of CT-Framework. 

---

# emv/EMV_CT_Common/export/emv/EMV_CT_SerInterface.h

Interface of CT-Framework. 

## Functions

|                | Name           |
| -------------- | -------------- |
| [DLL_CTF](_e_m_v___c_t___ser_interface_8h.md#define-dll-ctf)[EMV_ADK_INFO](group___a_d_k___r_e_t___c_o_d_e.md#typedef-emv-adk-info) | **[EMV_CT_SerInterface](_e_m_v___c_t___ser_interface_8h.md#function-emv-ct-serinterface)**(const unsigned char * dataIn, unsigned short dataInLen, unsigned char * dataOut, unsigned short * dataOutLen)<br>Serial interface to EMV functions.  |

## Defines

|                | Name           |
| -------------- | -------------- |
|  | **[DLL_CTF](_e_m_v___c_t___ser_interface_8h.md#define-dll-ctf)**  |


## Functions Documentation

### function EMV_CT_SerInterface

```cpp
DLL_CTFEMV_ADK_INFO EMV_CT_SerInterface(
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

### define DLL_CTF

```cpp
#define DLL_CTF 
```


## Source code

```cpp
/****************************************************************************
*  Product:     ADK Cards Service - EMV Contact (CT)
*  Company:     Verifone
*  Author:      GSS R&D Germany
*  Content:     Framework (serial) interface
****************************************************************************/


#ifndef _EMV_CT_SER_INTERFACE_H_   /* avoid double interface-includes */
#define _EMV_CT_SER_INTERFACE_H_

#ifdef __cplusplus
extern "C" {
#endif

#define DLL_CTF // NOTE: Do not set visibility("default") because export.map is used

#include "emv/EMV_Common_Interface.h"


/*****************************************************************************
*  EMV_CT_SerInterface
*****************************************************************************/
DLL_CTF EMV_ADK_INFO EMV_CT_SerInterface(const unsigned char *dataIn, unsigned short dataInLen, unsigned char *dataOut, unsigned short *dataOutLen);


#ifdef __cplusplus
}     // extern "C"
#endif

#endif  // #ifndef _EMV_CT_SER_INTERFACE_H_
```


-------------------------------

Updated on 2025-06-17 at 11:52:24 +0100
