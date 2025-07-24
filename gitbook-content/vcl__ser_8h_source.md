---
hidden: true
title: vcl_ser.h
---

<a href="vcl__ser_8h.md">Go to the documentation of this file.</a>

``` cpp
 1 /****************************************************************************
 2 * Product: InFusion
 3 * Company: Verifone
 4 * Author: GSS R&D Germany
 5 * Content: SDI-Server
 6 ****************************************************************************/
 7 
 8 #ifndef _VCL_SER_H_
 9 #define _VCL_SER_H_
 10 
 11 #include "csdcontainer.h"
 12 #include "sec/libsec.h"
 13 
 14 #define CLA_VCL 0x28 
 15 
 16 #define INS_VCL_MSG_REGISTART_SRED_REQ 0x00 
 17 #define INS_VCL_MSG_STATUS_REQUEST 0x01 
 18 #define INS_VCL_MSG_ADVANCE_DDK 0x02 
 19 #define INS_VCL_MSG_EPARMS_REQUEST 0x03 
 20 #define INS_VCL_MSG_DIAG_QUERY 0x06 
 21 #define INS_VCL_MSG_DERIV_QUERY 0x07 
 22 #define INS_VCL_MSG_OVERRIDE_MSG_QUERY 0x08 
 23 #define INS_VCL_MSG_KSN_REQ 0x09 
 24 #define INS_VCL_MSG_KMAILIN_REQUEST 0x0A 
 25 
 26 #ifdef __cplusplus
 27 extern "C"
 28 {
 29 #endif
 30 
 40 void handleVcl(unsigned short msgBufSize, unsigned char *msg, unsigned short msgSize, unsigned short rspBufSize, unsigned char *rsp, unsigned short *rspSize);
 41 
 42 #ifdef __cplusplus
 43 }
 44 #endif
 45 
 46 #endif // _VCL_SER_H_
```
