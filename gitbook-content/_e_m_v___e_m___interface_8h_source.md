---
hidden: true
title: EMV_EM_Interface.h
---

<a href="_e_m_v___e_m___interface_8h.md">Go to the documentation of this file.</a>

``` cpp
 1 /****************************************************************************
 2 * Product: InFusion
 3 * Company: VeriFone
 4 * Author: GSS R&D Germany
 5 * Content: Interface definitions and functions
 6 ****************************************************************************/
 7 
 14 #ifndef _EMV_EM_INTERFACE_H_ /* avoid double interface-includes */
 15 #define _EMV_EM_INTERFACE_H_
 16 
 17 #ifdef __cplusplus
 18 extern "C" {
 19 #endif
 20 
 21 #define DLL_EMC __attribute__((visibility ("default")))
 22 
 23 #define EMV_ENCRYPTION_MANAGER_VERSION "0.0.1-developer" 
 24 
 25 
 26 // ========================================================================================================
 27 // === COMMON PART ===
 28 // ========================================================================================================
 29 #define ENCRYPTION_MANAGER_TAGS_BASE 0xDFD900 
 30 
 31 typedef enum EMV_EM_OUTCOME
 35 {
 36  EM_BLOCKED = 13,
 37  EM_SENSTIVE_ENCRYPTED = 12,
 38  EM_SENSTIVE_FORMAT_PRESERVING = 11,
 39  EM_NOT_SENSITIVE = 10,
 40  EM_ATTRIBUTE = 9,
 41  EM_OK = 0,
 42  EM_PARAM_ERROR = -1,
 43  EM_FAILURE = -2
 44 } EMV_EM_OUTCOME_TYPE;
 45 
 46 
 47 /*****************************************************************************
 48 * EMV_EM_Init
 49 *****************************************************************************/
 69 DLL_EMC int EMV_EM_Init(const unsigned char* TxnRelatedData, unsigned dataLen);
 70 
 71 
 72 /*****************************************************************************
 73 * EMV_EM_IsTagSensitive
 74 *****************************************************************************/
 96 DLL_EMC int EMV_EM_IsTagSensitive(unsigned long RequestedTag, const unsigned long** Mapping, unsigned* LengthMapping);
 97 
 98 
 99 /*****************************************************************************
 100 * EMV_EM_Encrypt
 101 *****************************************************************************/
 120 DLL_EMC const unsigned char* EMV_EM_Encrypt(unsigned long RequestedTag, const unsigned char* DataIn, unsigned DataInLength, unsigned* DataOutLength);
 121 
 122 #ifdef __cplusplus
 123 }
 124 #endif
 125 
 126 #endif // _EMV_EM_INTERFACE_H_
 127 
```
