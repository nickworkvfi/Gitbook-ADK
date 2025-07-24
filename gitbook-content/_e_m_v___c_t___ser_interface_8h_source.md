---
hidden: true
title: EMV_CT_SerInterface.h
---

<a href="_e_m_v___c_t___ser_interface_8h.md">Go to the documentation of this file.</a>

``` cpp
 1 /****************************************************************************
 2 * Product: ADK Cards Service - EMV Contact (CT)
 3 * Company: Verifone
 4 * Author: GSS R&D Germany
 5 * Content: Framework (serial) interface
 6 ****************************************************************************/
 7 
 8 
 15 #ifndef _EMV_CT_SER_INTERFACE_H_ /* avoid double interface-includes */
 16 #define _EMV_CT_SER_INTERFACE_H_
 17 
 18 #ifdef __cplusplus
 19 extern "C" {
 20 #endif
 21 
 22 #define DLL_CTF // NOTE: Do not set visibility("default") because export.map is used
 23 
 24 #include "emv/EMV_Common_Interface.h"
 25 
 26 
 27 /*****************************************************************************
 28 * EMV_CT_SerInterface
 29 *****************************************************************************/
 40 DLL_CTF EMV_ADK_INFO EMV_CT_SerInterface(const unsigned char *dataIn, unsigned short dataInLen, unsigned char *dataOut, unsigned short *dataOutLen);
 41 
 42 
 43 #ifdef __cplusplus
 44 } // extern "C"
 45 #endif
 46 
 47 #endif // #ifndef _EMV_CT_SER_INTERFACE_H_
```
