---
hidden: true
title: sec.h
---

<a href="sec_8h.md">Go to the documentation of this file.</a>

``` cpp
 1 /****************************************************************************
 2 * Product: InFusion
 3 * Company: Verifone
 4 * Author: GSS R&D Germany
 5 * Content: SDI-Server
 6 ****************************************************************************/
 7 
 8 #ifndef _SEC_H_
 9 #define _SEC_H_
 10 
 11 #include "csdcontainer.h"
 12 #include "sec/libsec.h"
 13 
 14 #define CLA_SEC 0x70 
 15 
 16 #define INS_SEC_OPEN 0x00 
 17 #define INS_SEC_CLOSE 0x01 
 18 #define INS_SEC_ENCRYPT 0x02 
 19 #define INS_SEC_DECRYPT 0x03 
 20 #define INS_SEC_SIGN 0x04 
 21 #define INS_SEC_VERIFY 0x05 
 22 #define INS_SEC_UPDATE_KEY 0x06 
 23 #define INS_SEC_SET_KEY_SET 0x07 
 24 #define INS_SEC_GET_ENCRYPTED_PIN 0x08 
 25 #define INS_SEC_GET_KEY_INVENTORY 0x09 
 26 #define INS_SEC_GET_KEY_DATA 0x0A 
 27 #define INS_SEC_GET_STATUS 0x0B 
 28 #define INS_SEC_GET_VERSION 0x0C 
 29 
 30 #ifdef __cplusplus
 31 extern "C"
 32 {
 33 #endif
 34 
 35 bool isAdeEnabled(void);
 36 
 47 void handleSec(unsigned short msgBufSize, unsigned char *msg, unsigned short msgSize, unsigned short rspBufSize, unsigned char *rsp, unsigned short *rspSize);
 48 int findCryptoHandle(struct BTLVNode *xBtlv, struct BTLVNode **node, com_adksec_cmd::secHandle_t *handle);
 49 
 50 int SEC_getEncryptedPin(struct BTLVNode *xBtlv, com_adksec_cmd::secError &errorCode);
 51 
 52 bool getSecHandle(void *sdihandle, com_adksec_cmd::secHandle_t &h, unsigned idx);
 53 void cleanUpSecHandles(void *sdihandle);
 54 
 55 #ifdef __cplusplus
 56 }
 57 #endif
 58 
 59 #endif // _SEC_H_
```
