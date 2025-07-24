---
hidden: true
title: msr.h
---

<a href="msr_8h.md">Go to the documentation of this file.</a>

``` cpp
 1 
 8 #ifndef __MSR_LIB_INTERFACE__
 9 #define __MSR_LIB_INTERFACE__
 10 
 11 #ifdef __cplusplus
 12 extern "C" {
 13 #endif
 14 
 15 #include "msr_common.h"
 16 
 21 typedef void (* MSR_Callback) (void *data);
 22 
 34 int MSR_SetOptions(unsigned char *options, unsigned char options_len);
 35 
 48 int MSR_Activate(MSR_Callback cbf, void *cb_data);
 49 
 60 int MSR_Deactivate(void);
 61 
 71 int MSR_DataAvailable(void);
 72 
 96 int MSR_GetData(int timeout_msec, MSR_TrackData *tracks, MSR_DecodedData *data);
 97 
 118 int MSR_GetData2(int timeout_msec, MSR_TrackData2 *tracks, MSR_DecodedData *data);
 119 
 140 int MSR_GetData3(int timeout_msec, MSR_TrackData3 *tracks, MSR_DecodedData *data);
 141 
 163 int MSR_GetData4(int timeout_msec, MSR_TrackData4 *tracks, MSR_DecodedData4 *data);
 164 
 169 void MSR_AbortGetData(void);
 170 
 182 int MSR_SwitchLeds(int led1, int led2, int led3, int duration);
 183 
 184 
 185 #ifdef __cplusplus
 186 }
 187 #endif
 188 
 189 #endif // avoid double include
```
