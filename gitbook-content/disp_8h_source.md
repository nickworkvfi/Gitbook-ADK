---
hidden: true
title: disp.h
---

<a href="disp_8h.md">Go to the documentation of this file.</a>

``` cpp
 1 /****************************************************************************
 2 * Product: InFusion
 3 * Company: Verifone
 4 * Author: GSS R&D Germany
 5 * Content: SDI-Server
 6 ****************************************************************************/
 7 
 8 #ifndef _DISP_H_
 9 #define _DISP_H_
 10 
 11 #define CLA_DISP 0x24 
 12 
 13 #define INS_DISP_ENABLE 0x00 
 14 #define INS_DISP_TEXT 0x01 
 15 #define INS_DISP_TEXT_CONF 0x02 
 16 #define INS_DISP_HANDLE_DISPLAY 0x03 
 17 #define INS_DISP_HANDLE_SECURE_INPUT 0x04 
 18 #define INS_DISP_HANDLE_MENU 0x05 
 19 #define INS_DISP_HANDLE_CARD_REQUEST 0x06 
 20 #define INS_DISP_IDLE_SCREEN 0x07 
 21 #define INS_DISP_HANDLE_SIGNATURE_CAPTURE 0x08 
 22 #define INS_DISP_ACTIVATE_LEDS 0x09 
 23 #define INS_DISP_HANDLE_HTML_DIALOG 0x0A 
 24 #define INS_DISP_GET_ASYNC_RESULT 0x0B 
 25 
 26 #ifdef __cplusplus
 27 extern "C"
 28 {
 29 #endif
 30 
 40 void handleDispCmd(unsigned short msgBufSize, unsigned char *msg, unsigned long msgSize, unsigned short rspBufSize, unsigned char *rsp, unsigned short *rspSize);
 41 
 42 #ifdef __cplusplus
 43 }
 44 #endif
 45 
 46 #endif // _DISP_H_
```
