---
hidden: true
title: tec.h
---

<a href="tec_8h.md">Go to the documentation of this file.</a>

``` cpp
 1 
 8 #ifndef __TEC_LIB_INTERFACE__
 9 #define __TEC_LIB_INTERFACE__
 10 
 11 #ifdef __cplusplus
 12 extern "C" {
 13 #endif
 14 
 15 #include "tec/tec_common.h"
 16 
 21 #define CTS_NOTIFICATION_CBK_TYPE_UX_CARD_INSERTED 0x01 
 28 typedef void (* cts_Callback) (void *data);
 29 
 41 int cts_SetOptions(const unsigned char *options, unsigned char options_len);
 42 
 110 int cts_StartSelection(unsigned char supportedTechnologies, unsigned short timeout_sec,
 111  cts_Callback cbf, void *cb_data,
 112  unsigned char *options, unsigned char options_len);
 113 
 125 int cts_StopSelection (void);
 126 
 162 int cts_WaitSelection(unsigned char *usedTechnology, unsigned char *dataBuffer,
 163  unsigned short *dataBufferLength, unsigned short timeout_msec);
 164 
 175 int cts_RemoveTechnologies(unsigned char technologies);
 176 
 194 int cts_AddTechnologies(unsigned char technologies, unsigned char *options, unsigned char options_len);
 195 
 211 int cts_WaitCardRemoval(cts_Callback cbf, void *cb_data);
 212 
 224 int cts_WaitCardRemoval2(unsigned short timeout_sec);
 225 
 233 void cts_SetNotificationCallback(int type, cts_Callback cbf, void *cb_data);
 234 
 235 
 236 #ifdef __cplusplus
 237 }
 238 #endif
 239 
 240 #endif
```
