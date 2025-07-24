---
hidden: true
title: EMV_CTLS_SerInterface.h
---

<a href="_e_m_v___c_t_l_s___ser_interface_8h.md">Go to the documentation of this file.</a>

``` cpp
 1 /****************************************************************************
 2 * Product: InFusion
 3 * Company: VeriFone
 4 * Author: GSS R&D Germany
 5 * Content: Interface definitions and functions
 6 ****************************************************************************/
 7 
 8 
 16 #ifndef _EMV_CTLS_SER_INTERFACE_H_ /* avoid double interface-includes */
 17 #define _EMV_CTLS_SER_INTERFACE_H_
 18 
 19 #ifdef __cplusplus
 20 extern "C" {
 21 #endif
 22 
 23 
 24 #define DLL_CLF // NOTE: Do not set visibility("default") because export.map is used
 25 
 26 #include "emv/EMV_Common_Interface.h"
 27 
 28 
 29 
 30 DLL_CLF EMV_ADK_INFO EMV_CTLS_HandleCallback(unsigned char *data, unsigned short *dataLen);
 31 
 32 
 33 /*****************************************************************************
 34 * EMV_CTLS_SerInterface
 35 *****************************************************************************/
 46 DLL_CLF EMV_ADK_INFO EMV_CTLS_SerInterface(const unsigned char *dataIn, unsigned short dataInLen, unsigned char *dataOut, unsigned short *dataOutLen);
 47 
 48 
 49 #ifdef __cplusplus
 50 } // extern "C"
 51 #endif
 52 
 53 #endif // #ifndef _EMV_CTLS_SER_INTERFACE_H_
```
