---
hidden: true
title: sdi_data.h
---

<a href="sdi__data_8h.md">Go to the documentation of this file.</a>

``` cpp
 1 /****************************************************************************
 2 * Product: ADK Secure Data Interface (SDI)
 3 * Company: Verifone
 4 * Author: GSS R&D Germany
 5 * Content: Client (structure) interface - Data functions
 6 ****************************************************************************/
 7 
 8 #ifndef _SDI_DATA_H_ /* avoid double interface-includes */
 9 #define _SDI_DATA_H_
 10 
 11 #ifdef __cplusplus
 12 extern "C" {
 13 #endif
 14 
 15 #include "emv/EMV_CT_Interface.h"
 16 #include "emv/EMV_CTLS_Interface.h"
 17 
 18 // from sdi/csd/data.h
 19 #define CLA_DATA 0x29 
 20 #define INS_FETCH_TAGS 0x02 
 21 
 22 #define SENSITIVE_TAG_OMIT 0 
 26 #define SENSITIVE_TAG_TRUNCATE 0x01 
 27 #define SENSITIVE_TAG_REPLACE 0x02 
 28 #define FETCHTAGS_EXPIRY_DATE_IN_CLEAR 0x04 
 29 #define FETCHTAGS_GET_DATA 0x08 
 30 
 32 
 33 /*****************************************************************************
 34 * SDI_fetchTxnTags
 35 *****************************************************************************/
 57 EMV_ADK_INFO SDI_fetchTxnTags(unsigned char options, unsigned long* requestedTags, unsigned short noOfRequestedTags, unsigned char* tlvBuffer, unsigned short bufferLength, unsigned short* tlvDataLength);
 58 
 59 
 60 #ifdef __cplusplus
 61 } // extern "C"
 62 #endif
 63 
 64 #endif // #ifndef _SDI_DATA_H_
```
