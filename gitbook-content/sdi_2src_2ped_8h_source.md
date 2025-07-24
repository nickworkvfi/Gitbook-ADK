---
hidden: true
title: ped.h
---

<a href="sdi_2src_2ped_8h.md">Go to the documentation of this file.</a>

``` cpp
 1 /****************************************************************************
 2 * Product: InFusion
 3 * Company: Verifone
 4 * Author: GSS R&D Germany
 5 * Content: SDI-Server
 6 ****************************************************************************/
 7 
 8 #ifndef _PED_H_
 9 #define _PED_H_
 10 
 11 #define CLA_PED 0x22 
 12 
 13 #define INS_PED_ENABLE 0x00 
 14 #define INS_PED_GET_PIN 0x01 
 15 #define INS_SET_PIN_TIMEOUT 0x02 
 16 
 17 #define INS_PED_START_PIN 0x03 
 18 #define INS_PED_POLL_PIN 0x04 
 19 #define INS_PED_STOP_PIN 0x05 
 20 
 21 #define INS_SET_PIN_INPUT_PARAM 0x06 
 22 
 23 #ifdef __cplusplus
 24 extern "C"
 25 {
 26 #endif
 27 
 38 bool handlePedCmd(unsigned short msgBufSize, unsigned char *msg, unsigned short msgSize, unsigned short rspBufSize, unsigned char *rsp, unsigned short *rspSize);
 39 
 45 bool pedSetExtButton(void);
 46 
 57 void pedReset(void *handle);
 58 
 59 #ifdef __cplusplus
 60 }
 61 #endif
 62 
 63 #endif // _PED_H_
```
