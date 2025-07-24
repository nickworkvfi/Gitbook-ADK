---
hidden: true
title: ped.h
---

<a href="tec_2export_2tec_2ped_8h.md">Go to the documentation of this file.</a>

``` cpp
 1 
 7 #ifndef __TEC_LIB_PED_INTERFACE__
 8 #define __TEC_LIB_PED_INTERFACE__
 9 
 10 #ifdef __cplusplus
 11 extern "C" {
 12 #endif
 13 
 18 #define PED_OK 0 
 19 #define PED_ERROR -1 
 20 #define PED_ERR_LOAD -2 
 27 #define PED_LINK_OK 0 
 28 #define PED_NS_DONE 1 
 29 #define PED_CERT_ERR 2 
 30 #define PED_NS_ERR 3 
 40 typedef int (* ped_SendCallback) (const unsigned char *data, int len);
 41 
 49 typedef int (* ped_RcvCallback) (unsigned char *data, int len);
 50 
 51 
 61 int ped_SetSendRcvCb(ped_SendCallback scbf, ped_RcvCallback rcbf);
 62 
 71 int ped_Pairing(int *status);
 72 
 80 int ped_MovePin(void);
 81 
 82 
 83 #ifdef __cplusplus
 84 }
 85 #endif
 86 
 87 #endif
```
