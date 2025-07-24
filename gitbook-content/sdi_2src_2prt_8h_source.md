---
hidden: true
title: prt.h
---

<a href="sdi_2src_2prt_8h.md">Go to the documentation of this file.</a>

``` cpp
 1 /****************************************************************************
 2 * Product: InFusion
 3 * Company: Verifone
 4 * Author: GSS R&D Germany
 5 * Content: SDI-Server
 6 ****************************************************************************/
 7 
 8 #ifndef _PRT_H_
 9 #define _PRT_H_
 10 
 11 #define CLA_PRT 0x25 
 12 
 13 #define INS_PRT_SET_PROPERTY 0x00 
 14 #define INS_PRT_GET_PROPERTY 0x01 
 15 #define INS_PRT_HTML 0x02 
 16 // #define INS_PRT_URL 0x03 
 17 #define INS_PRT_BITMAP 0x04 //< print raw bitmap command
 18 
 19 #ifdef __cplusplus
 20 extern "C"
 21 {
 22 #endif
 23 
 33 void handlePrt(unsigned short msgBufSize, unsigned char *msg, unsigned long msgSize, unsigned short rspBufSize, unsigned char *rsp, unsigned short *rspSize);
 34 
 35 int print_getStatus(int* valueInt);
 36 
 37 #ifdef __cplusplus
 38 }
 39 #endif
 40 
 41 #endif // _PRT_H_
```
